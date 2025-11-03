import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  noindex = false,
}: SEOHeadProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // Site URL de base (à remplacer par votre URL en production)
  const siteUrl = 'https://cabinetdentairevang.lu';

  // Titres par défaut selon la langue
  const defaultTitle =
    lang === 'fr'
      ? 'Cabinet Dentaire Vang | Dentiste à Limpertsberg, Luxembourg'
      : 'Vang Dental Practice | Dentist in Limpertsberg, Luxembourg';

  // Descriptions par défaut selon la langue
  const defaultDescription =
    lang === 'fr'
      ? 'Cabinet dentaire moderne à Limpertsberg offrant des soins de qualité : implantologie, détartrage, traitement de caries. Équipe expérimentée multilingue. Prenez rendez-vous au +352 26 26 20 46'
      : 'Modern dental practice in Limpertsberg offering quality care: implantology, scaling, cavity treatment. Experienced multilingual team. Book an appointment at +352 26 26 20 46';

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = canonical || siteUrl;
  const pageOgImage = ogImage || `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Keywords - SEO faible mais aide les LLMs */}
      <meta
        name="keywords"
        content={
          lang === 'fr'
            ? 'dentiste Luxembourg, bon dentiste luxembourg, cabinet dentaire Limpertsberg, implantologie, soins dentaires, dentiste multilingue, parodontie, détartrage'
            : 'dentist Luxembourg, best dentist luxembourg, dental clinic Limpertsberg, implantology, dental care, multilingual dentist, periodontics, scaling'
        }
      />

      <meta name="author" content="Cabinet Dentaire Vang" />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Cabinet Dentaire Vang" />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_LU' : 'en_US'} />
      <meta
        property="og:locale:alternate"
        content={lang === 'fr' ? 'en_US' : 'fr_LU'}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
      <meta
        name="twitter:image:alt"
        content={
          lang === 'fr'
            ? 'Cabinet Dentaire Vang - Votre bon dentiste à Luxembourg Limpertsberg'
            : 'Vang Dental Clinic - Your trusted dentist in Luxembourg Limpertsberg'
        }
      />

      {/* Additional SEO */}
      <meta name="geo.region" content="LU" />
      <meta name="geo.placename" content="Limpertsberg, Luxembourg" />
      <meta name="geo.position" content="49.6218;6.1278" />
      <meta name="ICBM" content="49.6218, 6.1278" />

      {/* Hreflang tags for multilingual SEO */}
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOHead;
