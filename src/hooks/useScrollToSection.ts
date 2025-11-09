import { useCallback } from "react";
import { animate } from "framer-motion";

/**
 * Hook for smooth animated scrolling to sections
 * @param offset - Offset in pixels from the top (default: 80px for navbar)
 * @returns Function to trigger scroll to a section by ID
 */
export const useScrollToSection = (offset: number = 80) => {
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Section with id "${sectionId}" not found`);
        return;
      }

      const targetPosition = element.offsetTop - offset;
      const startPosition = window.scrollY;

      // Animate scroll position
      animate(startPosition, targetPosition, {
        duration: 1,
        ease: "easeInOut",
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        },
        onComplete: () => {
          // Update URL hash without triggering scroll
          history.pushState(null, "", `#${sectionId}`);
        },
      });
    },
    [offset]
  );

  return scrollToSection;
};
