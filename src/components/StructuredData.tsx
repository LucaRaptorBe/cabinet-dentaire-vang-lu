const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Cabinet Dentaire Vang",
    "alternateName": "Cabinet Dentaire Vang Lu",
    "description": "Cabinet dentaire moderne à Limpertsberg, Luxembourg. Équipe multilingue expérimentée spécialisée en implantologie, parodontie, soins conservateurs et prothèses. 751 avis 5 étoiles.",
    "url": "https://cabinetdentairevang.lu",
    "image": "https://cabinetdentairevang.lu/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Avenue de la Faïencerie",
      "addressLocality": "Limpertsberg",
      "addressRegion": "Luxembourg",
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
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Dr. Aurélie Vang",
        "jobTitle": "Dentiste - Spécialiste en Implantologie",
        "description": "Dentiste expérimentée spécialisée en implantologie. Diplômée de l'ULB avec un DU en Implantologie. Ancienne assistante hospitalière-universitaire au service de stomatologie-dentisterie de l'Hôpital Erasme.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Université Libre de Bruxelles (ULB)"
        },
        "knowsLanguage": ["French", "English", "Dutch"],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Graduate Degree",
          "name": "Diplôme Universitaire en Implantologie"
        },
        "worksFor": {
          "@type": "Dentist",
          "name": "Cabinet Dentaire Vang"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Aygul Baroche",
        "jobTitle": "Dentiste - Soins Généraux",
        "description": "Dentiste multilingue spécialisée en soins dentaires généraux. Diplômée de la Faculté d'Odontologie de Lorraine.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Faculté d'Odontologie de Lorraine"
        },
        "knowsLanguage": ["French", "Turkish", "Russian", "English"],
        "worksFor": {
          "@type": "Dentist",
          "name": "Cabinet Dentaire Vang"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Aissata Konaté",
        "jobTitle": "Dentiste - Spécialiste en Implantologie et Parodontie",
        "description": "Dentiste spécialisée en implantologie et parodontie. Diplômée de l'ULB avec un DU en Implantologie à l'AEIO. Formée au cabinet parodontal sous la supervision du représentant belge de NYU.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Université Libre de Bruxelles (ULB)"
        },
        "knowsLanguage": ["French", "Malian", "English"],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Graduate Degree",
          "name": "Diplôme Universitaire en Implantologie - AEIO"
        },
        "worksFor": {
          "@type": "Dentist",
          "name": "Cabinet Dentaire Vang"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Alexane Febvey",
        "jobTitle": "Dentiste - Prothèses et Esthétique",
        "description": "Dentiste multilingue spécialisée en prothèses dentaires et esthétique. Diplômée du CESPU au Portugal.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "CESPU (Portugal)"
        },
        "knowsLanguage": ["French", "English", "Spanish", "Portuguese"],
        "worksFor": {
          "@type": "Dentist",
          "name": "Cabinet Dentaire Vang"
        }
      }
    ],
    "medicalSpecialty": [
      "Implantology",
      "Periodontics",
      "GeneralDentistry",
      "CosmeticDentistry",
      "Prosthodontics"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Implantologie dentaire"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Soins conservateurs"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parodontie"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Prothèses dentaires"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Détartrage et prophylaxie"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Esthétique dentaire"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
