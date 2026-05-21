import { BlogPost } from "@/types";

interface BlogPostSchemaProps {
  post: BlogPost;
  slug: string;
}

export function BlogPostSchema({ post, slug }: BlogPostSchemaProps) {
  const url = `https://gaurabpaudyal.com.np/blog/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Gaurab Paudyal",
      url: "https://gaurabpaudyal.com.np",
    },
    publisher: {
      "@type": "Organization",
      name: "Gaurab Paudyal",
      url: "https://gaurabpaudyal.com.np",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.categories.join(", "),
    articleBody: post.content,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
