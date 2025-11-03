import { useState, useEffect } from 'react';
import { defaultViewport, mobileViewport } from '@/lib/animations';

/**
 * Hook to get responsive viewport settings for Framer Motion animations
 * Returns mobile-friendly settings on small screens (< 768px)
 * and default settings on larger screens
 */
export const useResponsiveViewport = () => {
  const [viewport, setViewport] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? mobileViewport : defaultViewport;
    }
    return defaultViewport;
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth < 768 ? mobileViewport : defaultViewport);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};
