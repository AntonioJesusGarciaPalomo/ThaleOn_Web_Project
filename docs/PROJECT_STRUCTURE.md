# 📁 ThaleOn Web Platform - Estructura del Proyecto

## Visión General

Esta estructura está diseñada para una plataforma web profesional, escalable y mantenible. Sigue principios de separación de concerns, optimización para SEO, y facilita el trabajo en equipo.

---

## 🗂️ Estructura de Carpetas

```
Web/
│
├── 📄 index.html                    # Landing page principal
├── 📄 robots.txt                    # Instrucciones para crawlers
├── 📄 sitemap.xml                   # Mapa del sitio para SEO
├── 📄 humans.txt                    # Créditos del equipo (opcional)
├── 📄 .htaccess                     # Configuración Apache (si aplica)
├── 📄 _redirects                    # Redirects para Netlify/Vercel
├── 📄 404.html                      # Página de error personalizada
├── 📄 manifest.json                 # PWA manifest
├── 📄 browserconfig.xml             # Configuración tiles Windows
│
├── 📁 assets/                       # Recursos estáticos
│   │
│   ├── 📁 images/                   # Imágenes del sitio
│   │   ├── 📁 brand/                # Logos y branding
│   │   │   ├── ThaleOn_logo.jpg
│   │   │   ├── ThaleOn_logo.svg     # Versión vectorial (preferida)
│   │   │   ├── ThaleOn_logo_white.svg
│   │   │   ├── ThaleOn_logo_dark.svg
│   │   │   ├── ThaleOn_icon.svg     # Icono simplificado
│   │   │   └── ThaleOn_wordmark.svg # Solo texto
│   │   │
│   │   ├── 📁 hero/                 # Imágenes hero/banner
│   │   │   ├── hero-pattern.svg
│   │   │   └── hero-bg.webp
│   │   │
│   │   ├── 📁 team/                 # Fotos del equipo
│   │   │   ├── founder.webp
│   │   │   └── founder-2x.webp      # Versión retina
│   │   │
│   │   ├── 📁 services/             # Iconos/imágenes de servicios
│   │   │   ├── optimization.svg
│   │   │   ├── machine-learning.svg
│   │   │   └── consulting.svg
│   │   │
│   │   ├── 📁 academy/              # Thumbnails de lecciones
│   │   │   ├── gradient-descent.svg
│   │   │   ├── backpropagation.svg
│   │   │   └── attention.svg
│   │   │
│   │   ├── 📁 blog/                 # Imágenes de posts (futuro)
│   │   │   └── .gitkeep
│   │   │
│   │   ├── 📁 og/                   # Open Graph images
│   │   │   ├── og-default.jpg       # 1200x630px
│   │   │   ├── og-academy.jpg
│   │   │   └── og-services.jpg
│   │   │
│   │   └── 📁 misc/                 # Otras imágenes
│   │       ├── pattern-grid.svg
│   │       └── noise-texture.png
│   │
│   ├── 📁 icons/                    # Iconos y favicons
│   │   ├── favicon.ico              # Legacy favicon
│   │   ├── favicon.svg              # Modern favicon
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon-96x96.png
│   │   ├── apple-touch-icon.png     # 180x180
│   │   ├── apple-touch-icon-precomposed.png
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── mstile-150x150.png       # Windows tiles
│   │   ├── safari-pinned-tab.svg    # Safari pinned tab
│   │   │
│   │   └── 📁 svg/                  # Iconos SVG reutilizables
│   │       ├── arrow-right.svg
│   │       ├── menu.svg
│   │       ├── close.svg
│   │       ├── github.svg
│   │       ├── linkedin.svg
│   │       ├── twitter.svg
│   │       ├── email.svg
│   │       ├── external-link.svg
│   │       └── ...
│   │
│   ├── 📁 fonts/                    # Fuentes locales (si self-hosted)
│   │   ├── 📁 cormorant-garamond/
│   │   │   ├── CormorantGaramond-Light.woff2
│   │   │   ├── CormorantGaramond-Regular.woff2
│   │   │   ├── CormorantGaramond-Medium.woff2
│   │   │   ├── CormorantGaramond-LightItalic.woff2
│   │   │   └── ...
│   │   │
│   │   ├── 📁 inter/
│   │   │   ├── Inter-Light.woff2
│   │   │   ├── Inter-Regular.woff2
│   │   │   ├── Inter-Medium.woff2
│   │   │   └── ...
│   │   │
│   │   ├── 📁 ibm-plex-mono/
│   │   │   ├── IBMPlexMono-Light.woff2
│   │   │   ├── IBMPlexMono-Regular.woff2
│   │   │   ├── IBMPlexMono-Medium.woff2
│   │   │   └── ...
│   │   │
│   │   └── fonts.css                # @font-face declarations
│   │
│   ├── 📁 videos/                   # Videos (si los hay)
│   │   └── .gitkeep
│   │
│   └── 📁 documents/                # PDFs, whitepapers, etc.
│       ├── ThaleOn-Brochure.pdf
│       ├── privacy-policy.pdf
│       └── terms-of-service.pdf
│
├── 📁 css/                          # Hojas de estilo
│   │
│   ├── 📄 main.css                  # Archivo principal (imports)
│   │
│   ├── 📁 base/                     # Estilos fundamentales
│   │   ├── _reset.css               # CSS Reset/Normalize
│   │   ├── _variables.css           # Custom properties
│   │   ├── _typography.css          # Tipografía base
│   │   ├── _utilities.css           # Clases utilitarias
│   │   └── _animations.css          # Keyframes globales
│   │
│   ├── 📁 layout/                   # Estructura y layout
│   │   ├── _grid.css                # Sistema de grid
│   │   ├── _container.css           # Contenedores
│   │   ├── _header.css              # Navegación/header
│   │   ├── _footer.css              # Footer
│   │   └── _sections.css            # Secciones genéricas
│   │
│   ├── 📁 components/               # Componentes reutilizables
│   │   ├── _buttons.css             # Botones
│   │   ├── _cards.css               # Tarjetas
│   │   ├── _forms.css               # Formularios
│   │   ├── _modals.css              # Modales
│   │   ├── _tooltips.css            # Tooltips
│   │   ├── _loader.css              # Loader/spinner
│   │   ├── _cursor.css              # Cursor personalizado
│   │   └── _tags.css                # Tags/badges
│   │
│   ├── 📁 pages/                    # Estilos específicos de páginas
│   │   ├── _home.css                # Landing page
│   │   ├── _academy.css             # Página de academia
│   │   ├── _services.css            # Página de servicios
│   │   ├── _about.css               # Sobre nosotros
│   │   ├── _contact.css             # Contacto
│   │   ├── _blog.css                # Blog
│   │   └── _404.css                 # Error page
│   │
│   ├── 📁 vendors/                  # CSS de terceros (si los hay)
│   │   └── .gitkeep
│   │
│   └── 📄 critical.css              # CSS crítico inline (above the fold)
│
├── 📁 js/                           # JavaScript
│   │
│   ├── 📄 main.js                   # Entry point principal
│   │
│   ├── 📁 modules/                  # Módulos ES6
│   │   ├── navigation.js            # Navegación y menú móvil
│   │   ├── scroll.js                # Smooth scroll y reveal
│   │   ├── cursor.js                # Cursor personalizado
│   │   ├── loader.js                # Loader management
│   │   ├── canvas.js                # Hero canvas animation
│   │   ├── forms.js                 # Validación de formularios
│   │   ├── analytics.js             # Tracking y analytics
│   │   └── accessibility.js         # Helpers de accesibilidad
│   │
│   ├── 📁 utils/                    # Utilidades
│   │   ├── debounce.js              # Debounce function
│   │   ├── throttle.js              # Throttle function
│   │   ├── dom.js                   # DOM helpers
│   │   ├── storage.js               # LocalStorage wrapper
│   │   └── device.js                # Device detection
│   │
│   ├── 📁 vendors/                  # Librerías de terceros
│   │   └── .gitkeep
│   │
│   └── 📁 workers/                  # Service workers
│       └── sw.js                    # Service worker (PWA)
│
├── 📁 pages/                        # Páginas HTML adicionales
│   │
│   ├── 📁 academy/                  # Sección Academia
│   │   ├── index.html               # Listado de lecciones
│   │   ├── gradient-descent.html    # Lección individual
│   │   ├── backpropagation.html
│   │   └── attention-mechanism.html
│   │
│   ├── 📁 services/                 # Sección Servicios
│   │   ├── index.html               # Listado de servicios
│   │   ├── optimization.html        # Servicio detallado
│   │   ├── machine-learning.html
│   │   └── consulting.html
│   │
│   ├── 📁 blog/                     # Blog (futuro)
│   │   ├── index.html               # Listado de posts
│   │   └── 📁 posts/                # Posts individuales
│   │       └── .gitkeep
│   │
│   ├── 📁 legal/                    # Páginas legales
│   │   ├── privacy.html             # Política de privacidad
│   │   ├── terms.html               # Términos de uso
│   │   ├── cookies.html             # Política de cookies
│   │   └── gdpr.html                # Compliance GDPR
│   │
│   ├── about.html                   # Sobre nosotros / Equipo
│   └── contact.html                 # Página de contacto
│
├── 📁 api/                          # API endpoints (si static)
│   │
│   └── 📁 v1/
│       ├── lessons.json             # Datos de lecciones
│       ├── services.json            # Datos de servicios
│       └── testimonials.json        # Testimonios
│
├── 📁 templates/                    # Templates reutilizables
│   │
│   ├── 📁 partials/                 # HTML parciales
│   │   ├── _head.html               # <head> común
│   │   ├── _header.html             # Header/nav
│   │   ├── _footer.html             # Footer
│   │   ├── _scripts.html            # Scripts comunes
│   │   └── _analytics.html          # Código de analytics
│   │
│   ├── 📁 components/               # Componentes HTML
│   │   ├── _card-service.html
│   │   ├── _card-lesson.html
│   │   ├── _cta-section.html
│   │   └── _newsletter-form.html
│   │
│   └── 📁 emails/                   # Templates de email
│       ├── welcome.html
│       ├── newsletter.html
│       └── contact-reply.html
│
├── 📁 config/                       # Configuraciones
│   │
│   ├── site.json                    # Configuración general del sitio
│   ├── navigation.json              # Estructura de navegación
│   ├── seo.json                     # Metadatos SEO por página
│   └── analytics.json               # IDs de analytics
│
├── 📁 scripts/                      # Scripts de build/deploy
│   │
│   ├── build.sh                     # Script de build
│   ├── deploy.sh                    # Script de deploy
│   ├── optimize-images.sh           # Optimización de imágenes
│   └── generate-sitemap.js          # Generador de sitemap
│
├── 📁 tests/                        # Tests (opcional)
│   │
│   ├── 📁 e2e/                      # Tests end-to-end
│   │   └── navigation.spec.js
│   │
│   ├── 📁 accessibility/            # Tests de accesibilidad
│   │   └── axe-tests.js
│   │
│   └── 📁 performance/              # Tests de rendimiento
│       └── lighthouse.js
│
├── 📁 docs/                         # Documentación del proyecto
│   │
│   ├── README.md                    # Documentación principal
│   ├── CONTRIBUTING.md              # Guía de contribución
│   ├── CHANGELOG.md                 # Historial de cambios
│   ├── STYLE_GUIDE.md               # Guía de estilos
│   ├── DEPLOYMENT.md                # Guía de deployment
│   │
│   └── 📁 design/                   # Assets de diseño
│       ├── brand-guidelines.pdf
│       ├── color-palette.md
│       └── typography.md
│
└── 📁 .github/                      # GitHub config (si aplica)
    │
    ├── 📁 workflows/                # GitHub Actions
    │   ├── deploy.yml               # CI/CD pipeline
    │   └── lighthouse.yml           # Auditoría automática
    │
    ├── ISSUE_TEMPLATE.md
    └── PULL_REQUEST_TEMPLATE.md
```

