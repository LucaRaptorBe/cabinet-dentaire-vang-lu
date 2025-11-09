import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import commonFr from '../locales/fr/common.json';
import heroFr from '../locales/fr/hero.json';
import introFr from '../locales/fr/intro.json';
import servicesFr from '../locales/fr/services.json';
import teamFr from '../locales/fr/team.json';
import contactFr from '../locales/fr/contact.json';
import footerFr from '../locales/fr/footer.json';
import aboutFr from '../locales/fr/about.json';
import bookingFr from '../locales/fr/booking.json';
import reviewsFr from '../locales/fr/reviews.json';

import commonEn from '../locales/en/common.json';
import heroEn from '../locales/en/hero.json';
import introEn from '../locales/en/intro.json';
import servicesEn from '../locales/en/services.json';
import teamEn from '../locales/en/team.json';
import contactEn from '../locales/en/contact.json';
import footerEn from '../locales/en/footer.json';
import aboutEn from '../locales/en/about.json';
import bookingEn from '../locales/en/booking.json';
import reviewsEn from '../locales/en/reviews.json';

const resources = {
  fr: {
    common: commonFr,
    hero: heroFr,
    intro: introFr,
    services: servicesFr,
    team: teamFr,
    contact: contactFr,
    footer: footerFr,
    about: aboutFr,
    booking: bookingFr,
    reviews: reviewsFr,
  },
  en: {
    common: commonEn,
    hero: heroEn,
    intro: introEn,
    services: servicesEn,
    team: teamEn,
    contact: contactEn,
    footer: footerEn,
    about: aboutEn,
    booking: bookingEn,
    reviews: reviewsEn,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
