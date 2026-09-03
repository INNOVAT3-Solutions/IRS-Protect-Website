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
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ------------------------------------------------------------------------
     Config wiring — fills contact details and links from SITE_CONFIG
     ------------------------------------------------------------------------ */
  function wireConfig() {
    var portal = C.memberPortalUrl;
    $$('[data-link="login"]').forEach(function (a) {
      if (portal) { a.href = portal; a.target = '_blank'; a.rel = 'noopener'; }
    });
    $$('[data-link="company"]').forEach(function (a) {
      var u = get(C, 'company.url');
      if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; } else { a.href = 'contact.html'; }
    });
    $$('[data-config]').forEach(function (el) {
      var key = el.getAttribute('data-config'); var v = get(C, key);
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
      b.addEventListener('click', function () { if (I) I.setLang(b.getAttribute('data-lang')); });
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
    var email = get(C, 'company.email');
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
      showAlert(form, 'info', '<p>' + esc(t('no_delivery')) + '</p>' + (onContact ? '' : '<p><a href="contact.html">' + esc(t('go_contact')) + ' →</a></p>'));
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

  /* ---- Enrollment (3 steps) ---- */
  function initEnrollForm() {
    var form = document.getElementById('enroll-form'); if (!form) return;
    liveValidate(form);
    var panels = $$('.step-panel', form); var steps = $$('.steps .step', form); var cur = 0;
    var plans = C.plans || {};
    var params = new URLSearchParams(location.search); var pre = params.get('plan');
    if (pre === 'protect' || pre === 'plus') { var r = form.querySelector('input[name="plan"][value="' + pre + '"]'); if (r) r.checked = true; }

    function fmt(n) { return '$' + Number(n).toFixed(2); }
    function selectedPlan() { var r = form.querySelector('input[name="plan"]:checked'); return r ? r.value : null; }
    function syncChoice() { $$('.choice-card', form).forEach(function (c) { var i = $('input', c); c.classList.toggle('is-selected', !!(i && i.checked)); }); }
    function updateSummary() {
      var p = selectedPlan(); var f = collect(form); var plan = plans[p] || {};
      var set = function (k, v) { var el = $('[data-sum="' + k + '"]', form); if (el) el.textContent = v || '—'; };
      set('plan', plan.name || '');
      set('price', plan.price != null ? fmt(plan.price) + t('per_month') : '');
      set('total', plan.price != null ? fmt(plan.price) : '');
      set('name', [f.first_name, f.last_name].filter(Boolean).join(' '));
      set('email', f.email); set('phone', f.phone); set('zip', f.zip);
      var fs = form.querySelector('select[name="filing_status"]');
      set('fs', fs && fs.value ? fs.options[fs.selectedIndex].textContent : '');
      set('start', new Date().toLocaleDateString(I && I.lang === 'es' ? 'es-US' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }
    function updateSubmitLabel() {
      var link = get(C, 'checkout.' + selectedPlan());
      var btn = $('[data-submit]', form); if (btn && !btn.disabled) btn.textContent = t(link ? 'pay_btn' : 'request_btn');
      var sn = $('[data-secure-note]', form); if (sn) sn.hidden = !link;
    }
    function show(i) {
      cur = i;
      panels.forEach(function (p, idx) { p.hidden = idx !== i; });
      steps.forEach(function (s, idx) {
        s.classList.toggle('is-active', idx === i); s.classList.toggle('is-done', idx < i);
        if (idx === i) s.setAttribute('aria-current', 'step'); else s.removeAttribute('aria-current');
      });
      if (i === 2) updateSummary();
      updateSubmitLabel();
      if (i > 0) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var focusable = $('input:not([type=hidden]):not([type=radio]):not([type=checkbox]), select, textarea', panels[i]) || $('button', panels[i]);
        if (focusable) setTimeout(function () { focusable.focus({ preventScroll: true }); }, 350);
      }
    }
    form.addEventListener('change', function (e) { if (e.target.name === 'plan') { syncChoice(); updateSummary(); updateSubmitLabel(); } });
    $$('[data-next]', form).forEach(function (b) { b.addEventListener('click', function () { if (validateScope(panels[cur])) show(cur + 1); }); });
    $$('[data-prev]', form).forEach(function (b) { b.addEventListener('click', function () { show(cur - 1); }); });
    document.addEventListener('langchange', function () { updateSummary(); updateSubmitLabel(); });

    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideAlert(form);
      if (!validateScope(panels[cur])) return;
      var f = collect(form); var p = f.plan; var plan = plans[p] || {};
      f.plan_name = plan.name || p; f.monthly_fee = plan.price != null ? fmt(plan.price) : '';
      var fs = form.querySelector('select[name="filing_status"]');
      if (fs && fs.value) f.filing_status = fs.options[fs.selectedIndex].textContent;
      var btn = $('[data-submit]', form); setBusy(btn, true);
      var subject = 'IRS Protect enrollment: ' + f.plan_name + ' — ' + f.first_name + ' ' + f.last_name;
      var link = get(C, 'checkout.' + p);
      if (link) {
        var ref = 'IRSP-' + Date.now().toString(36).toUpperCase();
        f.reference = ref;
        var go = function () {
          window.location.href = link + (link.indexOf('?') > -1 ? '&' : '?') + 'prefilled_email=' + encodeURIComponent(f.email) + '&client_reference_id=' + encodeURIComponent(ref);
        };
        showAlert(form, 'info', '<p>' + esc(t('enroll_redirect')) + '</p>');
        if (get(C, 'forms.endpoint')) deliver('enrollment', f, null, subject).catch(function () {}).then(go); else setTimeout(go, 400);
        return;
      }
      deliver('enrollment', f, null, subject)
        .then(function (r) { setBusy(btn, false); showResult(form, r, { titleKey: 'enroll_success_t', bodyKey: 'enroll_success_b', vars: { name: f.first_name, email: f.email, plan: f.plan_name } }); })
        .catch(function () { setBusy(btn, false); showAlert(form, 'error', '<p>' + esc(t('submit_failed')) + '</p>'); });
    });

    syncChoice();
    show(0);
  }

  /* ---- Submit a notice (with file upload) ---- */
  function initNoticeForm() {
    var form = document.getElementById('notice-form'); if (!form) return;
    liveValidate(form);
    var drop = $('.file-drop', form); var input = $('input[type=file]', form); var list = $('.file-list', form);
    var files = []; var maxMb = C.maxUploadMb || 10;
    var okType = /^(image\/(jpeg|jpg|png|heic|heif|webp|gif|tiff)|application\/pdf)$/i;
    var okExt = /\.(jpe?g|png|heic|heif|webp|gif|tiff?|pdf)$/i;
    function fileErr(msg) { var w = input.closest('.field'); var e = $('.error', w); w.classList.toggle('is-invalid', !!msg); if (e) e.textContent = msg || ''; }
    function render() {
      list.innerHTML = '';
      files.forEach(function (f, i) {
        var li = document.createElement('li');
        var s = document.createElement('span'); s.textContent = f.name;
        var sm = document.createElement('small'); sm.textContent = (f.size / 1048576).toFixed(1) + ' MB'; s.appendChild(sm);
        var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Remove ' + f.name); b.textContent = '×';
        b.addEventListener('click', function () { files.splice(i, 1); render(); });
        li.appendChild(s); li.appendChild(b); list.appendChild(li);
      });
      list.hidden = !files.length;
    }
    function add(fl) {
      var err = '';
      Array.prototype.forEach.call(fl, function (f) {
        if (!(okType.test(f.type) || okExt.test(f.name))) { err = t('err_file_type'); return; }
        if (f.size > maxMb * 1048576) { err = t('err_file_size', { mb: maxMb }); return; }
        if (!files.some(function (x) { return x.name === f.name && x.size === f.size; })) files.push(f);
      });
      fileErr(err); render();
    }
    if (input) input.addEventListener('change', function () { add(input.files); input.value = ''; });
    if (drop) {
      ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('is-drag'); }); });
      ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('is-drag'); }); });
      drop.addEventListener('drop', function (e) { if (e.dataTransfer && e.dataTransfer.files) add(e.dataTransfer.files); });
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideAlert(form);
      var ok = validateScope(form);
      if (!files.length) { fileErr(t('err_file_required')); if (ok) drop.scrollIntoView({ behavior: 'smooth', block: 'center' }); ok = false; }
      if (!ok) return;
      var f = collect(form); f.files = files.map(function (x) { return x.name; }).join(', ');
      var btn = $('button[type="submit"]', form); setBusy(btn, true);
      deliver('notice', f, files, 'IRS notice submitted: ' + (f.notice_type || 'IRS notice') + ' — ' + f.first_name + ' ' + f.last_name)
        .then(function (r) { setBusy(btn, false); showResult(form, r, { titleKey: 'notice_success_t', bodyKey: 'notice_success_b', vars: { name: f.first_name, email: f.email } }); })
        .catch(function () { setBusy(btn, false); showAlert(form, 'error', '<p>' + esc(t('submit_failed')) + '</p>'); });
    });
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
    syncLangOnly();
    document.addEventListener('langchange', syncLangOnly);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
