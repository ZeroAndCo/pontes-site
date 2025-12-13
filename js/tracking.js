// Basic click tracking for Stripe (donation) and WhatsApp links. Adds UTMs if missing.
(function() {
  function addStripeUtms(link) {
    try {
      var url = new URL(link.href, window.location.origin);
      if (!url.searchParams.has('utm_source')) {
        url.searchParams.set('utm_source', 'pontes_lp');
        url.searchParams.set('utm_medium', 'button');
        url.searchParams.set('utm_campaign', 'e_so_o_comeco');
        link.href = url.toString();
      }
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
