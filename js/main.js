/**
 * ThaleOn AI Systems - Main JavaScript
 * 
 * @description Entry point principal para todos los módulos JS
 * @author ThaleOn AI Systems
 * @version 1.0.0
 */

// ============================================
// IMPORTS - Utils
// ============================================
import { debounce, throttle } from './utils/debounce.js';
import { 
    prefersReducedMotion, 
    isTouchDevice, 
    hasFinePointer,
    isDocumentVisible,
    getDeviceInfo 
} from './utils/device.js';

// ============================================
// IMPORTS - Modules (descomentar según se creen)
// ============================================
// import { initNavigation } from './modules/navigation.js';
// import { initSmoothScroll, initRevealAnimations } from './modules/scroll.js';
// import { initCursor } from './modules/cursor.js';
// import { initLoader } from './modules/loader.js';
// import { initHeroCanvas } from './modules/canvas.js';
// import { initForms } from './modules/forms.js';
// import { initAnalytics } from './modules/analytics.js';

// ============================================
// CONFIGURACIÓN GLOBAL
// ============================================
const config = {
    debug: false,
    features: {
        customCursor: true,
        heroCanvas: true,
        smoothScroll: true,
        revealAnimations: true
    }
};

// ============================================
// ESTADO GLOBAL
// ============================================
const state = {
    isLoaded: false,
    isScrolling: false,
    currentBreakpoint: null,
    deviceInfo: null
};

// ============================================
// LOGGER (solo en modo debug)
// ============================================
const log = {
    info: (...args) => config.debug && console.log('[ThaleOn]', ...args),
    warn: (...args) => config.debug && console.warn('[ThaleOn]', ...args),
    error: (...args) => console.error('[ThaleOn]', ...args)
};

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
function init() {
    log.info('Initializing ThaleOn...');
    
    // Obtener información del dispositivo
    state.deviceInfo = getDeviceInfo();
    log.info('Device info:', state.deviceInfo);
    
    // Inicializar módulos base
    initBase();
    
    // Inicializar módulos condicionales
    initConditionalModules();
    
    // Marcar como cargado
    state.isLoaded = true;
    document.documentElement.classList.add('js-loaded');
    
    log.info('ThaleOn initialized successfully');
}

/**
 * Inicializa módulos base (siempre se ejecutan)
 */
function initBase() {
    // Loader
    initLoaderFallback();
    
    // Navegación
    // initNavigation();
    
    // Scroll
    if (config.features.smoothScroll) {
        initSmoothScrollBasic();
    }
    
    // Reveal animations
    if (config.features.revealAnimations && !prefersReducedMotion()) {
        initRevealBasic();
    }
    
    // Forms
    // initForms();
    
    // Analytics
    // initAnalytics();
}

/**
 * Inicializa módulos condicionales (según dispositivo/preferencias)
 */
function initConditionalModules() {
    // Custom cursor - solo en dispositivos con pointer fino y sin reduced motion
    if (
        config.features.customCursor && 
        hasFinePointer() && 
        !prefersReducedMotion()
    ) {
        // initCursor();
        initCursorBasic();
    }
    
    // Hero canvas - solo si no hay reduced motion
    if (config.features.heroCanvas && !prefersReducedMotion()) {
        // initHeroCanvas();
    }
}

// ============================================
// IMPLEMENTACIONES BÁSICAS INLINE
// (Mover a módulos separados cuando crezcan)
// ============================================

/**
 * Loader con fallback de seguridad
 */
function initLoaderFallback() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    const hideLoader = () => {
        if (!loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.setAttribute('aria-hidden', 'true');
            }, 800);
        }
    };
    
    // Ocultar después de load + delay
    window.addEventListener('load', () => {
        setTimeout(hideLoader, 1500);
    });
    
    // Fallback de seguridad
    setTimeout(hideLoader, 8000);
}

/**
 * Smooth scroll básico
 */
function initSmoothScrollBasic() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                if ('scrollBehavior' in document.documentElement.style && !prefersReducedMotion()) {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    window.scrollTo(0, offsetPosition);
                }
                
                // Actualizar URL
                history.pushState(null, null, targetId);
                
                // Mover focus para accesibilidad
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });
}

/**
 * Reveal animations básico con IntersectionObserver
 */
function initRevealBasic() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: dejar de observar después de revelar
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

/**
 * Cursor personalizado básico
 */
function initCursorBasic() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let animationId = null;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.classList.add('visible');
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible');
    });
    
    function animate() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Hover effects
    const hoverTargets = document.querySelectorAll('a, button, [data-cursor-hover]');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
    
    // Cleanup
    window.addEventListener('beforeunload', () => {
        if (animationId) cancelAnimationFrame(animationId);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

// DOM Ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Resize handler con debounce
window.addEventListener('resize', debounce(() => {
    state.deviceInfo = getDeviceInfo();
    log.info('Viewport resized:', state.deviceInfo.viewport);
}, 200));

// Visibility change
document.addEventListener('visibilitychange', () => {
    log.info('Document visibility:', isDocumentVisible() ? 'visible' : 'hidden');
});

// ============================================
// EXPORTS (para uso en consola/debug)
// ============================================
if (config.debug) {
    window.ThaleOn = {
        config,
        state,
        utils: { debounce, throttle, getDeviceInfo }
    };
}
