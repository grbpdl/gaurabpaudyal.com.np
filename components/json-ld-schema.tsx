export function JsonLdSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gaurab Paudyal",
    url: "https://gaurabpaudyal.com.np",
    image:
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748617116/convocation_myjibz.jpg",
    description:
      "Full Stack Engineer with 3+ years of experience building scalable systems, microservices, and responsive web applications.",
    jobTitle: "Full Stack Engineer",
    email: "paudyal.gaurab11@gmail.com",
    telephone: "+977-9812905882",
    sameAs: [
      "https://github.com/grbpdl",
      "https://www.linkedin.com/in/gaurab-paudyal",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    knowsAbout: [
      "Full Stack Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "DevOps",
      "Microservices",
      "Go",
      "Python",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gaurab Paudyal",
    url: "https://gaurabpaudyal.com.np",
    logo: "https://res.cloudinary.com/dazmdsylh/image/upload/v1748617116/convocation_myjibz.jpg",
    description:
      "Full Stack Developer Portfolio - Building scalable web applications and microservices",
    sameAs: [
      "https://github.com/grbpdl",
      "https://www.linkedin.com/in/gaurab-paudyal",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gaurabpaudyal.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://gaurabpaudyal.com.np/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skills",
        item: "https://gaurabpaudyal.com.np/skills",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://gaurabpaudyal.com.np/projects",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Blog",
        item: "https://gaurabpaudyal.com.np/blog",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: "https://gaurabpaudyal.com.np/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
    </>
  );
}
