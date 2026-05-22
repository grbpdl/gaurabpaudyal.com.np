import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  isGitHubConfigured,
} from "@/lib/github";
import { BlogHeader } from "@/components/blog-header";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { notFound } from "next/navigation";
import { blogsData } from "@/data/blogs";

/**
 * Generate static parameters for all blog posts
 * Used for static generation of blog pages
 * Falls back to static data if GitHub is not configured
 */
export async function generateStaticParams() {
  try {
    // If GitHub is configured, fetch from GitHub
    if (isGitHubConfigured()) {
      try {
        const slugs = await getAllBlogSlugs();
        return slugs.map((slug) => ({
          slug,
        }));
      } catch (error) {
        console.warn(
          "Failed to fetch blog slugs from GitHub, falling back to static data:",
          error,
        );
      }
    }
  } catch (error) {
    console.warn("Error checking GitHub configuration:", error);
  }

  // Fallback to static blog data
  return blogsData.map((blog) => ({
    slug: blog.slug,
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
  let blog;

  try {
    // Try to fetch from GitHub if configured
    if (isGitHubConfigured()) {
      blog = await getBlogBySlug(params.slug);
    }
  } catch (error) {
    console.warn(`Failed to fetch blog from GitHub: ${params.slug}`, error);
  }

  // If not fetched from GitHub, try static data
  if (!blog) {
    const staticBlog = blogsData.find((b) => b.slug === params.slug);
    if (!staticBlog) {
      notFound();
    }
    blog = staticBlog;
  }

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
}
