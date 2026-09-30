/* ==========================================================================
   IRS Protect Plus — site build
   The Spanish pages at the site root are the source. This script:
     1. converts images to WebP and makes the social share images
     2. writes the SEO head (canonical, hreflang, Open Graph, JSON-LD,
        analytics) into every Spanish page, and fills in business details
     3. generates the English pages under /en/ from js/i18n.js
     4. writes sitemap.xml, robots.txt and the IndexNow key file
   It is safe to run repeatedly. Run from this folder:
     npm install && npm run build
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import sharp from 'sharp';

/* The site's public address. Change this one line if the domain changes. */
const SITE = 'https://irsprotect.us';

/* IndexNow key (Bing, Copilot, Yandex). Served at /<key>.txt. */
const INDEXNOW_KEY = 'b7e4c1f09a2d4e6f8c3b5a7d9e1f2a4c';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (...p) => path.join(ROOT, ...p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const write = (p, s) => { fs.mkdirSync(path.dirname(rel(p)), { recursive: true }); fs.writeFileSync(rel(p), s); };

/* Every page. `key` matches the title_<key> and desc_<key> entries in js/i18n.js. */
const PAGES = [
  { file: 'index.html', slug: '', key: 'index', priority: '1.0' },
  { file: 'enroll.html', slug: 'enroll', key: 'enroll', priority: '0.9' },
  { file: 'help.html', slug: 'help', key: 'help', priority: '0.7' },
  { file: 'contact.html', slug: 'contact', key: 'contact', priority: '0.6' },
  { file: 'submit-notice.html', slug: 'submit-notice', key: 'notice', priority: '0.6' },
  { file: 'membership-agreement.html', slug: 'membership-agreement', key: 'agreement', priority: '0.4' },
  { file: 'terms.html', slug: 'terms', key: 'terms', priority: '0.2' },
  { file: 'privacy.html', slug: 'privacy', key: 'privacy', priority: '0.2' },
  { file: 'login.html', slug: 'login', key: 'login', noindex: true },
  { file: '404.html', slug: '404', key: '404', noindex: true, notFound: true }
];

const pageUrl = (lang, slug) => lang === 'en'
  ? SITE + '/en' + (slug ? '/' + slug : '')
  : SITE + '/' + slug;

/* Strings in the markup that have no i18n key. */
const EN_ATTRS = {
  'IRS Protect Plus por Best Vision Accounting — inicio': 'IRS Protect Plus by Best Vision Accounting — home',
  'IRS Protect Plus — inicio': 'IRS Protect Plus — home',
  'Principal': 'Main',
  'Menú': 'Menu',
  'Documentos legales': 'Legal documents',
  'Pasos de inscripción': 'Enrollment steps'
};

/* ---- Site config (business details) ---------------------------------- */
function loadConfig() {
  const w = {};
  new Function('window', read('js/config.js'))(w);
  return w.SITE_CONFIG;
}
const CONFIG = loadConfig();
const CO = CONFIG.company;

/* ---- 1. Images --------------------------------------------------------- */
async function buildImages() {
  const sources = [
    ...fs.readdirSync(rel('assets/opt')).filter((f) => /\.png$/.test(f)).map((f) => 'assets/opt/' + f),
    ...fs.readdirSync(rel('assets')).filter((f) => /\.jpg$/.test(f)).map((f) => 'assets/' + f)
  ];
  for (const src of sources) {
    const out = src.replace(/\.(png|jpg)$/, '.webp');
    if (fs.existsSync(rel(out)) && fs.statSync(rel(out)).mtimeMs >= fs.statSync(rel(src)).mtimeMs) continue;
    await sharp(rel(src)).webp({ quality: 80, alphaQuality: 90 }).toFile(rel(out));
  }
  const og = {
    es: { h: 'Protección ante el IRS por $19.99 al mes', s: ['Hasta $10,000 en representación', 'profesional · Best Vision Accounting'] },
    en: { h: 'IRS notice &amp; audit protection for $19.99 a month', s: ['Up to $10,000 in professional', 'representation · Best Vision Accounting'] }
  };
  fs.mkdirSync(rel('assets/og'), { recursive: true });
  for (const [lang, t] of Object.entries(og)) {
    const out = `assets/og/irs-protect-plus-${lang}.jpg`;
    if (fs.existsSync(rel(out))) continue;
    const hero = await sharp(rel('assets/opt/woman-holding-resolved-irs-notice.png')).resize({ height: 600 })
      .extract({ left: 150, top: 0, width: 560, height: 600 }).png().toBuffer();
    const logo = await sharp(rel('assets/opt/irs-protect-plus-plan-logo.png')).resize({ height: 96 }).png().toBuffer();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10193F"/><stop offset="1" stop-color="#2648B5"/></linearGradient></defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <text x="64" y="214" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#AFC0F5">IRS Protect Plus</text>
      ${t.s.map((l, i) => `<text x="64" y="${520 + i * 34}" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#DCE4FB">${l}</text>`).join('')}
    </svg>`;
    const base = await sharp(Buffer.from(svg)).png().toBuffer();
    // Headline wrapped onto lines of about 20 characters.
    const words = t.h.split(' '); const lines = []; let line = '';
    for (const w of words) { if ((line + ' ' + w).trim().length > 17) { lines.push(line.trim()); line = w; } else line += ' ' + w; }
    lines.push(line.trim());
    const head = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">${lines.map((l, i) =>
      `<text x="64" y="${290 + i * 62}" font-family="Helvetica, Arial, sans-serif" font-size="54" font-weight="800" fill="#FFFFFF">${l}</text>`).join('')}</svg>`;
    await sharp(base)
      .composite([
        { input: Buffer.from(head), top: 0, left: 0 },
        { input: logo, top: 64, left: 64 },
        { input: hero, top: 30, left: 640 }
      ])
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(rel(out));
  }
}

/* CSS background images point at the WebP versions. */
function rewriteCss() {
  const css = read('css/site.css');
  write('css/site.css', css.replace(/url\('\.\.\/(assets\/[^')]+)\.(png|jpg)'\)/g, (m, p) =>
    fs.existsSync(rel(p + '.webp')) ? `url('../${p}.webp')` : m));
}

