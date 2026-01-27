import { supabase } from "@/integrations/supabase/client";

// Meta Pixel ID from environment
const PIXEL_ID = '1464512795248622';

// Initialize Meta Pixel (client-side)
export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;
  
  // Check if already initialized
  if ((window as any).fbq) return;

  // Meta Pixel base code
  (function(f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  // Initialize with Pixel ID
  (window as any).fbq('init', PIXEL_ID);
  (window as any).fbq('track', 'PageView');

  console.log('Meta Pixel initialized:', PIXEL_ID);
};

// Track standard events (client-side)
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
    console.log(`Meta Pixel event tracked: ${eventName}`, params);
  }
};

// Track custom events (client-side)
export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, params);
    console.log(`Meta Pixel custom event tracked: ${eventName}`, params);
  }
};

// Get Facebook cookies for deduplication
const getFacebookCookies = () => {
  if (typeof document === 'undefined') return {};
  
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
  };

  return {
    fbc: getCookie('_fbc'),
    fbp: getCookie('_fbp'),
  };
};

// Send server-side event via Conversions API
export const sendServerEvent = async (
  eventName: string,
  customData?: {
    currency?: string;
    value?: number;
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    content_type?: string;
  },
  userData?: {
    em?: string;
    ph?: string;
    external_id?: string;
  }
) => {
  try {
    const { fbc, fbp } = getFacebookCookies();

    const payload = {
      event_name: eventName,
      event_source_url: window.location.href,
      user_data: {
        ...userData,
        fbc,
        fbp,
      },
      custom_data: customData,
    };

    console.log('Sending server event:', payload);

    const { data, error } = await supabase.functions.invoke('meta-conversions', {
      body: payload,
    });

    if (error) {
      console.error('Error sending server event:', error);
      return { success: false, error };
    }

    console.log('Server event sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending server event:', error);
    return { success: false, error };
  }
};

// Convenience functions for common events
export const trackPageView = () => {
  trackEvent('PageView');
  sendServerEvent('PageView');
};

export const trackViewContent = (contentName: string, value?: number) => {
  const params = {
    content_name: contentName,
    content_type: 'product',
    currency: 'BRL',
    value,
  };
  trackEvent('ViewContent', params);
  sendServerEvent('ViewContent', params);
};

export const trackInitiateCheckout = (value: number, contentName: string) => {
  const params = {
    content_name: contentName,
    content_type: 'product',
    currency: 'BRL',
    value,
  };
  trackEvent('InitiateCheckout', params);
  sendServerEvent('InitiateCheckout', params);
};

export const trackPurchase = (value: number, contentName: string) => {
  const params = {
    content_name: contentName,
    content_type: 'product',
    currency: 'BRL',
    value,
  };
  trackEvent('Purchase', params);
  sendServerEvent('Purchase', params);
};

export const trackLead = () => {
  trackEvent('Lead');
  sendServerEvent('Lead');
};

export const trackAddToCart = (value: number, contentName: string) => {
  const params = {
    content_name: contentName,
    content_type: 'product',
    currency: 'BRL',
    value,
  };
  trackEvent('AddToCart', params);
  sendServerEvent('AddToCart', params);
};
