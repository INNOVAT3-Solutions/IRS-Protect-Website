/* ==========================================================================
   IRS Protect Plus — site configuration
   This is the only file you need to edit to connect the site to your
   business. Every value is optional; the site degrades gracefully when a
   value is blank (forms fall back to email, contact rows hide, etc.).
   ========================================================================== */
window.SITE_CONFIG = {

  /* Company details shown on the Contact page, in the legal pages and in
     email fallbacks. Leave a value blank to hide that row. */
  company: {
    name: 'Best Vision Accounting',
    legalName: 'Best Vision Accounting, LLC',
    url: '',          // e.g. 'https://www.bestvisionaccounting.com'
    email: '',        // e.g. 'hello@bestvisionaccounting.com'  (also the email fallback for forms)
    phone: '',        // e.g. '(305) 555-0199'
    hours: '',        // e.g. 'Lun–Vie, 9am–6pm ET'
    address: ''       // e.g. '123 Main St, Suite 200, Miami, FL 33130'
  },

  /* The single membership offered. Shown in the enrollment summary. */
  plan: { name: 'IRS Protect Plus', price: 19.99 },

  /* Hosted checkout link. A Stripe Payment Link works out of the box (the
     member's email and a reference ID are appended). When set, enrollment
     sends the member here after they confirm; when blank, the enrollment is
     delivered like any other form and your team completes it manually. */
  checkoutUrl: '',    // e.g. 'https://buy.stripe.com/xxxxxxxx'

  /* Form delivery. Any endpoint that accepts a multipart/form-data POST
     works: Formspree, Basin, Getform, Netlify Forms or your own API.
     Notice uploads are sent as `attachments`. If blank, forms fall back to
     opening the visitor's email app addressed to company.email. If that is
     blank too, the visitor is asked to contact you directly. */
  forms: {
    endpoint: ''      // e.g. 'https://formspree.io/f/abcdwxyz'
  },

  /* Member portal / login. When set, every "Iniciar sesión" link opens it. */
  memberPortalUrl: '',

  /* Largest single file a member may attach when submitting a notice. */
  maxUploadMb: 10,

  /* Language. Spanish is the default; visitors can switch to English with
     the EN/ES toggle and their choice is remembered. Set autoDetectLanguage
     to true to show English automatically to browsers set to English. */
  defaultLanguage: 'es',
  autoDetectLanguage: false
};
