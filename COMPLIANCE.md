# IRS Protect Plus: legal and compliance review

Prepared 2026-10-09 for the business owner and their attorney. This is a
technical and research review of the website, **not legal advice**. Every
legal point below was checked against the cited primary source or an
authoritative summary. Items marked *unverified* could not be confirmed.

## 1. What was changed on the website

| Area | Change |
| --- | --- |
| Legal pages | Added a **Cookie Policy** (`/cookie-policy`), a **Refund and Cancellation Policy** (`/refund-policy`) and an **Accessibility Statement** (`/accessibility`), in Spanish and English. All legal pages and the footer now list all six documents. |
| Privacy Policy | Removed the outdated Google Fonts statement (fonts are now self-hosted). Disclosed Vercel Web Analytics and Speed Insights, and named the service providers (Vercel, Stripe, form/email/storage providers). Strengthened the tax-information clause to match IRC §7216. Added a Do Not Track statement (CalOPPA), a financial-privacy (GLBA-style) statement and a breach-notice statement (Fla. Stat. §501.171). |
| Cookie consent | **Not required.** The site sets no cookies of its own. It stores only the language choice in local storage, and Vercel Web Analytics is cookieless. No banner was added; this is explained in the Cookie Policy. |
| Third parties | No ads, social widgets, embeds, maps or videos. External links go only to IRS.gov, TAS and the U.S. Tax Court. Stripe (checkout) is the only third party that may set cookies, on its own pages. |
| Form consent | The contact and notice forms now require a consent checkbox that links to the Privacy Policy. Each form states that phone numbers are used only for the request or membership, never for marketing. The enrollment form links to the Privacy Policy. |
| Data minimization | ZIP code is now optional at enrollment. Name, email and phone are still required to service the membership. |
| SSN safety | **IRS notice uploads can no longer fall back to the visitor's email app**, since plain email is not encrypted (FTC Safeguards Rule). Until a secure upload endpoint is configured, visitors are asked to contact the team. |
| Auto-renewal (ROSCA) | The enrollment page now states the price, monthly automatic renewal, how to cancel (email and phone), that cancelling stops future charges, and the refund terms, before payment. The billing checkbox wording says "automatically charge … every month until I cancel." |
| Unsupported claims | Removed "Protección completa / Complete protection" (inaccurate, given the cap and exclusions), "Sin sorpresas / no surprises," and the "within one business day" response promise. Changed "$10,000 in professional representation" to "$10,000 maximum in representation services" and "La mayoría / Most people" to "Muchas / Many." Replaced "don't reply to the IRS until we've reviewed the notice" with "send it as soon as possible; IRS deadlines keep running." |
| Reviews and testimonials | **None exist on the site.** Nothing to remove. The membership and timeline cards on the homepage are illustrations of the interface, not customer claims. |
| IRS marks (31 U.S.C. §333) | Removed the IRS eagle emblem, the "IRS" wordmark and the "Department of the Treasury / Internal Revenue Service" text from the hero image and the envelope image. Removed the IRS building photo, which showed "Internal Revenue Service" in stone, from the call-to-action panel. Regenerated the social share images. |
| Accessibility (WCAG 2.1 AA) | Fixed every issue axe-core found across 23 pages at desktop and phone widths: text contrast, accessible names on the language buttons and mobile logo, keyboard access to scrollable tables, and a Spanish label on the "remove file" button. All images have alt text, and decorative images use empty alt text. Forms work by keyboard alone, with visible focus and announced errors. Result: **0 violations**. |
| Business details | Legal name, address, phone, fax, email and hours appear on the contact page, in the footer and in the structured data. |

## 2. Risks that need the business or an attorney (by priority)

