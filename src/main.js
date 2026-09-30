import { applyTranslations, setLanguage, subscribeToLanguage } from "./core/i18n.js";
import { renderNavbar } from "./features/navigation/navbar.js";
import { renderPortfolio } from "./features/portfolio/portfolio.js";
import { initializeInteractions } from "./shared/interactions.js";

const app = document.querySelector("#app");
app.innerHTML = `${renderNavbar()}${renderPortfolio()}`;

const languageSelect = document.querySelector("#language-select");
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

document.documentElement.dataset.theme = "dark";
applyTranslations(app);
subscribeToLanguage(() => applyTranslations(app));

languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.dataset.theme === "light";
  document.documentElement.dataset.theme = isLight ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(!isLight));
  themeToggle.dataset.i18nAria = isLight ? "nav.themeLight" : "nav.themeDark";
  applyTranslations(themeToggle.parentElement);
  themeToggle.querySelector(".theme-icon").textContent = isLight ? "☼" : "◐";
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("is-open", !expanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

initializeInteractions();