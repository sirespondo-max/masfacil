// URL de venta facilitada por el titular. Los enlaces HTML también funcionan sin JavaScript.
const DOMAIN_SALE_URL = "https://sedo.com/checkout/payment/?source=buynow&funnel=search_results&identifier=masfacil.es&trackingRequestId=2614284682";

document.querySelectorAll("[data-sale-link]").forEach((link) => {
  link.href = DOMAIN_SALE_URL;
});

// Abre el aviso cuando se accede a su enlace interno.
function revealPrivacy() {
  if (window.location.hash === "#privacidad") {
    document.getElementById("privacidad").open = true;
  }
}
window.addEventListener("hashchange", revealPrivacy);
revealPrivacy();
