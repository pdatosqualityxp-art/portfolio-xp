# AGENTS.md — Especificaciones del Portfolio de Xavier Pérez Corominas

Este documento define las directrices arquitectónicas, de diseño, funcionales y de contenido para el desarrollo del portfolio profesional de Xavier Pérez Corominas. Cualquier agente de IA (GitHub Copilot, Cursor, etc.) debe seguir estrictamente estas especificaciones al generar o modificar código en este repositorio.

---

## 1. Stack Tecnológico y Arquitectura (Feature-Driven Architecture)

### 1.1. Principios de Arquitectura
- **Estructura:** Arquitectura orientada a características (*Feature-Driven Architecture*), separando claramente la lógica de negocio, configuración, componentes visuales y pasarelas de datos/traducciones.
- **Capa Superior de Diseño (Configuración Centralizada):** 
  - Todos los tokens de diseño (colores, paletas, tipografías, variables de brillo/glow, espaciados y breakpoints) deben centralizarse en un único entorno o módulo de configuración superior (ej: `src/config/theme.ts` o variables CSS globales). 
  - Modificar los aspectos visuales generales debe ser posible desde este punto centralizado sin alterar los componentes individuales.

### 1.2. Estructura de Carpetas Recomendada
```text
src/
├── config/             # Capa superior: Tokens de diseño, constantes globales
├── core/               # Lógica global, i18n (traducciones), estados globales (tema, idioma)
├── features/           # Funcionalidades orientadas a features
│   ├── hero/           # Sección principal / Presentación
│   ├── projects/       # Proyectos (TST, ERP, Smartia)
│   ├── skills/         # Skills, Máster IA y Ecosistema
│   └── contact/        # Formulario o datos de contacto
├── shared/             # Componentes UI reutilizables (botones, tarjetas, efectos glow)
└── App.tsx / main.tsx
```
## 2. Diseño y Estética (UI/UX Inspirado en Referencia)

- **Estética General:** Web portfolio moderna, limpia y de alta gama visual para reclutadores IT.
- **Tema y Modos:** 
  - Soporte para **Modo Oscuro** y **Modo Claro**.
  - **Por defecto:** La aplicación debe arrancar **siempre en Modo Oscuro**.
  - El botón de cambio de modo (toggle) estará ubicado de forma accesible en la barra superior.
- **Barra Superior (Navbar):** 
  - Fija/Sticky con diseño minimalista.
  - Logo o iniciales a la izquierda, menú de navegación centrado, selector de idioma con desplegable moderno y botón de cambio de tema.
- **Micro-interacciones y Animaciones:**
  - Ligeros movimientos fluidos (*smooth hover effects* y animaciones de revelado al hacer scroll) en tarjetas y tipografías.
  - Efectos de brillo dinámico (*glow/spotlight effect*) en los fondos de los apartados, componentes y tarjetas principales.

---

## 3. Internacionalización (Multi-idioma)
- **Idiomas soportados:** 
  1. Español (`es`) — *Idioma por defecto*.
  2. Català (`ca`).
  3. English (`en`).
- **Implementación:** Selector de idioma en la barra superior mediante un desplegable moderno que actualice reactivamente todo el texto del portfolio sin recargar la página.

---

## 4. Contenido y Contexto Profesional

El portfolio pertenece a **Xavier Pérez Corominas**[cite: 1], con el rol de **Arquitecto de Software y Desarrollador | IT Project Manager**[cite: 1]. Los datos deben extraerse rigurosamente de su CV[cite: 1] y Portfolio[cite: 2]:

### 4.1. Proyectos Destacados
1. **TST (Technical Service Tool) — Quality Espresso**[cite: 2]:
   - Plataforma integral para técnicos de campo desplegada en 50+ países para más de 1.000 usuarios[cite: 2]. Centraliza documentación, soporte SAT, IA generativa (asistente conversacional) y seguridad RBAC[cite: 2]. *(Tech: Flutter, Firebase, IA)*[cite: 2].
2. **Optimización y Desarrollo en ERP — Quality Espresso**[cite: 2]:
   - Liderazgo en transformación digital, automatización de procesos críticos y reducción del 40% en tiempos de ejecución mediante módulos a medida y sincronización de datos[cite: 2]. *(Tech: C#, Microsoft SQL Server, Automatización)*[cite: 2].
3. **Smartia (Plataforma IoT) — Quality Espresso**[cite: 2]:
   - Ecosistema pionero de control remoto 24/7 y telemetría para máquinas de café espresso profesionales (Gaggia, Futurmat, Visacrem)[cite: 2]. Analítica de datos y reporting B2B[cite: 2]. *(Tech: Python, MySQL, IoT, Integración hardware-cloud)*[cite: 2].

### 4.2. Apartado "Skills, Formación y Máster con IA"
- **Stack Tecnológico:** Flutter, C#, JavaScript, Node.js, Python, PHP, Firebase, SQL Server, MySQL, Microservicios, Clean Architecture, IoT, Power BI, Seguridad (CISO, GDPR)[cite: 1].
- **Formación Actual Destacada (Máster con IA)**[cite: 1]:
  - Actualmente cursando **Máster Universitario en Desarrollo con IA y Arquitectura de Software** en BIG School[cite: 1].
  - **Contexto del Máster a reflejar:** Selección de las mejores herramientas y guía en la elección correcta, diseño de arquitectura, conexión de IA con datos (RAG), validación con tests y despliegue a producción. Fomento de menos tareas manuales, menor deuda técnica y más releases orientadas a KPIs.
  - **Ecosistema de trabajo:** VS Code, Cursor, GitHub Copilot, Claude, Gemini, ChatGPT, Ollama, Hugging Face, etc.
  - **Hoja de ruta integrada:** 
    - Fase 1: Fundamentos del desarrollo de software y pensamiento lógico.
    - Fase 2: Desarrollo con Inteligencia Artificial (herramientas en equipo, flujos avanzados).
    - Fase 3: Integración de ambos conocimientos (supervisión de seguridad y calidad).
    - Fase 4: Desarrollo de proyectos reales (liderazgo, reinvención de rol y lanzamiento de software).

---

## 5. Objetivo del Producto
- Impactar a reclutadores IT y perfiles técnicos con una combinación perfecta de diseño visual de vanguardia y rigor técnico-arquitectónico, manteniendo la información concisa, elegante y directa al valor profesional.