'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        syncTouch: false, // smoothTouch: false in prompt translates to syncTouch: false or similar in react-lenis context
      }}
    >
      {children}
    </ReactLenis>
  );
};
