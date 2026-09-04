# IRS Protect Plus — website

A fully static, bilingual (Spanish default / English) marketing and member
website for **IRS Protect Plus**, the membership program from Best Vision
Accounting, LLC. No build step, no framework, no server-side code: upload the
folder to any static host and it works.

All program facts on the site (the $19.99 monthly fee, up to $10,000 in
professional representation, the notice-date rule, future-tax-year coverage,
exclusions, cancellation and refunds, Florida governing law) come from the
IRS Protect Plus Membership Agreement.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing page (hero, trust, how it works, membership, coverage rules, what's included, FAQ, CTA) |
| `enroll.html` | 2-step enrollment: your details → review & confirm (electronic acceptance of the agreement) |
| `submit-notice.html` | Members upload an IRS notice (photos/PDF, drag & drop, validation) |
| `contact.html` | Contact form + contact details |
| `help.html` | Help center: FAQ + how-to topics |
| `login.html` | Member sign-in (links to your portal when configured) |
| `membership-agreement.html` | The Membership Agreement, verbatim in English, with a Spanish courtesy translation |
| `terms.html`, `privacy.html` | Terms of Service and Privacy Policy, Spanish and English |
| `404.html` | Not-found page (set it as the custom 404 page on your host) |

Shared code: `css/site.css` (all styles), `js/i18n.js` (every Spanish and
English string), `js/site.js` (navigation, forms, accordions), `js/config.js`
(**your settings**).

## 1. Configure the site — edit `js/config.js`

Everything business-specific lives in this one file. Every value is optional;
blank values degrade gracefully.

| Setting | What it does |
| --- | --- |
| `company.email`, `phone`, `hours`, `address`, `url` | Shown on the Contact page and in the legal pages, and used as the email fallback for forms. Blank rows are hidden automatically. |
| `forms.endpoint` | Where form submissions are POSTed (multipart/form-data, notice uploads as `attachments`). Works with **Formspree**, Basin, Getform, Netlify Forms or your own API. If blank, forms open the visitor's email app addressed to `company.email`. If that is blank too, visitors are asked to contact you directly. |
| `checkoutUrl` | Hosted checkout for the $19.99/month membership. A **Stripe Payment Link** works out of the box (the member's email and a reference ID are appended). When set, enrollment sends members to checkout after they confirm; when blank, the enrollment is delivered as a form and your team completes it. |
| `memberPortalUrl` | Your client-portal sign-in URL. When set, every "Iniciar sesión / Log in" link opens it. |
| `maxUploadMb` | Max size per uploaded notice file (default 10). |
| `defaultLanguage` | `'es'` (default) or `'en'`. Visitors can always switch; their choice is remembered. |
| `autoDetectLanguage` | `false` by default. Set `true` to show English automatically to browsers set to English. |

### Fastest production setup (about 10 minutes)

1. **Forms:** create a free form at formspree.io, copy the endpoint URL into
   `forms.endpoint`. Enrollments, contact messages and notice uploads will
   arrive in your inbox.
2. **Payments:** in Stripe, create a Payment Link for a $19.99/month recurring
   price and paste it into `checkoutUrl`.
3. **Contact info:** fill in `company.email` and `company.phone`.

## 2. Run locally

```
cd IRS-Protect-Website
python3 -m http.server 8080
# then visit http://localhost:8080
```

## 3. Deploy

Upload the contents of this folder to any static host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, S3, cPanel). Set `404.html` as the custom
not-found page. Once you know the final domain, add an absolute `og:image`
meta tag and a `sitemap.xml` for richer social previews and search indexing.

## 4. Editing text

All copy, in both languages, is in `js/i18n.js`. Elements are marked with
`data-i18n="key"`; the Spanish text in the HTML is the fallback shown before
scripts run. Change a string in `js/i18n.js` and it updates everywhere.

## Legal pages

`membership-agreement.html` contains the IRS Protect Plus Membership Agreement
word for word in English (the governing version), plus a Spanish courtesy
translation labelled as such. The signature block of section 15 is presented as
a note that acceptance is recorded electronically at enrollment. The Terms of
Service and Privacy Policy were drafted to match the agreement (LLC, Florida
law, single product) and are provided in both languages. Have counsel review
the Spanish translations and the Terms/Privacy drafts before launch.

## Design source

`IRS Protect.dc.html`, `IRS Protect v2.dc.html` and `support.js` are the
design-tool prototype the site was built from. They are not used by the live
site. The `uploads/` folder holds design references and is excluded from search
engines by `robots.txt`.
