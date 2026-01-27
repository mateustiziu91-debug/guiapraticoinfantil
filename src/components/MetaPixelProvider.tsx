import { useEffect } from 'react';
import { initMetaPixel, trackPageView } from '@/lib/metaPixel';

interface MetaPixelProviderProps {
  children: React.ReactNode;
}

const MetaPixelProvider = ({ children }: MetaPixelProviderProps) => {
  useEffect(() => {
    // Initialize Meta Pixel on mount
    initMetaPixel();
    
    // Track initial page view
    trackPageView();
  }, []);

  return <>{children}</>;
};

export default MetaPixelProvider;