---

## 📋 Archivos de Configuración Raíz

### `robots.txt`
```txt
User-agent: *
Allow: /

Sitemap: https://thaleon.ai/sitemap.xml

# Bloquear carpetas privadas
Disallow: /api/
Disallow: /config/
Disallow: /templates/
Disallow: /scripts/
Disallow: /tests/
Disallow: /docs/
```

### `manifest.json` (PWA)
```json
{
  "name": "ThaleOn AI Systems",
  "short_name": "ThaleOn",
  "description": "Inteligencia Artificial, pensada racionalmente",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0b",
  "theme_color": "#c9a227",
  "icons": [
    {
      "src": "/assets/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### `config/site.json`
```json
{
  "name": "ThaleOn AI Systems",
  "tagline": "Inteligencia Artificial, pensada racionalmente",
  "url": "https://thaleon.ai",
  "email": "hello@thaleon.ai",
  "social": {
    "github": "https://github.com/thaleon",
    "linkedin": "https://linkedin.com/company/thaleon",
    "twitter": "https://x.com/thaleon"
  },
  "analytics": {
    "googleAnalytics": "G-XXXXXXXXXX",
    "plausible": "thaleon.ai"
  },
  "features": {
    "blog": false,
    "newsletter": true,
    "darkMode": false
  }
}
```

---

## 🔄 Flujo de Imports CSS (`css/main.css`)

```css
/* ============================================
   ThaleOn AI Systems - Main Stylesheet
   ============================================ */