### A. Possible classification as insurance or a legal expense plan: **attorney before launch**
- Fla. Stat. §624.02 defines insurance as a contract to "pay or allow a specified amount or a determinable benefit upon determinable contingencies."
- A fixed monthly fee for up to $10,000 of services, triggered by a future IRS notice, fits that language closely.
- Chapter 642 (legal expense insurance, §642.015) requires an OIR certificate. Its exemptions (§642.017) do not cover non-attorney accountants.
- The "not insurance" label does not decide the question.
- **Action:** get a written legal opinion; consider an inquiry to the Florida Office of Insurance Regulation.
- Insurance-like wording still on the site and in the Membership Agreement ("cobertura / coverage", "protección / protection") should be reviewed at the same time.
- Sources: [§624.02](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0624/Sections/0624.02.html), [§642.015](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0642/Sections/0642.015.html), [Ch. 642](https://www.flsenate.gov/Laws/Statutes/2025/Chapter642/All).

### B. "IRS" in the product name and logo: **attorney**
- 31 U.S.C. §333 prohibits using the name of a Treasury bureau, or a colorable imitation of its symbols, in advertising in a way that could reasonably be read as implying association or endorsement.
- **A disclaimer is not a defense** (§333(b)).
- Penalties are up to $5,000 per use; knowing violations are criminal.
- The FTC Impersonation Rule (16 CFR 461.2) also bars misrepresenting affiliation with a government entity.
- The images are fixed, but the **brand name "IRS Protect Plus" and the shield logo (large "IRS" lettering and a Capitol dome)** remain.
- **Action:** counsel to decide whether to rename (for example a name that doesn't lead with "IRS") and redesign the logo.
- Sources: [31 U.S.C. §333](https://www.law.cornell.edu/uscode/text/31/333), [Treasury guidance](https://treasurydirect.gov/laws-and-regulations/fraud/prohibit-misuse), [16 CFR 461.2](https://www.law.cornell.edu/cfr/text/16/461.2).

### C. Data security (FTC Safeguards Rule, 16 CFR 314): **required**
- Tax preparers and accountants are "financial institutions" under the rule (§314.2).
- Required:
  - a written information security program (WISP; IRS Pub 5708 is a template)
  - a Qualified Individual to run it
  - encryption of customer data in transit and at rest
  - multi-factor authentication
  - notice to the FTC within 30 days of a breach involving 500 or more consumers
- Florida §501.171 also requires notifying affected individuals within 30 days.
- **Action:** adopt a WISP. Choose a form/upload provider with encrypted storage and a service agreement, and list it in the WISP. Once the WISP exists, add the sentence marked `TODO(client)` in `privacy.html`.
- Sources: [§314.4](https://www.law.cornell.edu/cfr/text/16/314.4), [§314.2](https://www.law.cornell.edu/cfr/text/16/314.2), [IRS WISP reminder](https://www.irs.gov/newsroom/irs-security-summit-remind-tax-pros-they-need-a-written-information-security-plan-to-protect-client-data).

### D. Who represents members: **business must confirm**
- The site and Agreement say representation is by an EA, CPA, attorney or other authorized professional.
- Only CPAs, EAs and attorneys have unlimited representation rights before the IRS. Others cannot represent before Collections or Appeals.
- bvaccounting.com lists no credentials.
- **Action:** confirm that credentialed practitioners will handle member matters. If not, the claims must change.
- Circular 230 §10.30 also bars misleading communications and the word "certified" for non-CPAs, and requires keeping copies of e-commerce communications for 36 months.
- Source: [31 CFR 10.30](https://www.law.cornell.edu/cfr/text/31/10.30).

### E. Subscription and cancellation: **business**
- ROSCA (15 U.S.C. §8403) requires clear terms before billing, express consent and a simple way to stop charges. The site now covers the first two.
- **Action:**
  - Offer a self-service online cancellation, for example the Stripe Customer Portal.
  - Send an email confirming enrollment terms and how to cancel.
  - Keep consent records.
- California's automatic renewal law (if you sell to CA residents; AB 2863, effective July 1, 2025) adds online cancellation in the same medium, an acknowledgment, annual reminders and keeping consent records for 3 years.
- The FTC "click-to-cancel" rule was vacated (8th Cir., July 8, 2025). ROSCA still applies.
- Fla. Stat. §501.165 most likely does not apply to a month-to-month plan (attorney to confirm).
- Sources: [15 U.S.C. §8403](https://www.law.cornell.edu/uscode/text/15/8403), [Latham summary](https://www.lw.com/en/insights/eighth-circuit-vacates-ftc-click-to-cancel-rule), [§501.165](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.165.html).

### F. Membership Agreement wording: **attorney**
- §9: "fees … *may* be refundable" is vague. State exactly when a refund is given.
- §13: "dispute-resolution procedures agreed upon by the parties" names no procedure.
- Legal name: Florida Sunbiz shows "Best Vision Accounting Corp"; the site says "LLC." Confirm.
- Have the Spanish translations of all legal pages reviewed.

### G. GLBA privacy notice: **attorney**
- Tax preparers are covered by CFPB Regulation P (12 CFR 1016). An initial privacy notice is due when the customer relationship begins.
- Whether a representation-only membership creates that relationship needs review.
- The Privacy Policy now includes a GLBA-style sharing statement, but a formal Reg P notice may still be needed.
- Source: [12 CFR 1016.3](https://www.law.cornell.edu/cfr/text/12/1016.3).

### H. Phone marketing: **only if you plan to call or text for marketing**
- Florida §501.059 and the TCPA require prior express written consent for automated marketing calls and texts.
- The site states phones are not used for marketing, so no checkbox was added. If that changes, add a separate, unchecked consent box with the required wording first.
- Source: [§501.059](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.059.html).

### I. Images and copyright
- The images carry no record of their original creator or license. Their embedded "Content Credentials" only show they passed through Anthropic's file tool during design.

| Image | Likely source | Status |
| --- | --- | --- |
| Woman with envelope (hero) | Appears AI-generated | IRS marks removed. AI images can't be copyrighted, so others may copy them. Confirm the generator's commercial-use terms. |
| Envelope "Important tax notice" | Appears AI-generated | IRS marks removed. The "ACTION REQUIRED" stamp is fear-based imagery; reconsider if the firm is a CPA firm (Fla. Admin. Code 61H1-24.001). |
| Couple at laptop, accountant with document | Appear AI-generated or stock | No government marks. Confirm the license. |
| Best Vision Accounting team photo | Appears to be a real staff photo | Confirm the firm owns it and **that everyone pictured consented** to its use in advertising. |
| IRS Protect / Plus shield logos | Canva (metadata) | See risk B. Confirm Canva license terms for logo use. |

- Sources: [Copyright Office AI report](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf).

### J. Accessibility lawsuits (ADA Title III)
- Florida had about 961 federal website-accessibility suits in 2025 ([Seyfarth](https://www.adatitleiii.com/2026/03/federal-court-website-accessibility-lawsuit-filings-bounce-back-in-2025/)). DOJ treats WCAG as guidance ([ada.gov](https://www.ada.gov/resources/web-guidance/)).
- The site now passes automated WCAG 2.1 AA checks. Automated tools don't catch everything, so have a person test with a screen reader (VoiceOver/NVDA) once a year.
- Don't add accessibility "overlay" widgets.

### K. Not applicable (checked)
- **Cookie banner:** no US or Florida law requires one for this site.
- **CCPA:** thresholds are $26.625M revenue, 100,000 CA consumers, or 50% of revenue from selling data.
- **Florida Digital Bill of Rights:** applies only above $1B revenue.
- **Florida retail refund-sign law §501.142:** covers goods only.
- **FTC Reviews Rule (16 CFR 465):** no reviews on the site. If you add testimonials, use only real, consented ones.
