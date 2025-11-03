import { useEffect } from "react";
import { MapPin, Car, Bus, Calendar, Users, Languages, CheckCircle, Heart, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransition, fadeInUp, fadeIn, imageWithSubtleOverlay } from "@/lib/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import dentistLimpertsberg from "@/assets/dentist-limpertsberg.png";
import dentistPatient from "@/assets/dentist-patient.jpg";
import { useTranslation } from "react-i18next";
import { useResponsiveViewport } from "@/hooks/useResponsiveViewport";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const About = () => {
  const { t, i18n } = useTranslation(['about', 'common']);
  const viewport = useResponsiveViewport();
  const lang = i18n.language;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Meta tags optimisés pour le SEO
  const seoTitle =
    lang === "fr"
      ? "À Propos - Votre Bon Dentiste à Luxembourg | Cabinet Vang Limpertsberg"
      : "About - Your Trusted Dentist in Luxembourg | Vang Dental Clinic";

  const seoDescription =
    lang === "fr"
      ? "Découvrez le Cabinet Dentaire Vang, votre bon dentiste à Luxembourg. Équipe de 4 praticiens expérimentés, technologies modernes, approche personnalisée. Limpertsberg, accès facile."
      : "Discover Vang Dental Clinic, your trusted dentist in Luxembourg. Team of 4 experienced practitioners, modern technology, personalized approach. Limpertsberg, easy access.";

  const breadcrumbItems = [
    { name: lang === "fr" ? "Accueil" : "Home", url: "https://cabinetdentairevang.lu/" },
    { name: lang === "fr" ? "À Propos" : "About", url: "https://cabinetdentairevang.lu/a-propos" }
  ];

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical="https://cabinetdentairevang.lu/a-propos"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <motion.div
        className="min-h-screen bg-background"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Navigation />
      <main>
        {/* Hero Section + Le Cabinet Section */}
        <section className="pt-32 pb-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            {/* Title and Subtitle */}
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Le Cabinet Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Left */}
              <motion.div
                className="relative order-2 lg:order-1"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeIn}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <motion.img
                    src={dentistLimpertsberg}
                    alt={t('cabinet.imageAlt')}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                    initial="rest"
                    whileHover="hover"
                    variants={imageWithSubtleOverlay}
                  />
                </div>
              </motion.div>

              {/* Text Right */}
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {t('cabinet.title')}
                </h2>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t('cabinet.stats.since')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t('cabinet.stats.practitioners')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
                    <Languages className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t('cabinet.stats.multilingual')}</p>
                    </div>
                  </div>
                </div>

                {/* Liste à puces stylisée */}
                <div className="space-y-4">
                  {(t('cabinet.points', { returnObjects: true }) as string[]).map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className={`text-muted-foreground ${index === 3 ? 'font-semibold' : ''}`}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/rendez-vous" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {t('buttons.bookAppointment', { ns: 'common' })}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/#team" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {t('buttons.ourTeam', { ns: 'common' })}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Approche Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Text Left */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {t('approach.title')}
                </h2>

                {/* Points clés (badges) */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                    <Heart className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{t('approach.badges.personalized')}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{t('approach.badges.customPlans')}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                    <Shield className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{t('approach.badges.empathetic')}</span>
                  </div>
                </div>

                {/* Liste à puces stylisée */}
                <div className="space-y-4">
                  {(t('approach.points', { returnObjects: true }) as string[]).map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Button asChild size="lg" variant="outline">
                    <Link to="/#services" className="flex items-center gap-2">
                      {t('approach.cta')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Image Right */}
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <motion.img
                    src={dentistPatient}
                    alt={t('approach.imageAlt')}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                    initial="rest"
                    whileHover="hover"
                    variants={imageWithSubtleOverlay}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Map Left */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.2287654789!2d6.1247!3d49.6225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954e7c4c7d5d0d%3A0x0!2s19%20Avenue%20de%20la%20Fa%C3%AFencerie%2C%201510%20Luxembourg!5e0!3m2!1sen!2slu!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('location.mapTitle')}
                  ></iframe>
                </div>
              </div>

              {/* Location Info Right */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t('location.title')}
                  </h2>
                  <div className="flex items-start gap-3 text-lg text-muted-foreground">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="font-semibold">
                      {t('location.address')}
                    </p>
                  </div>
                </div>

                {/* Voiture */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t('location.car.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-9">
                    {t('location.car.description')}
                  </p>
                </div>

                {/* Transport commun */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Bus className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t('location.publicTransport.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-9">
                    {t('location.publicTransport.description')}
                  </p>
                  <div className="ml-9 space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-semibold">{t('location.publicTransport.busStation')}</span> {t('location.publicTransport.busName')}
                    </p>
                    <p>
                      <span className="font-semibold">{t('location.publicTransport.tramStation')}</span> {t('location.publicTransport.tramName')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
    </>
  );
};

export default About;
