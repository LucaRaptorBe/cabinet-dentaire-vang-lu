const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Cabinet Dentaire Vang",
    "description": "Cabinet dentaire moderne à Limpertsberg offrant des soins de qualité : implantologie, détartrage, traitement de caries",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Avenue de la Faïencerie",
      "addressLocality": "Limpertsberg",
      "postalCode": "L-1510",
      "addressCountry": "LU"
    },
    "telephone": "+35226262046",
    "email": "dentiste1510@gmail.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:45",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:45",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.6218",
      "longitude": "6.1278"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "751"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
