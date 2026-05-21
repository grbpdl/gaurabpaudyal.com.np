import { Project } from "@/types";

interface ProjectSchemaProps {
  project: Project;
}

export function ProjectSchema({ project }: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: project.liveLink || "https://gaurabpaudyal.com.np/projects",
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    screenshot: project.image,
    image: project.image,
    author: {
      "@type": "Person",
      name: "Gaurab Paudyal",
      url: "https://gaurabpaudyal.com.np",
    },
    datePublished: new Date().toISOString(),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    keywords: project.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
