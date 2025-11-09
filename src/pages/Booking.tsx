import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DoctenaModal from "@/components/DoctenaModal";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import aurelieVang from "@/assets/aurelie-vang.png";
import aygulBaroche from "@/assets/aygul-baroche.png";
import aissataKonate from "@/assets/aissata-konate.png";
import alexaneFebvey from "@/assets/alexane-febvey.png";

const teamImages = [aurelieVang, aygulBaroche, aissataKonate, alexaneFebvey];

// Doctena EID mapping for each doctor
const doctorEIDs = [
  "c6440d00-443c-4efa-bf0b-d9f58abaeecc", // Dr. Aurélie Vang
  "605fe113-a72c-4863-b7dd-949df83a9162", // Dr. Aygul Baroche
  "d03faefc-1cc3-431d-aeec-4a7249452ba2", // Dr. Aissata Konaté
  "4fdabf8e-025d-4299-895c-94213ba54ab4", // Dr. Alexane Febvey
];

// Flag emoji mapping
const flagEmojis: Record<string, string> = {
  fr: "🇫🇷",
  gb: "🇬🇧",
  nl: "🇳🇱",
  tr: "🇹🇷",
  ru: "🇷🇺",
  ml: "🇲🇱",
  es: "🇪🇸",
  pt: "🇵🇹",
};

interface Doctor {
  name: string;
  eid: string;
  image: string;
}

const Booking = () => {
  const { t: tBooking, i18n } = useTranslation('booking');
  const { t: tTeam } = useTranslation('team');
  const lang = i18n.language;
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDoctor, setExpandedDoctor] = useState<number | null>(null);

  const teamMembers = tTeam('members', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    experience: string[];
    languageCodes: string[];
    imageAlt: string;
  }>;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleCard = (index: number) => {
    setExpandedDoctor(expandedDoctor === index ? null : index);
  };

  const handleDoctorSelect = (index: number, name: string) => {
    setSelectedDoctor({
      name,
      eid: doctorEIDs[index],
      image: teamImages[index],
    });
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
                {tBooking('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium max-w-3xl mx-auto">
                {tBooking('hero.subtitle')}
              </p>
            </div>

            {/* Practitioner Selection */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
                {tBooking('selectPractitioner.title')}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer hover:shadow-xl transition-all duration-300 border-border overflow-hidden flex flex-col"
                      onClick={() => handleDoctorSelect(index, member.name)}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                        {/* Circular Avatar */}
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                          <img
                            src={teamImages[index]}
                            alt={member.imageAlt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width="128"
                            height="128"
                          />
                        </div>

                        {/* Name */}
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {member.name}
                        </h3>

                        {/* Voir Plus Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(index);
                          }}
                          className="text-primary hover:text-primary/80 mb-4"
                        >
                          {tTeam('labels.viewMore')}
                          <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${expandedDoctor === index ? 'rotate-90' : ''}`} />
                        </Button>

                        {/* Expandable Content */}
                        <AnimatePresence>
                          {expandedDoctor === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="w-full text-left overflow-hidden"
                            >
                              {/* Experience Section */}
                              <div className="pt-4 border-t border-border">
                                <h4 className="text-sm font-bold text-foreground mb-3">
                                  {tTeam('labels.experience')}
                                </h4>
                                <ul className="space-y-2 mb-4">
                                  {member.experience.map((exp, expIndex) => (
                                    <li key={expIndex} className="text-sm text-muted-foreground flex">
                                      <span className="mr-2">•</span>
                                      <span>{exp}</span>
                                    </li>
                                  ))}
                                </ul>

                                {/* Language Flags */}
                                <div className="flex items-center gap-1 justify-center">
                                  {member.languageCodes.map((code, flagIndex) => (
                                    <span key={flagIndex} className="text-2xl">
                                      {flagEmojis[code]}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                  {tBooking('callPreference.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {tBooking('callPreference.description')}
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
