# IRS Protect Plus: launch checklist

Everything below is needed to finish the SEO work and put the site live on
**irsprotect.us**. The code is done and is on the branch `seo/audit-20260929`
(see `CHANGES.md` for what changed and why). Nothing here needs new code;
it's configuration, accounts, and information from the business.

Build command, after changing anything in `js/`, `content/` or the pages:

```
cd scripts && npm install && npm run build
```

Commit the build output.

---

## 1. Domain and deployment (blocks launch)

- [ ] **Point `irsprotect.us` (apex) at Vercel.** Today the apex serves a
      GoDaddy Website Builder placeholder, and only `www` points to Vercel.
  1. Vercel → project `irs-protect-website` → Settings → Domains → add `irsprotect.us`.
  2. Make `irsprotect.us` the primary domain, and set `www.irsprotect.us` to 308-redirect to it.
  3. At GoDaddy DNS, replace the apex A records with the value Vercel shows (usually `A @ 76.76.21.21`). Keep the `www` CNAME Vercel gives.
  4. Unpublish or disconnect the GoDaddy Website Builder site.
  5. Check that `https://irsprotect.us/` serves the Vercel site and that `https://www.irsprotect.us/` redirects to it.
- [ ] **Merge the branch.** Merge `seo/audit-20260929` into the production
      branch. Production has been deploying from `add-site-pages`, while
      `main` is still the initial commit. Decide which one is production
      going forward and set it in Vercel → Settings → Git.
- [ ] **Check the preview, logged into Vercel**, before promoting:
  - `/enroll.html` redirects to `/enroll`
  - `/en` loads the English homepage
  - `/avisos-irs` and `/en/irs-notices` load
  - the ES/EN switch goes to the matching page
  - the old `/IRS%20Protect%20v2.dc.html` and `/uploads/...` URLs no longer load
- [ ] If the domain ever changes, edit `SITE` at the top of `scripts/build.mjs` and rebuild.

## 2. Accounts to set up after launch

- [ ] **Vercel Web Analytics** and **Speed Insights**: turn both on in the
      project dashboard. The tags are already in every page. Custom events
      (`enroll_start`, `enrollment_submit`, `contact_submit`, `notice_submit`,
      `lang_switch`) need a Vercel Pro plan to show up.
- [ ] **Google Search Console**:
  1. Add a **Domain** property for `irsprotect.us`, verified with a DNS TXT record at GoDaddy.
  2. Submit `https://irsprotect.us/sitemap.xml`.
- [ ] **Bing Webmaster Tools**: import the site from Search Console and submit the sitemap. Bing's index feeds ChatGPT search and Copilot.
- [ ] **IndexNow**: the key file is already live at `/b7e4c1f09a2d4e6f8c3b5a7d9e1f2a4c.txt`. After launch and after each content update, ping `https://api.indexnow.org/indexnow?url=https://irsprotect.us/&key=b7e4c1f09a2d4e6f8c3b5a7d9e1f2a4c`, or submit the URLs in Bing Webmaster Tools.
- [ ] **Google Business Profile** (Best Vision Accounting):
  - add "IRS Protect Plus" as a service
  - link the website
  - make sure the name, address and phone match the site exactly: 11401 SW 40th St, Suite 265, Miami, FL 33165 · (305) 220-9616
- [ ] **bvaccounting.com**: add a link to irsprotect.us, and describe IRS Protect Plus as the firm's membership product.

## 3. Information needed from the business

Put these values in `js/config.js` unless noted, then rebuild.

| Item | Where it goes | Status |
| --- | --- | --- |
| Form service endpoint (e.g. Formspree), used for enrollment, contact and notice uploads | `forms.endpoint` | **Needed.** Until it's set, forms open the visitor's email app to info@bvaccounting.com and **notice file uploads can't be sent**. |
| Stripe Payment Link for the $19.99/month plan | `checkoutUrl` | **Needed.** Without it, enrollments arrive as email and no payment is collected. |
| Member portal sign-in URL | `memberPortalUrl` | **Needed** if members have a portal. The login page currently says to contact the team. |
| Names, credentials (EA / CPA / attorney) and photos of the people who represent members | New "Quién te representa / Who represents you" section on the homepage (marked `TODO(client)` in `index.html`) | **Needed.** This is the biggest trust signal Google looks for on tax and money sites. Use only real people and real credentials (Circular 230 §10.30). |
| Name and credential of the EA/CPA who reviews the IRS notice guides | `"reviewer"` in each file in `content/guides/` | **Needed** (see section 4) |
| Yelp profile URL (optional) | `company.social` | Optional |
| Email, phone, fax, hours, address, Facebook, Instagram | `company.*` | Done |

## 4. Put the IRS notice guides live in search results

Twelve guide pages (a hub plus five notices, in Spanish and English) are
built and live, but set to **noindex** until a credentialed professional
reviews them.

- [ ] The reviewer checks each guide against the IRS.gov sources listed at the bottom of the page:
  - `content/guides/hub.*.html`
  - `cp2000.*.html`
  - `letter-566.*.html`
  - `cp3219a.*.html`
  - `collection-notices.*.html`
  - `lt11-letter-1058.*.html`
- [ ] In **both** the `.es.html` and `.en.html` file of each guide:
  - set `"reviewer": "Full Name, EA"` (or CPA)
  - set `"reviewed": true`
  - update `"updated"` to the review date
- [ ] Run the build and deploy. Reviewed guides drop the noindex tag and are added to `sitemap.xml` automatically.
- [ ] Re-check the facts about every 3 months, since IRS pages change, and update `"updated"`.

## 5. Legal and compliance review (counsel)

- [ ] **Legal name:** the site says "Best Vision Accounting, LLC". Florida's Sunbiz shows "Best Vision Accounting Corp" (name change 03/11/2024). Confirm which is correct. If it's the Corp, update `company.legalName` and the legal pages.
- [ ] **IRS seal:** the hero image and the social share images show an IRS seal on an envelope. Confirm this is acceptable next to the "not affiliated with the IRS" statement, or swap the image.
- [ ] **Insurance question:** confirm the membership, a prepaid service capped at $10,000 in value for future notices, is exempt from Florida insurance and legal-expense-plan rules (Ch. 624 and Ch. 642).
- [ ] **Advertising rules:** review the site copy and any ads against Circular 230 §10.30 (IRS rules on practitioner advertising). Keep copies of ads for 36 months.
- [ ] **Subscription rules:** confirm the auto-renewal and cancellation disclosures meet Florida and FTC rules.
- [ ] **Translations:** review the Spanish translation of the membership agreement, and the Terms and Privacy drafts.

## 6. After launch

- [ ] About 2 weeks after launch, re-run the SEO audit to measure the change (the starting score was 44/100).
- [ ] Every week, check Search Console for queries ranking in positions 5–20. Those pages are the next ones to improve.
- [ ] Every month, ask ChatGPT, Perplexity and Google AI Mode the same set of questions in Spanish and English (for example "qué hacer si recibo una carta CP2000"). Record whether IRS Protect Plus is cited.
- [ ] Next content to write:
  - "¿Vale la pena la protección contra auditorías?" (comparison page)
  - the notice-date rule explainer
  - IRS representation in Miami (local page)
  - CP90 / Letter 525
