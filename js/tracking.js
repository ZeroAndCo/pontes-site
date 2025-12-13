// Basic click tracking for Stripe (donation) and WhatsApp links. Adds UTMs if missing.
(function() {
  // Collect incoming UTM-like params from the current page URL
  function getIncomingParams() {
    var incoming = {};
    try {
      var src = new URL(window.location.href);
      src.searchParams.forEach(function (val, key) {
        // Forward common tracking params (utm_*, gclid, fbclid, etc.)
        if (key.startsWith('utm_') || key === 'gclid' || key === 'fbclid' || key === 'msclkid') {
          incoming[key] = val;
        }
      });
    } catch (e) {}
    return incoming;
  }

  function addStripeUtms(link) {
    try {
      var url = new URL(link.href, window.location.origin);
      var incoming = getIncomingParams();

      // Apply incoming params first (preserve any existing on the link)
      Object.keys(incoming).forEach(function (key) {
        if (!url.searchParams.has(key)) {
          url.searchParams.set(key, incoming[key]);
        }
      });

      // Ensure sensible defaults if no UTM present
      if (!url.searchParams.has('utm_source')) {
        url.searchParams.set('utm_source', 'pontes_lp');
      }
      if (!url.searchParams.has('utm_medium')) {
        url.searchParams.set('utm_medium', 'button');
      }
      if (!url.searchParams.has('utm_campaign')) {
        url.searchParams.set('utm_campaign', 'e_so_o_comeco');
      }

      link.href = url.toString();
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var cfg = window.PONTES_CONFIG || {};

    // Stripe donation buttons
    document.querySelectorAll('a[data-track="stripe"]').forEach(function (a) {
      if (cfg.STRIPE_URL && (a.getAttribute('href') || '').includes('STRIPE_URL_AQUI')) {
        a.setAttribute('href', cfg.STRIPE_URL);
      }
      addStripeUtms(a);
      a.addEventListener('click', function () {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'click_stripe', {
            event_category: 'doacao',
            event_label: 'stripe_landing_page'
          });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('trackCustom', 'DoarStripeClick', {
            placement: 'landing_page',
            campaign: 'e_so_o_comeco'
          });
        }
      });
    });

    document.querySelectorAll('a[data-track="whatsapp"]').forEach(function (a) {
      if (cfg.WHATSAPP_URL && (a.getAttribute('href') || '').includes('WHATSAPP_LINK_AQUI')) {
        a.setAttribute('href', cfg.WHATSAPP_URL);
      }
      a.addEventListener('click', function () {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'click_whatsapp', {
            event_category: 'contato',
            event_label: 'whatsapp_landing_page'
          });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('trackCustom', 'WhatsAppClick', {
            placement: 'landing_page',
            campaign: 'e_so_o_comeco'
          });
        }
      });
    });
  });
})();
