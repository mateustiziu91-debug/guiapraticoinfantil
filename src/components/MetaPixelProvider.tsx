import { useEffect } from 'react';
import { sendServerEvent } from '@/lib/metaPixel';

interface MetaPixelProviderProps {
  children: React.ReactNode;
}

const MetaPixelProvider = ({ children }: MetaPixelProviderProps) => {
  useEffect(() => {
    // Send server-side PageView event for API de Conversões
    sendServerEvent('PageView');
  }, []);

  return <>{children}</>;
};

export default MetaPixelProvider;
