(function () {
  const accessKeyName = 'scambomb_resource_access';
  const bookmarkKey = 'scambomb-bookmark-' + window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const hasValidParam = params.get('resource_key_active') === 'true';
  const hasOptedIn = params.get('opted_in') === 'true';
  const hasAccessCookie = document.cookie.includes(accessKeyName + '=true');
  const contentEls = [
    document.querySelector('.cover'),
    document.querySelector('.content'),
    document.querySelector('.page-footer'),
    document.querySelector('.print-cta-wrap'),
    document.querySelector('main.wrap'),
    document.querySelector('footer.page-footer')
  ].filter(Boolean);
  const gateEl = document.getElementById('resource-gate');
  const bookmarkModal = document.getElementById('bookmark-modal');

  var unlocked = false;
  var scrollListenerAttached = false;

  function isFacebookPaidTraffic() {
    const utmSource = (params.get('utm_source') || '').toLowerCase();
    const utmMedium = (params.get('utm_medium') || '').toLowerCase();
    return params.has('fbclid') ||
           utmSource === 'facebook' ||
           utmSource === 'fb' ||
           utmMedium === 'paid' ||
           utmMedium === 'cpc';
  }

  function setAccessCookie() {
    document.cookie = accessKeyName + '=true; max-age=' + (60 * 60 * 24 * 30) + '; path=/; SameSite=Lax';
  }

  function unlockPage() {
    if (unlocked) return;
    unlocked = true;
    setAccessCookie();
    showContent();
    if (scrollListenerAttached) {
      window.removeEventListener('scroll', onScroll, { passive: true });
      scrollListenerAttached = false;
    }
  }

  function showContent() {
    document.body.classList.remove('gate-is-open');
    contentEls.forEach((el) => { el.style.display = ''; });
    if (gateEl) gateEl.style.display = 'none';
  }

  function showGate() {
    document.body.classList.add('gate-is-open');
    if (gateEl) {
      gateEl.style.display = 'flex';
      gateEl.querySelectorAll('iframe[data-src]').forEach(function (iframe) {
        if (iframe.src) return;
        iframe.src = iframe.getAttribute('data-src');
        // Fallback: if GHL redirects the iframe on submit the iframe fires a second load event.
        var initialLoad = false;
        iframe.addEventListener('load', function () {
          if (!initialLoad) { initialLoad = true; return; }
          unlockPage();
        });
      });
      // Inject form_embed.js now (after iframe src is set) so GHL's bridge
      // script can initialize and fire postMessage on form submit.
      if (!document.querySelector('script[src*="form_embed"]')) {
        var s = document.createElement('script');
        s.src = 'https://link.msgsndr.com/js/form_embed.js';
        s.async = true;
        document.body.appendChild(s);
      }
    }
  }

  function onScroll() {
    if (unlocked) return;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    var scrolled = window.scrollY / docHeight;
    if (scrolled >= 0.5) {
      showGate();
    }
  }

  function attachScrollListener() {
    if (scrollListenerAttached) return;
    scrollListenerAttached = true;
    window.addEventListener('scroll', onScroll, { passive: true });
    // Check immediately in case page is already scrolled past 50% on load.
    onScroll();
  }

  // Comprehensive GHL postMessage listener.
  // GHL forms fire messages from various domains and in both object and
  // stringified-JSON formats depending on version and configuration.
  window.addEventListener('message', function (e) {
    try {
      if (!e || !e.origin) return;
      var hostname = '';
      try { hostname = new URL(e.origin).hostname; } catch (_) { return; }
      if (!/leadconnectorhq\.com$|msgsndr\.com$|gohighlevel\.com$/.test(hostname)) return;

      var d = e.data || {};
      if (typeof d === 'string') {
        try { d = JSON.parse(d); } catch (_) { d = {}; }
      }
      var rawStr = typeof e.data === 'string' ? e.data.toLowerCase() : '';
      var type = (d.type || d.event || d.eventType || d.name || d.action || '').toString().toLowerCase();

      var ok = false;
      if (type.includes('submit') || type.includes('success') || type.includes('complete') ||
          type.includes('form-submission') || type.includes('formsubmission')) ok = true;
      if (rawStr.includes('submit') || rawStr.includes('form_submission') || rawStr.includes('success')) ok = true;
      if (d.formSubmitted === true || d.submitted === true || d.success === true || d.isSubmitted === true) ok = true;
      if (ok) unlockPage();
    } catch (_) {}
  });

  function blockContextMenuWhileGated(e) {
    if (document.body.classList.contains('gate-is-open')) {
      e.preventDefault();
    }
  }

  document.addEventListener('contextmenu', blockContextMenuWhileGated);

  function maybeShowBookmarkModal() {
    if (!bookmarkModal) return;
    if (window.localStorage.getItem(bookmarkKey) === 'dismissed') return;
    bookmarkModal.classList.add('is-open');
    bookmarkModal.setAttribute('aria-hidden', 'false');
  }

  function closeBookmarkModal(remember) {
    if (!bookmarkModal) return;
    if (remember) window.localStorage.setItem(bookmarkKey, 'dismissed');
    bookmarkModal.classList.remove('is-open');
    bookmarkModal.setAttribute('aria-hidden', 'true');
  }

  // Entry flow:
  // 1. Already unlocked (param, cookie, or opted_in) -> show content.
  // 2. Facebook paid traffic -> unlock immediately so gate never appears.
  // 3. Everyone else -> show content, gate appears after 50% scroll.
  if (hasValidParam || hasOptedIn || hasAccessCookie) {
    if (hasValidParam || hasOptedIn) setAccessCookie();
    showContent();
    if (hasValidParam) {
      history.replaceState(null, '', window.location.pathname + window.location.hash);
      maybeShowBookmarkModal();
    } else if (hasOptedIn) {
      maybeShowBookmarkModal();
    }
  } else if (isFacebookPaidTraffic()) {
    unlockPage();
  } else {
    showContent();
    attachScrollListener();
  }

  document.querySelectorAll('[data-bookmark-close]').forEach((btn) => {
    btn.addEventListener('click', function () { closeBookmarkModal(true); });
  });
  document.querySelectorAll('[data-bookmark-dismiss]').forEach((btn) => {
    btn.addEventListener('click', function () { closeBookmarkModal(false); });
  });
})();
