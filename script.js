document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookies = document.getElementById("accept-cookies");
  const declineCookies = document.getElementById("decline-cookies");

  // Función para ocultar el banner y almacenar la decisión
  function setCookieConsent(consent) {
    localStorage.setItem("cookieConsent", consent);
    cookieBanner.style.display = "none";
  }

  // Eventos de los botones
  acceptCookies.addEventListener("click", () => setCookieConsent("accepted"));
  declineCookies.addEventListener("click", () => setCookieConsent("declined"));

  // Mostrar el banner solo si no hay decisión previa
  if (!localStorage.getItem("cookieConsent")) {
    cookieBanner.style.display = "flex";
  } else {
    cookieBanner.style.display = "none";
  }
});
