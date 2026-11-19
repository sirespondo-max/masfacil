// URL de venta facilitada por el titular. Los enlaces HTML también funcionan sin JavaScript.
const DOMAIN_SALE_URL = "https://sedo.com/search/?language=es&keyword=masfacil";

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
