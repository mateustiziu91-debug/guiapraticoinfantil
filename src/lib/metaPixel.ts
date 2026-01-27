import { supabase } from "@/integrations/supabase/client";

// Meta Pixel is initialized in index.html
// This file provides helper functions to track events

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

// Track standard events (client-side)
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
    console.log(`Meta Pixel event tracked: ${eventName}`, params);
  }
};

// Track custom events (client-side)
export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
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
