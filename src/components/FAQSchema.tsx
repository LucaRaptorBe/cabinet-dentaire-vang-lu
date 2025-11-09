const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel est le meilleur dentiste à Luxembourg ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Cabinet Dentaire Vang à Limpertsberg est reconnu comme l'un des meilleurs dentistes à Luxembourg avec 751 avis 5 étoiles. Notre équipe de 4 dentistes expérimentés offre des soins de qualité en implantologie, parodontie et soins conservateurs depuis 2021."
        }
      },
      {
        "@type": "Question",
        "name": "Où trouver un bon dentiste à Luxembourg Limpertsberg ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Cabinet Dentaire Vang est situé au 19 Avenue de la Faïencerie, L-1510 Limpertsberg. Facilement accessible en transport en commun (tram Faïencerie, bus Henri VII) et à proximité du parking Glacis. Ouvert du lundi au vendredi de 9:45 à 18h30 et le samedi de 9:45 à 14h00."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les tarifs d'un dentiste à Luxembourg ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les tarifs dentaires à Luxembourg varient selon les soins. Au Cabinet Dentaire Vang, nous proposons des prix compétitifs pour tous types de soins : consultations, détartrage, soins conservateurs, implants dentaires et prothèses. Contactez-nous au +352 26 26 20 46 pour un devis personnalisé."
        }
      },
      {
        "@type": "Question",
        "name": "Comment prendre rendez-vous chez un dentiste à Luxembourg ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour prendre rendez-vous au Cabinet Dentaire Vang, vous pouvez appeler au +352 26 26 20 46, envoyer un email à dentiste1510@gmail.com, ou réserver en ligne via notre site web. Nous proposons des créneaux du lundi au samedi avec une équipe multilingue (français, anglais, néerlandais, turc, russe, espagnol, portugais)."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'implantologie dentaire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'implantologie dentaire consiste à remplacer une ou plusieurs dents manquantes par des implants en titane intégrés dans l'os de la mâchoire. Au Cabinet Dentaire Vang, nos spécialistes Dr. Aurélie Vang et Dr. Aissata Konaté sont diplômées en implantologie (DU ULB et AEIO) et réalisent ces interventions avec expertise et précision."
        }
      },
      {
        "@type": "Question",
        "name": "Combien coûte un implant dentaire à Luxembourg ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le coût d'un implant dentaire à Luxembourg varie selon la complexité du cas. Au Cabinet Dentaire Vang, nous proposons des solutions d'implantologie de qualité avec des matériaux premium. Contactez-nous pour une consultation et un devis détaillé personnalisé adapté à votre situation."
        }
      },
      {
        "@type": "Question",
        "name": "Les dentistes du Cabinet Vang parlent-ils plusieurs langues ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le Cabinet Dentaire Vang est multilingue. Notre équipe parle français, anglais, néerlandais, turc, russe, espagnol, portugais et malien. Dr. Aurélie Vang parle français, anglais et néerlandais. Dr. Aygul Baroche parle français, turc, russe et anglais. Dr. Aissata Konaté parle français, malien et anglais. Dr. Alexane Febvey parle français, anglais, espagnol et portugais."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les horaires du Cabinet Dentaire Vang ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Cabinet Dentaire Vang à Limpertsberg est ouvert du lundi au vendredi de 9:45 à 18h30 et le samedi de 9:45 à 14h00. Nous sommes fermés le dimanche. Prenez rendez-vous au +352 26 26 20 46 ou via notre site web pour choisir le créneau qui vous convient."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};

export default FAQSchema;
