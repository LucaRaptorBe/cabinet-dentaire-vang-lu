import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DoctenaModal from "@/components/DoctenaModal";
import aurelieVang from "@/assets/aurelie-vang.png";
import aygulBaroche from "@/assets/aygul-baroche.png";
import aissataKonate from "@/assets/aissata-konate.png";
import alexaneFebvey from "@/assets/alexane-febvey.png";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import { useResponsiveViewport } from "@/hooks/useResponsiveViewport";
import { Calendar } from "lucide-react";

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

const Team = () => {
  const { t } = useTranslation('team');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<{ name: string; eid: string } | null>(null);
  const teamMembers = t('members', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    experience: string[];
    languageCodes: string[];
    imageAlt: string;
  }>;
  const viewport = useResponsiveViewport();

  const handleAppointmentClick = (index: number, name: string) => {
    setSelectedDoctor({
      name,
      eid: doctorEIDs[index],
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
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
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>

                  {/* RDV Button - Clickable */}
                  <Button
                    onClick={() => handleAppointmentClick(index, member.name)}
                    className="w-full mb-4"
                    size="default"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {t('labels.appointment')}
                  </Button>

                  {/* Experience Section - Always visible */}
                  <div className="w-full text-left pt-4 border-t border-border">
                    <h4 className="text-sm font-bold text-foreground mb-3">
                      {t('labels.experience')}
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Doctena Modal */}
        <DoctenaModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default Team;
