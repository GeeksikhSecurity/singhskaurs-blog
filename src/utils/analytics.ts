// Simple analytics helper
export const trackEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: path,
    });
  }
};