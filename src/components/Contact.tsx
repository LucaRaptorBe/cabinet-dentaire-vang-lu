import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import treatmentRoom from "@/assets/treatment-room.png";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleOnHover, imageReveal, imageWithHoverZoom } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import { useResponsiveViewport } from "@/hooks/useResponsiveViewport";

const Contact = () => {
  const { t } = useTranslation('contact');
  const viewport = useResponsiveViewport();

  return (
    <section id="contact" className="py-24 bg-secondary/30">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('labels.phone')}</h3>
                    <p className="text-muted-foreground mb-1">{t('phone.standard')}</p>
                    <p className="text-muted-foreground">{t('phone.emergency')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('labels.email')}</h3>
                    <a href={`mailto:${t('email')}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {t('email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('labels.address')}</h3>
                    <p className="text-muted-foreground">{t('address.street')}</p>
                    <p className="text-muted-foreground">{t('address.city')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('labels.hours')}</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>{t('hours.weekdays')}</p>
                      <p>{t('hours.saturday')}</p>
                      <p className="text-sm">{t('hours.sunday')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent bg-accent/10 border-2">
              <CardContent className="p-6 flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t('welcomeMessage.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('welcomeMessage.description')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={scaleOnHover}
                className="flex-1"
              >
                <Button size="lg" asChild className="w-full">
                  <a href="tel:+35226262046" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    {t('buttons.callNow', { ns: 'common' })}
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={scaleOnHover}
                className="flex-1"
              >
                <Button size="lg" variant="outline" asChild className="w-full">
                  <a href={`mailto:${t('email')}`} className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    {t('buttons.sendEmail', { ns: 'common' })}
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={imageReveal}
            transition={{ delay: 0.4 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src={treatmentRoom}
                alt={t('imageAlt')}
                className="w-full h-full object-cover"
                initial="rest"
                whileHover="hover"
                variants={imageWithHoverZoom}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
