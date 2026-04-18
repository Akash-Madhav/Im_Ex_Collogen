import gsap from 'gsap';

/**
 * Luxury Design System - Motion Tokens
 * Standardized easing and durations for premium feel.
 */

export const DURATIONS = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.9,
  VERY_SLOW: 1.2,
};

export const EASINGS = {
  // Power3 style - smooth entry/exit
  PREMIUM: "power3.inOut",
  
  // Custom Cubic-Bezier equivalents for GSAP
  // Emulates "cubic-bezier(0.16, 1, 0.3, 1)"
  EXPO_OUT: "expo.out",
  
  // Custom heavy feel for luxury reveals
  HEAVY: "custom(0.7, 0, 0.3, 1)", 
  
  // Standard GSAP defaults for consistent mapping
  OUT: "power2.out",
  IN_OUT: "power2.inOut",
};

/**
 * Common Animation Patterns
 */
export const animations = {
  fadeIn: (el: gsap.TweenTarget, vars?: gsap.TweenVars) => {
    return gsap.from(el, {
      opacity: 0,
      duration: DURATIONS.NORMAL,
      ease: EASINGS.PREMIUM,
      ...vars,
    });
  },
  
  slideUp: (el: gsap.TweenTarget, vars?: gsap.TweenVars) => {
    return gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: DURATIONS.SLOW,
      ease: EASINGS.EXPO_OUT,
      ...vars,
    });
  },
  
  revealText: (el: gsap.TweenTarget, vars?: gsap.TweenVars) => {
    return gsap.from(el, {
      y: "100%",
      opacity: 0,
      stagger: 0.05,
      duration: DURATIONS.NORMAL,
      ease: EASINGS.OUT,
      ...vars,
    });
  }
};