/* Cache-busting version from the css/js contents. */
function assetVersion() {
  const h = crypto.createHash('sha1');
  for (const f of ['css/site.css', 'js/config.js', 'js/i18n.js', 'js/site.js']) h.update(read(f));
  return h.digest('hex').slice(0, 10);
}

/* ---- Helpers for the DOM passes --------------------------------------- */
const isInternal = (u) => u && !/^([a-z]+:|\/\/|#|mailto:|tel:|data:)/i.test(u);
const PAGE_SLUGS = new Map(PAGES.map((p) => [p.file, p.slug]));

/* Root-absolute, extension-less links: "enroll.html#x" -> "/enroll#x". */
function cleanHref(u) {
  if (!isInternal(u)) return u;
  let [p, hash] = u.split('#');
  p = p.replace(/^\.?\//, '');
  if (PAGE_SLUGS.has(p)) p = PAGE_SLUGS.get(p);
  else if (/\.html$/.test(p)) p = p.replace(/\.html$/, '');
  return '/' + p + (hash ? '#' + hash : '');
}
function cleanAsset(u, toWebp = true) {
  if (!isInternal(u)) return u;
  let p = '/' + u.replace(/^\.?\//, '');
  if (!toWebp) return p;
  const webp = p.replace(/\.(png|jpg)$/, '.webp');
  if (/^\/assets\/(opt\/)?[^/]+\.(png|jpg)$/.test(p) && fs.existsSync(rel(webp.slice(1)))) p = webp;
  return p;
}

function el(doc, tag, attrs, text) {
  const e = doc.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (text != null) e.textContent = text;
  e.setAttribute('data-seo', '');
  return e;
}

/* ---- JSON-LD ---------------------------------------------------------- */
const ORG_ID = SITE + '/#organization';
const SITE_ID = SITE + '/#website';
const SERVICE_ID = SITE + '/#service';

function organization() {
  const org = {
    '@type': 'AccountingService',
    '@id': ORG_ID,
    name: CO.legalName,
    alternateName: CO.name,
    logo: SITE + '/assets/opt/best-vision-accounting-logo.png',
    image: SITE + '/assets/opt/best-vision-accounting-team.png',
    knowsLanguage: ['es', 'en'],
    areaServed: { '@type': 'Country', name: 'United States' }
  };
  if (CO.url) org.url = CO.url;
  const sameAs = [CO.url, ...(CO.social || [])].filter(Boolean);
  if (sameAs.length) org.sameAs = sameAs;
  if (CO.fax) org.faxNumber = '+1-' + CO.fax.replace(/\D/g, '').replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
  if (CO.openingHours && CO.openingHours.length) {
    const DAY = { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' };
    org.openingHoursSpecification = CO.openingHours.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days.map((d) => 'https://schema.org/' + DAY[d]), opens: h.opens, closes: h.closes }));
  }
  if (CO.phone) org.telephone = '+1-' + CO.phone.replace(/\D/g, '').replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
  if (CO.email) org.email = CO.email;
  if (CO.streetAddress) {
    org.address = { '@type': 'PostalAddress', streetAddress: CO.streetAddress, addressLocality: CO.city, addressRegion: CO.region, postalCode: CO.postalCode, addressCountry: 'US' };
  }
  return org;
}

function service(lang, dict) {
  return {
    '@type': 'Service',
    '@id': SERVICE_ID,
    name: 'IRS Protect Plus',
    serviceType: lang === 'en' ? 'IRS representation membership' : 'Membresía de representación ante el IRS',
    description: dict.hero_sub,
    provider: { '@id': ORG_ID },
    brand: { '@type': 'Brand', name: 'IRS Protect Plus' },
    areaServed: { '@type': 'Country', name: 'United States' },
    availableLanguage: ['es', 'en'],
    offers: {
      '@type': 'Offer',
      url: pageUrl(lang, 'enroll'),
      price: String(CONFIG.plan.price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: String(CONFIG.plan.price),
        priceCurrency: 'USD',
        unitCode: 'MON',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' }
      }
    }
  };
}

function faqPage(doc, url) {
  const items = [...doc.querySelectorAll('.faq-list .faq-item')].map((it) => {
    const q = it.querySelector('.faq-q span:not(.faq-icon)');
    const a = it.querySelector('.faq-a');
    return q && a ? { '@type': 'Question', name: q.textContent.trim(), acceptedAnswer: { '@type': 'Answer', text: a.textContent.trim().replace(/\s+/g, ' ') } } : null;
  }).filter(Boolean);
  return items.length ? { '@type': 'FAQPage', '@id': url + '#faq', mainEntity: items } : null;
}

function jsonLd(doc, page, lang, dict) {
  const url = pageUrl(lang, page.slug);
  const graph = [];
  const full = page.slug === '' || page.slug === 'contact';
  graph.push(full ? organization() : { '@type': 'AccountingService', '@id': ORG_ID, name: CO.legalName });
  graph.push({ '@type': 'WebSite', '@id': SITE_ID, url: SITE + '/', name: 'IRS Protect Plus', inLanguage: ['es', 'en'], publisher: { '@id': ORG_ID } });
  if (page.slug === '' || page.slug === 'enroll') graph.push(service(lang, dict));
  graph.push({
    '@type': page.slug === 'contact' ? 'ContactPage' : 'WebPage',
    '@id': url + '#webpage',
    url,
    name: dict['title_' + page.key],
    description: dict['desc_' + page.key],
    inLanguage: lang === 'en' ? 'en-US' : 'es-US',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': SERVICE_ID },
    publisher: { '@id': ORG_ID }
  });
  const faq = faqPage(doc, url);
  if (faq) graph.push(faq);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

/* ---- Head --------------------------------------------------------------- */
/* Head metadata for one of the core pages. */
function pageMeta(doc, page, lang, dict) {
  return {
    lang,
    url: pageUrl(lang, page.slug),
    alt: page.notFound ? null : { es: pageUrl('es', page.slug), en: pageUrl('en', page.slug) },
    title: dict['title_' + page.key],
    desc: dict['desc_' + page.key],
    descKey: 'desc_' + page.key,
    noindex: page.noindex,
    ldJson: page.notFound ? null : jsonLd(doc, page, lang, dict),
    preloadHero: page.slug === '',
    ogType: 'website'
  };
}

function writeHead(doc, m, version) {
  const head = doc.head;
  head.querySelectorAll('[data-seo]').forEach((n) => n.remove());
  head.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="robots"], link[rel="canonical"], link[rel="alternate"]').forEach((n) => n.remove());

  const desc = head.querySelector('meta[name="description"]');
  if (m.descKey) desc.setAttribute('data-i18n-attr', 'content:' + m.descKey); else desc.removeAttribute('data-i18n-attr');
  desc.setAttribute('content', m.desc);
  const title = head.querySelector('title');
  if (!m.descKey) title.removeAttribute('data-i18n');
  title.textContent = m.title;

  const anchor = desc.nextSibling;
  const add = (n) => { head.insertBefore(doc.createTextNode('\n'), anchor); head.insertBefore(n, anchor); };
  const { lang, url } = m;

  if (m.noindex) add(el(doc, 'meta', { name: 'robots', content: 'noindex, follow' }));
  if (m.alt) {
    add(el(doc, 'link', { rel: 'canonical', href: url }));
    add(el(doc, 'link', { rel: 'alternate', hreflang: 'es', href: m.alt.es }));
    add(el(doc, 'link', { rel: 'alternate', hreflang: 'en', href: m.alt.en }));
    add(el(doc, 'link', { rel: 'alternate', hreflang: 'x-default', href: m.alt.es }));
  }
  const ogImg = `${SITE}/assets/og/irs-protect-plus-${lang}.jpg`;
  const og = {
    'og:type': m.ogType, 'og:site_name': 'IRS Protect Plus', 'og:title': m.title,
    'og:description': m.desc, 'og:url': url, 'og:image': ogImg,
    'og:image:width': '1200', 'og:image:height': '630', 'og:image:alt': 'IRS Protect Plus',
    'og:locale': lang === 'en' ? 'en_US' : 'es_US', 'og:locale:alternate': lang === 'en' ? 'es_US' : 'en_US'
  };
  for (const [k, v] of Object.entries(og)) add(el(doc, 'meta', { property: k, content: v }));
  add(el(doc, 'meta', { name: 'twitter:card', content: 'summary_large_image' }));
  add(el(doc, 'meta', { name: 'twitter:image', content: ogImg }));

  /* Fonts are self-hosted (css/site.css); drop the Google Fonts tags. */
  head.querySelectorAll('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]').forEach((n) => n.remove());
  add(el(doc, 'link', { rel: 'preload', as: 'font', type: 'font/woff2', href: '/assets/fonts/manrope-latin.woff2', crossorigin: '' }));
  if (m.preloadHero) {
    add(el(doc, 'link', { rel: 'preload', as: 'image', href: '/assets/opt/woman-holding-resolved-irs-notice.webp', fetchpriority: 'high', type: 'image/webp' }));
  }
  if (m.ldJson) add(el(doc, 'script', { type: 'application/ld+json' }, m.ldJson));

  /* Vercel Web Analytics + Speed Insights (enable both in the Vercel dashboard). */
  add(el(doc, 'script', {}, 'window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};window.si=window.si||function(){(window.siq=window.siq||[]).push(arguments)};'));
  add(el(doc, 'script', { defer: '', src: '/_vercel/insights/script.js' }));
  add(el(doc, 'script', { defer: '', src: '/_vercel/speed-insights/script.js' }));

  head.querySelectorAll('link[href], script[src]').forEach((n) => {
    const a = n.hasAttribute('href') ? 'href' : 'src';
    let v = n.getAttribute(a);
    if (!isInternal(v) || v.startsWith('/_vercel/')) return;
    v = cleanAsset(v.split('?')[0], false) + (/\.(css|js)$/.test(v.split('?')[0]) ? '?v=' + version : '');
    n.setAttribute(a, v);
  });
}

/* ---- Body --------------------------------------------------------------- */
function writeBody(doc, page) {
  doc.querySelectorAll('a[href]').forEach((a) => a.setAttribute('href', cleanHref(a.getAttribute('href'))));
  doc.querySelectorAll('img[src]').forEach((i) => i.setAttribute('src', cleanAsset(i.getAttribute('src'))));

  /* Business details in the HTML itself so crawlers see them without JS. */
  doc.querySelectorAll('[data-config]').forEach((n) => {
    const key = n.getAttribute('data-config');
    const v = key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), CONFIG);
    if (!v) return;
    n.textContent = v;
    if (n.tagName === 'A') {
      if (/email$/.test(key)) n.setAttribute('href', 'mailto:' + v);
      if (/phone$/.test(key)) n.setAttribute('href', 'tel:+1' + String(v).replace(/\D/g, ''));
    }
  });

  /* Footer: link to the IRS notice guides. */
  doc.querySelectorAll('.foot-col [data-seo]').forEach((n) => n.remove());
  const helpLink = doc.querySelector('.foot-col a[href="/help"]');
  if (helpLink) helpLink.after(el(doc, 'a', { href: GUIDES_HUB_ES, 'data-i18n': 'guides_link' }, 'Guías de avisos del IRS'));

  /* Footer: not-affiliated statement and business name, address, phone. */
  const bottom = doc.querySelector('.footer-bottom');
  if (bottom) {
    bottom.querySelectorAll('[data-seo]').forEach((n) => n.remove());
    const meta = bottom.querySelector('.footer-meta');
    bottom.insertBefore(el(doc, 'p', { class: 'footer-legal', 'data-i18n': 'not_affiliated' }, 'IRS Protect Plus no está afiliado con el IRS ni con el gobierno de EE. UU.'), meta);
    if (CO.address || CO.phone) {
      const nap = el(doc, 'address', { class: 'footer-nap' });
      nap.append(CO.legalName);
      if (CO.address) nap.append(' · ' + CO.address);
      if (CO.phone) {
        nap.append(' · ');
        const tel = doc.createElement('a'); tel.href = 'tel:+1' + CO.phone.replace(/\D/g, ''); tel.textContent = CO.phone;
        nap.append(tel);
      }
      bottom.insertBefore(nap, meta);
    }
  }
}

