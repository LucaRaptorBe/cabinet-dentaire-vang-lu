import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DoctenaModal from "@/components/DoctenaModal";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import aurelieVang from "@/assets/aurelie-vang.png";
import aygulBaroche from "@/assets/aygul-baroche.png";
import aissataKonate from "@/assets/aissata-konate.png";
import alexaneFebvey from "@/assets/alexane-febvey.png";

interface Doctor {
  name: string;
  eid: string;
  image: string;
}

const Booking = () => {
  const { t, i18n } = useTranslation('booking');
  const lang = i18n.language;
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const doctors: Doctor[] = [
    {
      name: "Aurélie Vang",
      eid: "c6440d00-443c-4efa-bf0b-d9f58abaeecc",
      image: aurelieVang,
    },
    {
      name: "Aygul Baroche",
      eid: "605fe113-a72c-4863-b7dd-949df83a9162",
      image: aygulBaroche,
    },
    {
      name: "Aissata Konaté",
      eid: "d03faefc-1cc3-431d-aeec-4a7249452ba2",
      image: aissataKonate,
    },
    {
      name: "Alexane Febvey",
      eid: "4fdabf8e-025d-4299-895c-94213ba54ab4",
      image: alexaneFebvey,
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Meta tags optimisés pour le SEO
  const seoTitle =
    lang === "fr"
      ? "Prendre Rendez-vous - Dentiste Luxembourg | Cabinet Vang"
      : "Book Appointment Online | Dentist Luxembourg - Vang Clinic";

  const seoDescription =
    lang === "fr"
      ? "Prenez rendez-vous en ligne avec nos dentistes à Luxembourg Limpertsberg. Choix du praticien, horaires flexibles lun-ven 8h-18h. Nouveaux patients bienvenus. Réponse rapide garantie."
      : "Book your appointment online with our dentists in Luxembourg Limpertsberg. Choose your practitioner, flexible hours Mon-Fri 8am-6pm. New patients welcome. Fast response guaranteed.";

  const breadcrumbItems = [
    { name: lang === "fr" ? "Accueil" : "Home", url: "https://cabinetdentairevang.lu/" },
    { name: lang === "fr" ? "Rendez-vous" : "Booking", url: "https://cabinetdentairevang.lu/rendez-vous" }
  ];

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical="https://cabinetdentairevang.lu/rendez-vous"
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
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Practitioner Selection */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
                {t('selectPractitioner.title')}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {doctors.map((doctor, index) => (
                  <motion.div
                    key={doctor.eid}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary"
                      onClick={() => handleDoctorSelect(doctor)}
                    >
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="300"
                          height="300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-center text-foreground">
                          {doctor.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="bg-secondary/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t('callPreference.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('callPreference.description')}
                </p>
                <a
                  href="tel:+35226262046"
                  className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                >
                  +352 26 26 20 46
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </motion.div>

      {/* Doctena Modal */}
      <DoctenaModal
        doctor={selectedDoctor}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Booking;
