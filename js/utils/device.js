/**
 * ThaleOn AI Systems - Device Detection Utilities
 * 
 * @description Utilidades para detectar capacidades del dispositivo
 * @module utils/device
 */

/**
 * Detecta si el usuario prefiere movimiento reducido
 * @returns {boolean}
 */
export function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Detecta si el usuario prefiere modo oscuro
 * @returns {boolean}
 */
export function prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Detecta si el usuario prefiere alto contraste
 * @returns {boolean}
 */
export function prefersHighContrast() {
    return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Detecta si es un dispositivo táctil
 * @returns {boolean}
 */
export function isTouchDevice() {
    return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
    );
}

/**
 * Detecta si tiene un puntero fino (mouse)
 * @returns {boolean}
 */
export function hasFinePointer() {
    return window.matchMedia('(pointer: fine)').matches;
}

/**
 * Detecta si puede hover (no táctil)
 * @returns {boolean}
 */
export function canHover() {
    return window.matchMedia('(hover: hover)').matches;
}

/**
 * Detecta si es un dispositivo móvil por user agent
 * @returns {boolean}
 */
export function isMobileUserAgent() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

/**
 * Detecta si es iOS
 * @returns {boolean}
 */
export function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

/**
 * Detecta si es Safari
 * @returns {boolean}
 */
export function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

/**
 * Detecta si es Firefox
 * @returns {boolean}
 */
export function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

/**
 * Obtiene el tamaño de viewport actual
 * @returns {{width: number, height: number}}
 */
export function getViewportSize() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight
    };
}

/**
 * Detecta el breakpoint actual basado en el ancho
 * @returns {string} 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 */
export function getCurrentBreakpoint() {
    const width = window.innerWidth;
    
    if (width < 640) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    if (width < 1280) return 'lg';
    if (width < 1400) return 'xl';
    return '2xl';
}

/**
 * Detecta si está en modo retina/high DPI
 * @returns {boolean}
 */
export function isRetina() {
    return window.devicePixelRatio > 1;
}

/**
 * Obtiene el pixel ratio del dispositivo
 * @returns {number}
 */
export function getDevicePixelRatio() {
    return window.devicePixelRatio || 1;
}

/**
 * Detecta si el navegador soporta una característica CSS
 * @param {string} property - Propiedad CSS
 * @param {string} value - Valor a probar
 * @returns {boolean}
 */
export function supportsCSSProperty(property, value) {
    return CSS.supports(property, value);
}

/**
 * Detecta si soporta backdrop-filter
 * @returns {boolean}
 */
export function supportsBackdropFilter() {
    return (
        CSS.supports('backdrop-filter', 'blur(1px)') ||
        CSS.supports('-webkit-backdrop-filter', 'blur(1px)')
    );
}

/**
 * Detecta si soporta scroll-behavior smooth
 * @returns {boolean}
 */
export function supportsSmoothScroll() {
    return 'scrollBehavior' in document.documentElement.style;
}

/**
 * Detecta si el documento está visible
 * @returns {boolean}
 */
export function isDocumentVisible() {
    return !document.hidden;
}

/**
 * Listener para cambios en preferencias del sistema
 * @param {string} preference - Tipo de preferencia ('motion' | 'theme' | 'contrast')
 * @param {Function} callback - Función a ejecutar en cambio
 * @returns {Function} Función para remover el listener
 */
export function onPreferenceChange(preference, callback) {
    const queries = {
        motion: '(prefers-reduced-motion: reduce)',
        theme: '(prefers-color-scheme: dark)',
        contrast: '(prefers-contrast: high)'
    };
    
    const mediaQuery = window.matchMedia(queries[preference]);
    
    const handler = (e) => callback(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    // Retorna función para cleanup
    return () => mediaQuery.removeEventListener('change', handler);
}

/**
 * Obtiene información completa del dispositivo
 * @returns {Object}
 */
export function getDeviceInfo() {
    return {
        isTouch: isTouchDevice(),
        isMobile: isMobileUserAgent(),
        isIOS: isIOS(),
        isSafari: isSafari(),
        isFirefox: isFirefox(),
        isRetina: isRetina(),
        pixelRatio: getDevicePixelRatio(),
        viewport: getViewportSize(),
        breakpoint: getCurrentBreakpoint(),
        prefersReducedMotion: prefersReducedMotion(),
        prefersDarkMode: prefersDarkMode(),
        prefersHighContrast: prefersHighContrast(),
        canHover: canHover(),
        hasFinePointer: hasFinePointer(),
        supportsBackdropFilter: supportsBackdropFilter(),
        supportsSmoothScroll: supportsSmoothScroll()
    };
}
