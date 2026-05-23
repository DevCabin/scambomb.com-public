(function () {
  // ScamBomb Command Center access gating
  // - Requires cc=1 and a rotating key `k`
  // - Sets cookie for access persistence
  // - Cleans URL after validation
  // NOTE: This is best-effort client-side gating (not true auth).

  const COOKIE_NAME = 'scambomb_cc_access';
  const COOKIE_MAX_AGE_DAYS = 30;

  // Rotate monthly (or whenever) by changing this value.
  // Example format: YYYYMM_<random>
  const CURRENT_ACCESS_KEY = '202605_X9Q3P7';

  const params = new URLSearchParams(window.location.search);
  const hasValidParams = params.get('cc') === '1' && params.get('k') === CURRENT_ACCESS_KEY;
  const hasAccessCookie = document.cookie.split(';').some((c) => c.trim() === COOKIE_NAME + '=true');

  function setAccessCookie() {
    const maxAgeSeconds = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
    document.cookie = `${COOKIE_NAME}=true; max-age=${maxAgeSeconds}; path=/; SameSite=Lax`;
  }

  function cleanupUrl() {
    // Remove params but keep hash
    history.replaceState(null, '', window.location.pathname + window.location.hash);
  }

  function show(el) {
    if (!el) return;
    el.style.display = '';
  }

  function hide(el) {
    if (!el) return;
    el.style.display = 'none';
  }

  const contentEl = document.querySelector('[data-cc-content]');
  const lockEl = document.querySelector('[data-cc-lock]');

  if (hasValidParams) {
    setAccessCookie();
    cleanupUrl();
    show(contentEl);
    hide(lockEl);
    return;
  }

  if (hasAccessCookie) {
    show(contentEl);
    hide(lockEl);
    return;
  }

  hide(contentEl);
  show(lockEl);
})();