/* ---- English pass ------------------------------------------------------- */
function toEnglish(html, page, i18nSrc, version) {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: pageUrl('en', page.slug) });
  const { window } = dom; const doc = window.document;
  doc.documentElement.setAttribute('lang', 'en');
  window.SITE_CONFIG = CONFIG;
  window.eval(i18nSrc);
  window.I18N.apply();
  doc.documentElement.classList.remove('js');
  if (!doc.documentElement.getAttribute('class')) doc.documentElement.removeAttribute('class');

  /* Text set by scripts at runtime (button labels, success messages) has no
     data-i18n key; translate it when it matches a Spanish dictionary entry. */
  const { es, en } = window.I18N.dict;
  const esToEn = new Map(Object.keys(es).filter((k) => typeof es[k] === 'string' && typeof en[k] === 'string').map((k) => [es[k], en[k]]));
  doc.querySelectorAll('body *:not([data-i18n])').forEach((n) => {
    if (n.children.length) return;
    const t = n.textContent.trim();
    if (esToEn.has(t)) n.textContent = esToEn.get(t);
  });
  if (CO.hoursEn) doc.querySelectorAll('[data-config="company.hours"]').forEach((n) => { n.textContent = CO.hoursEn; });
  doc.querySelectorAll('[data-lang-only="es"]').forEach((n) => n.remove());
  doc.querySelectorAll('[data-lang-only="en"]').forEach((n) => n.removeAttribute('hidden'));
  doc.querySelectorAll('[aria-label], [alt], [title], [placeholder]').forEach((n) => {
    for (const a of ['aria-label', 'alt', 'title', 'placeholder']) {
      const v = n.getAttribute(a); if (v && EN_ATTRS[v]) n.setAttribute(a, EN_ATTRS[v]);
    }
  });
  doc.querySelectorAll('a[href^="/"]').forEach((a) => {
    const h = a.getAttribute('href');
    if (/^\/(assets|css|js|en)(\/|$)|^\/favicon/.test(h)) return;
    const g = GUIDE_EN_PATH.get(h.split('#')[0]);
    if (g) { a.setAttribute('href', g + (h.includes('#') ? '#' + h.split('#')[1] : '')); return; }
    a.setAttribute('href', h === '/' ? '/en' : h.startsWith('/#') ? '/en' + h.slice(1) : '/en' + h);
  });
  writeHead(doc, pageMeta(doc, page, 'en', window.I18N.dict.en), version);
  return tidy(dom.serialize());
}
/* Remove the empty lines left in <head> where old tags were replaced. */
function tidy(html) {
  const i = html.indexOf('</head>');
  return html.slice(0, i).replace(/\n\s*\n+/g, '\n') + html.slice(i);
}

