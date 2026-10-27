/* ==========================================================================
   IRS Protect — site behavior
   Navigation, language toggle, accordions, scroll reveal, config wiring and
   the enrollment / contact / notice forms. No dependencies.
   ========================================================================== */
(function () {
  'use strict';

  var C = window.SITE_CONFIG || {};
  var I = window.I18N;
  var t = function (k, v) { return I ? I.t(k, v) : k; };
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function get(o, p) { return String(p).split('.').reduce(function (a, k) { return a == null ? undefined : a[k]; }, o); }
  /* Internal page URL in the current language (Spanish at /, English at /en/). */
  function pageUrl(slug) { return ((I && I.lang === 'en') ? '/en/' : '/') + slug; }
  /* Conversion events for Vercel Web Analytics (no-op when it isn't loaded). */
  function track(name, data) { try { if (window.va) window.va('event', { name: name, data: data || {} }); } catch (e) { /* ignore */ } }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ------------------------------------------------------------------------
     Config wiring — fills contact details and links from SITE_CONFIG
     ------------------------------------------------------------------------ */
  function wireConfig() {
    var portal = C.memberPortalUrl;
    /* Signing in is the next step, not a side trip: same tab. */
    $$('[data-link="login"]').forEach(function (a) {
      if (portal) a.href = portal;
    });
    $$('[data-link="company"]').forEach(function (a) {
      var u = get(C, 'company.url');
      if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; } else { a.href = pageUrl('contact'); }
    });
    $$('[data-config]').forEach(function (el) {
      var key = el.getAttribute('data-config'); var v = get(C, key);
      if (key === 'company.hours' && I && I.lang === 'en' && get(C, 'company.hoursEn')) v = get(C, 'company.hoursEn');
      var wrap = el.closest('[data-config-wrap]');
      if (!v) { (wrap || el).hidden = true; return; }
      if (wrap) wrap.hidden = false;
      el.textContent = v;
      if (el.tagName === 'A') {
        if (/email$/i.test(key)) el.href = 'mailto:' + v;
        else if (/phone$/i.test(key)) el.href = 'tel:' + String(v).replace(/[^+\d]/g, '');
        else if (/url$/i.test(key)) { el.href = v; el.target = '_blank'; el.rel = 'noopener'; }
      }
    });
    $$('[data-config-any]').forEach(function (el) {
      var any = el.getAttribute('data-config-any').split(',').some(function (k) { return !!get(C, k.trim()); });
      el.hidden = !any;
    });
    $$('[data-config-show]').forEach(function (el) { el.hidden = !get(C, el.getAttribute('data-config-show')); });
    $$('[data-config-hide]').forEach(function (el) { el.hidden = !!get(C, el.getAttribute('data-config-hide')); });
    $$('[data-max-mb]').forEach(function (el) { el.textContent = C.maxUploadMb || 10; });
    $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ------------------------------------------------------------------------
     Header: scroll shadow, mobile menu, language toggle, active section
     ------------------------------------------------------------------------ */
  function initHeader() {
    var header = $('.site-header'); if (!header) return;
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

    var toggle = $('.nav-toggle'); var menu = $('#mobile-nav');
    if (toggle && menu) {
      var setOpen = function (open) {
        toggle.setAttribute('aria-expanded', String(open));
        menu.hidden = !open;
        document.body.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-label', t(open ? 'menu_close' : 'menu_open'));
      };
      toggle.addEventListener('click', function () { setOpen(menu.hidden); });
      $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { setOpen(false); toggle.focus(); } });
      document.addEventListener('click', function (e) { if (!menu.hidden && !header.contains(e.target)) setOpen(false); });
      var mq = window.matchMedia('(min-width: 901px)');
      var onMq = function (e) { if (e.matches) setOpen(false); };
      if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
    }

    $$('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        var l = b.getAttribute('data-lang');
        if (I && l !== I.lang) track('lang_switch', { to: l });
        if (I) I.setLang(l);
      });
    });

    var links = $$('.nav-links a[href^="#"]');
    if (links.length && 'IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (a) { var s = $(a.getAttribute('href')); if (s) map[s.id] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.classList.remove('is-active'); });
          map[en.target.id].classList.add('is-active');
        });
      }, { rootMargin: '-35% 0px -55% 0px' });
      Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
    }
  }

  /* ------------------------------------------------------------------------
     Accordions (FAQ, help topics)
     ------------------------------------------------------------------------ */
  function initAccordions() {
    $$('.faq-q').forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute('aria-controls')); if (!panel) return;
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        var list = btn.closest('.faq-list');
        if (list) {
          $$('.faq-q[aria-expanded="true"]', list).forEach(function (o) {
            if (o === btn) return;
            o.setAttribute('aria-expanded', 'false');
            var p = document.getElementById(o.getAttribute('aria-controls')); if (p) p.hidden = true;
          });
        }
        btn.setAttribute('aria-expanded', String(!open));
        panel.hidden = open;
      });
    });
  }

  /* ------------------------------------------------------------------------
     Scroll reveal
     ------------------------------------------------------------------------ */
  function initReveal() {
    var els = $$('[data-reveal]'); if (!els.length) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(function (e) { e.setAttribute('data-reveal', 'in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.setAttribute('data-reveal', 'in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
    setTimeout(function () {
      els.forEach(function (e) { var r = e.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) e.setAttribute('data-reveal', 'in'); });
    }, 1200);
  }

  /* ------------------------------------------------------------------------
     Language-specific blocks (e.g. the Spanish note on legal pages)
     ------------------------------------------------------------------------ */
  function syncLangOnly() {
    var l = I ? I.lang : 'en';
    $$('[data-lang-only]').forEach(function (el) { el.hidden = el.getAttribute('data-lang-only') !== l; });
  }

  /* ------------------------------------------------------------------------
     Forms: validation + delivery
     ------------------------------------------------------------------------ */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_RE = /^[+()\d\s.-]{7,20}$/;
  var ZIP_RE = /^\d{5}(-\d{4})?$/;

  function fieldWrap(input) { return input.closest('.field') || input.closest('.check-row'); }
  function setError(input, msg) {
    var w = fieldWrap(input); if (!w) return;
    var e = $('.error', w);
    if (msg) { w.classList.add('is-invalid'); if (e) e.textContent = msg; input.setAttribute('aria-invalid', 'true'); }
    else { w.classList.remove('is-invalid'); input.removeAttribute('aria-invalid'); }
  }
  function validateInput(input) {
    var v = (input.value || '').trim(); var type = input.type; var msg = '';
    if (type === 'file') return true;
    if (type === 'checkbox') { if (input.required && !input.checked) msg = t('err_agree'); }
    else if (type === 'radio') {
      var group = input.form ? input.form.querySelectorAll('input[name="' + input.name + '"]') : [input];
      if (input.required && !Array.prototype.some.call(group, function (r) { return r.checked; })) msg = t('err_plan');
    }
    else if (input.required && !v) msg = t('err_required');
    else if (v && type === 'email' && !EMAIL_RE.test(v)) msg = t('err_email');
    else if (v && type === 'tel' && (!PHONE_RE.test(v) || v.replace(/\D/g, '').length < 10)) msg = t('err_phone');
    else if (v && input.getAttribute('data-validate') === 'zip' && !ZIP_RE.test(v)) msg = t('err_zip');
    else if (v && input.getAttribute('data-validate') === 'year' && !(/^\d{4}$/.test(v) && +v >= 1900 && +v <= 2100)) msg = t('err_year');
    else if (v && type === 'date' && isNaN(new Date(v).getTime())) msg = t('err_date');
    setError(input, msg);
    return !msg;
  }
  function validateScope(scope) {
    var ok = true; var first = null;
    $$('input, select, textarea', scope).forEach(function (i) {
      if (i.type === 'file' || i.disabled || i.type === 'hidden') return;
      if (!validateInput(i)) { ok = false; if (!first) first = i; }
    });
    if (first) { var target = first.type === 'radio' ? fieldWrap(first) : first; target.scrollIntoView({ behavior: 'smooth', block: 'center' }); if (first.type !== 'radio') first.focus({ preventScroll: true }); }
    return ok;
  }
  function liveValidate(form) {
    form.addEventListener('input', function (e) { var w = fieldWrap(e.target); if (w && w.classList.contains('is-invalid')) validateInput(e.target); });
    form.addEventListener('change', function (e) { var el = e.target; if (el.type === 'checkbox' || el.type === 'radio' || el.tagName === 'SELECT') validateInput(el); });
  }
  function collect(form) {
    var o = {};
    new FormData(form).forEach(function (v, k) {
      if (typeof v !== 'string') return;
      o[k] = o[k] != null ? o[k] + ', ' + v : v;
    });
    return o;
  }

  /* Delivers a form. Order of preference:
     1. SITE_CONFIG.forms.endpoint (multipart POST, attachments included)
     2. mailto: to SITE_CONFIG.company.email (no attachments possible)
     3. none — the visitor is asked to contact the company directly */
  function deliver(kind, fields, files, subject) {
    return send(kind, fields, files, subject).then(function (r) {
      if (r.mode !== 'none') track(kind + '_submit', { delivery: r.mode, lang: I ? I.lang : 'es' });
      return r;
    });
  }
  function send(kind, fields, files, subject) {
    var endpoint = get(C, 'forms.endpoint');
    if (endpoint) {
      var fd = new FormData();
      Object.keys(fields).forEach(function (k) { fd.append(k, fields[k]); });
      fd.append('_subject', subject);
      fd.append('form_type', kind);
      fd.append('language', I ? I.lang : 'en');
      fd.append('page_url', location.href);
      fd.append('submitted_at', new Date().toISOString());
      (files || []).forEach(function (f) { fd.append('attachments', f, f.name); });
      return fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return { mode: 'endpoint' }; });
    }
    /* IRS notices contain Social Security numbers and tax data, so they are
       never sent through the visitor's email app (not encrypted end to end;
       FTC Safeguards Rule, 16 CFR 314.4(c)(3)). Without a secure endpoint the
       visitor is asked to contact the team instead. */
    var email = kind === 'notice' ? '' : get(C, 'company.email');
    if (email) {
      var body = Object.keys(fields).filter(function (k) { return fields[k]; })
        .map(function (k) { return k.replace(/_/g, ' ') + ': ' + fields[k]; }).join('\n');
      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      return Promise.resolve({ mode: 'mailto', attachments: !!(files && files.length) });
    }
    return Promise.resolve({ mode: 'none' });
  }

  function setBusy(btn, busy) {
    if (!btn) return;
    if (busy) { btn.setAttribute('data-label', btn.innerHTML); btn.innerHTML = '<span class="spinner" aria-hidden="true"></span>' + esc(t('sending')); btn.disabled = true; }
    else { btn.innerHTML = btn.getAttribute('data-label') || btn.innerHTML; btn.disabled = false; }
  }
  function showAlert(form, type, html) {
    var el = $('.form-alert', form); if (!el) return;
    el.className = 'alert alert--' + type + ' form-alert'; el.innerHTML = html; el.hidden = false;
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function hideAlert(form) { var el = $('.form-alert', form); if (el) el.hidden = true; }
  function showResult(form, result, opts) {
    if (result.mode === 'none') {
      var onContact = document.body.getAttribute('data-page') === 'contact';
      showAlert(form, 'info', '<p>' + esc(t('no_delivery')) + '</p>' + (onContact ? '' : '<p><a href="' + pageUrl('contact') + '">' + esc(t('go_contact')) + ' →</a></p>'));
      return;
    }
    var box = document.getElementById(form.getAttribute('data-success')); if (!box) return;
    form.hidden = true; box.hidden = false;
    var title = $('[data-success-title]', box); if (title) title.textContent = t(opts.titleKey);
    var body = $('[data-success-body]', box); if (body) body.textContent = t(opts.bodyKey, opts.vars);
    var note = $('[data-success-note]', box);
    if (note) {
      var msgs = [];
      if (result.mode === 'mailto') { msgs.push(t('mailto_note')); if (result.attachments) msgs.push(t('mailto_attach')); }
      note.textContent = msgs.join(' '); note.hidden = !msgs.length;
    }
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (title) { title.setAttribute('tabindex', '-1'); title.focus({ preventScroll: true }); }
  }

  /* ---- Contact form ---- */
  function initContactForm() {
    var form = document.getElementById('contact-form'); if (!form) return;
    liveValidate(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideAlert(form);
      if (!validateScope(form)) return;
      var f = collect(form); var btn = $('button[type="submit"]', form); setBusy(btn, true);
      var topicSel = form.querySelector('select[name="topic"]');
      if (topicSel && topicSel.value) f.topic = topicSel.options[topicSel.selectedIndex].textContent;
      deliver('contact', f, null, 'IRS Protect contact: ' + (f.topic || 'General') + ' — ' + f.first_name + ' ' + f.last_name)
        .then(function (r) { setBusy(btn, false); showResult(form, r, { titleKey: 'contact_success_t', bodyKey: 'contact_success_b', vars: { name: f.first_name, email: f.email } }); })
        .catch(function () { setBusy(btn, false); showAlert(form, 'error', '<p>' + esc(t('submit_failed')) + '</p>'); });
    });
  }

  /* The dashboard the notice and enrollment forms talk to: one running
     locally while developing. */
  function dashboardUrl() {
    return /^(localhost|127\.0\.0\.1)$/.test(location.hostname) ? 'http://localhost:3000' : (C.dashboardUrl || '');
  }

  /* ---- Enrollment: accept the terms, then pay on Stripe's page ----
     Step 1 shows the price, auto-renewal and cancellation terms with three
     required boxes. Continuing asks the dashboard for a Stripe Checkout page
     in the visitor's language and goes there; Stripe takes the member's
     details and payment, and the dashboard makes the member from Stripe's
     payment. Stripe sends the visitor back here with ?checkout=success or
     ?checkout=canceled. */
  var CHECKOUT_ERRORS = { rate_limited: 'err_notice_busy', checkout_unavailable: 'checkout_unavailable', origin_not_allowed: 'checkout_unavailable', unavailable: 'checkout_unavailable' };

  function initEnrollForm() {
    var form = document.getElementById('enroll-form'); if (!form) return;
    form.addEventListener('input', function started() { track('enroll_start'); form.removeEventListener('input', started); });
    liveValidate(form);
    var plan = C.plan || { name: 'IRS Protect Plus', price: 19.99 };
    var lang = function () { return I ? I.lang : 'es'; };
    var btn = $('button[type="submit"]', form);

    function fmt(n) { return '$' + Number(n).toFixed(2); }
    function updateSummary() {
      var set = function (k, v) { var el = $('[data-sum="' + k + '"]', form); if (el) el.textContent = v || '—'; };
      set('plan', plan.name);
      set('price', plan.price != null ? fmt(plan.price) + t('per_month') : '');
      set('total', plan.price != null ? fmt(plan.price) : '');
      set('start', new Date().toLocaleDateString(lang() === 'en' ? 'en-US' : 'es-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }
    /* The Checkout page's address, from the dashboard; the accepted terms go with the request. */
    function checkoutUrl() {
      var base = dashboardUrl();
      if (!base) return Promise.reject({ code: 'unavailable' });
      return fetch(base + '/api/checkout/session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang: lang(), consent: true }) })
        /* No answer at all -- offline, or a crash whose reply carried no CORS header. */
        .catch(function () { throw { code: 'network' }; })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (data) {
            if (r.ok && data.url) return data.url;
            throw { code: data.code || (r.status === 429 ? 'rate_limited' : 'failed') };
          });
        });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideAlert(form);
      if (!validateScope(form)) return;
      setBusy(btn, true);
      btn.innerHTML = '<span class="spinner" aria-hidden="true"></span>' + esc(t('enroll_redirect'));
      checkoutUrl()
        .then(function (url) { track('enroll_checkout_open', { lang: lang() }); window.location.assign(url); })
        .catch(function (err) {
          setBusy(btn, false);
          showAlert(form, 'error', '<p>' + esc(t(CHECKOUT_ERRORS[err.code] || 'checkout_failed')) + '</p>');
        });
    });
    /* Back from Stripe with the browser's Back button: the page comes back as it was left, mid-redirect. */
    window.addEventListener('pageshow', function (e) { if (e.persisted) setBusy(btn, false); });

    var back = new URLSearchParams(location.search).get('checkout');
    if (back === 'success') {
      var box = document.getElementById(form.getAttribute('data-success'));
      if (box) { form.hidden = true; box.hidden = false; }
      track('enroll_complete', { lang: lang() });
    } else if (back === 'canceled') {
      showAlert(form, 'info', '<p>' + esc(t('checkout_canceled')) + '</p>');
    }

    document.addEventListener('langchange', updateSummary);
    updateSummary();
  }

  /* ---- Submit a notice: uploaded privately, straight to the dashboard ----
     Each file goes from the browser to private Blob storage with a one-file
     token from the dashboard, then the dashboard records the notice, sends
     the receipt in the visitor's language and alerts the team. IRS notices
     carry SSNs, so there is no email fallback (FTC Safeguards Rule). */
  var NOTICE_EXT = { 'application/pdf': 'pdf', 'image/jpeg': 'jpg', 'image/png': 'png', 'image/heic': 'heic', 'image/heif': 'heif' };
  var EXT_TYPE = { pdf: 'application/pdf', jpg: 'image/jpeg', jpeg: 'image/jpeg', jfif: 'image/jpeg', png: 'image/png', heic: 'image/heic', heif: 'image/heif' };

  /* One type per file, used for the token, the upload and the record alike
     (the dashboard checks they agree). Windows reports no type for HEIC, and
     some pickers say octet-stream: the extension decides then. */
  function noticeFileType(f) {
    var type = String(f.type || '').toLowerCase();
    if (type === 'image/jpg' || type === 'image/pjpeg') type = 'image/jpeg';
    if (!type || type === 'application/octet-stream') {
      var m = /\.([a-z0-9]+)$/i.exec(f.name || '');
      type = m ? (EXT_TYPE[m[1].toLowerCase()] || '') : '';
    }
    return NOTICE_EXT[type] ? type : '';
  }
  /* submissions/<year>/<32 hex>.<ext>: the only shape the dashboard issues tokens for. */
  function noticePathname(type) {
    var bytes = new Uint8Array(16); crypto.getRandomValues(bytes);
    var hex = Array.prototype.map.call(bytes, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
    return 'submissions/' + new Date().getFullYear() + '/' + hex + '.' + NOTICE_EXT[type];
  }
  function noticeError(code) { var e = new Error(code); e.code = code; return e; }
  /* Loaded on first use, and kept out of this file's syntax so a very old
     browser still runs the rest of the site. */
  function loadBlobClient() { return (new Function('return import("/vendor/blob-client.mjs")'))(); }

  function initNoticeForm() {
    var form = document.getElementById('notice-form'); if (!form) return;
    liveValidate(form);
    var drop = $('.file-drop', form); var input = $('input[type=file]', form); var list = $('.file-list', form);
    var files = []; var maxMb = C.maxUploadMb || 25; var maxFiles = C.maxFiles || 10;
    /* Uploads already done, kept while the file list is unchanged so a retry
       after a lost answer re-sends only the notice, not the files. */
    var uploaded = null;
    function fileErr(msg) { var w = input.closest('.field'); var e = $('.error', w); w.classList.toggle('is-invalid', !!msg); if (e) e.textContent = msg || ''; }
    function size(n) { return n < 1048576 ? Math.max(1, Math.round(n / 1024)) + ' KB' : (n / 1048576).toFixed(1) + ' MB'; }
    function render() {
      list.innerHTML = '';
      files.forEach(function (item, i) {
        var li = document.createElement('li');
        var s = document.createElement('span'); s.textContent = item.file.name;
        var sm = document.createElement('small'); sm.textContent = size(item.file.size); s.appendChild(sm);
        var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', t('remove_file', { name: item.file.name })); b.textContent = '×';
        b.addEventListener('click', function () { files.splice(i, 1); uploaded = null; render(); });
        li.appendChild(s); li.appendChild(b); list.appendChild(li);
      });
      list.hidden = !files.length;
    }
    function add(fl) {
      var err = '';
      Array.prototype.forEach.call(fl, function (f) {
        var type = noticeFileType(f);
        if (!type) { err = t('err_file_type'); return; }
        if (!f.size) { err = t('err_file_empty'); return; }
        if (f.size > maxMb * 1048576) { err = t('err_file_size', { mb: maxMb }); return; }
        if (files.some(function (x) { return x.file.name === f.name && x.file.size === f.size; })) return;
        if (files.length >= maxFiles) { err = t('err_file_count', { n: maxFiles }); return; }
        files.push({ file: f, type: type });
        uploaded = null;
      });
      fileErr(err); render();
    }
    if (input) input.addEventListener('change', function () { add(input.files); input.value = ''; });
    if (drop) {
      ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('is-drag'); }); });
      ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('is-drag'); }); });
      drop.addEventListener('drop', function (e) { if (e.dataTransfer && e.dataTransfer.files) add(e.dataTransfer.files); });
    }

    function post(base, path, body) {
      return fetch(base + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        /* No answer at all -- offline, or a crash whose reply carried no CORS header. */
        .catch(function () { throw noticeError('network'); })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (data) {
            if (r.ok || r.status === 409) return { status: r.status, data: data };
            throw noticeError(data.code || (r.status === 429 ? 'rate_limited' : 'failed'));
          });
        });
    }
    function busyText(btn, text) { btn.innerHTML = '<span class="spinner" aria-hidden="true"></span>' + esc(text); }

    function deliverNotice(f, btn) {
      var base = dashboardUrl();
      if (!base) return Promise.reject(noticeError('unavailable'));
      var uploads = uploaded ? Promise.resolve(uploaded) : loadBlobClient()
        .catch(function () { throw noticeError('network'); })
        .then(function (blob) {
          var done = [];
          return files.reduce(function (p, item, i) {
            return p.then(function () {
              busyText(btn, t('uploading', { i: i + 1, n: files.length }));
              var pathname = noticePathname(item.type);
              return post(base, '/api/intake/upload', { pathname: pathname, contentType: item.type })
                .then(function (r) {
                  return blob.put(pathname, item.file, { access: 'private', token: r.data.clientToken, contentType: item.type })
                    .catch(function () { throw noticeError('network'); });
                })
                .then(function () { done.push({ pathname: pathname, name: item.file.name.slice(0, 255), contentType: item.type, sizeBytes: item.file.size }); });
            });
          }, Promise.resolve()).then(function () { return done; });
        });
      return uploads.then(function (done) {
        uploaded = done;
        busyText(btn, t('sending'));
        var body = {
          typedName: (f.first_name + ' ' + f.last_name).trim(),
          typedEmail: f.email,
          typedPhone: f.phone,
          note: f.notes || '',
          lang: I ? I.lang : 'es',
          consent: true,
          files: done
        };
        /* Optional fields go only when filled: the dashboard reads a missing key as "not given". */
        if (f.notice_type) body.notice = f.notice_type.trim();
        if (f.notice_date) body.noticeDate = f.notice_date;
        if (f.tax_year) body.taxYear = f.tax_year.trim();
        if (f.member_id) body.memberNumber = f.member_id.trim();
        return post(base, '/api/intake/submissions', body);
      }).then(function (r) { return { no: r.data.no || '', again: r.status === 409 }; });
    }
    var ERRORS = { rate_limited: 'err_notice_busy', unverified_file: 'err_notice_unverified', unsupported_file: 'err_file_type', unavailable: 'no_delivery' };

    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideAlert(form);
      var ok = validateScope(form);
      if (!files.length) { fileErr(t('err_file_required')); if (ok) drop.scrollIntoView({ behavior: 'smooth', block: 'center' }); ok = false; }
      if (!ok) return;
      var f = collect(form);
      var btn = $('button[type="submit"]', form); setBusy(btn, true);
      deliverNotice(f, btn)
        .then(function (r) {
          setBusy(btn, false);
          track('notice_submit', { delivery: 'dashboard', lang: I ? I.lang : 'es' });
          showResult(form, { mode: 'dashboard' }, { titleKey: 'notice_success_t', bodyKey: r.again ? 'notice_again_b' : 'notice_success_b', vars: { name: f.first_name, email: f.email } });
          var ref = $('[data-notice-ref]', document.getElementById(form.getAttribute('data-success')));
          if (ref && r.no) { ref.textContent = t('notice_ref', { no: r.no }); ref.hidden = false; }
        })
        .catch(function (err) {
          setBusy(btn, false);
          /* The files themselves were refused: upload them again next time. */
          if (err.code === 'unverified_file' || err.code === 'unsupported_file') uploaded = null;
          showAlert(form, 'error', '<p>' + esc(t(ERRORS[err.code] || 'submit_failed')) + '</p>');
        });
    });
  }

  /* ------------------------------------------------------------------------
     Sticky bottom CTA on phones: appears once the hero CTA scrolls away,
     hides while the final CTA card is on screen or the menu is open
     ------------------------------------------------------------------------ */
  function initStickyCta() {
    var bar = $('.sticky-cta'); if (!bar) return;
    var heroCta = $('.hero-actions'); var finalCta = $('.cta-card');
    var mq = window.matchMedia('(max-width: 900px)');
    var pastHero = !heroCta, atFinal = false;
    var sync = function () {
      bar.classList.toggle('is-visible', mq.matches && pastHero && !atFinal);
      document.body.classList.toggle('has-sticky-cta', mq.matches);
    };
    if ('IntersectionObserver' in window) {
      if (heroCta) new IntersectionObserver(function (es) { es.forEach(function (e) { pastHero = !e.isIntersecting && e.boundingClientRect.top < 0; }); sync(); }).observe(heroCta);
      if (finalCta) new IntersectionObserver(function (es) { es.forEach(function (e) { atFinal = e.isIntersecting; }); sync(); }, { threshold: 0.15 }).observe(finalCta);
    } else { pastHero = true; }
    if (mq.addEventListener) mq.addEventListener('change', sync); else if (mq.addListener) mq.addListener(sync);
    sync();
  }

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */
  function init() {
    wireConfig();
    initHeader();
    initAccordions();
    initReveal();
    initContactForm();
    initEnrollForm();
    initNoticeForm();
    initStickyCta();
    syncLangOnly();
    document.addEventListener('langchange', syncLangOnly);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
