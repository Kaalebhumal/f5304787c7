/* ============================================================
   The Marketing Semester — application
   ============================================================ */
(function () {
  'use strict';

  var C = window.CURRICULUM;
  var LESSON_BY_ID = {};
  C.flat.forEach(function (l) { LESSON_BY_ID[l.id] = l; });

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
    var s = Store.state.progress.startDate;
    if (s) { var d = new Date(s + 'T00:00:00'); if (!isNaN(d)) return rollToWeekday(d); }
    var t = rollToWeekday(new Date());        /* first open: the clock starts now */
    Store.state.progress.startDate = isoLocal(t);
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

  /* expand things that read badly aloud */
  function speakify(s) {
    return s
      .replace(/\be\.g\./gi, 'for example')
      .replace(/\bi\.e\./gi, 'that is')
      .replace(/\betc\./gi, 'et cetera')
      .replace(/\bvs\.?\b/gi, 'versus')
      .replace(/\b4Ps\b/g, 'four Ps').replace(/\b7Ps\b/g, 'seven Ps').replace(/\b4Cs\b/g, 'four Cs')
      .replace(/\bB2B\b/g, 'B-to-B').replace(/\bB2C\b/g, 'B-to-C')
      .replace(/\bCAC\b/g, 'C-A-C').replace(/\bLTV\b/g, 'L-T-V').replace(/\bSOV\b/g, 'S-O-V')
      .replace(/\bR&D\b/g, 'R and D')
      .replace(/(\d)\s*%/g, '$1 percent')
      .replace(/%/g, ' percent')
      .replace(/€\s?(\d[\d.,]*)/g, '$1 euros')
      .replace(/\$\s?(\d[\d.,]*)/g, '$1 dollars')
      .replace(/£\s?(\d[\d.,]*)/g, '$1 pounds')
      .replace(/≈/g, 'about ')
      .replace(/×/g, ' times ')
      .replace(/→/g, ' leads to ')
      .replace(/[–—]/g, ', ')
      .replace(/\s{2,}/g, ' ')
      .trim();
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

  /* ---------------------------------------------------------
     Store — db capability when present, localStorage always
     --------------------------------------------------------- */
  var LS_KEY = 'tms.v1';
  var Store = {
    db: null,
    ready: false,
    storageOk: true,
    state: {
      progress: { lessons: {}, lastLessonId: null, days: [], startedAt: null },
      mastery: { concepts: {} },
      prefs: { rate: 1, voiceURI: '', pitch: 1 },
      notes: {}
    },
    _timer: null,

    loadLocal: function () {
      try {
        var raw = localStorage.getItem(LS_KEY);
        if (raw) {
          var o = JSON.parse(raw);
          if (o && typeof o === 'object') {
            ['progress', 'mastery', 'prefs', 'notes'].forEach(function (k) {
              if (o[k]) Store.state[k] = Object.assign(Store.state[k], o[k]);
            });
          }
        }
        Store.storageOk = true;
      } catch (e) { Store.storageOk = false; }
      try { localStorage.setItem(LS_KEY + '.probe', '1'); localStorage.removeItem(LS_KEY + '.probe'); }
      catch (e) { Store.storageOk = false; }
      if (!Store.state.progress.startedAt) Store.state.progress.startedAt = today();
    },

    saveLocal: function () {
      try { localStorage.setItem(LS_KEY, JSON.stringify(Store.state)); } catch (e) {}
    },

    connect: function () {
      if (!window.claude || !window.claude.use) return;
      window.claude.use('db').then(function (db) {
        if (!db) return;
        Store.db = db;
        return Promise.all([
          db.doc('progress/state').get(),
          db.doc('mastery/state').get(),
          db.doc('prefs/state').get()
        ]).then(function (snaps) {
          var any = false;
          if (snaps[0].exists) { Store.state.progress = Object.assign(Store.state.progress, snaps[0].data()); any = true; }
          if (snaps[1].exists) { Store.state.mastery = Object.assign(Store.state.mastery, snaps[1].data()); any = true; }
          if (snaps[2].exists) { Store.state.prefs = Object.assign(Store.state.prefs, snaps[2].data()); any = true; }
          Store.ready = true;
          if (any) { Store.saveLocal(); Router.rerender(); }
          else { Store.push(); }
          var b = $('#syncNote'); if (b) b.textContent = 'Synced across your devices';
        });
      }).catch(function () { /* stay local */ });
    },

    push: function () {
      if (!Store.db) return Promise.resolve();
      var db = Store.db;
      return db.doc('progress/state').set(JSON.parse(JSON.stringify(Store.state.progress)))
        .then(function () { return db.doc('mastery/state').set(JSON.parse(JSON.stringify(Store.state.mastery))); })
        .then(function () { return db.doc('prefs/state').set(JSON.parse(JSON.stringify(Store.state.prefs))); })
        .catch(function () {});
    },

    /* coalesce a burst of changes into one write */
    save: function () {
      Store.saveLocal();
      if (Store._timer) clearTimeout(Store._timer);
      Store._timer = setTimeout(function () { Store._timer = null; Store.push(); }, 1200);
    },

    markDay: function () {
      var d = today();
      if (Store.state.progress.days.indexOf(d) < 0) {
        Store.state.progress.days.push(d);
        Store.state.progress.days = Store.state.progress.days.slice(-400);
      }
    },

    saveAttempt: function (rec) {
      if (!Store.db) return;
      try {
        Store.db.collection('attempts').add(rec).catch(function () {});
      } catch (e) {}
    },

    saveNote: function (lessonId, text) {
      Store.state.notes[lessonId] = text;
      Store.save();
      if (Store.db) {
        try { Store.db.doc('notes/' + lessonId).set({ text: text, at: new Date().toISOString() }).catch(function () {}); } catch (e) {}
      }
    }
  };

  /* progress helpers */
  function lessonState(id) { return Store.state.progress.lessons[id] || null; }
  function isDone(id) { var s = lessonState(id); return !!(s && s.testedAt && s.best >= 70); }
  function isHeard(id) { var s = lessonState(id); return !!(s && s.listened); }
  function bestScore(id) { var s = lessonState(id); return s && typeof s.best === 'number' ? s.best : null; }

  function countDone() { return C.flat.filter(function (l) { return isDone(l.id); }).length; }

  function nextLesson() {
    for (var i = 0; i < C.flat.length; i++) {
      if (!isDone(C.flat[i].id)) return C.flat[i];
    }
    return C.flat[C.flat.length - 1];
  }

  function streak() {
    var set = {};
    (Store.state.progress.days || []).forEach(function (d) { set[d] = 1; });
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
    var m = Store.state.mastery.concepts;
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
    var m = Store.state.mastery.concepts, out = [];
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
  var Lessons = {
    pending: {},
    key: function (n) { return 'w' + (n < 10 ? '0' + n : n); },
    have: function (n) { return !!window.LESSONS[Lessons.key(n)]; },
    load: function (n) {
      var k = Lessons.key(n);
      if (window.LESSONS[k]) return Promise.resolve(window.LESSONS[k]);
      if (Lessons.pending[k]) return Lessons.pending[k];
      Lessons.pending[k] = new Promise(function (resolve) {
        var s = document.createElement('script');
        s.src = 'lessons/' + k + '.js';
        s.onload = function () { resolve(window.LESSONS[k] || null); };
        s.onerror = function () { resolve(null); };
        document.head.appendChild(s);
      });
      return Lessons.pending[k];
    },
    get: function (id) {
      var meta = LESSON_BY_ID[id];
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

    pickVoice: function () {
      var want = Store.state.prefs.voiceURI;
      var v = null, i;
      for (i = 0; i < Speaker.voices.length; i++) {
        if (Speaker.voices[i].voiceURI === want) { v = Speaker.voices[i]; break; }
      }
      if (v) return v;
      var en = Speaker.voices.filter(function (x) { return /^en(-|_|$)/i.test(x.lang); });
      /* prefer the higher-quality system voices where they exist */
      var pref = ['Samantha', 'Daniel', 'Serena', 'Karen', 'Google UK English Male',
                  'Google UK English Female', 'Google US English', 'Microsoft Guy',
                  'Microsoft Aria', 'Microsoft Ryan'];
      for (i = 0; i < pref.length; i++) {
        var hit = en.filter(function (x) { return x.name.indexOf(pref[i]) === 0; })[0];
        if (hit) return hit;
      }
      return en[0] || Speaker.voices[0] || null;
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
      u.onend = function () {
        if (!Speaker.playing) return;
        Speaker.idx += 1;
        Speaker.tick();
        Speaker._utter();
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

    function addSpeech(text, anchor) {
      splitSentences(text).forEach(function (s) { units.push({ text: s, anchor: anchor }); });
    }

    blocks.forEach(function (b, bi) {
      var node = null, aid = 'b' + bi;

      switch (b.t) {
        case 'h2':
          secN += 1;
          node = el('h2', 'spk', '<span class="sec-n">Section ' + secN + '</span>' + inline(b.text));
          addSpeech(b.text, aid);
          break;

        case 'h3':
          node = el('h3', 'spk', inline(b.text));
          addSpeech(b.text, aid);
          break;

        case 'p':
          node = el('p', 'spk', inline(b.text));
          addSpeech(b.say != null ? b.say : b.text, aid);
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
          addSpeech(b.text + ' -- ' + b.who, aid);
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
            (b.ps || []).map(function (x) { return '<p style="font-family:var(--font-ui);font-size:13.5px">' + inline(x) + '</p>'; }).join(''));
          if (b.say) addSpeech(b.say, aid);
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

  window.__TMS = { Store: Store, Speaker: Speaker, Lessons: Lessons, renderBlocks: renderBlocks,
                   helpers: { $: $, $$: $$, el: el, esc: esc, inline: inline, plain: plain, clamp: clamp,
                              pct: pct, today: today, lessonState: lessonState, isDone: isDone,
                              isHeard: isHeard, bestScore: bestScore, countDone: countDone,
                              nextLesson: nextLesson, streak: streak, recordConcept: recordConcept,
                              weakConcepts: weakConcepts, LESSON_BY_ID: LESSON_BY_ID,
                              isoLocal: isoLocal, isWeekend: isWeekend,                               startDay: startDay, rollToWeekday: rollToWeekday, beforeStart: beforeStart, dateForIdx: dateForIdx, scheduledIdx: scheduledIdx,
                              DAY_NAME: DAY_NAME, fmtDate: fmtDate } };
})();

/* ============================================================
   Views and router
   ============================================================ */
(function () {
  'use strict';

  var T = window.__TMS, H = T.helpers;
  var $ = H.$, $$ = H.$$, el = H.el, esc = H.esc, inline = H.inline, clamp = H.clamp;
  var Store = T.Store, Speaker = T.Speaker, Lessons = T.Lessons;
  var C = window.CURRICULUM;
  var LESSON_BY_ID = H.LESSON_BY_ID;

  var ICON = {
    play: '<svg viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24"><path d="M7 4.5h4v15H7zM13 4.5h4v15h-4z"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 6 5 12l6 6M19 6l-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6l6 6-6 6M5 6l6 6-6 6"/></svg>',
    gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>'
  };

  /* =========================================================
     RAIL
     ========================================================= */
  function renderRail() {
    var rail = $('#syllabus');
    if (!rail) return;
    rail.innerHTML = '';
    var openWeek = null;
    var m = (location.hash || '').match(/#\/(?:lesson|test)\/(w(\d\d)l\d\d)/);
    if (m) openWeek = parseInt(m[2], 10);
    else openWeek = H.nextLesson().week;

    C.parts.forEach(function (part) {
      rail.appendChild(el('div', 'part-label', 'Part ' + part.id + ' · ' + esc(part.name)));
      part.weeks.forEach(function (wn) {
        var w = C.weeks[wn - 1];
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
    if (bar) bar.style.width = (done / C.flat.length * 100) + '%';
    var meta = $('#railMeta');
    if (meta) meta.innerHTML = '<span>' + done + ' / ' + C.flat.length + ' lessons</span><span>' + H.pct(done / C.flat.length) + '%</span>';
  }

  function go(hash) {
    if (location.hash === hash) Router.render();
    else location.hash = hash;
    document.body.setAttribute('data-rail', 'closed');
  }

  function crumb(text) { var c = $('#crumb'); if (c) c.textContent = text; }

  /* =========================================================
     TODAY
     ========================================================= */
  function viewToday(main) {
    var next = H.nextLesson();
    var done = H.countDone();
    var weak = H.weakConcepts(5);
    var hours = (C.flat.reduce(function (a, b) { return a + b.mins; }, 0) / 60);
    crumb('Today');

    var col = el('div', 'col');
    var greet = done === 0 ? 'Start here' : (done >= C.flat.length ? 'Course complete' : 'Today’s session');

    col.innerHTML =
      '<div class="lesson-head" style="border-bottom:0;padding-bottom:6px">' +
        '<div class="kicker"><span class="tagline">' + esc(greet) + '</span>' +
        '<span class="pill">One hour</span></div>' +
        '<h1 class="lesson-title">' + esc(C.title) + '</h1>' +
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
      '<div class="stat"><span class="v">' + done + '<span style="font-size:15px;color:var(--ink-3)">/' + C.flat.length + '</span></span><span class="l">Lessons passed</span></div>' +
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
    var avail = next.week <= LAST_WRITTEN_WEEK;
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

  function avgScore() {
    var xs = [];
    Object.keys(Store.state.progress.lessons).forEach(function (k) {
      var s = Store.state.progress.lessons[k];
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

    C.parts.forEach(function (part) {
      var ph = el('div', 'block-head');
      ph.innerHTML = '<h2>Part ' + part.id + ' · ' + esc(part.name) + '</h2>' +
        '<span class="hint mono">Weeks ' + part.weeks[0] + '–' + part.weeks[part.weeks.length - 1] + '</span>';
      col.appendChild(ph);

      part.weeks.forEach(function (wn) {
        var w = C.weeks[wn - 1];
        var sec = el('section', 'syl-week');
        sec.innerHTML = '<h3><span class="wn">Week ' + wn + '</span><span class="wt">' + esc(w.title) + '</span></h3>';
        var grid = el('div', 'syl-grid');
        w.lessons.forEach(function (l) {
          var b = H.bestScore(l.id);
          var st = H.isDone(l.id)
            ? '<span class="ss" style="color:var(--good)">' + b + '%</span>'
            : (wn <= LAST_WRITTEN_WEEK ? '<span class="ss" style="color:var(--ink-3)">' + l.mins + ' min</span>'
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
  var LAST_WRITTEN_WEEK = 0;   /* recalculated at boot from what loads */

  function viewLesson(main, id) {
    var meta = LESSON_BY_ID[id];
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
          'Everything up to week ' + LAST_WRITTEN_WEEK + ' is ready now.</div>' +
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
    var built = T.renderBlocks(L.blocks, meta);
    var transport = buildTransport(built.units, meta, L);
    col.appendChild(transport);

    /* --- body --- */
    col.appendChild(built.node);

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

    /* --- notes --- */
    var nh = el('div', 'block-head');
    nh.innerHTML = '<h2>Your notes</h2><span class="hint">Optional — the paper notebook is the real one</span>';
    col.appendChild(nh);
    var ta = el('textarea', 'notes-area');
    ta.id = 'notes-' + meta.id;
    ta.placeholder = 'Anything you want to keep with the lesson — a question to chase, a company it reminded you of…';
    ta.value = Store.state.notes[meta.id] || '';
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
    var prev = C.flat[meta.idx - 2], next = C.flat[meta.idx];
    foot.innerHTML =
      '<button class="btn btn-gold" data-go="#/test/' + meta.id + '">Sit the test ' + ICON.arrow + '</button>' +
      (prev ? '<button class="btn" data-go="#/lesson/' + prev.id + '">← Previous</button>' : '') +
      (next ? '<button class="btn" data-go="#/lesson/' + next.id + '">Next lecture →</button>' : '');
    col.appendChild(foot);
    wireGo(col);

    /* mark as heard once playback finishes */
    Speaker.onEnd = function () { markHeard(meta.id); };
  }

  function markHeard(id) {
    var p = Store.state.progress.lessons[id] || (Store.state.progress.lessons[id] = {});
    if (!p.listened) {
      p.listened = true;
      p.listenedAt = new Date().toISOString();
      Store.markDay();
      Store.save();
      renderRail();
    }
  }

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
        '</div>' +
      '</div>' +
      '<div class="transport-extra">' +
        '<label>Voice <select id="voiceSel"></select></label>' +
        '<label>Speed <input type="range" id="rateSel" min="0.6" max="1.6" step="0.05" value="' + (Store.state.prefs.rate || 1) + '"><span class="mono" id="rateVal" style="font-size:11px">' + (Store.state.prefs.rate || 1).toFixed(2) + '×</span></label>' +
        '<button class="btn btn-sm" id="readBtn">Read silently</button>' +
        '<span class="mono" style="font-size:10.5px;color:var(--ink-3)" id="syncNote">Saved on this device</span>' +
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

    var sel = $('#voiceSel', wrap);
    function fillVoices() {
      if (!Speaker.voices.length) { sel.innerHTML = '<option>Device default</option>'; return; }
      var en = Speaker.voices.filter(function (v) { return /^en(-|_|$)/i.test(v.lang); });
      var list = en.length ? en : Speaker.voices;
      var cur = Speaker.pickVoice();
      sel.innerHTML = list.map(function (v) {
        return '<option value="' + esc(v.voiceURI) + '"' + (cur && v.voiceURI === cur.voiceURI ? ' selected' : '') + '>' +
          esc(v.name) + ' (' + esc(v.lang) + ')</option>';
      }).join('');
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
        (nIdx ? 'lecture ' + nIdx + ', <b>' + esc(C.flat[nIdx - 1].title) + '</b>.' : 'the next lecture.') + '</span>';
    } else {
      var behind = next.idx < todayIdx;
      if (behind) strip.className = 'sched-strip behind';
      strip.innerHTML =
        '<span class="sd-date">' + H.DAY_NAME[now.getDay()] + ' ' + H.fmtDate(now) + '</span>' +
        '<span style="flex:1;min-width:220px">' +
        (behind
          ? 'The plan says lecture <b>' + todayIdx + '</b> today, but you are still on lecture <b>' + next.idx +
            '</b> — ' + (todayIdx - next.idx) + ' behind. Catch up, or move the plan so today is where you actually are.'
          : 'Today: lecture <b>' + todayIdx + '</b>, ' + esc(C.flat[todayIdx - 1].title) + '.') +
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

    C.weeks.forEach(function (w) {
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
      Store.state.progress.startDate = H.isoLocal(base);
      Store.save();
      go('#/plan');
    };
    $('#startDate', ctl).onchange = function (e) {
      if (!e.target.value) return;
      Store.state.progress.startDate = H.isoLocal(H.rollToWeekday(new Date(e.target.value + 'T00:00:00')));
      Store.save();
      go('#/plan');
    };
  }

  window.__TMS.views = { renderRail: renderRail, go: go, viewToday: viewToday,
                         viewSyllabus: viewSyllabus, viewLesson: viewLesson, viewPlan: viewPlan,
                         wireGo: wireGo, crumb: crumb, ICON: ICON, avgScore: avgScore,
                         setLastWritten: function (n) { LAST_WRITTEN_WEEK = n; },
                         getLastWritten: function () { return LAST_WRITTEN_WEEK; } };
})();

/* ============================================================
   Test engine, review drill, progress, router
   ============================================================ */
(function () {
  'use strict';

  var T = window.__TMS, H = T.helpers, V = T.views;
  var $ = H.$, $$ = H.$$, el = H.el, esc = H.esc, inline = H.inline, clamp = H.clamp;
  var Store = T.Store, Speaker = T.Speaker, Lessons = T.Lessons;
  var C = window.CURRICULUM, LESSON_BY_ID = H.LESSON_BY_ID;
  var PASS = 70;

  /* ---------------------------------------------------------
     Quiz component
     --------------------------------------------------------- */
  function buildQuiz(questions, host) {
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

      box.innerHTML =
        '<div class="q-head"><span class="q-n">Q' + (i + 1) + '</span>' +
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

    /* short answers get self-marked before the rest is graded */
    function selfMarkPhase(onDone) {
      var shorts = questions.filter(function (q) { return q.type === 'short'; });
      if (!shorts.length) { onDone(); return; }
      var pending = shorts.length;
      shorts.forEach(function (q) {
        var box = nodes[q.id];
        var ta = $('#' + q.id + '-in', box);
        ta.disabled = true;
        var panel = el('div', 'explain');
        panel.innerHTML = '<p><b>A good answer says:</b> ' + inline(q.answer) + '</p>' +
          '<p style="margin-top:10px"><b>Mark yourself honestly.</b> Did your answer contain the substance above?</p>' +
          '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">' +
          '<button class="btn btn-sm" data-m="1">I had this</button>' +
          '<button class="btn btn-sm" data-m="0.5">Partly</button>' +
          '<button class="btn btn-sm" data-m="0">I missed it</button></div>';
        box.insertBefore(panel, $('.explain', box));
        $$('button[data-m]', panel).forEach(function (b) {
          b.onclick = function () {
            selfMarks[q.id] = parseFloat(b.getAttribute('data-m'));
            panel.innerHTML = '<p>Marked: <b>' + (selfMarks[q.id] === 1 ? 'had it' : selfMarks[q.id] === 0.5 ? 'partly' : 'missed it') + '</b></p>';
            pending -= 1;
            if (pending === 0) onDone();
          };
        });
      });
      shorts[0] && nodes[shorts[0].id].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return { grade: grade, selfMarkPhase: selfMarkPhase, answers: answers, nodes: nodes };
  }

  function scorePanel(results, title, sub) {
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
      '<div class="concept-bars"><div class="eyebrow" style="margin-bottom:4px">By concept</div>' + bars + '</div>';
    return { node: panel, pct: pctv };
  }

  /* ---------------------------------------------------------
     TEST VIEW
     --------------------------------------------------------- */
  function viewTest(main, id) {
    var meta = LESSON_BY_ID[id];
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

      var quiz = buildQuiz(qs, qhost);

      var foot = el('div', 'lesson-foot');
      foot.innerHTML = '<button class="btn btn-gold" id="submitBtn">Submit answers</button>' +
        '<button class="btn" data-go="#/lesson/' + id + '">Back to the lecture</button>';
      col.appendChild(foot);
      V.wireGo(col);

      $('#submitBtn', foot).onclick = function () {
        $('#submitBtn', foot).disabled = true;
        quiz.selfMarkPhase(function () { finish(); });
      };

      function finish() {
        var results = quiz.grade();
        var sp = scorePanel(results, meta.title, null);
        slot.appendChild(sp.node);
        sp.node.scrollIntoView({ behavior: 'smooth', block: 'start' });

        /* persist */
        var p = Store.state.progress.lessons[id] || (Store.state.progress.lessons[id] = {});
        p.testedAt = new Date().toISOString();
        p.attempts = (p.attempts || 0) + 1;
        p.best = Math.max(p.best || 0, sp.pct);
        p.last = sp.pct;
        p.listened = true;
        if (!Store.state.progress.scores) Store.state.progress.scores = [];
        Store.state.progress.scores.push({ id: id, idx: meta.idx, at: H.today(), pct: sp.pct });
        Store.state.progress.scores = Store.state.progress.scores.slice(-200);
        Store.state.progress.lastLessonId = id;
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

        var next = C.flat[meta.idx];
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
    var mastered = Object.keys(Store.state.mastery.concepts).filter(function (k) {
      return Store.state.mastery.concepts[k].ema >= 0.75;
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
    var rows = C.weeks.map(function (w) {
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
    var scores = (Store.state.progress.scores || []).slice(-40);
    if (scores.length >= 2) {
      var sc = el('div', 'card');
      sc.innerHTML = '<div class="eyebrow" style="margin-bottom:12px">Test scores, in order taken</div>' +
        '<div class="fig"><div class="fig-frame">' + scoreChart(scores) + '</div></div>';
      col.appendChild(sc);
    }

    /* concept mastery */
    var mc = el('div', 'card');
    var allC = Object.keys(Store.state.mastery.concepts).map(function (k) {
      return Object.assign({ id: k }, Store.state.mastery.concepts[k]);
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
      box.value = JSON.stringify({ v: 1, progress: Store.state.progress, mastery: Store.state.mastery, notes: Store.state.notes });
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
    var mine = Store.state.progress.lessons, theirs = (d.progress && d.progress.lessons) || {};
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

    var days = Store.state.progress.days || [];
    ((d.progress && d.progress.days) || []).forEach(function (x) { if (days.indexOf(x) < 0) days.push(x); });
    Store.state.progress.days = days.sort().slice(-400);

    var scores = Store.state.progress.scores || [];
    var seen = {};
    scores.forEach(function (s) { seen[s.id + s.at + s.pct] = 1; });
    ((d.progress && d.progress.scores) || []).forEach(function (s) {
      if (!seen[s.id + s.at + s.pct]) scores.push(s);
    });
    Store.state.progress.scores = scores.sort(function (a, b) { return (a.at + '').localeCompare(b.at + ''); }).slice(-200);

    /* mastery: the more recently exercised record wins, missed questions union */
    var mc = Store.state.mastery.concepts, tc = (d.mastery && d.mastery.concepts) || {};
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
      if (!Store.state.notes[k]) Store.state.notes[k] = d.notes[k];
      else if (d.notes[k] && d.notes[k].length > Store.state.notes[k].length) Store.state.notes[k] = d.notes[k];
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
    render: function () {
      var main = $('#view');
      if (!main) return;
      main.innerHTML = '';
      window.scrollTo(0, 0);
      Speaker.stop();
      Speaker.onEnd = null;

      var h = location.hash || '#/today';
      var m;
      if ((m = h.match(/^#\/lesson\/(\w+)/))) V.viewLesson(main, m[1]);
      else if ((m = h.match(/^#\/test\/(\w+)/))) viewTest(main, m[1]);
      else if (h.indexOf('#/plan') === 0) V.viewPlan(main);
      else if (h.indexOf('#/syllabus') === 0) V.viewSyllabus(main);
      else if (h.indexOf('#/progress') === 0) viewProgress(main);
      else if (h.indexOf('#/review') === 0) viewReview(main);
      else V.viewToday(main);

      V.renderRail();
      $$('#railNav button').forEach(function (b) {
        b.setAttribute('aria-selected', h.indexOf(b.getAttribute('data-route')) === 0 ? 'true' : 'false');
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

    var wks = window.LESSON_MANIFEST || [];
    V.setLastWritten(wks.length ? Math.max.apply(null, wks) : 0);

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

    window.addEventListener('hashchange', Router.render);
    Router.render();
    Store.connect();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
