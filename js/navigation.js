export function setupNavigation() {
  // Hilfsfunktion: Map optional englische targets auf tatsächliche IDs
  const targetMap = {
    "recipes": "rezepte",
    "lexica": "wissen",
    "kraeuter": "kraeuter",
    "ueber_uns": "ueber_uns"
  };

  function resolveTarget(t) {
    return targetMap[t] || t;
  }

  function removeAllActive() {
    document.querySelectorAll('.nav-item.activeItem').forEach(n => n.classList.remove('activeItem'));
  }

  function markNavItemsForTarget(targetId) {
    // markiert alle nav-items (desktop + mobile), wenn ihr dataset.target auf targetId resolved
    document.querySelectorAll('.nav-item').forEach(a => {
      const resolved = resolveTarget(a.dataset.target || '');
      if (resolved === targetId) a.classList.add('activeItem');
      else a.classList.remove('activeItem');
    });
  }

  function markFromVisibleSectionOrUrl() {
    // 1) Visible section (SPA mode)
    const visible = document.querySelector('section:not(.hidden)')?.id;
    if (visible) {
      removeAllActive();
      markNavItemsForTarget(visible);
      return;
    }

    // 2) Fallback: URL-basierte Markierung (Multi-page)
    const path = window.location.pathname || '/';
    // prüfe alle Links; match wenn href gleich oder path endet mit href
    const all = Array.from(document.querySelectorAll('.nav-item'));
    for (const a of all) {
      const href = a.getAttribute('href') || '';
      if (!href) continue;
      // Normierung: evtl. /recipes oder /recipes.html
      if (path === href || path === href + '.html' || path.endsWith(href)) {
        removeAllActive();
        a.classList.add('activeItem');
        // auch andere nav-items mit gleichem data-target markieren
        const resolved = resolveTarget(a.dataset.target || '');
        if (resolved) markNavItemsForTarget(resolved);
        return;
      }
    }

    // keine Markierung gefunden -> optional erste Nav markieren (nicht nötig)
  }

  // Desktop-Navigation
  const navButtons = document.querySelectorAll('.header_nav_desktop .nav-item');
  if (navButtons && navButtons.length) {
    navButtons.forEach(n => {
      n.addEventListener('click', function (e) {
        const targetId = resolveTarget(this.dataset.target);
        const section = document.getElementById(targetId);
        // wenn Section existiert: SPA-Verhalten
        if (section) {
          e.preventDefault();
          navButtons.forEach(btn => btn.classList.remove('activeItem'));
          this.classList.add('activeItem');
          showSection(targetId);
        } else {
          // Section nicht vorhanden -> erlauben Navigation
        }
      });
    });
  }

  // Burger + Mobile
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.header_nav_mobile');

  if (!burger) console.warn('setupNavigation: .burger not found');
  if (!mobileNav) console.warn('setupNavigation: .header_nav_mobile not found');

  const mobileButtons = document.querySelectorAll('.header_nav_mobile .nav-item');
  if (mobileButtons && mobileButtons.length) {
    mobileButtons.forEach(n => {
      n.addEventListener('click', function (e) {
        const targetId = resolveTarget(this.dataset.target);
        const section = document.getElementById(targetId);
        if (section) {
          e.preventDefault();
          mobileButtons.forEach(btn => btn.classList.remove('activeItem'));
          this.classList.add('activeItem');
          if (mobileNav) mobileNav.classList.remove('open');
          if (burger) burger.setAttribute('aria-expanded', 'false');
          showSection(targetId);
        } else {
          // keine Section -> lassen navigieren (Server)
        }
      });
    });
  }

  if (burger && mobileNav) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      mobileNav.classList.toggle('open');
      const opened = mobileNav.classList.contains('open');
      burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
      if (opened) mobileNav.querySelector('.nav-item')?.focus();
      console.log('burger clicked, open=', opened);
    });
  }

  // initial setzen (beim Setup aufrufen)
  markFromVisibleSectionOrUrl();
}

function showSection(target) {
  // Alle Sections verstecken
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  // Passende Section anzeigen
  const section = document.getElementById(target);
  if (section) section.classList.remove('hidden');
}