/* ---- Sitemap, robots, IndexNow ----------------------------------------- */
function writeCrawlerFiles() {
  const today = new Date().toISOString().slice(0, 10);
  const entry = (loc, es, en, lastmod, priority) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${es}"/>
  </url>`;
  const urls = PAGES.filter((p) => !p.noindex).flatMap((p) => ['es', 'en'].map((lang) =>
    entry(pageUrl(lang, p.slug), pageUrl('es', p.slug), pageUrl('en', p.slug), today, p.priority)));
  for (const g of GUIDES.filter((x) => x.es.reviewed && x.en.reviewed)) {
    for (const lang of ['es', 'en']) {
      urls.push(entry(SITE + g[lang].path, SITE + g.es.path, SITE + g.en.path, g[lang].updated, g.es.hub ? '0.8' : '0.7'));
    }
  }
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`);
  write('robots.txt', `# IRS Protect Plus
User-agent: *
Allow: /
Disallow: /design-source/

# AI search and answer engines are welcome to read and cite this site.
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: Bingbot
Allow: /
Disallow: /design-source/

Sitemap: ${SITE}/sitemap.xml
`);
  write(INDEXNOW_KEY + '.txt', INDEXNOW_KEY + '\n');
}

/* ---- IRS notice guides ------------------------------------------------------
   Each guide is a pair of files in content/guides/: <name>.es.html and
   <name>.en.html. Each starts with a JSON block (id="guide-meta") holding its
   URL path, title, description, headline, answer-first lead, dates and review
   status, followed by the article body. The build wraps the body in the site
   header and footer. A guide stays noindex (and out of the sitemap) until
   "reviewed" is true in BOTH language files. */
