import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import FAQSchema from "@/components/FAQSchema";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    // Scroll to section if hash is present in URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Scroll to top if no hash is present
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // Meta tags optimisés pour le SEO
  const seoTitle =
    lang === "fr"
      ? "Dentiste Luxembourg | Cabinet Dentaire Vang Limpertsberg ⭐ 751 Avis 5/5"
      : "Dentist Luxembourg | Dental Clinic Vang Limpertsberg ⭐ 751 Reviews 5/5";

  const seoDescription =
    lang === "fr"
      ? "Dentiste Luxembourg : Cabinet Dentaire Vang à Limpertsberg. Équipe expérimentée multilingue. Implantologie, soins conservateurs, parodontie. ⭐ 751 avis 5/5. Prenez RDV : +352 26 26 20 46"
      : "Dentist Luxembourg: Vang Dental Clinic in Limpertsberg. Experienced multilingual team. Implantology, conservative care, periodontics. ⭐ 751 reviews 5/5. Book now: +352 26 26 20 46";

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical="https://cabinetdentairevang.lu/"
      />
      <StructuredData />
      <FAQSchema />
      <motion.div
        className="min-h-screen bg-background"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Reviews />
          <Team />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
