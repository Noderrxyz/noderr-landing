/**
 * Performance monitoring utilities
 * Tracks Core Web Vitals and other performance metrics
 */

export interface PerformanceMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
}

/**
 * Report Web Vitals to analytics
 * Can be integrated with Google Analytics, Umami, or custom analytics
 */
export function reportWebVitals(metric: PerformanceMetrics) {
  if (import.meta.env.DEV) {
    console.log('[Performance]', metric);
  }
  
  // TODO: Send to analytics service
  // Example: gtag('event', 'web_vitals', metric);
}

/**
 * Measure page load time
 */
export function measurePageLoad() {
  if (typeof window === 'undefined') return;
  
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;
    
    if (import.meta.env.DEV) {
      console.log('[Performance] Page Load Metrics:', {
        pageLoadTime: `${pageLoadTime}ms`,
        connectTime: `${connectTime}ms`,
        renderTime: `${renderTime}ms`,
      });
    }
    
    reportWebVitals({
      TTFB: connectTime,
    });
  });
}

/**
 * Observe Largest Contentful Paint
 */
export function observeLCP() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      reportWebVitals({
        LCP: lastEntry.startTime,
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (error) {
    console.error('[Performance] Failed to observe LCP:', error);
  }
}

/**
 * Observe First Input Delay
 */
export function observeFID() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        reportWebVitals({
          FID: entry.processingStart - entry.startTime,
        });
      });
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  } catch (error) {
    console.error('[Performance] Failed to observe FID:', error);
  }
}

/**
 * Observe Cumulative Layout Shift
 */
export function observeCLS() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  let clsValue = 0;
  
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          reportWebVitals({
            CLS: clsValue,
          });
        }
      }
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (error) {
    console.error('[Performance] Failed to observe CLS:', error);
  }
}

/**
 * Initialize all performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;
  
  measurePageLoad();
  observeLCP();
  observeFID();
  observeCLS();
}