function loadGuides() {
  const dir = rel('content/guides');
  if (!fs.existsSync(dir)) return [];
  const names = [...new Set(fs.readdirSync(dir).filter((f) => /\.(es|en)\.html$/.test(f)).map((f) => f.replace(/\.(es|en)\.html$/, '')))];
  return names.map((name) => {
    const g = { name };
    for (const lang of ['es', 'en']) {
      const src = read(`content/guides/${name}.${lang}.html`);
      const m = src.match(/<script type="application\/json" id="guide-meta">([\s\S]*?)<\/script>/);
      if (!m) throw new Error(`content/guides/${name}.${lang}.html: missing guide-meta block`);
      g[lang] = { ...JSON.parse(m[1]), body: src.slice(m.index + m[0].length).trim() };
    }
    return g;
  }).sort((a, b) => (b.es.hub ? 1 : 0) - (a.es.hub ? 1 : 0) || a.name.localeCompare(b.name));
}
const GUIDES = loadGuides();
const GUIDE_HUB = GUIDES.find((g) => g.es.hub);
const GUIDES_HUB_ES = GUIDE_HUB ? GUIDE_HUB.es.path : '/help';
const GUIDE_EN_PATH = new Map(GUIDES.map((g) => [g.es.path, g.en.path]));

const GUIDE_TEXT = {
  es: { home: 'Inicio', hub: 'Avisos del IRS', updated: 'Actualizado', source: 'Basado en información de IRS.gov', general: 'Información general, no es asesoría fiscal.', reviewedBy: 'Revisado por',
    ctaTitle: 'Que la próxima carta del IRS no te tome por sorpresa.',
    ctaBody: 'IRS Protect Plus cubre asuntos cuyo primer aviso del IRS esté fechado después de tu inscripción: revisión, respuesta y representación ante el IRS por $19.99 al mes. Si ya recibiste este aviso, la membresía no lo cubre, pero puedes hablar con Best Vision Accounting sobre tu caso.',
    ctaBodyHub: 'IRS Protect Plus cubre asuntos cuyo primer aviso del IRS esté fechado después de tu inscripción: revisión, respuesta y representación ante el IRS por $19.99 al mes. Si ya recibiste un aviso, puedes hablar con Best Vision Accounting sobre tu caso.',
    ctaJoin: 'Obtén protección', ctaContact: 'Hablar con Best Vision Accounting' },
  en: { home: 'Home', hub: 'IRS notices', updated: 'Updated', source: 'Based on information from IRS.gov', general: 'General information, not tax advice.', reviewedBy: 'Reviewed by',
    ctaTitle: 'Don’t let the next IRS letter catch you off guard.',
    ctaBody: 'IRS Protect Plus covers matters whose first IRS notice is dated after you enroll: review, response and representation before the IRS for $19.99 a month. If you already received this notice, the membership doesn’t cover it, but you can talk to Best Vision Accounting about your case.',
    ctaBodyHub: 'IRS Protect Plus covers matters whose first IRS notice is dated after you enroll: review, response and representation before the IRS for $19.99 a month. If you already received a notice, you can talk to Best Vision Accounting about your case.',
    ctaJoin: 'Get protected', ctaContact: 'Talk to Best Vision Accounting' }
};

