// Single source of truth for the "Get Protect Plus" checkout link.
//
// This site has no build step (static .dc.html + support.js, no bundler),
// so a real environment variable can never reach the page at request time
// the way it would in a normal app -- this file plays that role instead.
// Set CHECKOUT_URL once the GHL Store/checkout page (see the dashboard
// repo's docs/superpowers/plans/2026-09-16-phase-c-signup-billing.md,
// Manual verification) is published, then leave this file alone; nothing
// else needs to change.
window.IRS_PROTECT_CONFIG = {
  CHECKOUT_URL: '',
  // The dashboard's origin (same no-build-step reasoning as above). Local
  // dev: the Vercel dev server URL, with the dashboard's .env.local
  // MARKETING_SITE_ORIGIN set to whatever origin serves this site.
  API_BASE: 'https://irs-protect-dashboard.vercel.app',
};
