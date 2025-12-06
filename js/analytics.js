// Google Analytics (GA4) initialization using config
(function() {
  var cfg = window.PONTES_CONFIG || {};
  var id = cfg.GA_MEASUREMENT_ID;
  if (!id) return;
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  gtag('config', id);
})();

// Meta Pixel initialization using config
(function() {
  var cfg = window.PONTES_CONFIG || {};
  var pixelId = cfg.META_PIXEL_ID;
  if (!pixelId) return;
  !function(f,b,e,v,n,t,s){
    if(f.fbq) return; n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
    n.queue=[]; t=b.createElement(e); t.async=!0; t.src=v;
    s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
})();
