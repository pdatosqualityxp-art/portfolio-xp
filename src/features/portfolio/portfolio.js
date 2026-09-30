import { renderLaboratory } from "../laboratory/laboratory.js";

export function renderPortfolio() {
  return `
    <main id="top">
      <section class="hero page-width" aria-labelledby="hero-title">
        <div class="hero-copy" data-reveal>
          <p class="eyebrow"><span class="status-dot"></span><span data-i18n="hero.eyebrow"></span></p>
          <h1 id="hero-title" data-i18n="hero.title"></h1>
          <p class="hero-description" data-i18n="hero.description"></p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects"><span data-i18n="hero.ctaProjects"></span><span aria-hidden="true">↘</span></a>
            <a class="text-link" href="#contact"><span data-i18n="hero.ctaContact"></span><span aria-hidden="true">↗</span></a>
          </div>
          <div class="hero-meta">
            <span><span class="meta-icon" aria-hidden="true">⌖</span><span data-i18n="hero.location"></span></span>
            <span><span class="availability-dot"></span><span data-i18n="hero.availability"></span></span>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true" data-reveal>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="orbit-core"><span>XP</span><i></i></div>
          <span class="orbit-label orbit-label-top">SOFTWARE</span>
          <span class="orbit-label orbit-label-bottom">IN MOTION</span>
          <span class="orbit-node orbit-node-one"></span>
          <span class="orbit-node orbit-node-two"></span>
        </div>
        <a class="scroll-cue" href="#about"><span class="scroll-line"></span><span>SCROLL TO EXPLORE</span></a>
      </section>

      <section class="about-section section-shell" id="about" aria-labelledby="about-title">
        <div class="page-width about-layout" data-reveal>
          <p class="section-label" data-i18n="about.label"></p>
          <div class="about-copy">
            <h2 id="about-title" data-i18n="about.title"></h2>
            <p data-i18n="about.copy"></p>
          </div>
          <div class="about-signature" aria-hidden="true">X<span>P</span></div>
        </div>
      </section>

      <section class="projects-section section-shell" id="projects" aria-labelledby="projects-title">
        <div class="page-width">
          <div class="section-heading" data-reveal>
            <div><p class="section-label" data-i18n="projects.label"></p><h2 id="projects-title" data-i18n="projects.title"></h2></div>
            <p class="section-intro" data-i18n="projects.intro"></p>
          </div>
          <div class="project-grid">
            <article class="project-card spotlight-card" data-reveal>
              <div class="project-topline"><span class="project-index">01</span><span class="project-symbol" aria-hidden="true">✳</span></div>
              <p class="project-type" data-i18n="projects.tst.type"></p>
              <h3 data-i18n="projects.tst.title"></h3>
              <p class="project-description" data-i18n="projects.tst.description"></p>
              <div class="project-bottom"><span class="project-metric" data-i18n="projects.tst.metric"></span><span class="project-arrow" aria-hidden="true">↗</span></div>
              <div class="project-tech"><span>Flutter</span><span>Firebase</span><span>AI</span></div>
            </article>
            <article class="project-card spotlight-card" data-reveal>
              <div class="project-topline"><span class="project-index">02</span><span class="project-symbol symbol-cool" aria-hidden="true">⌘</span></div>
              <p class="project-type" data-i18n="projects.erp.type"></p>
              <h3 data-i18n="projects.erp.title"></h3>
              <p class="project-description" data-i18n="projects.erp.description"></p>
              <div class="project-bottom"><span class="project-metric" data-i18n="projects.erp.metric"></span><span class="project-arrow" aria-hidden="true">↗</span></div>
              <div class="project-tech"><span>C#</span><span>SQL Server</span><span>Automation</span></div>
            </article>
            <article class="project-card spotlight-card" data-reveal>
              <div class="project-topline"><span class="project-index">03</span><span class="project-symbol symbol-violet" aria-hidden="true">◉</span></div>
              <p class="project-type" data-i18n="projects.smartia.type"></p>
              <h3 data-i18n="projects.smartia.title"></h3>
              <p class="project-description" data-i18n="projects.smartia.description"></p>
              <div class="project-bottom"><span class="project-metric" data-i18n="projects.smartia.metric"></span><span class="project-arrow" aria-hidden="true">↗</span></div>
              <div class="project-tech"><span>Python</span><span>MySQL</span><span>IoT</span></div>
            </article>
          </div>
        </div>
      </section>

      <section class="skills-section section-shell" id="skills" aria-labelledby="skills-title">
        <div class="page-width skills-layout">
          <div class="skills-heading" data-reveal><p class="section-label" data-i18n="skills.label"></p><h2 id="skills-title" data-i18n="skills.title"></h2><p data-i18n="skills.copy"></p></div>
          <div class="skills-content" data-reveal>
            <div class="skill-group"><h3 data-i18n="skills.groupArchitecture"></h3><div class="skill-list"><span>Microservices</span><span>Clean Architecture</span><span>IoT</span><span>Security · GDPR</span></div></div>
            <div class="skill-group"><h3 data-i18n="skills.groupDevelopment"></h3><div class="skill-list"><span>Flutter</span><span>C#</span><span>JavaScript</span><span>Node.js</span><span>Python</span><span>PHP</span></div></div>
            <div class="skill-group"><h3 data-i18n="skills.groupPlatforms"></h3><div class="skill-list"><span>Firebase</span><span>SQL Server</span><span>MySQL</span><span>Power BI</span></div></div>
            <div class="education-note"><p class="education-label" data-i18n="skills.educationLabel"></p><p data-i18n="skills.education"></p><div class="tool-list"><span>VS Code</span><span>GitHub Copilot</span><span>Claude</span><span>Gemini</span><span>Ollama</span></div></div>
          </div>
        </div>
      </section>

      ${renderLaboratory()}

      <section class="contact-section section-shell" id="contact" aria-labelledby="contact-title">
        <div class="page-width contact-inner spotlight-card" data-reveal>
          <p class="section-label" data-i18n="contact.label"></p>
          <h2 id="contact-title" data-i18n="contact.title"></h2>
          <p class="contact-copy" data-i18n="contact.copy"></p>
          <div class="contact-actions">
            <a class="button button-primary" href="mailto:"><span data-i18n="contact.cta"></span><span aria-hidden="true">↗</span></a>
            <a class="social-link" href="https://www.linkedin.com/in/xavier-perez-corominas/" target="_blank" rel="noopener noreferrer" data-i18n-aria="contact.linkedin.aria">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer"><div class="page-width footer-inner"><a class="footer-brand" href="#top">X<span>P</span></a><p data-i18n="footer.note"></p><span>© Xavier Pérez</span></div></footer>
  `;
}