/* Base */
@import 'base/_reset.css';
@import 'base/_variables.css';
@import 'base/_typography.css';
@import 'base/_utilities.css';
@import 'base/_animations.css';

/* Layout */
@import 'layout/_grid.css';
@import 'layout/_container.css';
@import 'layout/_header.css';
@import 'layout/_footer.css';
@import 'layout/_sections.css';

/* Components */
@import 'components/_buttons.css';
@import 'components/_cards.css';
@import 'components/_forms.css';
@import 'components/_modals.css';
@import 'components/_loader.css';
@import 'components/_cursor.css';
@import 'components/_tags.css';

/* Pages */
@import 'pages/_home.css';
@import 'pages/_academy.css';
@import 'pages/_services.css';
@import 'pages/_about.css';
@import 'pages/_contact.css';
@import 'pages/_blog.css';
@import 'pages/_404.css';
```

---

## 🔄 Flujo de Imports JS (`js/main.js`)

```javascript
/**
 * ThaleOn AI Systems - Main JavaScript
 * Entry point for all modules
 */

// Utils
import { debounce, throttle } from './utils/debounce.js';
import { prefersReducedMotion, isTouchDevice } from './utils/device.js';

// Modules
import { initNavigation } from './modules/navigation.js';
import { initSmoothScroll, initRevealAnimations } from './modules/scroll.js';
import { initCursor } from './modules/cursor.js';
import { initLoader } from './modules/loader.js';
import { initHeroCanvas } from './modules/canvas.js';
import { initForms } from './modules/forms.js';
import { initAnalytics } from './modules/analytics.js';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNavigation();
    initSmoothScroll();
    initRevealAnimations();
    
    // Conditional initializations
    if (!isTouchDevice() && !prefersReducedMotion()) {
        initCursor();
        initHeroCanvas();
    }
    
    initForms();
    initAnalytics();
});
```

---

## 📊 Convenciones de Nomenclatura

### Archivos CSS/JS
| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Parciales CSS | `_nombre.css` | `_buttons.css` |
| Módulos JS | `nombre.js` | `navigation.js` |
| Componentes | `kebab-case` | `card-service.html` |
| Utilidades | `camelCase` | `debounce.js` |

### Imágenes
| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Logos | `{brand}-{variant}.{ext}` | `ThaleOn_logo_white.svg` |
| Imágenes | `{descripcion}-{size}.{ext}` | `founder-2x.webp` |
| OG Images | `og-{page}.jpg` | `og-academy.jpg` |
| Icons | `{nombre}.svg` | `arrow-right.svg` |

### Clases CSS (BEM-inspired)
```css
/* Bloque */
.card {}

