/* ==========================================================================
   IRS Protect — site configuration
   This is the only file you need to edit to connect the site to your
   business. Every value is optional; the site degrades gracefully when a
   value is blank (e.g. forms fall back to email, contact rows hide).
   ========================================================================== */
window.SITE_CONFIG = {

  /* Company details shown on the Contact page, in the footer and in email
     fallbacks. Leave a value blank to hide that row. */
  company: {
    name: 'Best Vision Accounting',
    url: '',          // e.g. 'https://www.bestvisionaccounting.com'
    email: '',        // e.g. 'hello@bestvisionaccounting.com'  (also used as the email fallback for forms)
    phone: '',        // e.g. '(555) 555-0199'
    hours: '',        // e.g. 'Mon–Fri, 9am–6pm ET'
    address: ''       // e.g. '123 Main St, Suite 200, Miami, FL 33130'
  },

  /* Membership plans. Prices are shown on the enrollment page summary. */
  plans: {
    protect: { name: 'IRS Protect',      price: 10.99 },
    plus:    { name: 'IRS Protect Plus', price: 19.99 }
  },

  /* Hosted checkout links — one per plan. Stripe Payment Links work out of
     the box (the member's email and a reference ID are passed along). When a
     link is set, the enrollment form sends the member to it after the
     details step. When blank, the enrollment is delivered like any other
     form (see `forms` below) and your team completes it manually. */
  checkout: {
    protect: '',      // e.g. 'https://buy.stripe.com/xxxxxxxx'
    plus: ''          // e.g. 'https://buy.stripe.com/yyyyyyyy'
  },

  /* Form delivery. Any endpoint that accepts a multipart/form-data POST
     works: Formspree (https://formspree.io/f/xxxx), Basin, Getform, Netlify
     Forms, or your own API. Notice uploads are sent as `attachments`.
     If blank, forms fall back to opening the visitor's email app addressed
     to company.email. If that is blank too, the visitor is asked to contact
     you directly. */
  forms: {
    endpoint: ''      // e.g. 'https://formspree.io/f/abcdwxyz'
  },

  /* Member portal / login. When set, every "Log in" link opens this URL
     (for example your client-portal sign-in page). */
  memberPortalUrl: '',

  /* Largest single file a member may attach when submitting a notice. */
  maxUploadMb: 10,

  /* Show Spanish automatically to visitors whose browser is set to Spanish
     (they can always switch). Set to false to default everyone to English. */
  autoDetectLanguage: true
};
