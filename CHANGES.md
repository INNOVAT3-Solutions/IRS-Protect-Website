# SEO / AEO changes — branch `seo/audit-20260929`

Source: SEO + AI-search audit of irs-protect-website.vercel.app, 2026-09-29
(score 44/100). Full report: https://claude.ai/artifact/VzTeDvzEZTGQt7oX8JazZo

## Changes, by audit finding

| Finding | Change | Files |
| --- | --- | --- |
| C1 English invisible to crawlers | Static English pages under `/en/`, generated from `js/i18n.js`. ES/EN toggle links between each page pair. Reciprocal hreflang (`es`, `en`, `x-default`). | `scripts/build.mjs`, `en/*.html`, `js/i18n.js`, `js/site.js` |
| C2 Prototypes and third-party PDF public | Moved to `design-source/`, excluded by `.vercelignore`. Old `/uploads/*` URLs redirect home. | `.vercelignore`, `vercel.json` |
| C3 No sitemap / canonical | Self-referencing canonical on every page. `sitemap.xml` with hreflang alternates (16 URLs). Sitemap line in robots.txt. Domain set to `https://irsprotect.us` (`SITE` in `scripts/build.mjs`). | all pages, `sitemap.xml`, `robots.txt` |
| H1 `.html` URLs, `/enroll` 404 | `cleanUrls: true` (Vercel 308-redirects `*.html` to the clean path). All internal links are clean and root-absolute. | `vercel.json`, all pages, `js/site.js` |
| H2 No structured data | JSON-LD: AccountingService (name, address, phone), WebSite, Service + Offer ($19.99/mo), WebPage/ContactPage, FAQPage (home, help). | all pages |
| H3 No business details | Address and phone from bvaccounting.com in config, footer, contact page and schema. | `js/config.js`, all pages |
| H4 Heavy images | WebP for every image. Hero 1,188 KB → 107 KB, homepage images ~3.7 MB → ~0.55 MB. Hero preloaded. | `assets/**/*.webp`, `css/site.css` |
| H5 No share image | 1200×630 Open Graph images (ES, EN), og:url, og:locale, twitter large card. | `assets/og/`, all pages |
| H6 No measurement | Vercel Web Analytics + Speed Insights tags. Events: `enroll_start`, `enrollment_submit`, `contact_submit`, `notice_submit`, `lang_switch`. IndexNow key file. | all pages, `js/site.js`, `b7e4c1f0…txt` |
| M1 Long title/description, H1 without keyword | New titles ≤ 60 characters and descriptions ≤ 155. Hero sentence now defines the service ("IRS Protect Plus es una membresía de representación ante el IRS…"). | `js/i18n.js` |
| M3 robots.txt | Explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot. | `robots.txt` |
| M4 Utility pages | `noindex, follow` on `/login` (and 404). | `login.html` |
| M5 Government affiliation | "No afiliado con el IRS ni con el gobierno de EE. UU." / "Not affiliated with the IRS or the U.S. government." in every footer. | all pages, `js/i18n.js` |
| M2 No informational content | Hub + 5 IRS notice guides (CP2000, Letter 566, CP3219A, CP14–CP504, LT11/Letter 1058) in ES and EN, sourced to IRS.gov, with Article, BreadcrumbList and FAQPage schema. **Shipped as noindex until reviewed.** | `content/guides/`, `avisos-irs/`, `en/irs-notices/` |
| L1 Render-blocking fonts | Manrope self-hosted (woff2, preloaded); Google Fonts removed. | `assets/fonts/`, `css/site.css` |
| L2 Security headers | `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`. Cache headers for css/js/assets. | `vercel.json` |

## Verification (local, headless Chrome + scripted checks)

- All 19 pages load in the right language with no script errors or missing images.
- ES→EN and EN→ES toggle land on the matching page.
- JSON-LD parses on every page. The FAQ entries and the $19.99 offer are present.
- Hreflang is complete and reciprocal for all 18 indexable page URLs.
- Every sitemap URL matches a page's canonical.
- No `.html` links and no broken internal links. Every referenced asset exists.
- The build gives identical output when run twice.

Not verified: the Vercel preview is behind Vercel Authentication, which the
connector could not access. Check it while logged in (list in the handoff).

## Not applied (outside the approved scope)

- The remaining roadmap pages (comparison page, notice-date rule explainer, Miami
  local page, CP90/Letter 525): not written yet.
- Google Search Console verification: use a DNS "Domain" property instead of a meta tag.

## Needs client input (TODOs)

- **Guide review:** have your EA/CPA check each guide in `content/guides/`
  against the IRS.gov sources listed on it, add their name and credential in
  `"reviewer"`, set `"reviewed": true` in both language files and run the
  build. Until then the guides are live but noindex.

- `index.html`: "Who represents you" section with real credentialed staff (name,
  EA/CPA credential, photo). Only real people and credentials (Circular 230 §10.30).
- `js/config.js`: `forms.endpoint`, `checkoutUrl` and `memberPortalUrl` are still blank.
  Until a form endpoint is set, forms open the visitor's email app addressed to
  info@bvaccounting.com.
- Legal name: Florida Sunbiz shows "Best Vision Accounting Corp"; the site uses
  "LLC" as confirmed. Worth confirming with the registered agent.
- Yelp profile link for structured data, if you want it listed alongside Facebook and Instagram.
- The hero and share images show an IRS seal on an envelope. Have counsel confirm
  this is acceptable alongside the not-affiliated statement.
