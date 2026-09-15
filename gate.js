/* A door on the public copy of the course.
   Not a vault — the page is static, so a determined reader can get past it.
   It exists so nobody wanders in by accident, and so any progress recorded
   in a browser belongs to the person who was given the key. */
(function () {
  'use strict';
  if (!window.TMS_GATE) return;
  var KEY = 'tms.key';

  function sha256(text) {
    if (!(window.crypto && window.crypto.subtle)) return Promise.resolve(null);
    return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
      .then(function (buf) {
        return Array.prototype.map.call(new Uint8Array(buf), function (b) {
          return ('0' + b.toString(16)).slice(-2);
        }).join('');
      });
  }

  try { if (localStorage.getItem(KEY) === window.TMS_GATE) return; } catch (e) {}

  function draw() {
    var g = document.createElement('div');
    g.id = 'gate';
    g.innerHTML =
      '<div class="gate-card">' +
        '<p class="gate-eyebrow">The Marketing Semester</p>' +
        '<h1 class="gate-title">Sixteen weeks,<br>eighty lectures.</h1>' +
        '<p class="gate-sub">This copy is private. Enter the key you were given.</p>' +
        '<form class="gate-form" id="gateForm">' +
          '<input type="password" id="gateKey" autocomplete="current-password" ' +
            'placeholder="key" aria-label="Key" autocapitalize="off" autocorrect="off" spellcheck="false">' +
          '<button type="submit" class="btn btn-primary">Open</button>' +
        '</form>' +
        '<p class="gate-msg" id="gateMsg" role="status">Asked once on each device, then remembered.</p>' +
      '</div>';
    document.body.appendChild(g);
    document.documentElement.style.overflow = 'hidden';

    var form = g.querySelector('#gateForm'), input = g.querySelector('#gateKey'), msg = g.querySelector('#gateMsg');
    setTimeout(function () { input.focus(); }, 120);

    form.onsubmit = function (e) {
      e.preventDefault();
      var v = input.value.trim().toLowerCase();
      if (!v) return;
      sha256(v).then(function (h) {
        if (h === window.TMS_GATE) {
          try { localStorage.setItem(KEY, window.TMS_GATE); } catch (err) {}
          document.documentElement.style.overflow = '';
          g.classList.add('gate-out');
          setTimeout(function () { g.remove(); }, 260);
        } else {
          msg.textContent = h === null
            ? 'This browser cannot check the key. Open the page over https.'
            : 'Not that one. Check for a stray space or capital.';
          msg.className = 'gate-msg bad';
          input.select();
        }
      });
    };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', draw);
  else draw();
})();
