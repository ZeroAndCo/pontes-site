// Basic click tracking for Vakinha and WhatsApp links. Adds UTMs if missing.
(function() {
  function addVakinhaUtms(link) {
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

    // Fill placeholders if present using config
    document.querySelectorAll('a[data-track="vakinha"]').forEach(function (a) {
      if (cfg.VAKINHA_URL && (a.getAttribute('href') || '').includes('VAKINHA_URL_AQUI')) {
        a.setAttribute('href', cfg.VAKINHA_URL);
      }
      addVakinhaUtms(a);
      a.addEventListener('click', function () {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'click_vakinha', {
            event_category: 'doacao',
            event_label: 'vakinha_landing_page'
          });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('trackCustom', 'DoarVakinhaClick', {
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
