# IRS Protect — website

A fully static, bilingual (English / Spanish) marketing and member website for
**IRS Protect** and **IRS Protect Plus**, membership programs from Best Vision
Accounting. No build step, no framework, no server-side code: upload the folder
to any static host and it works.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing page (hero, trust, how it works, plans, Protect Plus, what's covered, FAQ, CTA) |
| `enroll.html` | 3-step enrollment: choose plan → your details → review & confirm. Accepts `?plan=protect` or `?plan=plus` |
| `submit-notice.html` | Members upload an IRS notice (photos/PDF, drag & drop, validation) |
| `contact.html` | Contact form + contact details |
| `help.html` | Help center: FAQ + how-to topics |
| `login.html` | Member sign-in (links to your portal when configured) |
| `membership-agreement.html`, `terms.html`, `privacy.html` | Legal documents |
| `404.html` | Not-found page (set it as the custom 404 page on your host) |

Shared code: `css/site.css` (all styles), `js/i18n.js` (every English and Spanish
string), `js/site.js` (navigation, forms, accordions), `js/config.js` (**your settings**).

## 1. Configure the site — edit `js/config.js`

Everything business-specific lives in this one file. Every value is optional;
blank values degrade gracefully.

| Setting | What it does |
| --- | --- |
| `company.email`, `phone`, `hours`, `address`, `url` | Shown on the Contact page, in the legal pages and used as the email fallback for forms. Blank rows are hidden automatically. |
| `forms.endpoint` | Where form submissions are POSTed (multipart/form-data, with notice uploads as `attachments`). Works with **Formspree**, Basin, Getform, Netlify Forms or your own API. If blank, forms open the visitor's email app addressed to `company.email`. If that is blank too, visitors are asked to contact you directly. |
| `checkout.protect`, `checkout.plus` | Hosted checkout URLs, one per plan. **Stripe Payment Links** work out of the box: the member's email and a reference ID are appended (`prefilled_email`, `client_reference_id`). When set, enrollment sends members to checkout after they confirm; when blank, the enrollment is delivered as a form and your team completes it. |
| `memberPortalUrl` | Your client-portal sign-in URL. When set, every "Log in" link opens it. |
| `maxUploadMb` | Max size per uploaded notice file (default 10). |
| `autoDetectLanguage` | Show Spanish to browsers set to Spanish (visitors can always switch). |

### Fastest production setup (about 10 minutes)

1. **Forms:** create a free form at formspree.io, copy the endpoint URL
   (`https://formspree.io/f/xxxxxxxx`) into `forms.endpoint`. Enrollments,
   contact messages and notice uploads will arrive in your inbox.
2. **Payments:** in Stripe, create two Payment Links (a $10.99/month and a
   $19.99/month recurring price) and paste them into `checkout.protect` and
   `checkout.plus`.
3. **Contact info:** fill in `company.email` and `company.phone`.

## 2. Run locally

Open `index.html` directly, or serve the folder:

```
cd IRS-Protect-Website
python3 -m http.server 8080
# then visit http://localhost:8080
```

## 3. Deploy

Upload the contents of this folder to any static host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, S3, cPanel). Set `404.html` as the custom
not-found page. Once you know the final domain, add an absolute `og:image`
meta tag and a `sitemap.xml` if you want richer social previews and search
indexing.

## 4. Editing text

All copy, in both languages, is in `js/i18n.js`. Elements are marked with
`data-i18n="key"`; the English text in the HTML is the fallback shown before
scripts run. Change a string in `js/i18n.js` and it updates everywhere it is used.

## Legal pages

The Membership Agreement, Terms of Service and Privacy Policy were drafted from
the program terms described in the marketing copy ($5,000 representation, $2,000
Plus benefit, notice-date eligibility, 30-day refund window, exclusions). They
are complete drafts, but they should be reviewed by counsel before launch,
particularly the limitation of liability and governing-law sections.

## Design source

`IRS Protect.dc.html`, `IRS Protect v2.dc.html` and `support.js` are the
design-tool prototype the site was built from. They are not used by the live
site and can be kept for reference or removed. The `uploads/` folder holds
design references and is excluded from search engines by `robots.txt`.
