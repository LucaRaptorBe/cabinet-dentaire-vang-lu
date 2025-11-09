import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import receptionImage from "@/assets/reception.png";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleOnHover, imageReveal, imageWithHoverZoom } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useResponsiveViewport } from "@/hooks/useResponsiveViewport";

const Hero = () => {
  const { t } = useTranslation('hero');
  const viewport = useResponsiveViewport();

  return (
    <section id="hero" className="pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-16">
          <div className="space-y-8">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('subtitle')}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={scaleOnHover}
                className="flex-1"
              >
                <Button size="lg" asChild className="text-lg w-full">
                  <Link to="/rendez-vous" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {t('buttons.bookAppointment', { ns: 'common' })}
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={scaleOnHover}
                className="flex-1"
              >
                <Button size="lg" variant="outline" asChild className="text-lg w-full">
                  <a href="#services">
                    {t('buttons.ourServices', { ns: 'common' })}
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-6 pt-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">{t('address.street')}</p>
                  <p className="text-sm text-muted-foreground">{t('address.city')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">{t('hours.weekdays')}</p>
                  <p className="text-sm text-muted-foreground">{t('hours.saturday')}</p>
                </div>
              </div>
            </motion.div>
          </div>

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
                src={receptionImage}
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

export default Hero;
