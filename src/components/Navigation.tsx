import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/LanguageToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            <ToothIcon className="h-6 w-6" />
            {t('siteName')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/a-propos" className="relative text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              {t('navigation.about')}
            </Link>
            <Link to="/#services" className="relative text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              {t('navigation.services')}
            </Link>
            <Link to="/#team" className="relative text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              {t('navigation.team')}
            </Link>
            <Link to="/#contact" className="relative text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              {t('navigation.contact')}
            </Link>
            <LanguageToggle />
            <Button asChild>
              <Link to="/rendez-vous" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t('navigation.bookAppointmentShort')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-border overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
            >
              <motion.div
                className="flex flex-col gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div variants={staggerItem}>
                  <Link to="/a-propos" onClick={() => setIsOpen(false)} className="relative block text-left text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                    {t('navigation.about')}
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Link to="/#services" onClick={() => setIsOpen(false)} className="relative block text-left text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                    {t('navigation.services')}
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Link to="/#team" onClick={() => setIsOpen(false)} className="relative block text-left text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                    {t('navigation.team')}
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Link to="/#contact" onClick={() => setIsOpen(false)} className="relative block text-left text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                    {t('navigation.contact')}
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <LanguageToggle />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Button asChild className="w-full">
                    <Link to="/rendez-vous" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {t('navigation.bookAppointmentShort')}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
