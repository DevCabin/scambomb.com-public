(function () {
  const accessKeyName = 'scambomb_resource_access';
  const bookmarkKey = 'scambomb-bookmark-' + window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const hasValidParam = params.get('resource_key_active') === 'true';
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
  
  function blockContextMenuWhileGated(e) {
    if (document.body.classList.contains('gate-is-open')) {
      e.preventDefault();
    }
  }

  document.addEventListener('contextmenu', blockContextMenuWhileGated);

  function setAccessCookie() {
    document.cookie = accessKeyName + '=true; max-age=' + (60 * 60 * 24 * 30) + '; path=/; SameSite=Lax';
  }

  function getResourceFormConfig(pathname) {
    if (pathname.includes('/resources/ai-voice-cloning-survival-guide')) {
      return {
        formId: 'kWxJbVTosuKXR0yIvSU1',
        formName: 'ScamBomb - AI Voice Cloning Survival Guide Opt-in'
      };
    }

    if (pathname.includes('/resources/phishing-link-survival-guide')) {
      return {
        formId: 'f62GQmkrmf5tSfGMzYGY',
        formName: 'ScamBomb - Phishing Link Survival Guide Opt-in'
      };
    }

    if (pathname.includes('/resources/dont-let-a-text-steal-everything')) {
      return {
        formId: 'XbTyKHKvvW1Ad6zIG1A2',
        formName: "ScamBomb - Don't Let a Text Steal Everything Opt-in"
      };
    }

    return {
      formId: 'fMvTbzE0i0SO5sTMPscV',
      formName: 'ScamBomb - Free Guide Opt-In'
    };
  }

  function showContent() {
    document.body.classList.remove('gate-is-open');
    contentEls.forEach((el) => { el.style.display = ''; });
    if (gateEl) gateEl.style.display = 'none';
  }

  function showGate() {
    document.body.classList.add('gate-is-open');
    contentEls.forEach((el) => { el.style.display = ''; });
    if (gateEl) gateEl.style.display = 'flex';
  }

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

  if (hasValidParam) {
    setAccessCookie();
    showContent();
    history.replaceState(null, '', window.location.pathname + window.location.hash);
    maybeShowBookmarkModal();
  } else if (hasAccessCookie) {
    showContent();
  } else {
    showGate();
  }

  document.querySelectorAll('[data-bookmark-close]').forEach((btn) => {
    btn.addEventListener('click', function () { closeBookmarkModal(true); });
  });
  document.querySelectorAll('[data-bookmark-dismiss]').forEach((btn) => {
    btn.addEventListener('click', function () { closeBookmarkModal(false); });
  });

  document.querySelectorAll('[data-newsletter-form]').forEach((form) => {
    const errorEl = form.parentElement.querySelector('[data-newsletter-error]');
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (errorEl) errorEl.style.display = 'none';
      const email = form.querySelector('input[name="email"]').value.trim();
      if (!/.+@.+\..+/.test(email)) {
        if (errorEl) errorEl.style.display = 'block';
        return;
      }
      
      // Determine redirect URL
      const currentPath = window.location.pathname;
      const successRedirect = currentPath + (currentPath.includes('?') ? '&' : '?') + 'resource_key_active=true';
      const formConfig = getResourceFormConfig(currentPath);

      try {
        const iframeName = 'ghl-newsletter-submit';
        let iframe = document.querySelector(`iframe[name="${iframeName}"]`);
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.name = iframeName;
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
        }

        const submitForm = document.createElement('form');
        submitForm.method = 'POST';
        submitForm.action = `https://api.leadconnectorhq.com/widget/form/${formConfig.formId}`;
        submitForm.target = iframeName;
        submitForm.style.display = 'none';

        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'email';
        emailInput.value = email;

        const firstNameInput = document.createElement('input');
        firstNameInput.type = 'hidden';
        firstNameInput.name = 'first_name';
        firstNameInput.value = 'ScamBomb';

        submitForm.appendChild(emailInput);
        submitForm.appendChild(firstNameInput);
        document.body.appendChild(submitForm);
        submitForm.submit();
        submitForm.remove();

        window.location.href = successRedirect;
      } catch (_) {
        if (errorEl) errorEl.style.display = 'block';
      }
    });
  });
})();
