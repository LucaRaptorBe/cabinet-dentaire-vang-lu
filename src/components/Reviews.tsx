import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation('reviews');
  const platforms = t('platforms', { returnObjects: true }) as Array<{
    name: string;
    rating: number;
    reviewCount: number;
    logo?: string;
  }>;
  const testimonials = t('testimonials', { returnObjects: true }) as Array<{
    text: string;
    author: string;
    platform: string;
    timeAgo?: string;
  }>;

  // Fonction pour obtenir les initiales d'un nom
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return names[0][0] + names[names.length - 1][0];
    }
    return name[0];
  };

  // Couleurs d'avatar Google-style
  const avatarColors = [
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
  ];

  const getAvatarColor = (name: string) => {
    const index = name.charCodeAt(0) % avatarColors.length;
    return avatarColors[index];
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating ? "fill-[#FBBC04] text-[#FBBC04]" : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Logo Google SVG
  const GoogleLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  // Logo Doctena simple
  const DoctenaLogo = () => (
    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
      D
    </div>
  );

  return (
    <section id="reviews" className="py-24 bg-background">
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

        {/* Platform Ratings - Style Google */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {platforms.map((platform, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 h-full bg-white dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {platform.name === 'Google' ? <GoogleLogo /> : <DoctenaLogo />}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {platform.rating.toFixed(1)}
                    </span>
                    <div className="flex flex-col">
                      {renderStars(platform.rating)}
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {platform.reviewCount} {t('reviews')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials - Style Google Reviews */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full bg-white dark:bg-gray-900">
                <CardContent className="p-5">
                  {/* Header avec avatar */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full ${getAvatarColor(testimonial.author)} flex items-center justify-center text-white font-medium flex-shrink-0`}>
                      {getInitials(testimonial.author)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {testimonial.author}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {renderStars(5)}
                      </div>
                    </div>
                  </div>

                  {/* Texte de l'avis */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Footer avec plateforme */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                    {testimonial.platform === 'Google' ? (
                      <>
                        <GoogleLogo />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Posté sur Google
                        </span>
                      </>
                    ) : (
                      <>
                        <DoctenaLogo />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Posté sur Doctena
                        </span>
                      </>
                    )}
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

export default Reviews;