function longDate(iso, lang) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
const escHtml = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderGuide(g, lang) {
  const m = g[lang]; const T = GUIDE_TEXT[lang];
  const home = lang === 'en' ? '/en' : '/';
  const crumbs = [`<a href="${home}">${T.home}</a>`];
  if (!m.hub) crumbs.push(`<a href="${GUIDE_HUB[lang].path}">${T.hub}</a>`);
  crumbs.push(`<span aria-current="page">${escHtml(m.crumb)}</span>`);
  const byline = m.reviewer
    ? `${T.reviewedBy} ${escHtml(m.reviewer)} · `
    : '<!-- TODO(client): add the reviewing EA/CPA name and credential in the guide-meta "reviewer" field, then set "reviewed": true -->';
  const enroll = lang === 'en' ? '/en/enroll' : '/enroll';
  const contact = lang === 'en' ? '/en/contact' : '/contact';
  return `
<section class="page-hero guide-hero">
  <div class="page-hero-inner wrap">
    <nav class="crumbs" aria-label="Breadcrumb">${crumbs.join('<span class="crumb-sep" aria-hidden="true">/</span>')}</nav>
    <span class="kicker">${escHtml(m.kicker)}</span>
    <h1>${escHtml(m.h1)}</h1>
    <p class="lead">${escHtml(m.lead)}</p>
    <p class="guide-meta">${byline}${T.updated}: <time datetime="${m.updated}">${longDate(m.updated, lang)}</time> · ${T.source} · ${T.general}</p>
  </div>
</section>
<section class="section wrap guide-body">
  <article class="prose guide">
${m.body}
  </article>
</section>
<section class="cta-wrap wrap" aria-labelledby="guide-cta-title">
  <div class="cta-card">
    <img src="/assets/opt/irs-protect-plus-plan-logo.webp" alt="" width="320" height="249" loading="lazy">
    <h2 id="guide-cta-title">${T.ctaTitle}</h2>
    <p>${m.hub ? T.ctaBodyHub : T.ctaBody}</p>
    <div class="hero-actions guide-cta-actions">
      <a href="${enroll}" class="btn btn-white">${T.ctaJoin}</a>
      <a href="${contact}" class="btn btn-ghost btn-ghost--light">${T.ctaContact}</a>
    </div>
  </div>
</section>
`;
}

