import { Variants } from "framer-motion";

/**
 * Animation variants for consistent, professional animations across the site
 * Subtile & Professional approach for a dental office website
 */

// Fade in with upward motion - perfect for section titles and content
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Simple fade in without motion
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Container for staggered children animations (cards, list items)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between each child
      delayChildren: 0.2, // Start after 200ms
    },
  },
};

// Individual item in a stagger container
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Scale animation for buttons and interactive elements
export const scaleOnHover = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Slide in from left (mobile menu)
export const slideInFromLeft: Variants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Slide in from right
export const slideInFromRight: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Icon rotation on hover (subtle professional effect)
export const iconRotate = {
  rest: {
    rotate: 0,
  },
  hover: {
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Image reveal animation with fade-in and subtle scale
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Image with hover zoom effect
export const imageWithHoverZoom = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Subtle brightness effect for non-interactive images
export const imageWithSubtleOverlay = {
  rest: {
    filter: "brightness(1)",
  },
  hover: {
    filter: "brightness(1.05)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Default viewport settings for scroll animations
export const defaultViewport = {
  once: true, // Animation happens only once for performance
  margin: "0px 0px -100px 0px", // Trigger slightly before element is fully visible
  amount: 0.3, // Trigger when 30% of element is visible
};
