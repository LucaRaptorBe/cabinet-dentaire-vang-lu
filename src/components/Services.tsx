import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import { useResponsiveViewport } from "@/hooks/useResponsiveViewport";
import DetartrageIcon from "@/assets/services/detartrage.svg?react";
import TraitementCarieIcon from "@/assets/services/traitement-de-carie.svg?react";
import TraitementParodontalIcon from "@/assets/services/traitement-paradontal-initial.svg?react";
import ImplantIcon from "@/assets/services/aivs-implant.svg?react";
import GrossesseIcon from "@/assets/services/controle-de-grossesse.svg?react";
import DevitalisationIcon from "@/assets/services/devitalisation.svg?react";
import ControleIcon from "@/assets/services/controle-adultes-et-enfants.svg?react";
import DentSagesseIcon from "@/assets/services/dent-de-sagesse.svg?react";

const serviceIcons = [DetartrageIcon, TraitementCarieIcon, TraitementParodontalIcon, ImplantIcon, GrossesseIcon, DevitalisationIcon, ControleIcon, DentSagesseIcon];

const Services = () => {
  const { t } = useTranslation('services');
  const services = t('items', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const viewport = useResponsiveViewport();

  return (
    <section id="services" className="py-24 bg-secondary/30">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <motion.div key={index} variants={staggerItem}>
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-4 flex gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/90 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
