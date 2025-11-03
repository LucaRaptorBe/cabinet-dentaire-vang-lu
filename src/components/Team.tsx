import { Card, CardContent } from "@/components/ui/card";
import aurelieVang from "@/assets/aurelie-vang.png";
import aygulBaroche from "@/assets/aygul-baroche.png";
import aissataKonate from "@/assets/aissata-konate.png";
import alexaneFebvey from "@/assets/alexane-febvey.png";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const teamImages = [aurelieVang, aygulBaroche, aissataKonate, alexaneFebvey];

const Team = () => {
  const { t } = useTranslation('team');
  const teamMembers = t('members', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    education: string;
    specialty?: string;
    experience?: string;
    languages: string;
  }>;

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="border-border overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={teamImages[index]}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">{t('labels.degree')}</span> {member.education}</p>
                    {member.specialty && (
                      <p><span className="font-medium text-foreground">{t('labels.specialty')}</span> {member.specialty}</p>
                    )}
                    {member.experience && (
                      <p className="text-xs">{member.experience}</p>
                    )}
                    <p><span className="font-medium text-foreground">{t('labels.languages')}</span> {member.languages}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
