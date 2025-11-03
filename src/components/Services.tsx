import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Heart, Stethoscope, Baby, Drill, Users, Bone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import { useResponsiveViewport } from "@/hooks/useResponsiveViewport";

const serviceIcons = [Sparkles, ShieldCheck, Heart, Stethoscope, Baby, Drill, Users, Bone];

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
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
