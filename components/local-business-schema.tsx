export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gaurab Paudyal",
    description:
      "Full Stack Engineer offering web development, backend development, and DevOps services.",
    url: "https://gaurabpaudyal.com.np",
    telephone: "+977-9812905882",
    email: "paudyal.gaurab11@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      addressCountry: "NP",
    },
    sameAs: [
      "https://github.com/grbpdl",
      "https://www.linkedin.com/in/gaurab-paudyal",
    ],
    image:
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748617116/convocation_myjibz.jpg",
    priceRange: "Varies by project",
    areaServed: ["NP", "Worldwide"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