function guideLd(doc, g, lang) {
  const m = g[lang]; const url = SITE + m.path; const T = GUIDE_TEXT[lang];
  const crumbs = [{ name: T.home, item: SITE + (lang === 'en' ? '/en' : '/') }];
  if (!m.hub) crumbs.push({ name: T.hub, item: SITE + GUIDE_HUB[lang].path });
  crumbs.push({ name: m.crumb, item: url });
  const graph = [
    { '@type': 'AccountingService', '@id': ORG_ID, name: CO.legalName },
    { '@type': 'WebSite', '@id': SITE_ID, url: SITE + '/', name: 'IRS Protect Plus', inLanguage: ['es', 'en'], publisher: { '@id': ORG_ID } },
    {
      '@type': 'Article',
      '@id': url + '#article',
      headline: m.h1,
      description: m.description,
      inLanguage: lang === 'en' ? 'en-US' : 'es-US',
      datePublished: m.published,
      dateModified: m.updated,
      mainEntityOfPage: url,
      image: `${SITE}/assets/og/irs-protect-plus-${lang}.jpg`,
      author: m.reviewer ? { '@type': 'Person', name: m.reviewer } : { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      isPartOf: { '@id': SITE_ID },
      ...(m.about ? { about: { '@type': 'Thing', name: m.about } } : {}),
      citation: [...new Set([...doc.querySelectorAll('.guide .sources a[href^="http"]')].map((a) => a.href))]
    },
    { '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })) }
  ];
  const faq = faqPage(doc, url);
  if (faq) graph.push(faq);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

function buildGuides(version) {
  const chrome = { es: read('help.html'), en: read('en/help.html') };
  for (const g of GUIDES) {
    const reviewed = !!(g.es.reviewed && g.en.reviewed);
    for (const lang of ['es', 'en']) {
      const m = g[lang];
      const dom = new JSDOM(chrome[lang]);
      const doc = dom.window.document;
      doc.body.setAttribute('data-page', 'guide');
      doc.querySelector('main').innerHTML = renderGuide(g, lang);
      writeHead(doc, {
        lang, url: SITE + m.path, alt: { es: SITE + g.es.path, en: SITE + g.en.path },
        title: m.title, desc: m.description, descKey: null, noindex: !reviewed,
        ldJson: guideLd(doc, g, lang), preloadHero: false, ogType: 'article'
      }, version);
      const out = m.path.replace(/^\//, '') + (m.hub ? '/index.html' : '.html');
      write(out, tidy(dom.serialize()));
    }
  }
}

/* ---- Run ------------------------------------------------------------------ */
await buildImages();
rewriteCss();
const version = assetVersion();
const i18nSrc = read('js/i18n.js');
const esDict = (() => { const w = { SITE_CONFIG: CONFIG }; const d = { documentElement: { getAttribute: () => 'es', classList: { add() {} } }, readyState: 'loading', addEventListener() {} }; new Function('window', 'document', 'localStorage', i18nSrc)(w, d, {}); return w.I18N.dict.es; })();

for (const page of PAGES) {
  const dom = new JSDOM(read(page.file));
  const doc = dom.window.document;
  writeBody(doc, page);
  writeHead(doc, pageMeta(doc, page, 'es', esDict), version);
  const esHtml = tidy(dom.serialize());
  write(page.file, esHtml);
  if (!page.notFound) write('en/' + page.file, toEnglish(esHtml, page, i18nSrc, version));
}
buildGuides(version);
writeCrawlerFiles();
console.log(`Built ${PAGES.length} Spanish pages, ${PAGES.length - 1} English pages, ${GUIDES.length * 2} guide pages (${GUIDES.filter((g) => g.es.reviewed && g.en.reviewed).length * 2} indexable), sitemap, robots.txt (v=${version}) for ${SITE}`);
