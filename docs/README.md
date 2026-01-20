# ThaleOn AI Systems - Web Platform

> *"Inteligencia Artificial, pensada racionalmente."*

Plataforma web oficial de ThaleOn AI Systems. Una landing page premium con academia de IA, servicios de consultoría y contenido educativo.

---

## Características Principales

### Hero Interactivo

- **Animación del Teorema de Thales**: Visualización interactiva del Segundo Teorema de Thales con círculo completo, símbolo Theta (Θ) como marca de agua, y punto C arrastrable que demuestra que todo ángulo inscrito en un semicírculo es recto (90°).
- **Fondo de Fórmulas Matemáticas**: Red de fórmulas flotantes conectadas por líneas degradadas. Incluye fórmulas de cálculo, machine learning, estadística, álgebra lineal y transformers.
- **Título Estilizado**: "ThaleOn AI" con la "O" en color dorado y la "n" en azul Thales.

### Animaciones

- Fórmulas con movimiento fluido y conexiones visibles entre ellas
- Dos tipografías: Cormorant Garamond (serif) e IBM Plex Mono (monospace)
- Efectos de fade-in escalonados
- Colores dorado y azul con sombras sutiles
- Soporte táctil para dispositivos móviles
- Respeto a `prefers-reduced-motion` para accesibilidad

---

## Quick Start

### Desarrollo Local

```bash
# Opción 1: Servidor simple con Python
python -m http.server 8000

# Opción 2: Servidor con Node.js (live reload)
npx serve

# Opción 3: VS Code Live Server
# Instalar extensión "Live Server" y click en "Go Live"
```

Abrir en navegador: `http://localhost:8000`

---

## 📁 Estructura del Proyecto

```
Web/
├── index.html              # Landing page principal
├── 404.html                # Página de error
├── robots.txt              # SEO crawlers
├── manifest.json           # PWA config
│
├── assets/                 # Recursos estáticos
│   ├── images/             # Imágenes organizadas
│   ├── icons/              # Favicons y SVG icons
│   ├── fonts/              # Fuentes locales
│   └── documents/          # PDFs y docs
│
├── css/                    # Estilos CSS
│   ├── main.css            # Entry point
│   ├── base/               # Variables, reset, tipografía
│   ├── layout/             # Grid, header, footer
│   ├── components/         # Buttons, cards, forms
│   └── pages/              # Estilos por página
│
├── js/                     # JavaScript
│   ├── main.js             # Entry point
│   ├── modules/            # Módulos funcionales
│   └── utils/              # Utilidades
│
├── pages/                  # Páginas HTML adicionales
│   ├── academy/            # Sección Academia
│   ├── services/           # Sección Servicios
│   ├── blog/               # Blog (futuro)
│   └── legal/              # Páginas legales
│
└── config/                 # Configuraciones
    └── site.json           # Config general
```

Ver `PROJECT_STRUCTURE.md` para documentación completa.

---

## 🎨 Sistema de Diseño

### Colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-gold` | `#c9a227` | Acento principal |
| `--color-thales` | `#1a5490` | Azul secundario |
| `--color-bg` | `#0a0a0b` | Fondo oscuro |
| `--color-text` | `#fafafa` | Texto principal |

### Tipografía

| Familia | Uso |
|---------|-----|
| Cormorant Garamond | Títulos y display |
| Inter | Cuerpo de texto |
| IBM Plex Mono | Código y etiquetas |

### Espaciado

Sistema basado en unidad de 8px (`--space-unit`).

```css
--space-2: 8px;
--space-4: 16px;
--space-8: 32px;
--space-16: 64px;
```

---

## ✅ Features

- [x] Landing page responsive
- [x] Animaciones con respeto a `prefers-reduced-motion`
- [x] Animación interactiva del Teorema de Thales
- [x] Fondo con fórmulas matemáticas flotantes conectadas
- [x] Scroll reveal animations
- [x] SEO optimizado (Open Graph, Twitter Cards, JSON-LD)
- [x] PWA ready (manifest.json)
- [x] Accesibilidad WCAG AA
- [ ] Blog con CMS
- [ ] Newsletter integration
- [ ] Multi-idioma (i18n)
- [ ] Dark/Light mode toggle

---

## 📋 Checklist Pre-Launch

### SEO
- [ ] Verificar `robots.txt`
- [ ] Generar `sitemap.xml`
- [ ] Configurar Google Search Console
- [ ] Verificar Open Graph images

### Assets
- [ ] Crear todos los favicons
- [ ] Optimizar imágenes (WebP)
- [ ] Self-host fonts (opcional)
- [ ] Crear OG images por página

### Legal
- [ ] Página de Privacidad
- [ ] Términos de Uso
- [ ] Política de Cookies
- [ ] Banner de cookies GDPR

### Analytics
- [ ] Configurar Google Analytics / Plausible
- [ ] Configurar eventos de conversión
- [ ] Testing de formularios

---

## 🛠️ Tecnologías

- **HTML5** semántico
- **CSS3** con Custom Properties
- **JavaScript** ES6+ (vanilla)
- **Sin frameworks** - ligero y rápido

---

## 📊 Performance Goals

| Métrica | Objetivo |
|---------|----------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

---

## 🔧 Comandos Útiles

```bash
# Optimizar imágenes (requiere imagemagick)
./scripts/optimize-images.sh

# Generar sitemap
node ./scripts/generate-sitemap.js

# Validar HTML
npx html-validate "**/*.html"

# Auditar accesibilidad
npx pa11y http://localhost:8000
```

---

## 📝 Convenciones

### Commits (Conventional Commits)

```
feat: añadir nueva sección de testimonios
fix: corregir scroll en Safari
docs: actualizar README
style: mejorar espaciado en cards
refactor: modularizar JavaScript
perf: optimizar imágenes hero
```

### CSS (BEM-inspired)

```css
.card { }           /* Bloque */
.card__title { }    /* Elemento */
.card--featured { } /* Modificador */
.card.is-active { } /* Estado */
```

---

## 📄 Licencia

© 2025 ThaleOn AI Systems LLC. Todos los derechos reservados.

---

## 📞 Contacto

- **Email**: hello@thaleon.ai
- **GitHub**: [@thaleon](https://github.com/thaleon)
- **LinkedIn**: [ThaleOn AI Systems](https://linkedin.com/company/thaleon)
- **X/Twitter**: [@thaleon](https://x.com/thaleon)

---

*Engineering Prudence.* 🏛️
