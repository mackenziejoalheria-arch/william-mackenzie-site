import React from 'react';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "William Mackenzie Joalheria",
    "alternateName": "William Mackenzie",
    "description": "Alta joalheria artesanal especializada em alianças de casamento em ouro 18k e anéis de noivado com diamantes certificados.",
    "url": "https://www.williammackenzie.com.br",
    "logo": "https://www.williammackenzie.com.br/images/logo.png",
    "image": "https://www.williammackenzie.com.br/images/william.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Caçapava",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-12-99602-6915",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese", "English", "Spanish", "German"]
    },
    "sameAs": [
      "https://www.instagram.com/williammackenzie_joalheria/",
      "https://www.youtube.com/@williammackenzie.oficial"
    ],
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 09:00-19:30"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
