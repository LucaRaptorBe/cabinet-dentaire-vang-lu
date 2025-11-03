import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEOHead = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;

    // Update document title
    if (lang === 'fr') {
      document.title = 'Cabinet Dentaire Vang | Dentiste à Limpertsberg, Luxembourg';
    } else {
      document.title = 'Vang Dental Practice | Dentist in Limpertsberg, Luxembourg';
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      if (lang === 'fr') {
        metaDescription.setAttribute(
          'content',
          'Cabinet dentaire moderne à Limpertsberg offrant des soins de qualité : implantologie, détartrage, traitement de caries. Équipe expérimentée multilingue. Prenez rendez-vous au +352 26 26 20 46'
        );
      } else {
        metaDescription.setAttribute(
          'content',
          'Modern dental practice in Limpertsberg offering quality care: implantology, scaling, cavity treatment. Experienced multilingual team. Book an appointment at +352 26 26 20 46'
        );
      }
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (ogTitle) {
      if (lang === 'fr') {
        ogTitle.setAttribute('content', 'Cabinet Dentaire Vang | Dentiste à Limpertsberg, Luxembourg');
      } else {
        ogTitle.setAttribute('content', 'Vang Dental Practice | Dentist in Limpertsberg, Luxembourg');
      }
    }

    if (ogDescription) {
      if (lang === 'fr') {
        ogDescription.setAttribute('content', 'Cabinet dentaire moderne à Limpertsberg offrant des soins de qualité pour toute la famille');
      } else {
        ogDescription.setAttribute('content', 'Modern dental practice in Limpertsberg offering quality care for the whole family');
      }
    }

    // Update Twitter Card meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (twitterTitle) {
      if (lang === 'fr') {
        twitterTitle.setAttribute('content', 'Cabinet Dentaire Vang');
      } else {
        twitterTitle.setAttribute('content', 'Vang Dental Practice');
      }
    }

    if (twitterDescription) {
      if (lang === 'fr') {
        twitterDescription.setAttribute('content', 'Cabinet dentaire moderne à Limpertsberg, Luxembourg');
      } else {
        twitterDescription.setAttribute('content', 'Modern dental practice in Limpertsberg, Luxembourg');
      }
    }
  }, [i18n.language]);

  return null;
};

export default SEOHead;
