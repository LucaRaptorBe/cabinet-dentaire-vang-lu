import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useResponsiveViewport } from "@/hooks/useResponsiveViewport";
import { fadeInUp } from "@/lib/animations";

const IntroSection = () => {
  const { t } = useTranslation('intro');
  const viewport = useResponsiveViewport();
  const words = t('words', { returnObjects: true }) as string[];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = 100; // 100ms per character
    const deletingSpeed = 50; // 50ms per character when deleting
    const pauseAfterWord = 1000; // 1 second pause after word is complete
    const pauseAfterDelete = 300; // 0.3 second pause after deleting

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          // Word is complete, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseAfterWord);
        }
      } else {
        // Deleting mode
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : (displayedText.length === currentWord.length ? pauseAfterWord : typingSpeed));

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <section id="intro" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight whitespace-nowrap">
            <span className="text-foreground">{t('prefix')} </span>
            <span className="text-primary inline-block min-w-[120px] md:min-w-[200px] lg:min-w-[280px] text-left">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
