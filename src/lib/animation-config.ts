// Animation configuration for consistent animations across the app
export const animationConfig = {
  // Easing functions
  ease: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
    back: [0.175, 0.885, 0.32, 1.275]
  },

  // Duration presets
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    verySlow: 1.2
  },

  // Common animation variants
  variants: {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    
    fadeInDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 }
    },
    
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    }
  },

  // Stagger container variants
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },

  // Hover animations
  hover: {
    scale: {
      hover: { scale: 1.05 },
      tap: { scale: 0.95 }
    },
    lift: {
      hover: { y: -5, scale: 1.02 },
      tap: { y: 0, scale: 0.98 }
    },
    glow: {
      hover: { 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        scale: 1.02
      },
      tap: { scale: 0.98 }
    }
  },

  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  },

  // Scroll-triggered animations
  scrollReveal: {
    threshold: 0.1,
    once: true,
    amount: 0.3
  }
};

// Helper function to get reduced motion variants
export const getReducedMotionVariants = (prefersReducedMotion: boolean, variants: any) => {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
  }
  return variants;
};

// Helper function to get reduced motion transition
export const getReducedMotionTransition = (prefersReducedMotion: boolean, duration: number = 0.6) => {
  return {
    duration: prefersReducedMotion ? 0.3 : duration,
    ease: animationConfig.ease.smooth
  };
}; 