export function renderNavbar() {
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#top" aria-label="Xavier Pérez">
          <span class="brand-mark">X<span class="brand-dot">P</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-i18n-aria="nav.menu">
          <span></span><span></span>
        </button>
        <nav class="primary-navigation" id="primary-navigation" data-i18n-aria="nav.navigation">
          <a href="#about" data-i18n="nav.about"></a>
          <a href="#projects" data-i18n="nav.projects"></a>
          <a href="#skills" data-i18n="nav.skills"></a>
          <a href="#laboratory" data-i18n="nav.lab"></a>
          <a href="#contact" data-i18n="nav.contact"></a>
        </nav>
        <div class="header-actions">
          <label class="visually-hidden" for="language-select" data-i18n="nav.language"></label>
          <select class="language-select" id="language-select">
            <option value="es">ES</option>
            <option value="ca">CA</option>
            <option value="en">EN</option>
          </select>
          <button class="theme-toggle" type="button" aria-pressed="false" data-i18n-aria="nav.themeLight">
            <span class="theme-icon" aria-hidden="true">☼</span>
          </button>
        </div>
      </div>
    </header>
  `;
}