import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogsData } from "@/data/blogs";
import { BlogPostSchema } from "@/components/blog-post-schema";

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const url = `https://gaurabpaudyal.com.np/blog/${post.slug}`;

  return {
    title: `${post.title} | Gaurab Paudyal`,
    description: post.excerpt,
    keywords: ["Blog", post.title, "Web Development", ...post.categories],
    authors: [{ name: "Gaurab Paudyal" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      authors: ["Gaurab Paudyal"],
      publishedTime: post.date,
      tags: post.categories,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogsData.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  // This would be replaced with actual content from a CMS or markdown file
  const articleContent = `
    <h2>Introduction</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
      Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
      Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
    </p>
    <p>
      Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. 
      Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
    </p>
    
    <h2>Main Concepts</h2>
    <p>
      In this section, we'll explore the core concepts that form the foundation of our topic. 
      Understanding these principles is crucial for mastering the subject matter.
    </p>
    <p>
      Proin fringilla, enim vel ultricies volutpat, ligula nibh porta dui, non tristique enim nulla vel ipsum. 
      Fusce vitae odio sit amet ipsum sollicitudin tempor. Praesent posuere, felis nec accumsan cursus, 
      massa neque egestas arcu, ut faucibus massa ex id magna. Sed erat justo, tincidunt eget egestas at, 
      dictum ac nibh.
    </p>
    
    <h2>Implementation Details</h2>
    <p>
      Now that we've covered the fundamentals, let's dive into the practical implementation. 
      We'll walk through each step of the process, highlighting best practices and common pitfalls to avoid.
    </p>
    <p>
      Cras facilisis sagittis nibh ut elementum. Praesent fringilla, mauris id varius efficitur, 
      ante neque efficitur purus, sed dictum justo eros viverra augue. Integer at pretium eros. 
      Maecenas ut purus rutrum, dignissim nulla vitae, dignissim tellus.
    </p>
    
    <h2>Conclusion</h2>
    <p>
      To summarize what we've learned, the key takeaways from this article are:
    </p>
    <ul>
      <li>First major point and its implications</li>
      <li>Second key insight that readers should remember</li>
      <li>Final important concept and how to apply it</li>
      <li>Suggestions for further learning and exploration</li>
    </ul>
    <p>
      Thank you for reading this article. I hope you found it informative and useful for your projects.
      If you have any questions or comments, please feel free to reach out.
    </p>
  `;

  return (
    <>
      <BlogPostSchema post={post} slug={params.slug} />
      <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>

            <div className="mb-10 overflow-hidden rounded-lg border">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover aspect-[2/1]"
              />
            </div>

            <article className="prose prose-stone dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: articleContent }} />
            </article>

            <Separator className="my-12" />

            <div>
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogsData
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost, index) => (
                    <Link
                      key={index}
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="flex gap-4">
                        <div className="h-20 w-20 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{relatedPost.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
