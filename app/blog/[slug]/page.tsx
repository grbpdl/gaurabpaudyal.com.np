import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/github";
import { BlogHeader } from "@/components/blog-header";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { notFound } from "next/navigation";

/**
 * Generate static parameters for all blog posts
 * Used for static generation of blog pages
 */
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const blog = await getBlogBySlug(params.slug);

    const url = `https://gaurabpaudyal.com.np/blog/${params.slug}`;

    return {
      title: `${blog.title} | Gaurab Paudyal`,
      description: blog.description || blog.content.substring(0, 160),
      keywords: ["Blog", blog.title, "Web Development", ...(blog.tags || [])],
      authors: blog.author
        ? [{ name: blog.author }]
        : [{ name: "Gaurab Paudyal" }],
      openGraph: {
        title: blog.title,
        description: blog.description || blog.content.substring(0, 160),
        type: "article",
        url,
        authors: [blog.author || "Gaurab Paudyal"],
        publishedTime: blog.date,
        tags: blog.tags,
        images: blog.cover
          ? [{ url: blog.cover, width: 1200, height: 630, alt: blog.title }]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description || blog.content.substring(0, 160),
        images: blog.cover ? [blog.cover] : [],
      },
      alternates: {
        canonical: url,
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const blog = await getBlogBySlug(params.slug);

    return (
      <>
        <div className="flex flex-col gap-8 pb-16 pt-24 sm:pt-32">
          {/* Container */}
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              {/* Back Button */}
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>

              {/* Blog Header with metadata */}
              <BlogHeader blog={blog} />

              {/* Blog Content */}
              <article className="mb-12">
                <MarkdownRenderer content={blog.content} />
              </article>

              {/* Divider */}
              <div className="my-12 border-t border-neutral-200 dark:border-neutral-800" />

              {/* Footer */}
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Written by{" "}
                  <span className="font-semibold">
                    {blog.author || "Gaurab Paudyal"}
                  </span>
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Have feedback on this article?{" "}
                  <a
                    href="mailto:contact@example.com"
                    className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Let me know
                  </a>
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-8">
                <Button asChild>
                  <Link href="/blog">← All Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error(`Error loading blog post ${params.slug}:`, error);
    notFound();
  }
}
