/**
 * ThaleOn AI Systems - Debounce & Throttle Utilities
 * 
 * @description Funciones para controlar la frecuencia de ejecución
 * @module utils/debounce
 */

/**
 * Debounce - Retrasa la ejecución hasta que pase un tiempo sin llamadas
 * Útil para: resize, scroll, input search, etc.
 * 
 * @param {Function} fn - Función a ejecutar
 * @param {number} ms - Milisegundos de espera (default: 150)
 * @returns {Function} Función debounced
 * 
 * @example
 * const debouncedResize = debounce(() => console.log('resized'), 200);
 * window.addEventListener('resize', debouncedResize);
 */
export function debounce(fn, ms = 150) {
    let timeoutId;
    
    const debounced = function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
    
    // Permite cancelar el debounce pendiente
    debounced.cancel = function() {
        clearTimeout(timeoutId);
    };
    
    // Permite ejecutar inmediatamente y cancelar el pendiente
    debounced.flush = function(...args) {
        clearTimeout(timeoutId);
        fn.apply(this, args);
    };
    
    return debounced;
}

/**
 * Throttle - Limita la ejecución a una vez por intervalo
 * Útil para: mousemove, scroll animations, etc.
 * 
 * @param {Function} fn - Función a ejecutar
 * @param {number} ms - Milisegundos de intervalo (default: 100)
 * @returns {Function} Función throttled
 * 
 * @example
 * const throttledScroll = throttle(() => console.log('scrolling'), 100);
 * window.addEventListener('scroll', throttledScroll);
 */
export function throttle(fn, ms = 100) {
    let isThrottled = false;
    let savedArgs = null;
    let savedThis = null;
    
    function wrapper(...args) {
        if (isThrottled) {
            savedArgs = args;
            savedThis = this;
            return;
        }
        
        fn.apply(this, args);
        isThrottled = true;
        
        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = null;
                savedThis = null;
            }
        }, ms);
    }
    
    return wrapper;
}

/**
 * RequestAnimationFrame-based throttle
 * Útil para animaciones suaves vinculadas al frame rate
 * 
 * @param {Function} fn - Función a ejecutar
 * @returns {Function} Función throttled por RAF
 */
export function rafThrottle(fn) {
    let rafId = null;
    let lastArgs = null;
    
    const throttled = function(...args) {
        lastArgs = args;
        
        if (rafId === null) {
            rafId = requestAnimationFrame(() => {
                fn.apply(this, lastArgs);
                rafId = null;
            });
        }
    };
    
    throttled.cancel = function() {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    };
    
    return throttled;
}

/**
 * Leading debounce - Ejecuta inmediatamente, luego ignora llamadas
 * 
 * @param {Function} fn - Función a ejecutar
 * @param {number} ms - Milisegundos de espera
 * @returns {Function} Función debounced con leading edge
 */
export function debounceLeading(fn, ms = 150) {
    let timeoutId;
    let isLeading = true;
    
    return function(...args) {
        if (isLeading) {
            fn.apply(this, args);
            isLeading = false;
        }
        
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            isLeading = true;
        }, ms);
    };
}
