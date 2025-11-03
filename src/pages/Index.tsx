import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const Index = () => {
  const location = useLocation();

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

  return (
    <>
      <StructuredData />
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
