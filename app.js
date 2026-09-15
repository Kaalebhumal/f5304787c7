/* ============================================================
   A course player — lectures read aloud, tests, spaced review.
   Holds any number of courses; courses/registry.js lists them.
   ============================================================ */
(function () {
  'use strict';

  var T = window.__TMS = window.__TMS || {};

  /* The active course. Null until Courses.activate() has run, so every
     reader goes through CUR() rather than capturing it at load time. */
  function CUR() { return T.C; }
  function LBI() { return T.LESSON_BY_ID || {}; }
  function ACTIVE() { return T.ACTIVE; }

  /* ---------------------------------------------------------
     small helpers
     --------------------------------------------------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function pct(n) { return Math.round(n * 100); }
  function isoLocal(d) {
    var x = new Date(d);
    return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
  }
  function today() { return isoLocal(new Date()); }
  function isWeekend(d) { var g = d.getDay(); return g === 0 || g === 6; }

  /* ---- the schedule: day one is the day you first open the course ----
     Five lectures a week, weekdays only. Weekends are skipped, never missed. */
  function rollToWeekday(d) {
    var x = new Date(d); x.setHours(0, 0, 0, 0);
    while (isWeekend(x)) x.setDate(x.getDate() + 1);
    return x;
  }
  function startDay() {
    var s = P().startDate;
    if (s) { var d = new Date(s + 'T00:00:00'); if (!isNaN(d)) return rollToWeekday(d); }
    var t = rollToWeekday(new Date());        /* first open: the clock starts now */
    P().startDate = isoLocal(t);
    Store.save();
    return t;
  }
  /* lecture i (1-80) falls on the i-th weekday counting from day one */
  function dateForIdx(i) {
    var d = startDay(), n = i - 1;
    while (n > 0) { d.setDate(d.getDate() + 1); if (!isWeekend(d)) n -= 1; }
    return d;
  }
  /* which lecture a given weekday calls for; null at weekends and before day one */
  function scheduledIdx(when) {
    var d = when ? new Date(when) : new Date();
    d.setHours(0, 0, 0, 0);
    if (isWeekend(d)) return null;
    var p = startDay();
    if (d < p) return null;
    var n = 1;
    while (p < d) { p.setDate(p.getDate() + 1); if (!isWeekend(p)) n += 1; }
    return n >= 1 && n <= 80 ? n : null;
  }
  function beforeStart() {
    var t = new Date(); t.setHours(0, 0, 0, 0);
    return t < startDay();
  }
  var DAY_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MON_NAME = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmtDate(d) { return d.getDate() + ' ' + MON_NAME[d.getMonth()]; }

  /* markdown-lite: **bold**, *italic*, `mono`, [[term|gloss]] */
  function inline(s) {
    var out = esc(s);
    out = out.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, function (m, term, gloss) {
      return '<span class="term-chip" title="' + esc(gloss) + '">' + esc(term) + '</span>';
    });
    out = out.replace(/`([^`]+)`/g, '<code class="mono">$1</code>');
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>');
    out = out.replace(/--/g, '—');
    return out;
  }
  /* strip markup for speech */
  function plain(s) {
    return String(s == null ? '' : s)
      .replace(/\[\[([^\]|]+)\|[^\]]+\]\]/g, '$1')
      .replace(/[`*]/g, '')
      .replace(/--/g, ', ');
  }

  var ABBR = { 'e.g': 1, 'i.e': 1, 'etc': 1, 'vs': 1, 'Mr': 1, 'Mrs': 1, 'Ms': 1, 'Dr': 1, 'Prof': 1, 'St': 1, 'No': 1, 'approx': 1, 'Inc': 1, 'Ltd': 1, 'Co': 1 };

  /* Expand things that read badly aloud. This does more for how human the
     lecture sounds than any voice setting: a synthesiser handed "$39.5bn"
     says "bee-en"; handed "39.5 billion dollars" it sounds like a person. */
  var SPELL = ('GDP GNI CPI ROIC WACC SSNIP CMA IATA PSD RCT DiD RDD API CEO CFO ' +
               'EU UK US USA NJ PA CAC LTV SOV ROI KPI FMCG B2B B2C PR TV AI IP ' +
               'NBER AER OBL ESA UMass').split(' ');
  var MAG = 'trillion|billion|million|thousand';

  function speakify(s) {
    var t = String(s == null ? '' : s);

    /* ranges: 1861-1957 -> "1861 to 1957" */
    t = t.replace(/(\d)\s*[–—-]\s*(\d)/g, '$1 to $2');

    /* magnitudes, while the currency symbol is still attached */
    t = t.replace(/([€$£])\s?([\d.,]+)\s*(?:tn|trillion)\b/gi, '$2 trillion $1')
         .replace(/([€$£])\s?([\d.,]+)\s*(?:bn|billion)\b/gi, '$2 billion $1')
         .replace(/([€$£])\s?([\d.,]+)\s*(?:m|million)\b/gi, '$2 million $1')
         .replace(/([€$£])\s?([\d.,]+)\s*(?:k|thousand)\b/gi, '$2 thousand $1')
         .replace(/\b([\d.,]+)\s*bn\b/gi, '$1 billion')
         .replace(/\b([\d.,]+)\s*(?:m)\b(?!\w)/g, '$1 million');

    /* the symbol comes before the number and is spoken after it */
    t = t.replace(new RegExp('([\\d.,]+)\\s+(' + MAG + ')\\s+€', 'g'), '$1 $2 euros')
         .replace(new RegExp('([\\d.,]+)\\s+(' + MAG + ')\\s+\\$', 'g'), '$1 $2 dollars')
         .replace(new RegExp('([\\d.,]+)\\s+(' + MAG + ')\\s+£', 'g'), '$1 $2 pounds')
         .replace(/€\s?([\d.,]+)/g, '$1 euros')
         .replace(/\$\s?([\d.,]+)/g, '$1 dollars')
         .replace(/£\s?([\d.,]+)/g, '$1 pounds');

    t = t.replace(/\b1 euros\b/g, '1 euro').replace(/\b1 dollars\b/g, '1 dollar').replace(/\b1 pounds\b/g, '1 pound');

    t = t
      .replace(/\be\.g\./gi, 'for example')
      .replace(/\bi\.e\./gi, 'that is')
      .replace(/\betc\./gi, 'et cetera')
      .replace(/\bvs\.?\b/gi, 'versus')
      .replace(/\bcf\.\b/gi, 'compare')
      .replace(/\b4Ps\b/g, 'four Ps').replace(/\b7Ps\b/g, 'seven Ps').replace(/\b4Cs\b/g, 'four Cs')
      .replace(/\bR&D\b/g, 'R and D')
      .replace(/\bR-squared\b/gi, 'R squared')
      .replace(/\bp-values?\b/gi, 'P values')
      .replace(/\b1:1\b/g, 'one to one')
      .replace(/(\d)\s*%/g, '$1 percent')
      .replace(/%/g, ' percent');

    /* acronyms that must be spelled out letter by letter */
    SPELL.forEach(function (a) {
      t = t.replace(new RegExp('\\b' + a + '\\b', 'g'), a.split('').join('-'));
    });

    t = t
      .replace(/≈/g, 'about ')
      .replace(/×/g, ' times ')
      .replace(/÷/g, ' divided by ')
      .replace(/→/g, ' leads to ')
      .replace(/≡/g, ' is the same as ')
      .replace(/≤/g, ' is at most ')
      .replace(/≥/g, ' is at least ')
      .replace(/[–—]/g, ', ')
      .replace(/\*/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    /* a sentence ending in a comma reads as an unfinished thought */
    return t.replace(/,\s*$/, '.');
  }

  /* split into speakable sentences; keeps each chunk short enough that
     Chrome does not truncate the utterance */
  function splitSentences(text) {
    var t = speakify(plain(text));
    if (!t) return [];
    var parts = [], buf = '', i;
    var raw = t.split(/(?<=[.!?…])\s+/);
    for (i = 0; i < raw.length; i++) {
      var piece = raw[i];
      var tail = piece.replace(/[.!?…]+$/, '');
      var lastWord = tail.split(/[\s(]/).pop();
      var joinNext = ABBR[lastWord] === 1 || /^[A-Z]$/.test(lastWord);
      buf = buf ? buf + ' ' + piece : piece;
      if (joinNext && i < raw.length - 1) continue;
      parts.push(buf);
      buf = '';
    }
    if (buf) parts.push(buf);

    /* hard-split anything still very long, at clause boundaries */
    var out = [];
    parts.forEach(function (p) {
      if (p.length <= 260) { out.push(p); return; }
      var chunks = p.split(/(?<=[;:,])\s+/), cur = '';
      chunks.forEach(function (c) {
        if ((cur + ' ' + c).length > 240 && cur) { out.push(cur); cur = c; }
        else { cur = cur ? cur + ' ' + c : c; }
      });
      if (cur) out.push(cur);
    });
    return out.filter(function (x) { return x && /[a-zA-Z0-9]/.test(x); });
  }

  /* Split for the PAGE (not for speech): keeps markup, protects glosses and
     abbreviations, so each sentence can be wrapped and translated on its own. */
  function splitForDisplay(text) {
    var held = [];
    var t = String(text).replace(/\[\[[^\]]+\]\]/g, function (m) {
      held.push(m); return '\u0001' + (held.length - 1) + '\u0001';
    });
    var raw = t.split(/(?<=[.!?\u2026][)"\u201d]?)\s+(?=[A-Z\u201c"(\[*])/);
    var out = [], buf = '';
    for (var i = 0; i < raw.length; i++) {
      var piece = raw[i];
      var tail = piece.replace(/[.!?\u2026)"\u201d]+$/, '');
      var last = tail.split(/[\s(]/).pop().replace(/[*_`]/g, '');
      buf = buf ? buf + ' ' + piece : piece;
      if ((ABBR[last] === 1 || /^[A-Z]$/.test(last)) && i < raw.length - 1) continue;
      out.push(buf); buf = '';
    }
    if (buf) out.push(buf);
    return out.map(function (x) {
      return x.replace(/\u0001(\d+)\u0001/g, function (m, n) { return held[+n]; });
    });
  }

  /* ---------------------------------------------------------
     Store — db capability when present, localStorage always
     --------------------------------------------------------- */
  var LS_KEY = 'tms.v2', LS_OLD = 'tms.v1';

  function blankSlot() {
    return {
      progress: { lessons: {}, lastLessonId: null, days: [], scores: [], startedAt: null, startDate: null },
      mastery: { concepts: {} },
      notes: {}
    };
  }

  var Store = {
    db: null,
    ready: false,
    storageOk: true,
    state: {
      prefs: { rate: 0.95, voiceURI: '', pitch: 1, lastCourse: null },
      byCourse: {}
    },
    _timer: null,
    _loadedCourses: {},

    /* everything a course records, created on first touch */
    slot: function (id) {
      var b = Store.state.byCourse;
      if (!b[id]) b[id] = blankSlot();
      var sl = b[id];
      if (!sl.progress.scores) sl.progress.scores = [];
      if (!sl.progress.days) sl.progress.days = [];
      if (!sl.progress.startedAt) sl.progress.startedAt = today();
      return sl;
    },

    loadLocal: function () {
      try {
        var raw = localStorage.getItem(LS_KEY);
        if (raw) {
          var o = JSON.parse(raw);
          if (o && typeof o === 'object') {
            if (o.prefs) Store.state.prefs = Object.assign(Store.state.prefs, o.prefs);
            if (o.byCourse) Store.state.byCourse = o.byCourse;
          }
        } else {
          /* carry a single-course record from before courses existed */
          var old = localStorage.getItem(LS_OLD);
          if (old) {
            var v1 = JSON.parse(old);
            if (v1 && v1.progress) {
              Store.state.byCourse.marketing = {
                progress: v1.progress, mastery: v1.mastery || { concepts: {} }, notes: v1.notes || {}
              };
            }
            if (v1 && v1.prefs) Store.state.prefs = Object.assign(Store.state.prefs, v1.prefs);
          }
        }
        Store.storageOk = true;
      } catch (e) { Store.storageOk = false; }
      try { localStorage.setItem(LS_KEY + '.probe', '1'); localStorage.removeItem(LS_KEY + '.probe'); }
      catch (e) { Store.storageOk = false; }
    },

    saveLocal: function () {
      try { localStorage.setItem(LS_KEY, JSON.stringify(Store.state)); } catch (e) {}
    },

    connect: function () {
      if (!window.claude || !window.claude.use) return;
      window.claude.use('db').then(function (db) {
        if (!db) return;
        Store.db = db;
        return db.doc('prefs/state').get().then(function (snap) {
          if (snap.exists) Store.state.prefs = Object.assign(Store.state.prefs, snap.data());
          Store.ready = true;
          var b = $('#syncNote'); if (b) b.textContent = 'Synced across your devices';
          return ACTIVE() ? Store.loadCourse(ACTIVE()) : null;
        });
      }).catch(function () { /* stay local */ });
    },

    /* pull one course's record down; called when a course is opened */
    loadCourse: function (id) {
      if (!Store.db || Store._loadedCourses[id]) return Promise.resolve();
      Store._loadedCourses[id] = true;
      var db = Store.db;
      return Promise.all([db.doc('progress/' + id).get(), db.doc('mastery/' + id).get()])
        .then(function (snaps) {
          var any = false, sl = Store.slot(id);
          if (snaps[0].exists) { sl.progress = Object.assign(sl.progress, snaps[0].data()); any = true; }
          if (snaps[1].exists) { sl.mastery = Object.assign(sl.mastery, snaps[1].data()); any = true; }
          if (any) { Store.saveLocal(); Router.rerender(); } else { Store.push(); }
        }).catch(function () {});
    },

    push: function () {
      if (!Store.db) return Promise.resolve();
      var db = Store.db, id = ACTIVE();
      var chain = db.doc('prefs/state').set(JSON.parse(JSON.stringify(Store.state.prefs)));
      if (id) {
        var sl = Store.slot(id);
        chain = chain
          .then(function () { return db.doc('progress/' + id).set(JSON.parse(JSON.stringify(sl.progress))); })
          .then(function () { return db.doc('mastery/' + id).set(JSON.parse(JSON.stringify(sl.mastery))); });
      }
      return chain.catch(function () {});
    },

    /* coalesce a burst of changes into one write */
    save: function () {
      Store.saveLocal();
      if (Store._timer) clearTimeout(Store._timer);
      Store._timer = setTimeout(function () { Store._timer = null; Store.push(); }, 1200);
    },

    markDay: function () {
      var d = today();
      if (P().days.indexOf(d) < 0) {
        P().days.push(d);
        P().days = P().days.slice(-400);
      }
    },

    saveAttempt: function (rec) {
      if (!Store.db) return;
      try {
        Store.db.collection('attempts').add(rec).catch(function () {});
      } catch (e) {}
    },

    saveNote: function (lessonId, text) {
      NT()[lessonId] = text;
      Store.save();
      if (Store.db) {
        try {
          Store.db.doc('notes/' + ACTIVE() + '__' + lessonId)
            .set({ course: ACTIVE(), lesson: lessonId, text: text, at: new Date().toISOString() })
            .catch(function () {});
        } catch (e) {}
      }
    }
  };

  /* the active course's three records */
  function P()  { return Store.slot(ACTIVE()).progress; }
  function M()  { return Store.slot(ACTIVE()).mastery; }
  function NT() { return Store.slot(ACTIVE()).notes; }

  /* progress helpers */
  function lessonState(id) { return P().lessons[id] || null; }
  function isDone(id) { var s = lessonState(id); return !!(s && s.testedAt && s.best >= 70); }
  function isHeard(id) { var s = lessonState(id); return !!(s && s.listened); }
  function bestScore(id) { var s = lessonState(id); return s && typeof s.best === 'number' ? s.best : null; }

  function countDone() { return CUR().flat.filter(function (l) { return isDone(l.id); }).length; }

  function nextLesson() {
    for (var i = 0; i < CUR().flat.length; i++) {
      if (!isDone(CUR().flat[i].id)) return CUR().flat[i];
    }
    return CUR().flat[CUR().flat.length - 1];
  }

  function streak() {
    var set = {};
    (P().days || []).forEach(function (d) { set[d] = 1; });
    function back(x) { do { x.setDate(x.getDate() - 1); } while (isWeekend(x)); return x; }

    var probe = new Date(); probe.setHours(0, 0, 0, 0);
    while (isWeekend(probe)) probe.setDate(probe.getDate() - 1);   /* weekends are days off, not misses */
    if (!set[isoLocal(probe)]) {
      back(probe);                                                  /* today is still open */
      if (!set[isoLocal(probe)]) return 0;
    }
    var n = 0;
    while (set[isoLocal(probe)]) { n++; back(probe); }
    return n;
  }

  /* mastery */
  var ALPHA = 0.45;
  function recordConcept(cid, name, score, qid) {
    var m = M().concepts;
    var c = m[cid] || (m[cid] = { name: name, ema: score, seen: 0, correct: 0, missed: [], lastAt: null });
    c.name = name || c.name;
    c.seen += 1;
    c.correct += score >= 1 ? 1 : 0;
    c.ema = c.seen === 1 ? score : c.ema * (1 - ALPHA) + score * ALPHA;
    c.lastAt = new Date().toISOString();
    if (!c.missed) c.missed = [];
    if (score < 1) {
      if (c.missed.indexOf(qid) < 0) c.missed.push(qid);
    } else {
      c.missed = c.missed.filter(function (q) { return q !== qid; });
    }
  }
  function weakConcepts(limit) {
    var m = M().concepts, out = [];
    Object.keys(m).forEach(function (k) {
      var c = m[k];
      if (c.seen >= 1 && c.ema < 0.75) out.push(Object.assign({ id: k }, c));
    });
    out.sort(function (a, b) { return a.ema - b.ema; });
    return limit ? out.slice(0, limit) : out;
  }

  /* ---------------------------------------------------------
     Lesson loading — week files are fetched on demand
     --------------------------------------------------------- */
  window.LESSONS = window.LESSONS || {};

  function inject(src) {
    return new Promise(function (resolve) {
      var el = document.createElement('script');
      el.src = src;
      el.onload = function () { resolve(true); };
      el.onerror = function () { resolve(false); };
      document.head.appendChild(el);
    });
  }

  /* ---------------------------------------------------------
     Courses — the registry, and opening one
     --------------------------------------------------------- */
  var Courses = {
    all: function () { return window.COURSES || []; },
    meta: function (id) {
      var hit = null;
      Courses.all().forEach(function (c) { if (c.id === id) hit = c; });
      return hit;
    },
    _data: {},

    /* build the flat lecture index a course needs to be navigable */
    index: function (data) {
      var out = [], i = 0;
      data.weeks.forEach(function (w) {
        var partId = '';
        data.parts.forEach(function (pt) { if (pt.weeks.indexOf(w.n) >= 0) partId = pt.id; });
        w.part = partId;
        w.lessons.forEach(function (l, j) {
          i += 1;
          l.week = w.n; l.idx = i; l.nInWeek = j + 1; l.weekTitle = w.title; l.part = partId;
          out.push(l);
        });
      });
      data.flat = out;
      return data;
    },

    load: function (id) {
      if (Courses._data[id]) return Promise.resolve(Courses._data[id]);
      if (!Courses.meta(id)) return Promise.resolve(null);
      /* a single-file build has everything inlined already */
      var pre = (window.COURSE_DATA || {})[id];
      if (pre && pre.weeks) { Courses._data[id] = Courses.index(pre); return Promise.resolve(Courses._data[id]); }
      return Promise.all([
        inject('courses/' + id + '/course.js'),
        inject('courses/' + id + '/manifest.js')
      ]).then(function () {
        var d = (window.COURSE_DATA || {})[id];
        if (!d) return null;
        Courses._data[id] = Courses.index(d);
        return d;
      });
    },

    /* make a course the one the app is showing */
    activate: function (id) {
      return Courses.load(id).then(function (d) {
        if (!d) return null;
        T.ACTIVE = id;
        T.C = d;
        T.LESSON_BY_ID = {};
        d.flat.forEach(function (l) { T.LESSON_BY_ID[l.id] = l; });
        T.WRITTEN = (window.COURSE_WEEKS || {})[id] || [];
        Store.state.prefs.lastCourse = id;
        Store.slot(id);
        Store.save();
        return Store.loadCourse(id) || d;
      }).then(function () { return T.C; });
    },

    /* every course's manifest is tiny — load them all so the picker can
       say truthfully how much of each course is ready */
    loadManifests: function () {
      return Promise.all(Courses.all().map(function (c) {
        if ((window.COURSE_WEEKS || {})[c.id]) return Promise.resolve();
        return inject('courses/' + c.id + '/manifest.js');
      })).catch(function () {});
    },

    writtenWeeks: function (id) {
      return (window.COURSE_WEEKS || {})[id] || [];
    }
  };

  /* ---------------------------------------------------------
     Lesson files, per course, fetched on demand
     --------------------------------------------------------- */
  var Lessons = {
    pending: {},
    key: function (n) { return 'w' + (n < 10 ? '0' + n : n); },
    full: function (n) { return ACTIVE() + '.' + Lessons.key(n); },
    have: function (n) { return !!window.LESSONS[Lessons.full(n)]; },
    load: function (n) {
      var k = Lessons.full(n);
      if (window.LESSONS[k]) return Promise.resolve(window.LESSONS[k]);
      if (Lessons.pending[k]) return Lessons.pending[k];
      Lessons.pending[k] = inject('courses/' + ACTIVE() + '/lessons/' + Lessons.key(n) + '.js')
        .then(function () { return window.LESSONS[k] || null; });
      return Lessons.pending[k];
    },
    get: function (id) {
      var meta = LBI()[id];
      if (!meta) return Promise.resolve(null);
      return Lessons.load(meta.week).then(function (wk) {
        return wk && wk[id] ? wk[id] : null;
      });
    }
  };

  /* ---------------------------------------------------------
     Speaker — Web Speech, sentence by sentence
     --------------------------------------------------------- */
  var Speaker = {
    supported: typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined',
    units: [],        /* [{text, anchor}] */
    idx: 0,
    playing: false,
    voices: [],
    keepAlive: null,
    onTick: null,

    init: function () {
      if (!Speaker.supported) return;
      var grab = function () {
        Speaker.voices = window.speechSynthesis.getVoices() || [];
        if (Speaker.voices.length && Speaker.onVoices) Speaker.onVoices();
      };
      grab();
      window.speechSynthesis.onvoiceschanged = grab;
      window.addEventListener('beforeunload', function () {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      });
    },

    /* Not all system voices are equal. The premium/neural ones sound like a
       person; the default compact ones are the robot everybody complains about.
       Score them so the good one is chosen and the picker can say which is which. */
    score: function (v) {
      var n = (v.name || '') + ' ' + (v.voiceURI || '');
      var sc = 0;
      if (/multilingual/i.test(n)) sc += 70;                      /* newest Microsoft neural */
      if (/premium|enhanced|neural|natural/i.test(n)) sc += 60;   /* Apple premium, MS Natural */
      if (/siri/i.test(n)) sc += 55;
      if (/\bonline\b/i.test(n)) sc += 25;                        /* Edge network voices */
      if (v.localService === false) sc += 20;                     /* network voices beat compact */
      if (/google/i.test(n)) sc += 18;
      if (/compact|espeak|pico/i.test(n)) sc -= 40;
      if (/desktop/i.test(n)) sc -= 30;                           /* old Windows SAPI voices */
      if (/novelty|whisper|bells|organ|zarvox|trinoids|bubbles|boing|jester/i.test(n)) sc -= 90;
      if (/^en-GB/i.test(v.lang)) sc += 6;
      if (/^en/i.test(v.lang)) sc += 10;
      return sc;
    },

    quality: function (v) {
      var sc = Speaker.score(v);
      return sc >= 55 ? 'natural' : sc >= 25 ? 'good' : 'basic';
    },

    /* English voices, best first */
    ranked: function () {
      var en = Speaker.voices.filter(function (x) { return /^en(-|_|$)/i.test(x.lang); });
      var list = en.length ? en : Speaker.voices.slice();
      return list.sort(function (a, b) { return Speaker.score(b) - Speaker.score(a); });
    },

    /* is anything genuinely good installed on this device? */
    hasNatural: function () {
      return Speaker.ranked().some(function (v) { return Speaker.quality(v) === 'natural'; });
    },

    pickVoice: function () {
      var want = Store.state.prefs.voiceURI, i;
      for (i = 0; i < Speaker.voices.length; i++) {
        if (Speaker.voices[i].voiceURI === want) return Speaker.voices[i];
      }
      return Speaker.ranked()[0] || Speaker.voices[0] || null;
    },

    setUnits: function (units) {
      Speaker.stop();
      Speaker.units = units;
      Speaker.idx = 0;
    },

    speakNow: function (i) {
      if (!Speaker.supported || !Speaker.units.length) return;
      Speaker.idx = clamp(i, 0, Speaker.units.length - 1);
      try { window.speechSynthesis.cancel(); } catch (e) {}
      Speaker.playing = true;
      Speaker._utter();
      Speaker._keepAlive(true);
      Speaker.tick();
    },

    _utter: function () {
      if (!Speaker.playing) return;
      if (Speaker.idx >= Speaker.units.length) {
        Speaker.playing = false;
        Speaker._keepAlive(false);
        Speaker.tick();
        if (Speaker.onEnd) Speaker.onEnd();
        return;
      }
      var u = new SpeechSynthesisUtterance(Speaker.units[Speaker.idx].text);
      var v = Speaker.pickVoice();
      if (v) { u.voice = v; u.lang = v.lang; }
      u.rate = clamp(Store.state.prefs.rate || 1, 0.5, 2);
      u.pitch = Store.state.prefs.pitch || 1;
      var gap = Speaker.units[Speaker.idx].gap;
      if (gap == null) gap = /[.!?\u2026]$/.test(Speaker.units[Speaker.idx].text) ? 300 : 170;
      u.onend = function () {
        if (!Speaker.playing) return;
        Speaker.idx += 1;
        Speaker.tick();
        /* a real lecturer pauses. Without this the sentences run together
           and even a good voice sounds like a machine reading a list. */
        if (gap > 0) setTimeout(function () { Speaker._utter(); }, gap * (2 - clamp(Store.state.prefs.rate || 1, 0.5, 1.6)));
        else Speaker._utter();
      };
      u.onerror = function (e) {
        if (!Speaker.playing) return;
        if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
        Speaker.idx += 1;
        Speaker._utter();
      };
      try { window.speechSynthesis.speak(u); } catch (err) { Speaker.playing = false; Speaker.tick(); }
    },

    /* Chrome silently suspends long syntheses; a periodic nudge keeps it alive */
    _keepAlive: function (on) {
      if (Speaker.keepAlive) { clearInterval(Speaker.keepAlive); Speaker.keepAlive = null; }
      if (!on) return;
      Speaker.keepAlive = setInterval(function () {
        if (!Speaker.playing) return;
        try {
          if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
            window.speechSynthesis.pause();
            window.speechSynthesis.resume();
          }
        } catch (e) {}
      }, 9000);
    },

    toggle: function () {
      if (!Speaker.supported) return;
      if (Speaker.playing) Speaker.pause();
      else Speaker.speakNow(Speaker.idx);
    },
    pause: function () {
      Speaker.playing = false;
      Speaker._keepAlive(false);
      try { window.speechSynthesis.cancel(); } catch (e) {}
      Speaker.tick();
    },
    stop: function () {
      Speaker.playing = false;
      Speaker._keepAlive(false);
      Speaker.idx = 0;
      try { window.speechSynthesis.cancel(); } catch (e) {}
    },
    step: function (d) {
      var wasPlaying = Speaker.playing;
      var target = clamp(Speaker.idx + d, 0, Math.max(0, Speaker.units.length - 1));
      if (wasPlaying) Speaker.speakNow(target);
      else { Speaker.idx = target; Speaker.tick(); }
    },
    tick: function () { if (Speaker.onTick) Speaker.onTick(); }
  };

  /* ---------------------------------------------------------
     Block rendering — a lesson body is an array of blocks
     --------------------------------------------------------- */
  var figCounter = 0;

  function renderBlocks(blocks, lessonMeta) {
    var host = el('div', 'prose');
    var units = [];      /* speech units, in order */
    var secN = 0;
    figCounter = 0;

    /* `hold` is the silence AFTER the last sentence of this piece, in ms.
       A lecturer stops properly at a heading and breathes at a paragraph end;
       without that the whole thing runs together and sounds like a machine. */
    function addSpeech(text, anchor, hold) {
      var parts = splitSentences(text);
      parts.forEach(function (sn, i) {
        units.push({ text: sn, anchor: anchor, gap: (i === parts.length - 1 && hold != null) ? hold : null });
      });
    }

    blocks.forEach(function (b, bi) {
      var node = null, aid = 'b' + bi;

      switch (b.t) {
        case 'h2':
          secN += 1;
          node = el('h2', 'spk', '<span class="sec-n">Section ' + secN + '</span>' + inline(b.text));
          addSpeech(b.text, aid, 900);
          break;

        case 'h3':
          node = el('h3', 'spk', inline(b.text));
          addSpeech(b.text, aid, 650);
          break;

        case 'p':
          node = el('p', 'spk',
            splitForDisplay(b.text).map(function (sn, si) {
              return '<span class="sent" data-s="' + bi + '-' + si + '">' + inline(sn) + '</span>';
            }).join(' '));
          addSpeech(b.say != null ? b.say : b.text, aid, 430);
          break;

        case 'ul':
        case 'ol':
          node = el(b.t === 'ul' ? 'ul' : 'ol', 'spk',
            b.items.map(function (x) { return '<li>' + inline(x) + '</li>'; }).join(''));
          if (b.lead) addSpeech(b.lead, aid);
          b.items.forEach(function (x) { addSpeech(x, aid); });
          break;

        case 'quote':
          node = el('blockquote', 'box box-case spk',
            '<div class="box-label">Quotation</div><p style="font-family:var(--font-display);font-size:17px">' +
            inline(b.text) + '</p><p style="color:var(--ink-3);font-size:12.5px;margin-top:8px">— ' + inline(b.who) + '</p>');
          addSpeech(b.text + ' -- ' + b.who, aid, 800);
          break;

        case 'exercises':
          node = el('ol', 'exercise-list spk',
            b.items.map(function (x, xi) {
              return '<li><div class="ex-body">' + inline(typeof x === 'string' ? x : x.task) + '</div>' +
                (x && x.hint ? '<div class="ex-hint">' + inline(x.hint) + '</div>' : '') + '</li>';
            }).join(''));
          b.items.forEach(function (x, xi) {
            addSpeech('Exercise ' + (xi + 1) + '. ' + (typeof x === 'string' ? x : x.task), aid);
          });
          break;

        case 'write':
          node = el('div', 'box box-write spk',
            '<div class="box-label">Write this down</div><ol>' +
            b.items.map(function (x) { return '<li>' + inline(x) + '</li>'; }).join('') + '</ol>');
          addSpeech('Write this down.', aid);
          b.items.forEach(function (x) { addSpeech(x, aid); });
          break;

        case 'case':
          node = el('div', 'box box-case spk',
            '<div class="box-label">Worked example</div><h4>' + inline(b.title) + '</h4>' +
            b.ps.map(function (x) { return '<p>' + inline(x) + '</p>'; }).join(''));
          addSpeech('Worked example. ' + b.title, aid);
          b.ps.forEach(function (x) { addSpeech(x, aid); });
          break;

        case 'warn':
          node = el('div', 'box box-warn spk',
            '<div class="box-label">' + inline(b.title || 'Common mistake') + '</div>' +
            b.ps.map(function (x) { return '<p>' + inline(x) + '</p>'; }).join(''));
          addSpeech((b.title || 'Common mistake') + '.', aid);
          b.ps.forEach(function (x) { addSpeech(x, aid); });
          break;

        case 'math':
          node = el('div', 'box box-math spk',
            '<div class="box-label">' + inline(b.label || 'The arithmetic') + '</div>' +
            (b.eqs || []).map(function (x) { return '<div class="eq">' + esc(x) + '</div>'; }).join('') +
            /* every symbol named, so the formula is readable rather than decorative */
            (b.terms && b.terms.length
              ? '<div class="eq-key">' + b.terms.map(function (t) {
                  return '<div class="eq-key-row"><span class="eq-sym">' + esc(t.sym) + '</span>' +
                    '<span class="eq-means">' + inline(t.means) + '</span></div>';
                }).join('') + '</div>'
              : '') +
            (b.use ? '<div class="eq-use"><b>What it is for.</b> ' + inline(b.use) + '</div>' : '') +
            (b.ps || []).map(function (x) { return '<p style="font-family:var(--font-ui);font-size:13.5px">' + inline(x) + '</p>'; }).join(''));
          if (b.say) addSpeech(b.say, aid);
          (b.terms || []).forEach(function (t) { addSpeech(t.sym + ' means ' + t.means + '.', aid); });
          if (b.use) addSpeech('What it is for. ' + b.use, aid);
          (b.ps || []).forEach(function (x) { addSpeech(x, aid); });
          break;

        case 'fig':
          figCounter += 1;
          var fnum = (lessonMeta ? lessonMeta.idx + '.' : '') + figCounter;
          node = el('figure', 'fig spk',
            '<div class="fig-head"><span class="fig-num">Figure ' + fnum + '</span>' +
            '<span class="fig-title">' + inline(b.title) + '</span>' +
            (b.sketch ? '<span class="sketch-flag">Sketch this</span>' : '') + '</div>' +
            '<div class="fig-frame">' + b.svg + '</div>' +
            (b.cap ? '<figcaption class="fig-cap">' + inline(b.cap) + '</figcaption>' : ''));
          addSpeech('Figure ' + fnum + '. ' + b.title + '. ' + (b.say || b.cap || ''), aid);
          break;

        case 'table':
          node = el('div', 'table-wrap spk',
            '<table class="data"><thead><tr>' +
            b.head.map(function (h) { return '<th>' + inline(h) + '</th>'; }).join('') +
            '</tr></thead><tbody>' +
            b.rows.map(function (r) {
              return '<tr>' + r.map(function (c, ci) {
                return '<td' + (ci > 0 && /^[-+]?[\d.,%€$ ]+$/.test(String(c)) ? ' class="n"' : '') + '>' + inline(c) + '</td>';
              }).join('') + '</tr>';
            }).join('') + '</tbody></table>' +
            (b.cap ? '<p class="fig-cap">' + inline(b.cap) + '</p>' : ''));
          if (b.say) addSpeech(b.say, aid);
          break;

        default:
          node = el('p', 'spk', inline(b.text || ''));
          addSpeech(b.text || '', aid);
      }

      if (node) { node.id = aid; host.appendChild(node); }
    });

    return { node: host, units: units };
  }

  T.Store = Store; T.Speaker = Speaker; T.Lessons = Lessons; T.Courses = Courses;
  T.renderBlocks = renderBlocks;
  Object.assign(T, { helpers: { $: $, $$: $$, el: el, esc: esc, inline: inline, plain: plain, clamp: clamp,
                              pct: pct, today: today, lessonState: lessonState, isDone: isDone,
                              isHeard: isHeard, bestScore: bestScore, countDone: countDone,
                              nextLesson: nextLesson, streak: streak, recordConcept: recordConcept,
                              weakConcepts: weakConcepts, CUR: CUR, LBI: LBI, ACTIVE: ACTIVE, P: P, M: M, NT: NT,
                              isoLocal: isoLocal, isWeekend: isWeekend,                               startDay: startDay, rollToWeekday: rollToWeekday, beforeStart: beforeStart, dateForIdx: dateForIdx, scheduledIdx: scheduledIdx,
                              DAY_NAME: DAY_NAME, fmtDate: fmtDate } });
})();

/* ============================================================
   Views and router
   ============================================================ */
(function () {
  'use strict';

  var T = window.__TMS, H = T.helpers;
  var $ = H.$, $$ = H.$$, el = H.el, esc = H.esc, inline = H.inline, clamp = H.clamp;
  var Store = T.Store, Speaker = T.Speaker, Lessons = T.Lessons, Courses = T.Courses;
  var P = H.P, M = H.M, NT = H.NT;
  function C() { return H.CUR(); }
  function LESSON_BY_ID(id) { return H.LBI()[id]; }

  var ICON = {
    play: '<svg viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24"><path d="M7 4.5h4v15H7zM13 4.5h4v15h-4z"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 6 5 12l6 6M19 6l-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6l6 6-6 6M5 6l6 6-6 6"/></svg>',
    gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
    present: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/></svg>'
  };

  /* =========================================================
     RAIL
     ========================================================= */
  function renderRail() {
    var rail = $('#syllabus');
    if (!rail) return;
    rail.innerHTML = '';

    var meta = Courses.meta(H.ACTIVE());
    var wm = $('#wordmark');
    if (wm) {
      wm.innerHTML = meta
        ? esc(meta.title) + '<span class="sub">' + esc(meta.subtitle) + '</span>'
        : 'Your courses<span class="sub">Pick one to begin</span>';
    }
    var sw = $('#courseSwitch');
    if (sw) sw.hidden = !meta || Courses.all().length < 2;
    if (!meta || !T.C) { $('#railBar').style.width = '0%'; return; }
    var openWeek = null;
    var m = (location.hash || '').match(/#\/[^/]+\/(?:lesson|test)\/(w(\d\d)l\d\d)/);
    if (m) openWeek = parseInt(m[2], 10);
    else openWeek = H.nextLesson().week;

    C().parts.forEach(function (part) {
      rail.appendChild(el('div', 'part-label', 'Part ' + part.id + ' · ' + esc(part.name)));
      part.weeks.forEach(function (wn) {
        var w = C().weeks[wn - 1];
        var wrap = el('div', 'week');
        wrap.setAttribute('data-open', wn === openWeek ? '1' : '0');

        var doneN = w.lessons.filter(function (l) { return H.isDone(l.id); }).length;
        var dots = w.lessons.map(function (l) {
          var cls = H.isDone(l.id) ? 'dot done' : (H.isHeard(l.id) ? 'dot part' : 'dot');
          return '<span class="' + cls + '"></span>';
        }).join('');

        var head = el('button', 'week-head',
          '<span class="wk">W' + (wn < 10 ? '0' + wn : wn) + '</span>' +
          '<span class="wt">' + esc(w.title) + '</span>' +
          '<span class="dots" title="' + doneN + ' of 5 complete">' + dots + '</span>');
        head.setAttribute('aria-expanded', wn === openWeek ? 'true' : 'false');
        head.onclick = function () {
          var open = wrap.getAttribute('data-open') === '1';
          wrap.setAttribute('data-open', open ? '0' : '1');
          head.setAttribute('aria-expanded', open ? 'false' : 'true');
        };
        wrap.appendChild(head);

        var list = el('div', 'week-lessons');
        w.lessons.forEach(function (l) {
          var b = H.bestScore(l.id);
          var status = H.isDone(l.id)
            ? '<span class="s score">' + b + '%</span>'
            : (H.isHeard(l.id) ? '<span class="s" style="color:var(--gold-ink)">heard</span>' : '');
          var btn = el('button', 'les',
            '<span class="n">' + (l.idx < 10 ? '0' + l.idx : l.idx) + '</span>' +
            '<span class="t">' + esc(l.title) + '</span>' + status);
          if (location.hash.indexOf(l.id) >= 0) btn.setAttribute('aria-current', 'true');
          btn.onclick = function () { go('#/lesson/' + l.id); };
          list.appendChild(btn);
        });
        wrap.appendChild(list);
        rail.appendChild(wrap);
      });
    });

    var done = H.countDone();
    var bar = $('#railBar');
    if (bar) bar.style.width = (done / C().flat.length * 100) + '%';
    var mt = $('#railMeta');
    if (mt) mt.innerHTML = '<span>' + done + ' / ' + C().flat.length + ' lectures</span><span>' + H.pct(done / C().flat.length) + '%</span>';
  }

  /* a course-relative hash such as "#/plan" becomes "#/marketing/plan" */
  function withCourse(h) {
    if (!h || h.indexOf('#/') !== 0) return h;
    var rest = h.slice(2), first = rest.split('/')[0];
    if (first === 'courses' || Courses.meta(first)) return h;
    return '#/' + (H.ACTIVE() || 'marketing') + '/' + rest;
  }

  function written() { return T.WRITTEN || []; }
  function isWritten(n) { return written().indexOf(n) >= 0; }
  function writtenNote() {
    var w = written();
    if (!w.length) return 'None of this course\u2019s lectures are written yet — the syllabus is fixed first.';
    if (w.length === 1) return 'Week ' + w[0] + ' is ready now.';
    return 'Weeks ' + w.slice(0, -1).join(', ') + ' and ' + w[w.length - 1] + ' are ready now.';
  }

  function go(hash) {
    hash = withCourse(hash);
    if (location.hash === hash) Router.render();
    else location.hash = hash;
    document.body.setAttribute('data-rail', 'closed');
  }

  function crumb(text) { var c = $('#crumb'); if (c) c.textContent = text; }

  /* =========================================================
     COURSES — the picker
     ========================================================= */
  function viewCourses(main) {
    crumb('Courses');
    var col = el('div', 'col col-wide');
    col.innerHTML =
      '<div class="lesson-head">' +
        '<div class="kicker"><span class="tagline">Your library</span></div>' +
        '<h1 class="lesson-title">Courses</h1>' +
        '<p class="lesson-standfirst">Each course is a full sixteen-week programme with its own lectures, ' +
        'tests and record of what you have mastered. Progress is kept separately for each, so studying two ' +
        'at once costs you nothing.</p>' +
      '</div>';

    var grid = el('div', 'course-grid');
    Courses.all().forEach(function (c) {
      var wk = Courses.writtenWeeks(c.id);
      var sl = Store.state.byCourse[c.id];
      var done = 0, best = [];
      if (sl && sl.progress && sl.progress.lessons) {
        Object.keys(sl.progress.lessons).forEach(function (k) {
          var st = sl.progress.lessons[k];
          if (st && st.testedAt && st.best >= 70) { done += 1; best.push(st.best); }
        });
      }
      var mean = best.length ? Math.round(best.reduce(function (a, b) { return a + b; }, 0) / best.length) : null;
      var open = c.status === 'open' && wk.length;

      var card = el('button', 'course-card');
      card.style.setProperty('--card-accent', c.accent || 'var(--accent)');
      card.innerHTML =
        '<span class="cc-top">' +
          '<span class="cc-field">' + esc(c.field) + '</span>' +
          (open ? '<span class="cc-badge open">' + wk.length + ' week' + (wk.length === 1 ? '' : 's') + ' ready</span>'
                : '<span class="cc-badge soon">Syllabus only</span>') +
        '</span>' +
        '<span class="cc-title">' + esc(c.title) + '</span>' +
        '<span class="cc-blurb">' + esc(c.blurb) + '</span>' +
        '<span class="cc-foot">' +
          '<span class="cc-sub mono">' + esc(c.subtitle) + '</span>' +
          (done ? '<span class="cc-sub mono">' + done + ' passed' + (mean ? ' · mean ' + mean + '%' : '') + '</span>' : '') +
        '</span>';
      card.onclick = function () { location.hash = '#/' + c.id + '/today'; };
      grid.appendChild(card);
    });
    col.appendChild(grid);

    var note = el('div', 'banner');
    note.innerHTML = '<b>Want a field that is not here?</b> Say so and a syllabus for it gets written into the ' +
      'app — same structure, same player, same tests. The course list is data, not code.';
    col.appendChild(note);

    main.appendChild(col);
  }

  /* =========================================================
     TODAY
     ========================================================= */
  function viewToday(main) {
    var next = H.nextLesson();
    var done = H.countDone();
    var weak = H.weakConcepts(5);
    var hours = (C().flat.reduce(function (a, b) { return a + b.mins; }, 0) / 60);
    crumb('Today');

    var col = el('div', 'col');
    var greet = done === 0 ? 'Start here' : (done >= C().flat.length ? 'Course complete' : 'Today’s session');

    col.innerHTML =
      '<div class="lesson-head" style="border-bottom:0;padding-bottom:6px">' +
        '<div class="kicker"><span class="tagline">' + esc(greet) + '</span>' +
        '<span class="pill">One hour</span></div>' +
        '<h1 class="lesson-title">' + esc(C().title) + '</h1>' +
        '<p class="lesson-standfirst">Sixteen weeks, eighty lessons, ' + hours.toFixed(0) + ' hours of lectures. ' +
        'Listen, write in your notebook, then sit the test. The course watches what you get wrong and brings it back.</p>' +
      '</div>';

    if (!Store.storageOk && !Store.db) {
      var sw = el('div', 'banner');
      sw.style.background = 'var(--warn-soft)';
      sw.style.borderLeftColor = 'var(--warn)';
      sw.innerHTML = '<b>This browser is not letting the page save anything.</b> You can still listen and sit tests, ' +
        'but your progress will be gone when you close the tab. Usually this means private browsing, or site data ' +
        'blocked for local files — try a normal window, or use the online copy of the course.';
      col.appendChild(sw);
    }
    var stats = el('div', 'stat-row');
    stats.innerHTML =
      '<div class="stat"><span class="v">' + done + '<span style="font-size:15px;color:var(--ink-3)">/' + C().flat.length + '</span></span><span class="l">Lessons passed</span></div>' +
      '<div class="stat"><span class="v">' + H.streak() + '</span><span class="l">Weekday streak</span></div>' +
      '<div class="stat"><span class="v">' + (avgScore() == null ? '—' : avgScore() + '%') + '</span><span class="l">Average test score</span></div>' +
      '<div class="stat"><span class="v">' + weak.length + '</span><span class="l">Concepts to shore up</span></div>';
    col.appendChild(stats);

    /* offer the home-screen install, once, on the public copy */
    if (window.TMS_SITE && !isStandalone() && !dismissedInstall()) {
      var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      var ins = el('div', 'banner');
      ins.innerHTML = '<b>Put this on your home screen.</b> It then opens like an app — full screen, ' +
        'no address bar — and every lecture works with no internet at all.<br>' +
        (ios ? '<span style="color:var(--ink-2)">In Safari: tap <b>Share</b>, then <b>Add to Home Screen</b>.</span>'
             : '<span style="color:var(--ink-2)">In Chrome: menu, then <b>Install app</b> or <b>Add to Home screen</b>.</span>') +
        '<div style="margin-top:11px"><button class="btn btn-sm" id="dismissInstall">Got it</button></div>';
      col.appendChild(ins);
      setTimeout(function () {
        var d = $('#dismissInstall', ins);
        if (d) d.onclick = function () {
          try { localStorage.setItem('tms.installed', '1'); } catch (e) {}
          ins.remove();
        };
      }, 0);
    }

    if (!subject()) col.appendChild(subjectCard());

    /* what the calendar says about today */
    var tIdx = H.scheduledIdx(), nowD = new Date(); nowD.setHours(0, 0, 0, 0);
    var strip = el('div', 'sched-strip');
    if (H.beforeStart()) {
      var sm = H.startDay();
      strip.innerHTML = '<span class="sd-date">Day one: ' + H.fmtDate(sm) + '</span>' +
        '<span style="flex:1;min-width:220px">The course has not started yet — day one is set ahead of today.</span>' +
        '<button class="btn btn-sm" data-go="#/plan">See the plan</button>';
    } else if (tIdx == null) {
      strip.className = 'sched-strip off';
      strip.innerHTML = '<span class="sd-date">' + H.DAY_NAME[nowD.getDay()] + ' — day off</span>' +
        '<span style="flex:1;min-width:200px">The plan runs Monday to Friday. Weekends do not break your streak.</span>' +
        '<button class="btn btn-sm" data-go="#/plan">See the plan</button>';
    } else if (next.idx < tIdx) {
      strip.className = 'sched-strip behind';
      strip.innerHTML = '<span class="sd-date">' + H.DAY_NAME[nowD.getDay()] + ' ' + H.fmtDate(nowD) + '</span>' +
        '<span style="flex:1;min-width:220px">The plan says lecture <b>' + tIdx + '</b> today; you are on <b>' +
        next.idx + '</b>. Catch up, or shift the plan.</span>' +
        '<button class="btn btn-sm" data-go="#/plan">Adjust the plan</button>';
    } else {
      strip.innerHTML = '<span class="sd-date">' + H.DAY_NAME[nowD.getDay()] + ' ' + H.fmtDate(nowD) + '</span>' +
        '<span style="flex:1;min-width:220px">Week ' + next.week + ', day ' + next.nInWeek + ' of 5 — on schedule.</span>' +
        '<button class="btn btn-sm" data-go="#/plan">See the plan</button>';
    }
    col.appendChild(strip);

    /* next lesson card */
    var card = el('div', 'card');
    var avail = isWritten(next.week);
    card.innerHTML =
      '<div class="eyebrow" style="margin-bottom:9px">Next lecture</div>' +
      '<div class="today-lesson"><div class="tl-body">' +
        '<h3>' + esc(next.title) + '</h3>' +
        '<p class="card-sub mono" style="margin-bottom:8px">Week ' + next.week + ' · Lesson ' + next.idx + ' of 80 · ' + next.mins + ' min</p>' +
        '<p style="font-size:14px;color:var(--ink-2);line-height:1.6;margin:0 0 14px;max-width:58ch">' + esc(next.blurb) + '</p>' +
        '<div style="display:flex;gap:9px;flex-wrap:wrap">' +
        (avail
          ? '<button class="btn btn-primary" data-go="#/lesson/' + next.id + '">Begin lecture ' + ICON.arrow + '</button>'
          : '<span class="pill gold">Not yet written — see the syllabus</span>') +
        '<button class="btn" data-go="#/syllabus">Full syllabus</button>' +
        '</div></div></div>';
    col.appendChild(card);

    /* review */
    var rcard = el('div', 'card');
    var rhtml = '<div class="eyebrow" style="margin-bottom:9px">Spaced review</div>' +
      '<h3>Bring back what slipped</h3>' +
      '<p class="card-sub">Questions you got wrong, re-asked once your memory has had time to fade.</p>';
    if (!weak.length) {
      rhtml += '<div class="empty">Nothing to review yet. Weak spots appear here after your first test.</div>';
    } else {
      rhtml += '<div class="review-list">' + weak.map(function (c) {
        return '<div class="review-item"><div><div class="ri-name">' + esc(c.name || c.id) + '</div>' +
          '<div class="ri-why">' + H.pct(c.ema) + '% mastery · missed ' + (c.missed ? c.missed.length : 0) + ' question' +
          ((c.missed && c.missed.length === 1) ? '' : 's') + '</div></div>' +
          '<span class="mono" style="font-size:11px;color:var(--ink-3)">' + esc((c.id || '').slice(0, 6)) + '</span></div>';
      }).join('') + '</div>' +
      '<div style="margin-top:14px"><button class="btn btn-gold" data-go="#/review">Start review drill</button></div>';
    }
    rcard.innerHTML = rhtml;
    col.appendChild(rcard);

    if (subject()) col.appendChild(subjectCard(true));

    /* how it works */
    var hcard = el('div', 'card');
    hcard.innerHTML =
      '<div class="eyebrow" style="margin-bottom:9px">How to use the hour</div>' +
      '<div class="syl-grid" style="border:0;background:transparent;gap:0">' +
      [['00–05', 'Read the objectives and skim the figures. Rule up your notebook page.'],
       ['05–35', 'Press play. Take notes by hand — the boxes marked <b>Write this down</b> are the minimum.'],
       ['35–45', 'Re-read your own notes and redraw one figure from memory.'],
       ['45–60', 'Sit the test. Read every explanation, including the ones you got right.']]
      .map(function (r) {
        return '<div style="display:grid;grid-template-columns:62px 1fr;gap:14px;padding:9px 0;border-bottom:1px solid var(--rule)">' +
          '<span class="mono" style="font-size:11.5px;color:var(--accent)">' + r[0] + '</span>' +
          '<span style="font-size:13.5px;color:var(--ink-2);line-height:1.55">' + r[1] + '</span></div>';
      }).join('') + '</div>';
    col.appendChild(hcard);

    main.appendChild(col);
    wireGo(col);
  }

  function isStandalone() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
           window.navigator.standalone === true;
  }
  function dismissedInstall() {
    try { return localStorage.getItem('tms.installed') === '1'; } catch (e) { return false; }
  }

  /* The business every exercise is applied to. Set once; it turns eighty
     separate lectures into one long piece of work on a real thing. */
  function subject() { return P().subject || null; }

  function subjectCard(compact) {
    var sub = subject();
    var card = el('div', sub ? 'card subject-card set' : 'card subject-card');
    if (sub) {
      card.innerHTML =
        '<div class="eyebrow" style="margin-bottom:8px">Your running case</div>' +
        '<h3>' + esc(sub.name) + '</h3>' +
        '<p class="card-sub">' + esc(sub.what) + (sub.who ? ' · for ' + esc(sub.who) : '') + '</p>' +
        '<p style="font-size:13px;color:var(--ink-2);line-height:1.6;margin:0 0 12px;max-width:56ch">' +
        'Every exercise applies to this one, from the outside. By week sixteen you will have a complete ' +
        'marketing analysis of a real company, built a piece at a time — the thing an employer asks you ' +
        'to produce in a first interview task.</p>' +
        '<button class="btn btn-sm" id="subjEdit">Change it</button>';
    } else {
      card.innerHTML =
        '<div class="eyebrow" style="margin-bottom:8px">Before lecture one</div>' +
        '<h3>Choose a company to watch</h3>' +
        '<p style="font-size:14px;color:var(--ink-2);line-height:1.65;margin:0 0 12px;max-width:58ch">' +
        '<b>You do not need to own it, work there, or have any inside information.</b> You need to be able ' +
        'to observe it: walk in, use it, read its website, see its prices, notice who else is in the queue. ' +
        'That is what a marketing analyst actually does, and every exercise in this course is written to be ' +
        'answerable from the outside.</p>' +
        '<p style="font-size:13.5px;color:var(--ink-2);line-height:1.6;margin:0 0 14px;max-width:58ch">' +
        'Good choices: <b>your bank</b>, a café or shop you use every week, an app you pay for, a gym, ' +
        'a bookshop, a club you belong to. Pick something you come across often — you will be looking at it ' +
        'for sixteen weeks, and the more often you see it, the more you will notice.</p>' +
        '<button class="btn btn-primary btn-sm" id="subjSet">Choose one</button>';
    }
    setTimeout(function () {
      var open = $('#subjSet', card) || $('#subjEdit', card);
      if (open) open.onclick = function () { subjectForm(card); };
    }, 0);
    return card;
  }

  function subjectForm(card) {
    var sub = subject() || { name: '', what: '', who: '' };
    card.innerHTML =
      '<div class="eyebrow" style="margin-bottom:10px">Your running case</div>' +
      '<div class="subj-form">' +
        '<label>What is it called?<input type="text" id="sjName" value="' + esc(sub.name) + '" placeholder="e.g. LHV, or the café on my street"></label>' +
        '<label>What does it do, in one line?<input type="text" id="sjWhat" value="' + esc(sub.what) + '" placeholder="e.g. a bank for private customers and small firms"></label>' +
        '<label>Who does it serve? (your best guess — you will correct it later)<input type="text" id="sjWho" value="' + esc(sub.who) + '" placeholder="e.g. people who want banking on a phone"></label>' +
      '</div>' +
      '<div style="display:flex;gap:9px;margin-top:14px"><button class="btn btn-primary btn-sm" id="sjSave">Save</button>' +
      '<button class="btn btn-sm" id="sjCancel">Cancel</button></div>';
    $('#sjName', card).focus();
    $('#sjSave', card).onclick = function () {
      var n = $('#sjName', card).value.trim();
      if (!n) { $('#sjName', card).focus(); return; }
      P().subject = { name: n, what: $('#sjWhat', card).value.trim(), who: $('#sjWho', card).value.trim() };
      Store.save();
      Router.render();
    };
    $('#sjCancel', card).onclick = function () { Router.render(); };
  }

  function avgScore() {
    var xs = [];
    Object.keys(P().lessons).forEach(function (k) {
      var s = P().lessons[k];
      if (s && typeof s.best === 'number') xs.push(s.best);
    });
    if (!xs.length) return null;
    return Math.round(xs.reduce(function (a, b) { return a + b; }, 0) / xs.length);
  }

  function wireGo(root) {
    $$('[data-go]', root).forEach(function (b) {
      b.onclick = function () { go(b.getAttribute('data-go')); };
    });
  }

  /* =========================================================
     SYLLABUS
     ========================================================= */
  function viewSyllabus(main) {
    crumb('Syllabus');
    var col = el('div', 'col col-wide');
    col.innerHTML =
      '<div class="lesson-head">' +
        '<div class="kicker"><span class="tagline">The whole course</span></div>' +
        '<h1 class="lesson-title">Syllabus</h1>' +
        '<p class="lesson-standfirst">Six parts, sixteen weeks, eighty lectures. Weeks build on each other: ' +
        'foundations, then people and markets, then strategy, then the mix, then data, then command.</p>' +
      '</div>';

    var sp = C().spine;
    if (sp && sp.question) {
      var sq = el('div', 'spine-q');
      sq.innerHTML = '<span class="sq-label mono">The one question the whole course answers</span>' +
        '<p class="sq-text">' + esc(sp.question) + '</p>';
      col.appendChild(sq);
    }

    var oc = C().outcomes;
    if (oc) {
      var ob = el('section', 'card outcomes');
      var h = '<h2 class="oc-h">What you will be able to do</h2>';
      if (oc.claim) h += '<p class="oc-claim">' + esc(oc.claim) + '</p>';
      h += '<ul class="oc-list">';
      oc.able.forEach(function (o) {
        h += '<li><span class="oc-part mono">' + esc(o.part) + '</span><span>' + esc(o.text) + '</span></li>';
      });
      h += '</ul>';
      if (oc.limits && oc.limits.length) {
        h += '<h3 class="oc-h3">And what it does not give you</h3><ul class="oc-limits">';
        oc.limits.forEach(function (t) { h += '<li>' + esc(t) + '</li>'; });
        h += '</ul>';
      }
      ob.innerHTML = h;
      col.appendChild(ob);
    }

    C().parts.forEach(function (part) {
      var ph = el('div', 'block-head');
      ph.innerHTML = '<h2>Part ' + part.id + ' · ' + esc(part.name) + '</h2>' +
        '<span class="hint mono">Weeks ' + part.weeks[0] + '–' + part.weeks[part.weeks.length - 1] + '</span>';
      col.appendChild(ph);
      if (sp && sp.parts && sp.parts[part.id]) {
        col.appendChild(el('p', 'part-q', esc(sp.parts[part.id])));
      }

      part.weeks.forEach(function (wn) {
        var w = C().weeks[wn - 1];
        var sec = el('section', 'syl-week');
        sec.innerHTML = '<h3><span class="wn">Week ' + wn + '</span><span class="wt">' + esc(w.title) + '</span></h3>';
        var grid = el('div', 'syl-grid');
        w.lessons.forEach(function (l) {
          var b = H.bestScore(l.id);
          var st = H.isDone(l.id)
            ? '<span class="ss" style="color:var(--good)">' + b + '%</span>'
            : (isWritten(wn) ? '<span class="ss" style="color:var(--ink-3)">' + l.mins + ' min</span>'
                                       : '<span class="ss" style="color:var(--gold-ink)">soon</span>');
          var row = el('button', 'syl-row',
            '<span class="sn">' + (l.idx < 10 ? '0' + l.idx : l.idx) + '</span>' +
            '<span><span class="st">' + esc(l.title) + '</span><span class="sb">' + esc(l.blurb) + '</span></span>' + st);
          row.onclick = function () { go('#/lesson/' + l.id); };
          grid.appendChild(row);
        });
        sec.appendChild(grid);
        col.appendChild(sec);
      });
    });

    main.appendChild(col);
  }

  /* =========================================================
     LESSON
     ========================================================= */

  function viewLesson(main, id) {
    var meta = LESSON_BY_ID(id);
    if (!meta) { go('#/today'); return; }
    crumb('Week ' + meta.week + ' · Lesson ' + meta.idx);

    var col = el('div', 'col');
    col.innerHTML = '<div class="lesson-head"><div class="kicker"><span class="tagline">Loading lecture…</span></div>' +
      '<h1 class="lesson-title">' + esc(meta.title) + '</h1></div>';
    main.appendChild(col);

    Lessons.get(id).then(function (L) {
      col.innerHTML = '';
      if (!L) {
        col.innerHTML =
          '<div class="lesson-head">' +
          '<div class="kicker"><span class="tagline">Week ' + meta.week + '</span><span class="pill gold">Not yet written</span></div>' +
          '<h1 class="lesson-title">' + esc(meta.title) + '</h1>' +
          '<p class="lesson-standfirst">' + esc(meta.blurb) + '</p></div>' +
          '<div class="banner"><b>This lecture is still being written.</b> The syllabus is fixed and this lesson’s ' +
          'place in it is settled — the lecture text, figures and test are added week by week. ' +
          writtenNote() + '</div>' +
          '<div class="lesson-foot"><button class="btn btn-primary" data-go="#/today">Back to today</button>' +
          '<button class="btn" data-go="#/syllabus">Syllabus</button></div>';
        wireGo(col);
        return;
      }
      renderLesson(col, meta, L);
    });
  }

  function renderLesson(col, meta, L) {
    /* --- header --- */
    var head = el('div', 'lesson-head');
    var b = H.bestScore(meta.id);
    head.innerHTML =
      '<div class="kicker">' +
        '<span class="tagline">Week ' + meta.week + ' · ' + esc(meta.weekTitle) + '</span>' +
        '<span class="pill mono">Lesson ' + meta.idx + '/80</span>' +
        '<span class="pill mono">' + meta.mins + ' min</span>' +
        (b != null ? '<span class="pill good">Best ' + b + '%</span>' : '') +
      '</div>' +
      '<h1 class="lesson-title">' + esc(meta.title) + '</h1>' +
      '<p class="lesson-standfirst">' + inline(L.standfirst || meta.blurb) + '</p>' +
      '<div class="objectives"><h2>By the end of this lecture you can</h2><ol>' +
      (L.objectives || []).map(function (o) { return '<li>' + inline(o) + '</li>'; }).join('') +
      '</ol></div>';
    col.appendChild(head);

    /* --- the thread: this lecture's place in the course's argument --- */
    if (L.thread) {
      var wkq = (C().weeks[meta.week - 1] || {}).question;
      var th = el('div', 'thread');
      th.innerHTML =
        '<div class="thread-head"><span class="eyebrow">The thread</span>' +
        (wkq ? '<span class="thread-wq">Week ' + meta.week + ' asks: ' + esc(wkq) + '</span>' : '') + '</div>' +
        '<div class="thread-steps">' +
          '<div class="th-step th-from"><span class="th-lab">You already know</span><span class="th-txt">' + inline(L.thread.from) + '</span></div>' +
          '<div class="th-step th-adds"><span class="th-lab">This lecture adds</span><span class="th-txt">' + inline(L.thread.adds) + '</span></div>' +
          '<div class="th-step th-toward"><span class="th-lab">You will need it for</span><span class="th-txt">' + inline(L.thread.toward) + '</span></div>' +
        '</div>';
      col.appendChild(th);
    }

    /* --- weak-prerequisite banner: the adaptive bit --- */
    var gaps = (L.concepts || []).concat(L.prereq || []).map(function (c) {
      return typeof c === 'string' ? c : c.id;
    });
    var shaky = H.weakConcepts().filter(function (w) { return gaps.indexOf(w.id) >= 0; });
    if (shaky.length) {
      var rem = el('div', 'banner');
      rem.innerHTML = '<b>Before you start.</b> Your last tests put you at ' +
        shaky.map(function (s) { return esc(s.name || s.id) + ' (' + H.pct(s.ema) + '%)'; }).join(', ') +
        '. This lecture leans on that, so the refresher is repeated in section one.';
      col.appendChild(rem);
    }

    /* --- transport --- */
    var body = L.blocks.slice();
    if (L.exercises && L.exercises.length) {
      body.push({ t: 'h2', text: 'Work to do before the next lecture' });
      var sj = P().subject;
      body.push({ t: 'p', text: L.exercisesLead ||
        'These are not test questions. They are the hour after the hour — the part that turns a lecture you followed into something you can use.' +
        (sj ? ' Apply every one of them to **' + sj.name + '**.' : '') });
      body.push({ t: 'exercises', items: L.exercises });
    }
    var built = T.renderBlocks(body, meta);
    var transport = buildTransport(built.units, meta, L);
    col.appendChild(transport);

    /* --- body --- */
    col.appendChild(built.node);

    /* slides for the projector, built from the very nodes just rendered */
    try { T.Present.build(built.node, meta, L); } catch (e) {}

    /* --- the end of the lecture: say plainly what to do next --- */
    var nx = el('div', 'end-card');
    var exN = (L.exercises || []).length;
    nx.innerHTML =
      '<div class="end-head"><span class="eyebrow">End of the lecture</span>' +
      '<span class="end-sub">' + meta.mins + ' minutes of listening done</span></div>' +
      '<div class="end-steps">' +
        (exN ? '<button class="end-step" id="goEx">' +
          '<span class="es-n">1</span>' +
          '<span class="es-body"><span class="es-title">Do the ' + exN + ' exercises</span>' +
          '<span class="es-note">On paper, applied to your own case. This is the part that makes it stick.</span></span>' +
        '</button>' : '') +
        '<button class="end-step primary" data-go="#/test/' + meta.id + '">' +
          '<span class="es-n">' + (exN ? 2 : 1) + '</span>' +
          '<span class="es-body"><span class="es-title">Sit the test</span>' +
          '<span class="es-note">' + ((L.quiz || []).length) + ' questions, plus a few carried forward from earlier lectures. ' +
          'Read every explanation, including on the ones you get right.</span></span>' +
          '<svg viewBox="0 0 24 24" class="es-arrow"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        '</button>' +
      '</div>';
    col.appendChild(nx);
    setTimeout(function () {
      var gx = $('#goEx', nx);
      if (gx) gx.onclick = function () {
        var t = $('.exercise-list');
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    }, 0);
    wireGo(nx);

    /* --- hard words --- */
    glossInText(built.node, L.vocab, L.glossary);
    wireGloss();
    wireSentences(built.node);
    if (L.vocab && L.vocab.length) {
      var vh = el('div', 'block-head');
      vh.innerHTML = '<h2>Words in this lecture</h2><span class="hint">Marked in the text the first time each appears</span>';
      col.appendChild(vh);
      var vg = el('div', 'vocab');
      vg.innerHTML = '<div class="vocab-grid">' + L.vocab.map(function (v) {
        return '<div class="vocab-item"><div class="vocab-word">' + esc(v.word) + '</div>' +
          '<div class="vocab-plain">' + inline(v.plain) + '</div>' +
          (v.et ? '<span class="vocab-et">eesti keeles: ' + esc(v.et) + '</span>' : '') + '</div>';
      }).join('') + '</div>';
      col.appendChild(vg);
    }

    /* --- glossary --- */
    if (L.glossary && L.glossary.length) {
      var gh = el('div', 'block-head');
      gh.innerHTML = '<h2>Terms from this lecture</h2><span class="hint">Copy these into the back of your notebook</span>';
      col.appendChild(gh);
      var g = el('div', 'glossary');
      g.innerHTML = '<dl>' + L.glossary.map(function (t) {
        return '<div class="row"><dt>' + inline(t.term) + '</dt><dd>' + inline(t.def) + '</dd></div>';
      }).join('') + '</dl>';
      col.appendChild(g);
    }

    /* --- further reading --- */
    if (L.reading && L.reading.length) {
      var rh = el('div', 'block-head');
      rh.innerHTML = '<h2>Where this comes from</h2><span class="hint">Read the first one if you read nothing else</span>';
      col.appendChild(rh);
      var rl = el('ol', 'reading-list');
      rl.innerHTML = L.reading.map(function (r) {
        return '<li><span class="rd-cite"><span class="rd-author">' + inline(r.author) + '</span>, ' +
          '<span class="rd-work">' + inline(r.work) + '</span>' +
          (r.where ? ', ' + inline(r.where) : '') + (r.year ? ', ' + r.year : '') + '.</span>' +
          (r.note ? '<span class="rd-note">' + inline(r.note) + '</span>' : '') + '</li>';
      }).join('');
      col.appendChild(rl);
    }

    /* --- notes --- */
    var nh = el('div', 'block-head');
    nh.innerHTML = '<h2>Your notes</h2><span class="hint">Optional — the paper notebook is the real one</span>';
    col.appendChild(nh);
    var ta = el('textarea', 'notes-area');
    ta.id = 'notes-' + meta.id;
    ta.placeholder = 'Anything you want to keep with the lesson — a question to chase, a company it reminded you of…';
    ta.value = NT()[meta.id] || '';
    var noteTimer = null;
    ta.oninput = function () {
      if (noteTimer) clearTimeout(noteTimer);
      noteTimer = setTimeout(function () { Store.saveNote(meta.id, ta.value); }, 900);
    };
    col.appendChild(ta);

    /* --- tutor --- */
    var tutor = buildTutor(meta, L);
    if (tutor) col.appendChild(tutor);

    /* --- footer --- */
    var foot = el('div', 'lesson-foot');
    var prev = C().flat[meta.idx - 2], next = C().flat[meta.idx];
    foot.innerHTML =
      '<button class="btn btn-gold" data-go="#/test/' + meta.id + '">Sit the test ' + ICON.arrow + '</button>' +
      (prev ? '<button class="btn" data-go="#/lesson/' + prev.id + '">← Previous</button>' : '') +
      (next ? '<button class="btn" data-go="#/lesson/' + next.id + '">Next lecture →</button>' : '');
    col.appendChild(foot);
    wireGo(col);

    /* mark as heard once playback finishes */
    Speaker.onEnd = function () { markHeard(meta.id); };
  }

  /* Underline EVERY word the reader might not know, every time it appears.
     We walk the words in the text and look each one up — so the dictionary can
     grow without this code changing, and nothing is missed. */
  var STEM = [
    [/ies$/, 'y'], [/ied$/, 'y'], [/ying$/, 'ie'], [/([^aeiou])ed$/, '$1'],
    [/([^aeiou])ing$/, '$1'], [/ing$/, 'e'], [/ed$/, 'e'], [/es$/, ''], [/s$/, ''],
    [/ly$/, ''], [/ally$/, 'al'], [/ment$/, ''], [/ion$/, 'e'], [/ions$/, 'e'],
    [/ing$/, ''], [/ed$/, '']
  ];

  function lookup(word, extra) {
    var w = word.toLowerCase();
    var dict = window.VOCAB || {};
    if (extra && extra[w]) return extra[w];
    if (dict[w]) return dict[w];
    for (var i = 0; i < STEM.length; i++) {
      if (!STEM[i][0].test(w)) continue;
      var base = w.replace(STEM[i][0], STEM[i][1]);
      if (base.length < 4) continue;
      if (extra && extra[base]) return extra[base];
      if (dict[base]) return dict[base];
    }
    return null;
  }

  function glossInText(root, lessonVocab, glossary) {
    var extra = {};
    (lessonVocab || []).forEach(function (v) {
      extra[v.word.toLowerCase()] = { et: v.et || '', en: v.plain, key: true };
    });
    (glossary || []).forEach(function (g) {
      var k = String(g.term).toLowerCase().replace(/\s*\(.*$/, '');
      if (!extra[k]) extra[k] = { et: '', en: H.plain(g.def), key: true };
    });

    var SKIP = { CODE: 1, SCRIPT: 1, STYLE: 1, SVG: 1 };
    walk(root);

    function walk(node) {
      var kids = Array.prototype.slice.call(node.childNodes);
      for (var i = 0; i < kids.length; i++) {
        var n = kids[i];
        if (n.nodeType === 3) glossNode(n, extra);
        else if (n.nodeType === 1 && !SKIP[n.tagName] && !n.classList.contains('word-gloss')) walk(n);
      }
    }
  }

  function glossNode(textNode, extra) {
    var txt = textNode.nodeValue;
    if (!txt || txt.length < 4 || !/[a-zA-Z]{4}/.test(txt)) return;
    var re = /[A-Za-z][A-Za-z'-]{3,}/g, m, last = 0, frag = null;
    while ((m = re.exec(txt)) !== null) {
      var hit = lookup(m[0], extra);
      if (!hit) continue;
      if (!frag) frag = document.createDocumentFragment();
      if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
      var span = document.createElement('span');
      span.className = 'word-gloss' + (hit.key ? ' key' : '');
      span.setAttribute('data-et', hit.et || '');
      span.setAttribute('data-en', hit.en || '');
      span.setAttribute('tabindex', '0');
      span.textContent = m[0];
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (!frag) return;
    if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  }

  /* one popover for the whole page: hover on a mouse, tap on a phone */
  var Pop = {
    el: null,
    show: function (target) {
      if (!Pop.el) {
        Pop.el = el('div', 'gloss-pop');
        Pop.el.hidden = true;
        document.body.appendChild(Pop.el);
      }
      var et = target.getAttribute('data-et'), en = target.getAttribute('data-en');
      Pop.el.innerHTML =
        '<div class="gp-word">' + esc(target.textContent) + '</div>' +
        (et ? '<div class="gp-et">' + esc(et) + '</div>' : '') +
        (en ? '<div class="gp-en">' + esc(en) + '</div>' : '');
      Pop.el.hidden = false;
      var r = target.getBoundingClientRect();
      var w = Pop.el.offsetWidth, h = Pop.el.offsetHeight;
      var left = clamp(r.left + r.width / 2 - w / 2, 10, window.innerWidth - w - 10);
      var top = r.top - h - 9;
      if (top < 8) top = r.bottom + 9;
      Pop.el.style.left = left + 'px';
      Pop.el.style.top = (top + window.scrollY) + 'px';
    },
    hide: function () { if (Pop.el) Pop.el.hidden = true; }
  };

  function wireGloss() {
    if (wireGloss.done) return;
    wireGloss.done = true;
    document.addEventListener('mouseover', function (e) {
      var t = e.target.closest && e.target.closest('.word-gloss');
      if (t) Pop.show(t);
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest('.word-gloss')) Pop.hide();
    });
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('.word-gloss');
      if (t) { e.preventDefault(); Pop.show(t); } else Pop.hide();
    });
    document.addEventListener('focusin', function (e) {
      var t = e.target.closest && e.target.closest('.word-gloss');
      if (t) Pop.show(t);
    });
    window.addEventListener('scroll', Pop.hide, { passive: true });
  }

  /* ---------------------------------------------------------
     Estonian on demand — a sentence at a time, written once
     --------------------------------------------------------- */
  var Translate = {
    sample: undefined,          /* undefined = not asked yet, null = unavailable */
    mem: {},

    key: function (text) {
      var h = 5381, i;
      for (i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) >>> 0;
      return 'tr' + h.toString(36) + '-' + text.length;
    },

    ready: function () {
      if (Translate.sample !== undefined) return Promise.resolve(Translate.sample);
      if (!window.claude || !window.claude.use) { Translate.sample = null; return Promise.resolve(null); }
      return window.claude.use('sample').then(function (fn) {
        Translate.sample = fn || null;
        return Translate.sample;
      }).catch(function () { Translate.sample = null; return null; });
    },

    cached: function (k) {
      if (Translate.mem[k]) return Translate.mem[k];
      try {
        var v = localStorage.getItem('tms.' + k);
        if (v) { Translate.mem[k] = v; return v; }
      } catch (e) {}
      return null;
    },

    store: function (k, v) {
      Translate.mem[k] = v;
      try { localStorage.setItem('tms.' + k, v); } catch (e) {}
      if (Store.db) {
        try { Store.db.doc('translations/' + k).set({ et: v, at: new Date().toISOString() }).catch(function () {}); } catch (e) {}
      }
    },

    /* local first, then the shared store, then ask Claude once */
    get: function (text) {
      var k = Translate.key(text);
      var hit = Translate.cached(k);
      if (hit) return Promise.resolve(hit);

      var fromDb = (Store.db)
        ? Store.db.doc('translations/' + k).get().then(function (sn) {
            return sn.exists ? (sn.data().et || null) : null;
          }).catch(function () { return null; })
        : Promise.resolve(null);

      return fromDb.then(function (v) {
        if (v) { Translate.mem[k] = v; try { localStorage.setItem('tms.' + k, v); } catch (e) {} return v; }
        return Translate.ready().then(function (fn) {
          if (!fn) return null;
          return fn('Translate this sentence from an English university marketing lecture into natural, ' +
            'clear Estonian. Keep established English marketing terms in English where an Estonian student ' +
            'would meet them in English, and put the Estonian in brackets after. Reply with the Estonian ' +
            'translation only — no preamble, no quotation marks.\n\n' + text,
            { modelTier: 'quick', cache: { gcTime: 86400000 } })
            .then(function (r) {
              var out = (r.text || '').trim();
              if (out) Translate.store(k, out);
              return out || null;
            });
        });
      });
    }
  };

  function wireSentences(root) {
    $$('.sent', root).forEach(function (sn) {
      sn.addEventListener('click', function (e) {
        if (!document.body.classList.contains('et-mode')) return;
        if (window.getSelection && String(window.getSelection()).length > 2) return;
        e.stopPropagation();
        var existing = sn.previousElementSibling;
        if (existing && existing.classList && existing.classList.contains('sent-et')) {
          existing.remove(); return;
        }
        var box = el('span', 'sent-et', '<span class="se-wait">tõlgin…</span>');
        sn.parentNode.insertBefore(box, sn);
        Translate.get(sn.textContent.trim()).then(function (et) {
          if (!et) {
            box.innerHTML = '<span class="se-off">Eestikeelne tõlge töötab ainult Claude’i versioonis. ' +
              'Sõnade tähendused töötavad igal pool.</span>';
            return;
          }
          box.textContent = et;
        }).catch(function () {
          box.innerHTML = '<span class="se-off">Tõlge ei õnnestunud. Proovi uuesti.</span>';
        });
      });
    });
  }

  function markHeard(id) {
    var p = P().lessons[id] || (P().lessons[id] = {});
    if (!p.listened) {
      p.listened = true;
      p.listenedAt = new Date().toISOString();
      Store.markDay();
      Store.save();
      renderRail();
    }
  }

  /* ------------------------- presentation mode -------------------------
     Kaaleb studies the way he would at a lecture: the page goes on a
     projector, the voice reads, and the slides move themselves. He sits with
     a notebook. Slides are built from the SAME rendered nodes as the page, so
     a figure on the slide is the figure from the lecture, and each slide
     knows which speech anchors belong to it — that is what keeps them in step.
     --------------------------------------------------------------------- */
  var Present = {
    on: false, slides: [], i: -1, root: null, stage: null, sub: null,
    meta: null, wake: null, manual: 0,

    build: function (hostNode, meta, L) {
      Present.meta = meta;
      var slides = [], cur = null, eyebrow = '';
      var pos = {};
      Speaker.units.forEach(function (u, k) { if (pos[u.anchor] == null) pos[u.anchor] = k; });

      function push(kind, title) {
        cur = { kind: kind, title: title || '', eyebrow: eyebrow, nodes: [], anchors: [], len: 0 };
        slides.push(cur);
        return cur;
      }

      /* opening slide: what this lecture is and what it is for */
      var open = push('title', meta.title);
      open.lead = L.standfirst || '';
      open.list = (L.objectives || []).slice(0, 6);
      open.kicker = 'Week ' + meta.week + ' · Lecture ' + meta.idx;
      cur = null;

      Array.prototype.slice.call(hostNode.children).forEach(function (n) {
        var tag = n.tagName, cl = n.className || '';
        var solo = /\bfig\b|\btable-wrap\b|\bbox-math\b|\bbox-case\b|\bbox-warn\b|\bbox-write\b|\bexercise-list\b/.test(cl);

        if (tag === 'H2') {
          /* the rendered heading carries a "Section N" chip; keep the two apart */
          var chip = n.querySelector('.sec-n');
          var num = chip ? chip.textContent.trim() : '';
          var text = (n.textContent || '').slice(num.length).trim() || n.textContent;
          eyebrow = '';
          var sec = push('section', text);
          sec.kicker = num;
          sec.anchors.push(n.id);
          cur = null;
          eyebrow = text;
          return;
        }
        if (tag === 'H3') {
          var sub = push('sub', n.textContent);
          sub.anchors.push(n.id);
          return;
        }
        if (solo) {
          /* a panel the voice never reads would be skipped in auto-play, so it
             rides with the paragraph that introduces it, the way a lecturer
             puts a table up while still talking about it */
          if (pos[n.id] == null && cur && cur.kind === 'content') {
            cur.nodes.push(n); cur.anchors.push(n.id); cur.len += 260;
            return;
          }
          var one = push(/\bbox-math\b/.test(cl) ? 'math' : /\bfig\b/.test(cl) ? 'fig' : 'panel', '');
          one.nodes.push(n);
          one.anchors.push(n.id);
          cur = null;
          return;
        }
        /* running prose: accumulate, then break before it overflows a screen */
        var txt = (n.textContent || '').length;
        if (!cur || cur.kind === 'section' || cur.len + txt > 620 || cur.nodes.length >= 3) {
          var c = push('content', '');
          c.cont = true;
        }
        cur.nodes.push(n);
        cur.anchors.push(n.id);
        cur.len += txt;
      });

      /* closing slide */
      eyebrow = '';
      var end = push('end', 'End of the lecture');
      end.list = [
        (L.exercises || []).length + ' exercises — on paper, applied to your own case',
        (L.quiz || []).length + ' test questions, plus a few carried forward'
      ];

      /* every slide needs the first speech unit it contains, so that moving a
         slide by hand can move the voice with it */
      slides.forEach(function (sl) {
        sl.first = null;
        sl.anchors.forEach(function (a) {
          if (pos[a] != null && (sl.first == null || pos[a] < sl.first)) sl.first = pos[a];
        });
      });
      /* anchor -> slide index, for syncing */
      Present.byAnchor = {};
      slides.forEach(function (sl, k) { sl.anchors.forEach(function (a) { Present.byAnchor[a] = k; }); });

      Present.slides = slides;
      Present.i = -1;
      return slides.length;
    },

    render: function (sl) {
      var head = '';
      if (sl.kind === 'section' && sl.kicker) head += '<div class="pr-kicker">' + esc(sl.kicker) + '</div>';
      if (sl.eyebrow && sl.kind !== 'section' && sl.kind !== 'title') {
        head += '<div class="pr-eyebrow">' + esc(sl.eyebrow) + '</div>';
      }
      if (sl.title && !sl.cont) {
        head += '<h2 class="pr-title' + (sl.kind === 'section' ? ' big' : '') + '">' + esc(sl.title) + '</h2>';
      }
      var wrap = el('div', 'pr-body');
      wrap.innerHTML = head;

      if (sl.kind === 'title') {
        wrap.innerHTML = '<div class="pr-kicker">' + esc(sl.kicker) + '</div>' +
          '<h1 class="pr-h1">' + esc(sl.title) + '</h1>' +
          (sl.lead ? '<p class="pr-lead">' + inline(sl.lead) + '</p>' : '') +
          (sl.list.length ? '<ul class="pr-list">' + sl.list.map(function (x) {
            return '<li>' + inline(x) + '</li>'; }).join('') + '</ul>' : '');
      } else if (sl.kind === 'end') {
        wrap.innerHTML = '<div class="pr-kicker">Done listening</div>' +
          '<h1 class="pr-h1">' + esc(sl.title) + '</h1>' +
          '<ul class="pr-list">' + sl.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
          '<p class="pr-lead">Press Esc to leave the projector and go to the exercises.</p>';
      } else {
        sl.nodes.forEach(function (n) {
          var c = n.cloneNode(true);
          c.removeAttribute('id');
          c.classList.remove('spk', 'active');
          $$('[id]', c).forEach(function (x) { x.removeAttribute('id'); });
          wrap.appendChild(c);
        });
      }

      /* shrink type when a slide is heavy, so nothing is cut off on a projector */
      var chars = (wrap.textContent || '').length;
      wrap.setAttribute('data-density', chars > 900 ? 'dense' : chars > 480 ? 'normal' : 'roomy');
      return wrap;
    },

    show: function (n, moveVoice) {
      if (!Present.on || !Present.slides.length) return;
      n = clamp(n, 0, Present.slides.length - 1);
      if (n === Present.i) return;
      Present.i = n;
      var sl = Present.slides[n];
      Present.stage.innerHTML = '';
      Present.stage.appendChild(Present.render(sl));
      var bar = $('#prBar', Present.root), cnt = $('#prCount', Present.root);
      if (bar) bar.style.width = ((n + 1) / Present.slides.length * 100) + '%';
      if (cnt) cnt.textContent = (n + 1) + ' / ' + Present.slides.length;
      if (moveVoice && sl.first != null) {
        if (Speaker.playing) Speaker.speakNow(sl.first);
        else { Speaker.idx = sl.first; Speaker.tick(); }
      }
    },

    /* called from the transport on every tick: follow the voice */
    sync: function (anchor, text) {
      if (!Present.on) return;
      if (Present.sub) Present.sub.textContent = text || '';
      if (Present.manual && Date.now() < Present.manual) return;   /* he just moved by hand */
      if (Speaker.idx >= Speaker.units.length - 1) { Present.show(Present.slides.length - 1, false); return; }
      var k = Present.byAnchor ? Present.byAnchor[anchor] : null;
      if (k != null) Present.show(k, false);
    },

    move: function (d) {
      Present.manual = Date.now() + 1200;
      Present.show(Present.i + d, true);
    },

    enter: function () {
      if (!Present.slides.length) return;
      Present.on = true;
      var r = el('div', 'presenter');
      r.innerHTML =
        '<div class="pr-stage" id="prStage"></div>' +
        '<div class="pr-foot">' +
          '<span class="pr-where">' + esc(Present.meta.title) + '</span>' +
          '<span class="pr-sub" id="prSub"></span>' +
          '<span class="pr-count mono" id="prCount"></span>' +
        '</div>' +
        '<div class="pr-track"><i id="prBar"></i></div>' +
        '<div class="pr-keys">space play · ← → slide · F full screen · Esc leave</div>' +
        '<button class="pr-close" id="prClose" aria-label="Leave the projector">✕</button>' +
        '<button class="pr-zone left" aria-label="Previous slide"></button>' +
        '<button class="pr-zone right" aria-label="Next slide"></button>';
      document.body.appendChild(r);
      document.body.classList.add('presenting');
      $('#prClose', r).onclick = Present.exit;
      $('.pr-zone.left', r).onclick = function () { Present.move(-1); };
      $('.pr-zone.right', r).onclick = function () { Present.move(1); };
      Present.root = r;
      Present.stage = $('#prStage', r);
      Present.sub = $('#prSub', r);
      Present.i = -1;
      var here = Speaker.idx > 0 ? Speaker.units[Speaker.idx] : null;
      Present.show(here && Present.byAnchor[here.anchor] != null ? Present.byAnchor[here.anchor] : 0, false);
      /* let the opening slide stand for a moment before the voice takes over */
      if (!here) Present.manual = Date.now() + 2600;
      document.addEventListener('keydown', Present.key, true);
      try {
        if (navigator.wakeLock && navigator.wakeLock.request) {
          navigator.wakeLock.request('screen').then(function (w) { Present.wake = w; }, function () {});
        }
      } catch (e) {}
      try { if (r.requestFullscreen) r.requestFullscreen(); } catch (e) {}
    },

    exit: function () {
      if (!Present.on) return;
      Present.on = false;
      document.removeEventListener('keydown', Present.key, true);
      if (Present.root && Present.root.parentNode) Present.root.parentNode.removeChild(Present.root);
      document.body.classList.remove('presenting');
      Present.root = Present.stage = Present.sub = null;
      try { if (Present.wake && Present.wake.release) Present.wake.release(); } catch (e) {}
      Present.wake = null;
      try { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen(); } catch (e) {}
    },

    key: function (e) {
      if (!Present.on) return;
      var k = e.key;
      if (k === 'Escape') { e.preventDefault(); Present.exit(); return; }
      if (k === 'ArrowRight' || k === 'PageDown' || k === 'ArrowDown') { e.preventDefault(); Present.move(1); return; }
      if (k === 'ArrowLeft' || k === 'PageUp' || k === 'ArrowUp') { e.preventDefault(); Present.move(-1); return; }
      if (k === ' ' || k === 'Spacebar') {
        e.preventDefault();
        if (Speaker.playing) Speaker.pause(); else Speaker.speakNow(Speaker.idx);
        return;
      }
      if (k === 'f' || k === 'F') {
        e.preventDefault();
        try {
          if (document.fullscreenElement) document.exitFullscreen();
          else if (Present.root.requestFullscreen) Present.root.requestFullscreen();
        } catch (err) {}
      }
    }
  };
  T.Present = Present;

  /* --------------------------- transport --------------------------- */
  function buildTransport(units, meta, L) {
    var wrap = el('div', 'transport');
    wrap.setAttribute('data-open', '0');
    wrap.innerHTML =
      '<div class="transport-main">' +
        '<button class="play-btn" id="playBtn" aria-label="Play lecture">' + ICON.play + '</button>' +
        '<div class="transport-mid">' +
          '<div class="transport-status"><span class="now" id="nowLine">Press play — the lecture is read aloud by your device</span>' +
          '<span id="posLine">0 / ' + units.length + '</span></div>' +
          '<div class="track" id="track" role="slider" aria-label="Lecture position" tabindex="0"><i id="trackFill" style="width:0%"></i></div>' +
        '</div>' +
        '<div class="transport-side">' +
          '<button class="icon-btn" id="prevBtn" aria-label="Back one sentence">' + ICON.prev + '</button>' +
          '<button class="icon-btn" id="nextBtn" aria-label="Forward one sentence">' + ICON.next + '</button>' +
          '<button class="icon-btn" id="setBtn" aria-label="Playback settings">' + ICON.gear + '</button>' +
          '<button class="icon-btn" id="prBtn" aria-label="Present on a screen" title="Present — slides that follow the voice">' + ICON.present + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="transport-extra">' +
        '<label>Voice <select id="voiceSel"></select></label>' +
        '<label>Speed <input type="range" id="rateSel" min="0.6" max="1.6" step="0.05" value="' + (Store.state.prefs.rate || 1) + '"><span class="mono" id="rateVal" style="font-size:11px">' + (Store.state.prefs.rate || 1).toFixed(2) + '×</span></label>' +
        '<button class="btn btn-sm" id="readBtn">Read silently</button>' +
        '<button class="btn btn-sm" id="etBtn" aria-pressed="false">ET — klõpsa lauset</button>' +
        '<label class="look">Sõna?<input type="text" id="lookIn" placeholder="type any word" autocapitalize="off" spellcheck="false"><span class="look-out" id="lookOut"></span></label>' +
        '<span class="mono" style="font-size:10.5px;color:var(--ink-3)" id="syncNote">Saved on this device</span>' +
        '<div class="voice-help" id="voiceHelp" hidden></div>' +
      '</div>';

    if (!Speaker.supported) {
      var w = el('div', 'no-tts');
      w.textContent = 'This browser cannot read aloud. The full lecture text is below — read it instead, or open the page in Safari or Chrome.';
      wrap.appendChild(w);
    }

    Speaker.setUnits(units);

    var playBtn = $('#playBtn', wrap), fill = $('#trackFill', wrap),
        posLine = $('#posLine', wrap), nowLine = $('#nowLine', wrap), track = $('#track', wrap);

    var lastAnchor = null;
    Speaker.onTick = function () {
      var u = Speaker.units[Speaker.idx];
      playBtn.innerHTML = Speaker.playing ? ICON.pause : ICON.play;
      playBtn.setAttribute('aria-label', Speaker.playing ? 'Pause lecture' : 'Play lecture');
      fill.style.width = (Speaker.units.length ? (Speaker.idx / Speaker.units.length * 100) : 0) + '%';
      posLine.textContent = Speaker.idx + ' / ' + Speaker.units.length;
      if (u) {
        nowLine.textContent = u.text.slice(0, 110);
        if (Present.on) Present.sync(u.anchor, u.text);
        if (u.anchor !== lastAnchor) {
          lastAnchor = u.anchor;
          $$('.spk.active').forEach(function (n) { n.classList.remove('active'); });
          var node = document.getElementById(u.anchor);
          if (node) {
            node.classList.add('active');
            if (Speaker.playing) {
              var r = node.getBoundingClientRect();
              if (r.top < 150 || r.bottom > window.innerHeight - 80) {
                node.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }
          }
        }
      }
    };

    playBtn.onclick = function () {
      Speaker.toggle();
      if (Speaker.playing) Store.markDay();
    };
    $('#prevBtn', wrap).onclick = function () { Speaker.step(-1); };
    $('#nextBtn', wrap).onclick = function () { Speaker.step(1); };
    $('#setBtn', wrap).onclick = function () {
      wrap.setAttribute('data-open', wrap.getAttribute('data-open') === '1' ? '0' : '1');
    };
    var etBtn = $('#etBtn', wrap);
    if (!document.body.classList.contains('et-mode')) etBtn.setAttribute('aria-pressed', 'false');
    else etBtn.setAttribute('aria-pressed', 'true');
    etBtn.onclick = function () {
      var on = !document.body.classList.contains('et-mode');
      document.body.classList.toggle('et-mode', on);
      etBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      try { localStorage.setItem('tms.et', on ? '1' : '0'); } catch (e) {}
      if (on && !$('.sent-et')) {
        var first = $('.prose .sent');
        if (first) first.click();
      }
    };

    var lookIn = $('#lookIn', wrap), lookOut = $('#lookOut', wrap), lookT = null;
    lookIn.oninput = function () {
      if (lookT) clearTimeout(lookT);
      var q = lookIn.value.trim();
      if (!q) { lookOut.textContent = ''; lookOut.className = 'look-out'; return; }
      lookT = setTimeout(function () {
        var hit = lookup(q, null);
        if (hit) {
          lookOut.className = 'look-out hit';
          lookOut.innerHTML = (hit.et ? '<b>' + esc(hit.et) + '</b> — ' : '') + esc(hit.en);
          return;
        }
        lookOut.className = 'look-out';
        lookOut.textContent = 'otsin…';
        Translate.ready().then(function (fn) {
          if (!fn) { lookOut.textContent = 'ei ole sõnastikus'; return; }
          return fn('Give the Estonian meaning of the English word "' + q + '" as used in business and ' +
            'economics, then a short plain-English definition. Reply as: estonian — definition. Nothing else.',
            { modelTier: 'quick', cache: { gcTime: 86400000 } })
            .then(function (r) { lookOut.className = 'look-out hit'; lookOut.textContent = (r.text || '').trim(); });
        }).catch(function () { lookOut.textContent = 'ei leitud'; });
      }, 350);
    };

    $('#readBtn', wrap).onclick = function () {
      Speaker.pause(); markHeard(meta.id);
      $('.prose').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    function seek(e) {
      var r = track.getBoundingClientRect();
      var x = ((e.touches ? e.touches[0].clientX : e.clientX) - r.left) / r.width;
      var i = Math.round(clamp(x, 0, 1) * (Speaker.units.length - 1));
      if (Speaker.playing) Speaker.speakNow(i); else { Speaker.idx = i; Speaker.tick(); }
    }
    track.onclick = seek;
    track.onkeydown = function (e) {
      if (e.key === 'ArrowLeft') { Speaker.step(-1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { Speaker.step(1); e.preventDefault(); }
    };

    var rate = $('#rateSel', wrap), rateVal = $('#rateVal', wrap);
    rate.oninput = function () {
      Store.state.prefs.rate = parseFloat(rate.value);
      rateVal.textContent = parseFloat(rate.value).toFixed(2) + '×';
      Store.save();
      if (Speaker.playing) Speaker.speakNow(Speaker.idx);
    };

    var prBtn = $('#prBtn', wrap);
    if (prBtn) prBtn.onclick = function () {
      if (!Present.slides.length) return;
      Present.enter();
      if (!Speaker.playing) Speaker.speakNow(Speaker.idx);
    };

    var sel = $('#voiceSel', wrap);
    var LABEL = { natural: 'natural', good: 'decent', basic: 'robotic' };
    function fillVoices() {
      var help = $('#voiceHelp', wrap);
      if (!Speaker.voices.length) { sel.innerHTML = '<option>Device default</option>'; return; }
      var list = Speaker.ranked();
      var cur = Speaker.pickVoice();
      sel.innerHTML = list.map(function (v) {
        return '<option value="' + esc(v.voiceURI) + '"' + (cur && v.voiceURI === cur.voiceURI ? ' selected' : '') + '>' +
          esc(v.name) + ' — ' + LABEL[Speaker.quality(v)] + '</option>';
      }).join('');

      /* if nothing good is installed, say how to get one — this is the single
         biggest improvement available and it is free */
      if (help) {
        if (Speaker.hasNatural()) {
          /* something good is installed — but Edge's free neural voices are
             better than almost anything else available at no cost, so say so
             once, quietly, when they are not the ones being used */
          var best = list[0] || null;
          var neural = best && /natural|multilingual/i.test(best.name || '');
          if (neural) { help.hidden = true; return; }
          help.hidden = false;
          help.innerHTML = '<b>There is a more human voice available, free.</b> Open this page in ' +
            '<b>Microsoft Edge</b> and pick a voice whose name contains <b>Natural</b> or ' +
            '<b>Multilingual</b> — those are neural voices, and they are the closest thing to a ' +
            'real speaker you can get without paying. Nothing to install; Edge streams them.' +
            '<br><span style="color:var(--ink-3)">Everything else on this page works the same there.</span>';
          return;
        }
        var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        var mac = /Macintosh|Mac OS X/.test(navigator.userAgent) && !ios;
        var steps = ios
          ? 'Settings → Accessibility → Spoken Content → Voices → English → pick a name marked ' +
            '<b>Premium</b> or <b>Enhanced</b> and download it. Come back and choose it here.'
          : mac
            ? 'System Settings → Accessibility → Spoken Content → System Voice → <b>Manage Voices…</b> → English → ' +
              'download one marked <b>Premium</b>. Come back and choose it here.'
            : 'On a phone, the system text-to-speech settings usually offer a higher-quality voice to download. ' +
              'In Edge or Chrome on a computer, look for a voice whose name contains <b>Natural</b> or <b>Online</b>.';
        help.hidden = false;
        help.innerHTML = '<b>Your device only has robotic voices installed.</b> A better one is free and takes a minute: ' +
          steps + '<br><span style="color:var(--ink-3)">It is a system download, not part of this course — every ' +
          'app on the device gets the better voice.</span>';
      }
    }
    fillVoices();
    Speaker.onVoices = fillVoices;
    sel.onchange = function () {
      Store.state.prefs.voiceURI = sel.value;
      Store.save();
      if (Speaker.playing) Speaker.speakNow(Speaker.idx);
    };

    Speaker.tick();
    return wrap;
  }

  /* --------------------------- tutor --------------------------- */
  function buildTutor(meta, L) {
    var card = el('div', 'card');
    card.innerHTML =
      '<div class="eyebrow" style="margin-bottom:9px">Seminar</div>' +
      '<h3>Ask about this lecture</h3>' +
      '<p class="card-sub">Anything that did not land. The tutor sees this lecture’s text and answers from it.</p>' +
      '<div class="tutor-log" id="tutorLog"></div>' +
      '<div class="tutor-form"><textarea id="tutorIn" rows="2" placeholder="e.g. Why is distinctiveness different from differentiation?"></textarea>' +
      '<button class="btn btn-primary" id="tutorSend">Ask</button></div>' +
      '<p class="mono" id="tutorNote" style="font-size:10.5px;color:var(--ink-3);margin:10px 0 0">Checking availability…</p>';

    var log = $('#tutorLog', card), input = $('#tutorIn', card),
        send = $('#tutorSend', card), note = $('#tutorNote', card);
    send.disabled = true;

    if (!window.claude || !window.claude.use) return null;

    window.claude.use('sample').then(function (sample) {
      if (!sample) { card.style.display = 'none'; return; }
      note.textContent = 'Answers come from Claude on your own account.';
      send.disabled = false;

      var turns = [];
      var context = lessonPlainText(L).slice(0, 14000);
      var RULES = 'You are a university marketing tutor taking a seminar after a lecture. ' +
        'Answer only from the lecture below plus standard, well-established marketing knowledge. ' +
        'Be concrete, use the lecture’s own terms, and give a real example. Keep answers under 200 words ' +
        'unless asked to go deeper. If the student is confused about something the lecture got to later, say where. ' +
        'Never invent statistics.\n\nLECTURE: ' + meta.title + '\n\n' + context;

      function bubble(cls, text) {
        var b = el('div', 'bubble ' + cls, esc(text));
        log.appendChild(b);
        b.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return b;
      }

      function ask() {
        var q = input.value.trim();
        if (!q) return;
        input.value = '';
        bubble('you', q);
        var out = bubble('tutor', 'Thinking…');
        send.disabled = true;
        turns.push({ role: 'user', content: q });
        var msgs = [{ role: 'user', content: RULES }].concat(turns.slice(-6));
        sample(msgs, {
          cache: false,
          onText: function (u) { out.textContent = u.text; }
        }).then(function (r) {
          out.textContent = r.text;
          turns.push({ role: 'assistant', content: r.text });
        }).catch(function (e) {
          var msg = {
            not_granted: 'You declined access, so the tutor is off for this visit.',
            rate_limited: 'Too many questions too quickly — give it a minute.',
            session_expired: 'Sign in to Claude again and reload.',
            refused: 'The tutor would not answer that one. Try rephrasing.'
          }[e && e.code] || 'The tutor could not answer just now.';
          out.textContent = (e && e.text) ? e.text + '\n\n(' + msg + ')' : msg;
        }).then(function () { send.disabled = false; });
      }

      send.onclick = ask;
      input.onkeydown = function (e) {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { ask(); e.preventDefault(); }
      };
    }).catch(function () { card.style.display = 'none'; });

    return card;
  }

  function lessonPlainText(L) {
    var out = [];
    (L.blocks || []).forEach(function (b) {
      if (b.text) out.push(H.plain(b.text));
      if (b.items) b.items.forEach(function (x) { out.push('- ' + H.plain(x)); });
      if (b.ps) b.ps.forEach(function (x) { out.push(H.plain(x)); });
      if (b.title) out.push(H.plain(b.title));
      if (b.cap) out.push(H.plain(b.cap));
      if (b.say) out.push(H.plain(b.say));
    });
    return out.join('\n');
  }

  /* =========================================================
     TOOLKIT — every tool earned so far, in one place
     ========================================================= */
  function viewToolkit(main) {
    crumb('Toolkit');
    var col = el('div', 'col');
    col.innerHTML =
      '<div class="lesson-head">' +
        '<div class="kicker"><span class="tagline">What you can now do</span></div>' +
        '<h1 class="lesson-title">Toolkit</h1>' +
        '<p class="lesson-standfirst">Every formula, framework and rule the course has handed you, with the ' +
        'question each one answers. It grows as you pass lectures. When you are stuck on a real problem, ' +
        'this is the page to read — not the lecture.</p>' +
      '</div>';
    main.appendChild(col);

    var weeks = (T.WRITTEN || []).slice().sort(function (a, b) { return a - b; });
    if (!weeks.length) { col.appendChild(el('div', 'empty', 'No lectures written yet for this course.')); return; }

    Promise.all(weeks.map(function (n) { return Lessons.load(n); })).then(function (loaded) {
      var rows = [];
      loaded.forEach(function (wk) {
        if (!wk) return;
        Object.keys(wk).forEach(function (lid) {
          var L = wk[lid], meta = LESSON_BY_ID(lid);
          if (!L.tools || !meta) return;
          L.tools.forEach(function (t) {
            rows.push({ t: t, meta: meta, done: H.isDone(lid) });
          });
        });
      });
      rows.sort(function (a, b) { return a.meta.idx - b.meta.idx; });

      if (!rows.length) { col.appendChild(el('div', 'empty', 'Tools appear here as lectures introduce them.')); return; }

      var KIND = { formula: 'Formula', framework: 'Framework', rule: 'Rule', test: 'Test' };
      var list = el('div', 'tool-list');
      rows.forEach(function (r) {
        var item = el('div', 'tool' + (r.done ? ' earned' : ''));
        item.innerHTML =
          '<div class="tool-top">' +
            '<span class="tool-kind tk-' + esc(r.t.kind || 'framework') + '">' + esc(KIND[r.t.kind] || 'Framework') + '</span>' +
            '<span class="tool-name">' + inline(r.t.name) + '</span>' +
            '<button class="tool-src" data-go="#/lesson/' + r.meta.id + '">Lecture ' + r.meta.idx + '</button>' +
          '</div>' +
          (r.t.form ? '<div class="tool-form mono">' + esc(r.t.form) + '</div>' : '') +
          '<div class="tool-q"><b>Answers:</b> ' + inline(r.t.answers) + '</div>' +
          '<div class="tool-when"><b>Use it when:</b> ' + inline(r.t.when) + '</div>';
        list.appendChild(item);
      });
      col.appendChild(list);
      wireGo(col);
    });
  }

  /* =========================================================
     PLAN — the Monday-to-Friday calendar
     ========================================================= */
  function viewPlan(main) {
    crumb('Plan');
    var col = el('div', 'col col-wide');
    var start = H.startDay();
    var todayIdx = H.scheduledIdx();
    var next = H.nextLesson();
    var now = new Date(); now.setHours(0, 0, 0, 0);

    col.innerHTML =
      '<div class="lesson-head">' +
        '<div class="kicker"><span class="tagline">Monday to Friday</span>' +
        '<span class="pill mono">One lecture a day</span>' +
        '<span class="pill mono">16 weeks</span></div>' +
        '<h1 class="lesson-title">Plan</h1>' +
        '<p class="lesson-standfirst">One lecture every weekday, in order. Weekends are off — they do not ' +
        'break your streak. If you fall behind, shift the whole plan forward rather than skipping a lecture.</p>' +
      '</div>';

    /* where you stand */
    var strip = el('div', 'sched-strip');
    if (H.beforeStart()) {
      strip.innerHTML = '<span class="sd-date">Day one: ' + H.fmtDate(start) + '</span>' +
        '<span style="flex:1;min-width:220px">The course has not started yet. Move day one to today if you ' +
        'want to begin now.</span>';
    } else if (todayIdx == null) {
      strip.className = 'sched-strip off';
      var nd = new Date(now); do { nd.setDate(nd.getDate() + 1); } while (H.isWeekend(nd));
      var nIdx = H.scheduledIdx(nd);
      strip.innerHTML = '<span class="sd-date">' + H.DAY_NAME[now.getDay()] + ' — day off</span>' +
        '<span style="flex:1;min-width:200px">No lecture scheduled. Back on ' + H.DAY_NAME[nd.getDay()] + ' with ' +
        (nIdx ? 'lecture ' + nIdx + ', <b>' + esc(C().flat[nIdx - 1].title) + '</b>.' : 'the next lecture.') + '</span>';
    } else {
      var behind = next.idx < todayIdx;
      if (behind) strip.className = 'sched-strip behind';
      strip.innerHTML =
        '<span class="sd-date">' + H.DAY_NAME[now.getDay()] + ' ' + H.fmtDate(now) + '</span>' +
        '<span style="flex:1;min-width:220px">' +
        (behind
          ? 'The plan says lecture <b>' + todayIdx + '</b> today, but you are still on lecture <b>' + next.idx +
            '</b> — ' + (todayIdx - next.idx) + ' behind. Catch up, or move the plan so today is where you actually are.'
          : 'Today: lecture <b>' + todayIdx + '</b>, ' + esc(C().flat[todayIdx - 1].title) + '.') +
        '</span>' +
        (behind ? '<button class="btn btn-sm" id="shiftBtn">Shift the plan to today</button>' : '');
    }
    col.appendChild(strip);

    /* start date */
    var ctl = el('div', 'card');
    ctl.style.margin = '14px 0 22px';
    ctl.innerHTML =
      '<div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">' +
      '<label style="font-size:13px;color:var(--ink-2);display:flex;align-items:center;gap:9px">Day one \u2014 lecture 1 \u2014 falls on ' +
      '<input type="date" id="startDate" value="' + H.isoLocal(start) + '" ' +
      'style="padding:6px 9px;border:1px solid var(--rule-strong);border-radius:4px;background:var(--paper);font-size:13px"></label>' +
      '<span class="mono" style="font-size:11px;color:var(--ink-3)">Any date — it snaps back to that week\u2019s Monday.</span>' +
      '</div>';
    col.appendChild(ctl);

    col.appendChild(el('div', 'plan-legend',
      '<span><i style="background:var(--accent)"></i>passed</span>' +
      '<span><i style="background:var(--gold)"></i>scheduled day has passed, not done</span>' +
      '<span><i style="background:var(--rule-strong)"></i>still to come</span>'));

    C().weeks.forEach(function (w) {
      var wrap = el('section', 'plan-week');
      var d0 = H.dateForIdx((w.n - 1) * 5 + 1), d4 = H.dateForIdx((w.n - 1) * 5 + 5);
      var past = d4 < now;
      wrap.setAttribute('data-when', past ? 'past' : 'ahead');
      wrap.innerHTML = '<h3><span class="wn">Week ' + w.n + '</span><span class="wt">' + esc(w.title) + '</span>' +
        '<span class="wd">' + H.fmtDate(d0) + ' – ' + H.fmtDate(d4) + '</span></h3>';
      var grid = el('div', 'plan-days');
      w.lessons.forEach(function (l) {
        var d = H.dateForIdx(l.idx);
        var done = H.isDone(l.id);
        var isToday = todayIdx === l.idx;
        var state = done ? 'done' : (d < now ? 'missed' : 'soon');
        var b = H.bestScore(l.id);
        var status = done ? '<span class="pd-s" style="color:var(--good)">passed ' + b + '%</span>'
          : (state === 'missed' ? '<span class="pd-s" style="color:var(--gold-ink)">not done</span>'
            : '<span class="pd-s" style="color:var(--ink-3)">' + l.mins + ' min</span>');
        var cell = el('button', 'plan-day',
          '<span class="pd-top"><span class="pd-day">' + H.DAY_NAME[d.getDay()].slice(0, 3) + ' ' + H.fmtDate(d) + '</span>' +
          '<span class="pd-n">' + l.idx + '</span></span>' +
          '<span class="pd-t">' + esc(l.title) + '</span>' + status);
        cell.setAttribute('data-state', state);
        if (isToday) cell.setAttribute('data-today', '1');
        cell.onclick = function () { go('#/lesson/' + l.id); };
        grid.appendChild(cell);
      });
      wrap.appendChild(grid);
      col.appendChild(wrap);
    });

    main.appendChild(col);

    var sb = $('#shiftBtn', strip);
    if (sb) sb.onclick = function () {
      /* put today's date on the lesson you are actually up to */
      var base = H.rollToWeekday(new Date()), back = next.idx - 1;
      while (back > 0) { base.setDate(base.getDate() - 1); if (!H.isWeekend(base)) back -= 1; }
      P().startDate = H.isoLocal(base);
      Store.save();
      go('#/plan');
    };
    $('#startDate', ctl).onchange = function (e) {
      if (!e.target.value) return;
      P().startDate = H.isoLocal(H.rollToWeekday(new Date(e.target.value + 'T00:00:00')));
      Store.save();
      go('#/plan');
    };
  }

  window.__TMS.views = { renderRail: renderRail, go: go, viewToday: viewToday,
                         viewSyllabus: viewSyllabus, viewLesson: viewLesson, viewPlan: viewPlan,
                         wireGo: wireGo, crumb: crumb, ICON: ICON, avgScore: avgScore,
                         viewCourses: viewCourses, isWritten: isWritten, withCourse: withCourse,
                         subject: subject, viewToolkit: viewToolkit };
})();

/* ============================================================
   Test engine, review drill, progress, router
   ============================================================ */
(function () {
  'use strict';

  var T = window.__TMS, H = T.helpers, V = T.views;
  var $ = H.$, $$ = H.$$, el = H.el, esc = H.esc, inline = H.inline, clamp = H.clamp;
  var Store = T.Store, Speaker = T.Speaker, Lessons = T.Lessons;
  var Courses = T.Courses;
  var P = H.P, M = H.M, NT = H.NT;
  function C() { return H.CUR(); }
  function LESSON_BY_ID(id) { return H.LBI()[id]; }
  var PASS = 70;

  /* ---------------------------------------------------------
     Quiz component
     --------------------------------------------------------- */
  function buildQuiz(questions, host, ownCount) {
    var answers = {};       /* qid -> value */
    var selfMarks = {};     /* qid -> 0|1 for short answers */
    var graded = false;
    var nodes = {};

    questions.forEach(function (q, i) {
      var box = el('div', 'q');
      box.id = 'q-' + q.id;
      var body = '';

      if (q.type === 'mcq' || q.type === 'multi') {
        body = '<div class="opts">' + q.options.map(function (o, oi) {
          return '<label class="opt" data-o="' + oi + '">' +
            '<input type="' + (q.type === 'multi' ? 'checkbox' : 'radio') + '" name="' + q.id + '" id="' + q.id + '-' + oi + '" value="' + oi + '">' +
            '<span><span class="k">' + 'ABCDEFGH'[oi] + '</span>&nbsp; ' + inline(o) + '</span></label>';
        }).join('') + '</div>';
      } else if (q.type === 'num') {
        body = '<input type="text" inputmode="decimal" id="' + q.id + '-in" placeholder="' + esc(q.placeholder || 'Your answer') + '">' +
          (q.unit ? '<p class="mono" style="font-size:11px;color:var(--ink-3);margin:7px 0 0">Answer in ' + esc(q.unit) + '</p>' : '');
      } else {
        body = '<textarea id="' + q.id + '-in" placeholder="Three or four sentences. Write it out — the act of writing is the point."></textarea>';
      }

      var carried = ownCount != null && i >= ownCount;
      if (carried) box.classList.add('q-carried');
      box.innerHTML =
        '<div class="q-head"><span class="q-n">' + (carried ? 'R' + (i - ownCount + 1) : 'Q' + (i + 1)) + '</span>' +
        (carried && q.fromLecture ? '<span class="q-from">Lecture ' + q.fromLecture + '</span>' : '') +
        '<span class="q-concept">' + esc(q.conceptName || q.concept) + '</span></div>' +
        '<p class="q-text">' + inline(q.q) + '</p>' + body +
        '<div class="explain" hidden></div>';
      host.appendChild(box);
      nodes[q.id] = box;

      if (q.type === 'mcq' || q.type === 'multi') {
        $$('.opt', box).forEach(function (lab) {
          lab.addEventListener('change', function () {
            if (graded) return;
            if (q.type === 'mcq') {
              $$('.opt', box).forEach(function (x) { x.classList.remove('sel'); });
              lab.classList.add('sel');
              answers[q.id] = parseInt(lab.getAttribute('data-o'), 10);
            } else {
              lab.classList.toggle('sel', $('input', lab).checked);
              answers[q.id] = $$('.opt input:checked', box).map(function (x) { return parseInt(x.value, 10); });
            }
          });
        });
      } else {
        $('#' + q.id + '-in', box).addEventListener('input', function (e) { answers[q.id] = e.target.value; });
      }
    });

    function scoreOne(q) {
      var a = answers[q.id];
      if (q.type === 'mcq') return a === q.answer ? 1 : 0;
      if (q.type === 'multi') {
        var want = q.answer, got = a || [];
        var hit = got.filter(function (x) { return want.indexOf(x) >= 0; }).length;
        var miss = got.filter(function (x) { return want.indexOf(x) < 0; }).length;
        return clamp((hit - miss) / want.length, 0, 1);
      }
      if (q.type === 'num') {
        var v = parseFloat(String(a == null ? '' : a).replace(/[^\d.\-]/g, ''));
        if (isNaN(v)) return 0;
        var tol = q.tol == null ? Math.abs(q.answer * 0.02) : q.tol;
        return Math.abs(v - q.answer) <= tol ? 1 : 0;
      }
      return selfMarks[q.id] != null ? selfMarks[q.id] : 0;
    }

    function grade() {
      graded = true;
      var results = [];
      questions.forEach(function (q) {
        var box = nodes[q.id];
        var s = scoreOne(q);
        var exp = $('.explain', box);

        if (q.type === 'mcq' || q.type === 'multi') {
          var want = q.type === 'mcq' ? [q.answer] : q.answer;
          $$('.opt', box).forEach(function (lab) {
            var oi = parseInt(lab.getAttribute('data-o'), 10);
            $('input', lab).disabled = true;
            lab.classList.remove('sel');
            if (want.indexOf(oi) >= 0) lab.classList.add('correct');
            else if ($('input', lab).checked) lab.classList.add('wrong');
          });
        } else if (q.type === 'num') {
          $('#' + q.id + '-in', box).disabled = true;
        }

        var verdict = s >= 1 ? '<span class="verdict ok">Correct</span>'
                    : (s > 0 ? '<span class="verdict part">Partly right</span>'
                             : '<span class="verdict no">Not right</span>');
        var modelAns = '';
        if (q.type === 'num') modelAns = '<p><b>Answer:</b> ' + esc(q.answer) + (q.unit ? ' ' + esc(q.unit) : '') + '</p>';
        if (q.type === 'short') modelAns = '<p><b>A good answer says:</b> ' + inline(q.answer) + '</p>';

        exp.hidden = false;
        exp.className = 'explain ' + (s >= 1 ? 'ok' : (s > 0 ? '' : 'no'));
        exp.innerHTML = verdict + modelAns + '<p>' + inline(q.explain) + '</p>';
        results.push({ q: q, score: s });
      });
      return results;
    }

    /* Short answers are marked for you. Claude marks the substance where it is
       available; otherwise the answer is checked against the points the question
       requires. Self-marking is the last resort, not the default. */
    function markShortsPhase(onDone) {
      var shorts = questions.filter(function (q) { return q.type === 'short'; });
      if (!shorts.length) { onDone(); return; }

      shorts.forEach(function (q) {
        var box = nodes[q.id];
        var ta = $('#' + q.id + '-in', box);
        ta.disabled = true;
        var panel = el('div', 'mark-panel');
        panel.innerHTML = '<span class="mk-wait">Marking your answer…</span>';
        box.insertBefore(panel, $('.explain', box));
        q._panel = panel;
      });
      shorts[0] && nodes[shorts[0].id].scrollIntoView({ behavior: 'smooth', block: 'center' });

      aiMark(shorts, answers).then(function (marks) {
        shorts.forEach(function (q) {
          var m = marks && marks[q.id];
          if (!m) m = keywordMark(q, answers[q.id]);
          if (!m) { manualMark(q); return; }
          selfMarks[q.id] = m.score;
          renderMark(q, m);
        });
        if (shorts.every(function (q) { return selfMarks[q.id] != null; })) onDone();
        else {
          var left = shorts.filter(function (q) { return selfMarks[q.id] == null; }).length;
          var check = setInterval(function () {
            if (shorts.every(function (q) { return selfMarks[q.id] != null; })) { clearInterval(check); onDone(); }
          }, 300);
        }
      });
    }

    function renderMark(q, m) {
      var verdict = m.score >= 1 ? '<span class="verdict ok">Correct</span>'
                  : m.score > 0 ? '<span class="verdict part">Partly right</span>'
                                : '<span class="verdict no">Not right</span>';
      q._panel.className = 'mark-panel ' + (m.score >= 1 ? 'ok' : m.score > 0 ? 'part' : 'no');
      q._panel.innerHTML = verdict +
        '<span class="mk-by">' + esc(m.by || '') + '</span>' +
        (m.got && m.got.length
          ? '<div class="mk-list ok"><b>You had:</b> ' + m.got.map(esc).join(' · ') + '</div>' : '') +
        (m.missed && m.missed.length
          ? '<div class="mk-list no"><b>You missed:</b> ' + m.missed.map(esc).join(' · ') + '</div>' : '') +
        (m.comment ? '<div class="mk-comment">' + esc(m.comment) + '</div>' : '') +
        '<button class="btn btn-sm mk-dispute" data-q="' + q.id + '">I think this marking is wrong</button>';
      var dis = $('.mk-dispute', q._panel);
      if (dis) dis.onclick = function () { manualMark(q, true); };
    }

    /* Claude marks the substance, not the spelling — one call for all of them */
    function aiMark(shorts, ans) {
      if (!window.claude || !window.claude.use) return Promise.resolve(null);
      var payload = shorts.map(function (q, i) {
        return '### ' + (i + 1) + ' (id: ' + q.id + ')\n' +
          'QUESTION: ' + H.plain(q.q) + '\n' +
          'A GOOD ANSWER CONTAINS: ' + H.plain(q.answer) + '\n' +
          'THE STUDENT WROTE: ' + String(ans[q.id] || '(nothing)').slice(0, 1800);
      }).join('\n\n');

      return window.claude.use('sample').then(function (sample) {
        if (!sample) return null;
        return sample.json(
          'You are marking short answers on a university marketing test. The student is Estonian and ' +
          'writes English as a second language: mark the SUBSTANCE, never the grammar, spelling or style. ' +
          'Credit a correct idea expressed in plain or clumsy words. Do not credit an answer that only ' +
          'repeats the question, or that is vaguely on-topic without the specific point.\n\n' +
          'Reply with ONLY a JSON array, one object per answer, in this exact shape:\n' +
          '[{"id":"w01l04q5","score":1,"got":["short phrase","short phrase"],"missed":[],' +
          '"comment":"one or two sentences to the student"}]\n' +
          'score is 1 (the substance is there), 0.5 (part of it) or 0 (missing or wrong). ' +
          '"got" and "missed" name specific points in at most six words each.\n\n' + payload,
          { modelTier: 'default', cache: false }
        ).then(function (arr) {
          if (!Array.isArray(arr)) return null;
          var out = {};
          arr.forEach(function (r) {
            if (!r || !r.id) return;
            var sc = Number(r.score);
            out[r.id] = {
              score: (sc === 1 || sc === 0.5 || sc === 0) ? sc : (sc >= 0.75 ? 1 : sc >= 0.3 ? 0.5 : 0),
              got: Array.isArray(r.got) ? r.got.slice(0, 6) : [],
              missed: Array.isArray(r.missed) ? r.missed.slice(0, 6) : [],
              comment: typeof r.comment === 'string' ? r.comment : '',
              by: 'marked by Claude'
            };
          });
          return Object.keys(out).length ? out : null;
        }).catch(function () { return null; });
      }).catch(function () { return null; });
    }

    /* No Claude: check the answer against the points the question requires */
    function keywordMark(q, given) {
      if (!q.must || !q.must.length) return null;
      var text = String(given || '').toLowerCase();
      var got = [], missed = [];
      q.must.forEach(function (m) {
        var hit = (m.any || []).some(function (k) { return text.indexOf(String(k).toLowerCase()) >= 0; });
        (hit ? got : missed).push(m.point);
      });
      var ratio = got.length / q.must.length;
      return {
        score: ratio >= 0.75 ? 1 : ratio >= 0.4 ? 0.5 : 0,
        got: got, missed: missed,
        comment: missed.length
          ? 'Checked against the points this question requires. Read the model answer for the ones you missed.'
          : 'Every point this question requires is in your answer.',
        by: 'checked against the required points'
      };
    }

    function manualMark(q, redo) {
      q._panel.className = 'mark-panel';
      q._panel.innerHTML =
        '<p class="mk-manual"><b>Mark it yourself, honestly.</b> Did your answer contain the substance of ' +
        'the model answer below?</p>' +
        '<div class="mk-buttons">' +
        '<button class="btn btn-sm" data-m="1">I had this</button>' +
        '<button class="btn btn-sm" data-m="0.5">Partly</button>' +
        '<button class="btn btn-sm" data-m="0">I missed it</button></div>';
      $$('button[data-m]', q._panel).forEach(function (b) {
        b.onclick = function () {
          selfMarks[q.id] = parseFloat(b.getAttribute('data-m'));
          q._panel.className = 'mark-panel ' + (selfMarks[q.id] >= 1 ? 'ok' : selfMarks[q.id] > 0 ? 'part' : 'no');
          q._panel.innerHTML = '<span class="verdict ' + (selfMarks[q.id] >= 1 ? 'ok' : selfMarks[q.id] > 0 ? 'part' : 'no') +
            '">' + (selfMarks[q.id] === 1 ? 'Had it' : selfMarks[q.id] === 0.5 ? 'Partly' : 'Missed it') +
            '</span><span class="mk-by">marked by you</span>';
          if (redo) Router.rerenderScore && Router.rerenderScore();
        };
      });
    }

    return { grade: grade, selfMarkPhase: markShortsPhase, answers: answers, nodes: nodes };
  }

  function scorePanel(results, title, sub, carried) {
    var total = results.reduce(function (a, r) { return a + r.score; }, 0);
    var pctv = Math.round(total / results.length * 100);
    var grade = pctv >= 90 ? 'Distinction' : pctv >= 80 ? 'Strong pass' : pctv >= PASS ? 'Pass' : pctv >= 50 ? 'Below the line' : 'Resit this';
    var note = pctv >= 90 ? 'You have this. Move on and let spaced review keep it.'
             : pctv >= 80 ? 'Solid. Read the explanations on anything you fumbled, then move on.'
             : pctv >= PASS ? 'A pass. Note the weak concepts below — they will come back in your review drills.'
             : 'Not a pass. Re-listen to the sections behind the red answers before you take the next lecture; the course will keep bringing these back.';

    /* per-concept */
    var byC = {};
    results.forEach(function (r) {
      var k = r.q.concept;
      if (!byC[k]) byC[k] = { name: r.q.conceptName || k, got: 0, n: 0 };
      byC[k].got += r.score; byC[k].n += 1;
    });
    var bars = Object.keys(byC).map(function (k) {
      var c = byC[k], p = c.got / c.n;
      var col = p >= 0.8 ? 'var(--good)' : p >= 0.5 ? 'var(--gold)' : 'var(--bad)';
      return '<div class="cbar"><span class="cname">' + esc(c.name) + '</span>' +
        '<span class="ctrack"><i style="width:' + Math.max(3, H.pct(p)) + '%;background:' + col + '"></i></span>' +
        '<span class="cpct">' + H.pct(p) + '%</span></div>';
    }).join('');

    var panel = el('div', 'score-panel');
    panel.innerHTML =
      '<div class="score-top">' +
        '<div><div class="score-big">' + pctv + '<small>%</small></div>' +
        '<div class="score-grade" style="margin-top:6px">' + grade + '</div></div>' +
        '<div class="score-note"><b>' + esc(title) + '</b><br>' + esc(sub || note) + '</div>' +
      '</div>' +
      '<div class="concept-bars"><div class="eyebrow" style="margin-bottom:4px">By concept</div>' + bars +
      (carried && carried.length
        ? '<div class="carried-note"><b>Carried forward:</b> ' +
          carried.filter(function (r) { return r.score >= 1; }).length + ' of ' + carried.length +
          ' from earlier lectures. These do not affect the pass mark, but they do move your mastery — ' +
          'and they are the questions that tell you whether anything is actually sticking.</div>'
        : '') +
      '</div>';
    return { node: panel, pct: pctv };
  }

  /* ---------------------------------------------------------
     TEST VIEW
     --------------------------------------------------------- */
  function viewTest(main, id) {
    var meta = LESSON_BY_ID(id);
    if (!meta) { V.go('#/today'); return; }
    V.crumb('Test · Lesson ' + meta.idx);
    Speaker.pause();

    var col = el('div', 'col');
    col.innerHTML = '<div class="lesson-head"><h1 class="lesson-title">Loading test…</h1></div>';
    main.appendChild(col);

    Lessons.get(id).then(function (L) {
      col.innerHTML = '';
      if (!L || !L.quiz || !L.quiz.length) {
        col.innerHTML = '<div class="lesson-head"><h1 class="lesson-title">No test yet</h1>' +
          '<p class="lesson-standfirst">This lecture has not been written.</p></div>' +
          '<div class="lesson-foot"><button class="btn btn-primary" data-go="#/today">Back to today</button></div>';
        V.wireGo(col);
        return;
      }

      var cmap = {};
      (L.concepts || []).forEach(function (c) { cmap[c.id] = c.name; });
      var qs = L.quiz.map(function (q) {
        return Object.assign({}, q, { conceptName: cmap[q.concept] || q.concept, lessonId: id });
      });

      col.innerHTML =
        '<div class="lesson-head">' +
          '<div class="kicker"><span class="tagline">Assessment</span>' +
          '<span class="pill mono">' + qs.length + ' questions</span>' +
          '<span class="pill mono">Pass ' + PASS + '%</span></div>' +
          '<h1 class="lesson-title">' + esc(meta.title) + '</h1>' +
          '<p class="lesson-standfirst">Answer from memory first. Guessing is fine — a wrong answer here is worth more ' +
          'than a right one you looked up, because it tells the course what to bring back.</p>' +
        '</div>';

      var slot = el('div');
      col.appendChild(slot);
      var qhost = el('div');
      qhost.style.marginTop = '22px';
      col.appendChild(qhost);

      var foot = el('div', 'lesson-foot');
      foot.innerHTML = '<button class="btn btn-gold" id="submitBtn">Submit answers</button>' +
        '<button class="btn" data-go="#/lesson/' + id + '">Back to the lecture</button>';
      col.appendChild(foot);
      V.wireGo(col);

      /* Knowledge that is only ever tested in the lecture that taught it stays
         glued to that lecture. Mixing earlier material into every test —
         interleaving — is the best-evidenced fix for that, so each test carries
         a few questions forward from lectures already passed. */
      var quiz;
      carryForward(meta, 3).then(function (older) {
        if (older.length) {
          var head = el('div', 'block-head');
          head.innerHTML = '<h2>From earlier lectures</h2>' +
            '<span class="hint">Mixed in on purpose — it is how knowledge stops being stuck to one lesson</span>';
          qhost.appendChild(head);
        }
        quiz = buildQuiz(qs.concat(older), qhost, qs.length);
        $('#submitBtn', foot).disabled = false;
        $('#submitBtn', foot).onclick = function () {
          $('#submitBtn', foot).disabled = true;
          quiz.selfMarkPhase(function () { finish(older.length); });
        };
      });
      $('#submitBtn', foot).disabled = true;

      function finish(carried) {
        var results = quiz.grade();
        /* the lecture's own mark is what decides a pass; carried questions
           still feed mastery, but a slip on week-one material should not fail
           week five */
        var own = results.slice(0, results.length - (carried || 0));
        var sp = scorePanel(own, meta.title, null, carried ? results.slice(own.length) : null);
        slot.appendChild(sp.node);
        sp.node.scrollIntoView({ behavior: 'smooth', block: 'start' });

        /* persist */
        var p = P().lessons[id] || (P().lessons[id] = {});
        p.testedAt = new Date().toISOString();
        p.attempts = (p.attempts || 0) + 1;
        p.best = Math.max(p.best || 0, sp.pct);
        p.last = sp.pct;
        p.listened = true;
        if (!P().scores) P().scores = [];
        P().scores.push({ id: id, idx: meta.idx, at: H.today(), pct: sp.pct });
        P().scores = P().scores.slice(-200);
        P().lastLessonId = id;
        Store.markDay();
        results.forEach(function (r) {
          H.recordConcept(r.q.concept, r.q.conceptName, r.score, r.q.id);
        });
        Store.save();
        Store.saveAttempt({
          lessonId: id, lessonIdx: meta.idx, title: meta.title,
          at: new Date().toISOString(), pct: sp.pct, kind: 'lesson',
          answers: results.map(function (r) {
            return { qid: r.q.id, concept: r.q.concept, score: r.score };
          })
        });
        V.renderRail();

        var next = C().flat[meta.idx];
        foot.innerHTML =
          (sp.pct >= PASS && next ? '<button class="btn btn-primary" data-go="#/lesson/' + next.id + '">Next lecture ' + V.ICON.arrow + '</button>' : '') +
          (sp.pct < PASS ? '<button class="btn btn-gold" data-go="#/lesson/' + id + '">Re-listen to this lecture</button>' : '') +
          '<button class="btn" id="retakeBtn">Retake the test</button>' +
          '<button class="btn" data-go="#/progress">See your progress</button>';
        V.wireGo(foot);
        $('#retakeBtn', foot).onclick = function () { V.go('#/test/' + id); };
      }
    });
  }

  /* Choose questions from earlier, already-passed lectures. Weak concepts
     first, then a spread across the course so nothing goes cold. */
  function carryForward(meta, want) {
    var earlier = C().flat.filter(function (l) { return l.idx < meta.idx && H.isDone(l.id); });
    if (!earlier.length) return Promise.resolve([]);

    var weak = {};
    H.weakConcepts().forEach(function (c) { weak[c.id] = c.ema; });

    var weeks = {};
    earlier.forEach(function (l) { weeks[l.week] = true; });
    return Promise.all(Object.keys(weeks).map(function (w) { return Lessons.load(parseInt(w, 10)); }))
      .then(function (loaded) {
        var pool = [];
        loaded.forEach(function (wk) {
          if (!wk) return;
          Object.keys(wk).forEach(function (lid) {
            var lm = LESSON_BY_ID(lid);
            if (!lm || lm.idx >= meta.idx || !H.isDone(lid)) return;
            var cmap = {};
            (wk[lid].concepts || []).forEach(function (c) { cmap[c.id] = c.name; });
            (wk[lid].quiz || []).forEach(function (q) {
              pool.push(Object.assign({}, q, {
                conceptName: cmap[q.concept] || q.concept,
                lessonId: lid,
                fromLecture: lm.idx,
                weakness: weak[q.concept] != null ? 1 - weak[q.concept] : 0.25,
                age: meta.idx - lm.idx
              }));
            });
          });
        });
        if (!pool.length) return [];
        pool.sort(function (a, b) {
          var d = (b.weakness + b.age * 0.02) - (a.weakness + a.age * 0.02);
          return d !== 0 ? d : Math.random() - 0.5;
        });
        /* no more than one per concept, so a single weak spot cannot fill the set */
        var seen = {}, out = [];
        for (var i = 0; i < pool.length && out.length < want; i++) {
          if (seen[pool[i].concept]) continue;
          seen[pool[i].concept] = true;
          out.push(pool[i]);
        }
        return out;
      }).catch(function () { return []; });
  }

  /* ---------------------------------------------------------
     REVIEW DRILL — the adaptive loop
     --------------------------------------------------------- */
  function viewReview(main) {
    V.crumb('Review drill');
    Speaker.pause();
    var col = el('div', 'col');
    col.innerHTML = '<div class="lesson-head"><h1 class="lesson-title">Building your drill…</h1>' +
      '<p class="lesson-standfirst">Pulling back the questions you missed.</p></div>';
    main.appendChild(col);

    var weak = H.weakConcepts();
    var qids = [];
    weak.forEach(function (c) { (c.missed || []).forEach(function (q) { if (qids.indexOf(q) < 0) qids.push(q); }); });

    /* qid prefix is the lesson id, e.g. w01l03q7 */
    var byLesson = {};
    qids.forEach(function (qid) {
      var m = String(qid).match(/^(w\d\dl\d\d)/);
      if (!m) return;
      (byLesson[m[1]] = byLesson[m[1]] || []).push(qid);
    });
    var lessonIds = Object.keys(byLesson);

    if (!lessonIds.length) {
      col.innerHTML = '<div class="lesson-head"><h1 class="lesson-title">Nothing to drill</h1>' +
        '<p class="lesson-standfirst">You have not missed anything yet, or everything you missed has since been fixed.</p></div>' +
        '<div class="lesson-foot"><button class="btn btn-primary" data-go="#/today">Back to today</button></div>';
      V.wireGo(col);
      return;
    }

    Promise.all(lessonIds.map(function (lid) { return Lessons.get(lid); })).then(function (list) {
      var qs = [];
      list.forEach(function (L, i) {
        if (!L) return;
        var lid = lessonIds[i];
        var cmap = {};
        (L.concepts || []).forEach(function (c) { cmap[c.id] = c.name; });
        (L.quiz || []).forEach(function (q) {
          if (byLesson[lid].indexOf(q.id) >= 0) {
            qs.push(Object.assign({}, q, { conceptName: cmap[q.concept] || q.concept, lessonId: lid }));
          }
        });
      });
      qs = qs.sort(function () { return Math.random() - 0.5; }).slice(0, 12);

      col.innerHTML = '';
      if (!qs.length) {
        col.innerHTML = '<div class="lesson-head"><h1 class="lesson-title">Nothing to drill</h1>' +
          '<p class="lesson-standfirst">Those questions are from lectures that have moved. Sit a fresh test instead.</p></div>' +
          '<div class="lesson-foot"><button class="btn btn-primary" data-go="#/today">Back to today</button></div>';
        V.wireGo(col);
        return;
      }

      col.innerHTML =
        '<div class="lesson-head">' +
          '<div class="kicker"><span class="tagline">Spaced review</span>' +
          '<span class="pill mono">' + qs.length + ' questions</span></div>' +
          '<h1 class="lesson-title">Review drill</h1>' +
          '<p class="lesson-standfirst">Every question here is one you have already missed, drawn from ' +
          lessonIds.length + ' lecture' + (lessonIds.length === 1 ? '' : 's') + '. Get one right twice and it stops coming back.</p>' +
        '</div>';

      var slot = el('div'); col.appendChild(slot);
      var qhost = el('div'); qhost.style.marginTop = '22px'; col.appendChild(qhost);
      var quiz = buildQuiz(qs, qhost);

      var foot = el('div', 'lesson-foot');
      foot.innerHTML = '<button class="btn btn-gold" id="rSubmit">Submit drill</button>' +
        '<button class="btn" data-go="#/today">Back to today</button>';
      col.appendChild(foot);
      V.wireGo(col);

      $('#rSubmit', foot).onclick = function () {
        $('#rSubmit', foot).disabled = true;
        quiz.selfMarkPhase(function () {
          var results = quiz.grade();
          var sp = scorePanel(results, 'Review drill',
            'Concepts you clear twice drop out of the queue. The rest stay, and come back further apart.');
          slot.appendChild(sp.node);
          sp.node.scrollIntoView({ behavior: 'smooth', block: 'start' });
          results.forEach(function (r) { H.recordConcept(r.q.concept, r.q.conceptName, r.score, r.q.id); });
          Store.markDay();
          Store.save();
          Store.saveAttempt({ kind: 'review', at: new Date().toISOString(), pct: sp.pct,
            answers: results.map(function (r) { return { qid: r.q.id, concept: r.q.concept, score: r.score }; }) });
          V.renderRail();
          foot.innerHTML = '<button class="btn btn-primary" data-go="#/today">Back to today</button>' +
            '<button class="btn" data-go="#/progress">Progress</button>';
          V.wireGo(foot);
        });
      };
    });
  }

  /* ---------------------------------------------------------
     PROGRESS
     --------------------------------------------------------- */
  function viewProgress(main) {
    V.crumb('Progress');
    var col = el('div', 'col col-wide');
    var done = H.countDone();
    var all = H.weakConcepts(999);
    var mastered = Object.keys(M().concepts).filter(function (k) {
      return M().concepts[k].ema >= 0.75;
    }).length;

    col.innerHTML =
      '<div class="lesson-head">' +
        '<div class="kicker"><span class="tagline">Your record</span></div>' +
        '<h1 class="lesson-title">Progress</h1>' +
        '<p class="lesson-standfirst">Eighty lectures, one row per week. A filled square is a lecture passed at ' + PASS + '% or better.</p>' +
      '</div>';

    var stats = el('div', 'stat-row');
    stats.innerHTML =
      '<div class="stat"><span class="v">' + done + '</span><span class="l">Lectures passed</span></div>' +
      '<div class="stat"><span class="v">' + (V.avgScore() == null ? '—' : V.avgScore() + '%') + '</span><span class="l">Mean score</span></div>' +
      '<div class="stat"><span class="v">' + mastered + '</span><span class="l">Concepts mastered</span></div>' +
      '<div class="stat"><span class="v">' + all.length + '</span><span class="l">Concepts shaky</span></div>' +
      '<div class="stat"><span class="v">' + H.streak() + '</span><span class="l">Weekday streak</span></div>';
    col.appendChild(stats);

    /* the semester grid */
    var gcard = el('div', 'card');
    var rows = C().weeks.map(function (w) {
      var cells = w.lessons.map(function (l) {
        var st = H.isDone(l.id) ? 'done' : (H.isHeard(l.id) ? 'heard' : 'todo');
        var fillc = st === 'done' ? 'var(--accent)' : st === 'heard' ? 'var(--gold)' : 'var(--surface-3)';
        var b = H.bestScore(l.id);
        return '<button class="grid-cell" data-go="#/lesson/' + l.id + '" title="' + esc(l.idx + '. ' + l.title) +
          (b != null ? ' — ' + b + '%' : '') + '" style="background:' + fillc + '"></button>';
      }).join('');
      return '<div class="grid-row"><span class="grid-wk mono">W' + (w.n < 10 ? '0' + w.n : w.n) + '</span>' +
        '<span class="grid-cells">' + cells + '</span>' +
        '<span class="grid-title">' + esc(w.title) + '</span></div>';
    }).join('');
    gcard.innerHTML = '<div class="eyebrow" style="margin-bottom:12px">The semester</div>' +
      '<style>' +
      '.grid-row{display:grid;grid-template-columns:34px auto 1fr;gap:12px;align-items:center;padding:3px 0}' +
      '.grid-wk{font-size:10px;color:var(--ink-3)}' +
      '.grid-cells{display:flex;gap:4px}' +
      '.grid-cell{width:20px;height:20px;border:0;border-radius:3px;cursor:pointer;padding:0}' +
      '.grid-cell:hover{outline:2px solid var(--ink-3);outline-offset:1px}' +
      '.grid-title{font-size:12px;color:var(--ink-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '@media(max-width:620px){.grid-title{display:none}}' +
      '</style>' + rows +
      '<div style="display:flex;gap:16px;margin-top:14px;font-size:11.5px;color:var(--ink-3);flex-wrap:wrap">' +
      '<span><i style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--accent);vertical-align:-1px"></i> passed</span>' +
      '<span><i style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--gold);vertical-align:-1px"></i> heard, not passed</span>' +
      '<span><i style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--surface-3);vertical-align:-1px"></i> not started</span></div>';
    col.appendChild(gcard);
    V.wireGo(gcard);

    /* score history */
    var scores = (P().scores || []).slice(-40);
    if (scores.length >= 2) {
      var sc = el('div', 'card');
      sc.innerHTML = '<div class="eyebrow" style="margin-bottom:12px">Test scores, in order taken</div>' +
        '<div class="fig"><div class="fig-frame">' + scoreChart(scores) + '</div></div>';
      col.appendChild(sc);
    }

    /* concept mastery */
    var mc = el('div', 'card');
    var allC = Object.keys(M().concepts).map(function (k) {
      return Object.assign({ id: k }, M().concepts[k]);
    }).sort(function (a, b) { return a.ema - b.ema; });

    if (!allC.length) {
      mc.innerHTML = '<div class="eyebrow" style="margin-bottom:9px">Concept mastery</div>' +
        '<div class="empty">Sit your first test and every concept you were asked about appears here.</div>';
    } else {
      mc.innerHTML = '<div class="eyebrow" style="margin-bottom:12px">Concept mastery · weakest first</div>' +
        '<div class="concept-bars" style="padding:0">' + allC.map(function (c) {
          var col2 = c.ema >= 0.8 ? 'var(--good)' : c.ema >= 0.5 ? 'var(--gold)' : 'var(--bad)';
          return '<div class="cbar"><span class="cname">' + esc(c.name || c.id) + '</span>' +
            '<span class="ctrack"><i style="width:' + Math.max(3, H.pct(c.ema)) + '%;background:' + col2 + '"></i></span>' +
            '<span class="cpct">' + H.pct(c.ema) + '%</span></div>';
        }).join('') + '</div>' +
        (all.length ? '<div style="margin-top:16px"><button class="btn btn-gold" data-go="#/review">Drill the weak ones</button></div>' : '');
    }
    col.appendChild(mc);
    V.wireGo(mc);

    col.appendChild(buildTransfer());
    main.appendChild(col);
  }

  /* ---------------------------------------------------------
     Moving progress between the offline file and the live page
     --------------------------------------------------------- */
  function buildTransfer() {
    var card = el('div', 'card');
    card.innerHTML =
      '<div class="eyebrow" style="margin-bottom:9px">Move your progress</div>' +
      '<h3>Between this copy and your other one</h3>' +
      '<p class="card-sub">The offline file and the live page each keep their own record. ' +
      'Copy the text out of one and paste it into the other to merge them — the higher score for each ' +
      'lesson wins, and nothing is lost.</p>' +
      '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-bottom:12px">' +
      '<button class="btn btn-sm" id="expBtn">Show my progress code</button>' +
      '<button class="btn btn-sm" id="impBtn">Paste one in</button></div>' +
      '<textarea class="notes-area" id="xferBox" hidden style="min-height:120px;font-family:var(--font-mono);font-size:11.5px"></textarea>' +
      '<div id="xferAct" hidden style="display:flex;gap:9px;margin-top:10px;align-items:center;flex-wrap:wrap"></div>' +
      '<p class="mono" id="xferMsg" style="font-size:11px;color:var(--ink-3);margin:10px 0 0"></p>';

    var box = $('#xferBox', card), act = $('#xferAct', card), msg = $('#xferMsg', card);

    $('#expBtn', card).onclick = function () {
      box.hidden = false; act.hidden = true;
      box.value = JSON.stringify({ v: 1, progress: Store.state.progress, mastery: Store.state.mastery, notes: NT() });
      box.readOnly = true;
      box.select();
      msg.textContent = 'Selected — copy it, then open your other copy and choose “Paste one in”.';
    };

    $('#impBtn', card).onclick = function () {
      box.hidden = false; box.readOnly = false; box.value = '';
      box.placeholder = 'Paste the progress code from your other copy here.';
      box.focus();
      act.hidden = false;
      act.innerHTML = '<button class="btn btn-sm btn-primary" id="doImp">Merge it in</button>' +
        '<span class="mono" style="font-size:11px;color:var(--ink-3)">Nothing is overwritten — the better result wins.</span>';
      msg.textContent = '';
      $('#doImp', act).onclick = function () {
        var d;
        try { d = JSON.parse(box.value); } catch (e) { msg.textContent = 'That is not a valid progress code. Copy the whole thing, including the outer braces.'; return; }
        if (!d || !d.progress) { msg.textContent = 'That code has no progress in it.'; return; }
        if (d.course && d.course !== H.ACTIVE()) {
          msg.textContent = 'That code is from the ' + esc(d.course) + ' course. Open that course first, then paste it there.';
          return;
        }
        var added = mergeState(d);
        Store.save();
        msg.textContent = 'Merged. ' + added + ' lesson result' + (added === 1 ? '' : 's') + ' and your concept mastery are now up to date here.';
        setTimeout(function () { V.go('#/progress'); }, 900);
      };
    };
    return card;
  }

  function mergeState(d) {
    var changed = 0;
    var mine = P().lessons, theirs = (d.progress && d.progress.lessons) || {};
    Object.keys(theirs).forEach(function (k) {
      var t = theirs[k], m = mine[k];
      if (!m) { mine[k] = t; changed++; return; }
      var before = m.best || 0;
      m.best = Math.max(m.best || 0, t.best || 0);
      m.attempts = Math.max(m.attempts || 0, t.attempts || 0);
      m.listened = m.listened || t.listened;
      if (t.testedAt && (!m.testedAt || t.testedAt > m.testedAt)) { m.testedAt = t.testedAt; m.last = t.last; }
      if ((m.best || 0) !== before) changed++;
    });

    var days = P().days || [];
    ((d.progress && d.progress.days) || []).forEach(function (x) { if (days.indexOf(x) < 0) days.push(x); });
    P().days = days.sort().slice(-400);

    var scores = P().scores || [];
    var seen = {};
    scores.forEach(function (s) { seen[s.id + s.at + s.pct] = 1; });
    ((d.progress && d.progress.scores) || []).forEach(function (s) {
      if (!seen[s.id + s.at + s.pct]) scores.push(s);
    });
    P().scores = scores.sort(function (a, b) { return (a.at + '').localeCompare(b.at + ''); }).slice(-200);

    /* mastery: the more recently exercised record wins, missed questions union */
    var mc = M().concepts, tc = (d.mastery && d.mastery.concepts) || {};
    Object.keys(tc).forEach(function (k) {
      var t = tc[k], m = mc[k];
      if (!m) { mc[k] = t; return; }
      var missed = (m.missed || []).slice();
      (t.missed || []).forEach(function (q) { if (missed.indexOf(q) < 0) missed.push(q); });
      var newer = (t.lastAt || '') > (m.lastAt || '') ? t : m;
      mc[k] = { name: newer.name || m.name, ema: newer.ema, seen: Math.max(m.seen || 0, t.seen || 0),
                correct: Math.max(m.correct || 0, t.correct || 0), lastAt: newer.lastAt, missed: missed };
    });

    Object.keys(d.notes || {}).forEach(function (k) {
      if (!NT()[k]) NT()[k] = d.notes[k];
      else if (d.notes[k] && d.notes[k].length > NT()[k].length) NT()[k] = d.notes[k];
    });
    return changed;
  }

  function scoreChart(scores) {
    var W = 680, Hh = 220, padL = 42, padR = 16, padT = 14, padB = 34;
    var iw = W - padL - padR, ih = Hh - padT - padB;
    var n = scores.length;
    var x = function (i) { return padL + (n === 1 ? iw / 2 : i / (n - 1) * iw); };
    var y = function (v) { return padT + (1 - v / 100) * ih; };
    var grid = [0, 25, 50, 75, 100].map(function (v) {
      return '<line class="grid-line" x1="' + padL + '" y1="' + y(v) + '" x2="' + (W - padR) + '" y2="' + y(v) + '"/>' +
        '<text class="ax-label" x="' + (padL - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + v + '</text>';
    }).join('');
    var pass = '<line x1="' + padL + '" y1="' + y(70) + '" x2="' + (W - padR) + '" y2="' + y(70) +
      '" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="4 4"/>' +
      '<text class="ax-label" x="' + (W - padR) + '" y="' + (y(70) - 6) + '" text-anchor="end" fill="var(--gold-ink)">pass</text>';
    var path = scores.map(function (s, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(s.pct).toFixed(1); }).join(' ');
    var dots = scores.map(function (s, i) {
      return '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(s.pct).toFixed(1) + '" r="4" fill="var(--series-1)" stroke="var(--surface)" stroke-width="2"><title>Lesson ' + s.idx + ': ' + s.pct + '%</title></circle>';
    }).join('');
    var last = scores[n - 1];
    return '<svg viewBox="0 0 ' + W + ' ' + Hh + '" role="img" aria-label="Test scores over time">' +
      grid + pass +
      '<path d="' + path + '" fill="none" stroke="var(--series-1)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
      dots +
      '<text class="val-label" x="' + (x(n - 1) - 8) + '" y="' + (y(last.pct) - 12) + '" text-anchor="end">' + last.pct + '%</text>' +
      '<text class="ax-label" x="' + padL + '" y="' + (Hh - 10) + '">first test</text>' +
      '<text class="ax-label" x="' + (W - padR) + '" y="' + (Hh - 10) + '" text-anchor="end">latest</text>' +
      '</svg>';
  }

  /* ---------------------------------------------------------
     ROUTER
     --------------------------------------------------------- */
  var Router = {
    _paint: function (main, rest) {
      var m;
      if ((m = rest.match(/^lesson\/(\w+)/))) V.viewLesson(main, m[1]);
      else if ((m = rest.match(/^test\/(\w+)/))) viewTest(main, m[1]);
      else if (rest.indexOf('plan') === 0) V.viewPlan(main);
      else if (rest.indexOf('toolkit') === 0) V.viewToolkit(main);
      else if (rest.indexOf('syllabus') === 0) V.viewSyllabus(main);
      else if (rest.indexOf('progress') === 0) viewProgress(main);
      else if (rest.indexOf('review') === 0) viewReview(main);
      else V.viewToday(main);
      V.renderRail();
      $$('#railNav button').forEach(function (b) {
        var want = (b.getAttribute('data-route') || '').replace('#/', '');
        b.setAttribute('aria-selected', rest.indexOf(want) === 0 ? 'true' : 'false');
      });
    },

    render: function () {
      var main = $('#view');
      if (!main) return;
      main.innerHTML = '';
      window.scrollTo(0, 0);
      Speaker.stop();
      Speaker.onEnd = null;

      var h = location.hash || '';

      if (h.indexOf('#/courses') === 0) {
        document.body.setAttribute('data-nocourse', '1');
        V.viewCourses(main);
        V.renderRail();
        return;
      }

      var m = h.match(/^#\/([A-Za-z0-9_-]+)(?:\/(.*))?$/);
      var id = m && m[1];
      if (!id || !Courses.meta(id)) {
        var last = Store.state.prefs.lastCourse;
        location.replace('#' + (last && Courses.meta(last) ? '/' + last + '/today' : '/courses'));
        return;
      }

      document.body.removeAttribute('data-nocourse');
      var rest = (m[2] || 'today');
      if (H.ACTIVE() === id && T.C) { Router._paint(main, rest); return; }

      main.innerHTML = '<div class="col"><div class="empty" style="margin-top:60px">Opening the course\u2026</div></div>';
      Courses.activate(id).then(function (c) {
        if (!c) { location.replace('#/courses'); return; }
        main.innerHTML = '';
        Router._paint(main, rest);
      });
    },
    rerender: function () { Router.render(); }
  };

  window.Router = Router;

  /* ---------------------------------------------------------
     BOOT
     --------------------------------------------------------- */
  function boot() {
    Store.loadLocal();
    Speaker.init();

    try { if (localStorage.getItem('tms.et') === '1') document.body.classList.add('et-mode'); } catch (e) {}

    /* theme toggle */
    var savedTheme = null;
    try { savedTheme = localStorage.getItem('tms.theme'); } catch (e) {}
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
    $('#themeBtn').onclick = function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var isDark = cur ? cur === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('tms.theme', next); } catch (e) {}
    };

    $('#railToggle').onclick = function () {
      document.body.setAttribute('data-rail',
        document.body.getAttribute('data-rail') === 'open' ? 'closed' : 'open');
    };
    $('#scrim').onclick = function () { document.body.setAttribute('data-rail', 'closed'); };

    $$('#railNav button').forEach(function (b) {
      b.onclick = function () { V.go(b.getAttribute('data-route')); };
    });

    /* space bar plays and pauses, when not typing */
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.key === ' ' && Speaker.units.length) { e.preventDefault(); Speaker.toggle(); }
    });

    var cs = $('#courseSwitch');
    if (cs) cs.onclick = function () { location.hash = '#/courses'; };

    window.addEventListener('hashchange', Router.render);

    T.Courses.loadManifests().then(function () {
      if ((location.hash || '').indexOf('#/courses') === 0) Router.render();
    });

    if (!location.hash || location.hash === '#' || location.hash === '#/') {
      var last = Store.state.prefs.lastCourse;
      var only = (window.COURSES || []).length === 1 ? window.COURSES[0].id : null;
      var start = (last && T.Courses.meta(last)) ? last : only;
      location.replace('#' + (start ? '/' + start + '/today' : '/courses'));
    }
    Router.render();
    Store.connect();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