/* Elemento */
.card__title {}
.card__content {}

/* Modificador */
.card--featured {}
.card--dark {}

/* Estado */
.card.is-active {}
.card.is-loading {}

/* Utilidades (prefijo u-) */
.u-hidden {}
.u-text-center {}
```

---

## 🚀 Comandos Sugeridos

```bash
# Desarrollo local
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build

# Optimización
npm run images       # Optimizar imágenes
npm run css:purge    # Purgar CSS no usado
npm run lighthouse   # Auditoría de rendimiento

# Deploy
npm run deploy       # Deploy a producción
npm run deploy:stage # Deploy a staging
```

---

## 📝 Notas Importantes

### Performance
- Usar `WebP` para imágenes, con fallback `JPG/PNG`
- Self-host fonts para mejor control y rendimiento
- CSS crítico inline en `<head>`
- Lazy loading para imágenes below-the-fold

### SEO
- Cada página debe tener su propio `<title>` y `<meta description>`
- Usar datos estructurados (JSON-LD) en todas las páginas
- Sitemap actualizado automáticamente
- URLs semánticas y limpias

### Accesibilidad
- Skip links en todas las páginas
- ARIA labels donde sea necesario
- Contraste mínimo 4.5:1
- Soporte completo de teclado

### Mantenimiento
- Documentar cada componente
- Usar variables CSS para colores/espaciado
- Modularizar JavaScript
- Commits semánticos (feat, fix, docs, etc.)

---

## 🎯 Prioridad de Implementación

1. **Fase 1 - MVP**
   - Landing page completa
   - Páginas legales básicas
   - Formulario de contacto funcional

2. **Fase 2 - Contenido**
   - Sección Academia con primeras lecciones
   - Páginas de servicios detalladas
   - About/Team page

3. **Fase 3 - Crecimiento**
   - Blog con CMS
   - Newsletter integration
   - PWA features

4. **Fase 4 - Escala**
   - Multi-idioma
   - Dashboard de clientes
   - API pública
