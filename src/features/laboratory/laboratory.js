export function renderLaboratory() {
  return `
    <section class="laboratory-section section-shell" id="laboratory" aria-labelledby="laboratory-title">
      <div class="page-width">
        <div class="section-heading" data-reveal>
          <div>
            <p class="section-label" data-i18n="lab.label"></p>
            <h2 id="laboratory-title" data-i18n="lab.title"></h2>
          </div>
          <p class="section-intro" data-i18n="lab.intro"></p>
        </div>
        <article class="laboratory-feature spotlight-card" data-reveal>
          <div class="laboratory-heading">
            <div>
              <p class="laboratory-project-type">WAVECORE / EXECUTIVE ANALYTICS</p>
              <h3 data-i18n="lab.project.title"></h3>
            </div>
            <div class="laboratory-actions">
              <a class="button button-primary laboratory-link" href="https://3dash-xp.vercel.app/" target="_blank" rel="noopener noreferrer">
                <span data-i18n="lab.project.cta"></span><span aria-hidden="true">↗</span>
              </a>
              <a class="social-link" href="https://github.com/pdatosqualityxp-art" target="_blank" rel="noopener noreferrer" data-i18n-aria="lab.github.aria">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <p class="laboratory-description" data-i18n="lab.project.description"></p>
          <ul class="laboratory-highlights">
            <li>
              <span class="laboratory-number">01</span>
              <div><h4 data-i18n="lab.highlight.architecture.title"></h4><p data-i18n="lab.highlight.architecture.copy"></p></div>
            </li>
            <li>
              <span class="laboratory-number">02</span>
              <div><h4 data-i18n="lab.highlight.ecosystem.title"></h4><p data-i18n="lab.highlight.ecosystem.copy"></p></div>
            </li>
            <li>
              <span class="laboratory-number">03</span>
              <div><h4 data-i18n="lab.highlight.specification.title"></h4><p data-i18n="lab.highlight.specification.copy"></p></div>
            </li>
            <li>
              <span class="laboratory-number">04</span>
              <div><h4 data-i18n="lab.highlight.ux.title"></h4><p data-i18n="lab.highlight.ux.copy"></p></div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  `;
}