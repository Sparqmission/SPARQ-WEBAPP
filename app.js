i18next
  .use(i18nextHttpBackend)
  .init({
    lng: "en",
    fallbackLng: "en",
    backend: {
      loadPath: "locales/{{lng}}.json"
    }
  }, function(err, t) {
    updateContent();
  });

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = i18next.t(key);
  });
}

document.getElementById("language-select").addEventListener("change", function () {
  const lang = this.value;
  i18next.changeLanguage(lang, updateContent);
});