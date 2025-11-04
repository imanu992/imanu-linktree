document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();

  yearSpan.textContent = currentYear;

  const banner = document.getElementById("cookieBanner");
  const overlay = document.getElementById("cookieOverlay");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");

  const cookieConsent = localStorage.getItem("cookieConsent");

  function showBanner() {
    banner.classList.add("show");
    overlay.classList.add("active");
    document.documentElement.classList.add("no-scroll"); // oppure body
  }

  function hideBanner() {
    banner.classList.remove("show");
    overlay.classList.remove("active");
    document.documentElement.classList.remove("no-scroll");
  }

  if (!cookieConsent) {
    setTimeout(showBanner, 800);
  }

  // esegui il caricamento degli script condizionali
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    hideBanner();
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    hideBanner();
  });

  // previene che il click sull'overlay chiuda il banner
  overlay.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
