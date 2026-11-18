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
- `js/config.js`: `forms.endpoint` and `checkoutUrl` are blank because the
  dashboard handles every form and the payment (`dashboardUrl`); the member
  sign-in links open `memberPortalUrl`. (This paragraph was written on the SEO
  branch, which had deleted the login page; the 2026-11-18 merge restored it.)
- Legal name: Florida Sunbiz shows "Best Vision Accounting Corp"; the site uses
  "LLC" as confirmed. Worth confirming with the registered agent.
- Yelp profile link for structured data, if you want it listed alongside Facebook and Instagram.
- The hero and share images show an IRS seal on an envelope. Have counsel confirm
  this is acceptable alongside the not-affiliated statement.

# Dashboard connection — branch `feat/dashboard-connection`

Built on `seo/audit-20260929`; connects the site to the IRS Protect Plus
dashboard (`https://app.irsprotect.us`), which takes the payments through the
client's Stripe account and records members and payments in GoHighLevel.

| Area | Change | Files |
| --- | --- | --- |
| Notice form | Files upload from the browser straight to the dashboard's private, encrypted storage (a one-file token per upload, the vendored `@vercel/blob` 2.8.0 client), then the dashboard records the notice, sends the receipt in the visitor's language with a `SUB-…` reference number, and alerts the team. The notice date, tax year, member ID and consent go with it. Only PDF, JPG, PNG and HEIC, up to 25 MB and 10 files (the dashboard's limits); a retry after a lost answer re-sends only the notice. | `js/site.js`, `submit-notice.html`, `vendor/`, `js/config.js` |
| Enrollment | Step 1 is the terms (price, auto-renewal, cancellation, three required boxes); continuing sends the visitor to a Stripe Checkout page in their language, which the dashboard creates (recording the consent time and the language on the subscription). Stripe's return shows a thank-you (`?checkout=success`) or a "you weren't charged" note (`?checkout=canceled`); the language toggle keeps that query. The dashboard activates the membership from Stripe's payment, emails the welcome in the purchase language and mirrors every payment as a GoHighLevel invoice. The site's own details step is gone. Events `enroll_checkout_open` and `enroll_complete` replace `enrollment_submit`. | `enroll.html`, `js/site.js`, `js/i18n.js` |
| Sign in | Every "Iniciar sesión / Log in" link opens the member portal at `https://app.irsprotect.us`, in the same tab, with `?lang=es` or `?lang=en` for the language the visitor is reading: the portal's sign-in page (and the portal, and the emailed link) follow it. | `js/config.js`, `js/site.js`, `js/i18n.js` |
| Online cancellation | `/refund-policy` lists Stripe's customer portal as the online way to cancel (first in the list), and `/login` links it for card changes and cancellation. | `refund-policy.html`, `login.html`, `js/config.js`, `js/site.js`, `js/i18n.js` |
| Legal | Privacy and Cookie Policies name the real providers (Vercel incl. Blob, Neon, Stripe, GoHighLevel, Resend). **Counsel to review.** | `privacy.html`, `cookie-policy.html` |
| Build | Fails when the Spanish and English dictionaries define different keys. | `scripts/build.mjs` |

# 30-day free trial — enrollment and legal copy (2026-10-29)

Every new monthly membership now starts with a **30-day free trial** (the
dashboard's `STRIPE_TRIAL_DAYS=30`): a card is collected on Stripe Checkout,
nothing is charged during the trial, the first $19.99 charge happens
automatically when the trial ends (day 31), and the membership renews monthly
until cancelled. Cancelling during the trial means no charge.

| Area | Change | Files |
| --- | --- | --- |
| Enrollment | The consent step discloses the trial, the $19.99 price after it, the automatic first charge and monthly renewal, how to cancel, and that cancelling during the trial is free. The summary shows a free-trial row and "$0.00 due today"; the billing checkbox authorizes the charge at trial end; the success panel says the trial has started (no payment confirmation). | `enroll.html`, `js/i18n.js` |
| Legal pages | Terms §5, Refund Policy §§1 and 3, and Membership Agreement §§1 and 9 now describe the trial, the first charge, and the 30-day refund window as applying to fees paid after the trial. "Last updated" dates bumped to October 29, 2026. | `terms.html`, `refund-policy.html`, `membership-agreement.html`, `js/i18n.js` |
| Homepage / help | The refund and billing wording in the plan note, FAQ and help-center answers is trial-aware. | `js/i18n.js` |
| SEO / structured data | Enrollment meta/OG description updated; the JSON-LD `Offer` now carries the trial terms. | `js/i18n.js`, `scripts/build.mjs` |
| Docs | Trial disclosure, the `STRIPE_TRIAL_DAYS=30` dependency and the pending legal review recorded. | `COMPLIANCE.md`, `HANDOFF.md`, `README.md` |

**Dependency:** the site assumes the dashboard sets `STRIPE_TRIAL_DAYS=30`. If
the dashboard changes the trial length, update `js/i18n.js` and the legal pages
together and run the build. **Needs counsel review** (as with the other
subscription/refund wording, see `COMPLIANCE.md`).

# Marketing campaign on the dashboard-integrated site (2026-11-18)

Production had been serving `seo/audit-20260929` since its preview was promoted
to production in the Vercel UI on 2026-11-13. That branch forked from `main` on
2026-10-09, so the promotion silently removed the 2026-10-27 → 2026-11-04
dashboard connection: enrollment fell back to opening an email and notice
uploads went nowhere. This branch merges both sides instead of rolling the
campaign back:

| Area | Merge decision | Files |
| --- | --- | --- |
| Campaign copy | Kept the Nov 13 free-first-month campaign: free-month hero/offer, "Claim your free month now" CTAs, promotion bar, card-on-file notice, 100% money-back guarantee, and the refund policy's guarantee wording (dated November 13). | `js/i18n.js`, `index.html`, `enroll.html`, `help.html`, `terms.html`, `refund-policy.html`, `css/site.css` |
| Promotion switch | New `plan.freeMonths: 1` in the config drives the promotion bar, the JSON-LD free-month price specification, the share images and the $0.00-due-today enrollment summary with its computed first-charge date. Set it to 0 to end the promotion. | `js/config.js`, `js/site.js`, `scripts/build.mjs` |
| Dashboard connection | Kept from `main`: enrollment through the dashboard's Stripe Checkout (`/api/checkout/session`), notice intake (one-file token → private Blob upload → `/api/intake/submissions`), contact intake, portal sign-in links and the `/login` page, Clarity, the GoHighLevel widget, the A2P `hidePhoneCapture` switch, the 25 MB / 10-file limits and `vendor/`. | `js/site.js`, `js/config.js`, `enroll.html`, `submit-notice.html`, `contact.html`, `login.html`, `vercel.json`, `vendor/` |
| Login page | Restored (the SEO branch had deleted it and redirected `/login`). The header sign-in links on every page open the member portal. | `login.html`, `en/login.html`, all pages |
| Generated pages | The build regenerated every page pair and its output is idempotent; all marketing text comes from `js/i18n.js`. The guide CTAs and Open Graph images carry the free-month wording. | `scripts/build.mjs`, `en/**`, `avisos-irs/**`, `assets/og/`, `sitemap.xml` |

Verified before publishing: headless-browser checks of the ES and EN pages and
of both dashboard flows (checkout POST + redirect, notice upload + schema-valid
submission, contact intake) against stubbed endpoints, and the production
dashboard's Stripe Checkout rendered "30 días gratis" with the same first-charge
date the site computes.

**Needs counsel review:** the campaign advertises a 100% money-back guarantee
but `membership-agreement.html` was not amended (the Nov 13 commit said it
"must be amended to match"). Amend the agreement or remove the claim; see
`COMPLIANCE.md` section F.



# Member details step before payment (2026-11-18)

The enroll page asks for the member's details before payment again (the
dashboard integration had moved them onto Stripe's page): step 1 `Tus datos`
collects first name, last name, email and — when the temporary A2P phone-capture
switch is off — phone; step 2 `Revisar y confirmar` shows those details in the
summary with the trial/price/first-charge rows and the three consent boxes;
step 3 `Pago` is Stripe's page, which the dashboard creates.

The checkout request now carries the details:

```json
{ "lang": "es", "consent": true, "firstName": "Ana", "lastName": "Pérez", "email": "ana@example.com" }
```

(plus `"phone"` when the field is shown and filled; empty optional fields are
omitted). The dashboard's `api/checkout/session` turns them into a Stripe
customer and passes it to Checkout, so email, full name and phone arrive
prefilled and editable there. The prefill is best-effort on the dashboard side:
a Stripe failure never blocks the sale, and the visitor just types the details
on Stripe's page. While `hidePhoneCapture` is on, the phone field is hidden and
absent from the request (same A2P switch as the other forms); when the review
ends, set it to false and rebuild.

Files: `enroll.html`, `js/site.js`, generated `en/**` pages. Build is
idempotent (`v=db440f8418`). No `js/i18n.js` changes were needed — the keys
(`step_details`, `details_title`, `details_sub`, `summary_name/email/phone`,
`continue_btn`, `privacy_enroll`, `consent_phone`) already existed in both
languages.

# A2P approved — phone fields restored (2026-11-18)

The A2P registration review is over, so `hidePhoneCapture` is back to `false`
in `js/config.js` and the build shows the phone fields again:

- **/enroll**: phone is required on the details step and travels with the
  checkout request, so Stripe Checkout arrives prefilled with it and the
  dashboard tags the GoHighLevel contact as an abandoned-checkout lead.
- **/submit-notice**: phone is required and sent with the notice.
- **/contact**: phone is optional and sent when filled.

The switch stays as a kill switch: set `hidePhoneCapture: true` and rebuild to
hide and disable every `[data-phone-capture]` field again (the notice form then
sends the dashboard a "(not provided)" placeholder, which it requires). Build
version: `v=142f16ec52`.
