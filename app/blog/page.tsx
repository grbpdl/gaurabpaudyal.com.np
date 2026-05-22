import { Metadata } from "next";
import { getAllBlogs, isGitHubConfigured } from "@/lib/github";
import { BlogCard } from "@/components/blog-card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog | Gaurab Paudyal",
  description:
    "Read articles about web development, full stack development, performance optimization, design systems, TypeScript, and future web development trends.",
  keywords: [
    "Blog",
    "Web Development",
    "Full Stack Development",
    "Performance",
    "Design Systems",
    "React",
    "TypeScript",
    "State Management",
  ],
  openGraph: {
    title: "Blog | Gaurab Paudyal",
    description:
      "Articles on web development best practices, full stack technologies, and performance optimization.",
    type: "website",
    url: "https://gaurabpaudyal.com.np/blog",
  },
  twitter: {
    card: "summary",
    title: "Blog | Gaurab Paudyal",
    description:
      "Read my latest articles on web development and technology trends.",
  },
  alternates: {
    canonical: "https://gaurabpaudyal.com.np/blog",
  },
};

/**
 * Blog Listing Page
 * Fetches all blog posts from GitHub repository and displays them
 */
async function BlogList() {
  try {
    const blogs = await getAllBlogs();

    if (!blogs || blogs.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">
            No blog posts found yet. Check back soon!
          </p>
        </div>
      );
    }

    return (
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error loading blogs:", error);
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load blog posts. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }
}

/**
 * Loading skeleton for blog list
 */
function BlogListLoading() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-64 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 animate-pulse"
        />
      ))}
    </div>
  );
}

export default function BlogPage() {
  const configured = isGitHubConfigured();

  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      {/* Header Section */}
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Blog & Articles
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-neutral-600 dark:text-neutral-400">
            Thoughts, tutorials, and insights on web development, design trends,
            and technology. I share what I learn along the way.
          </p>
        </div>
      </div>

      {/* Configuration Warning */}
      {!configured && (
        <div className="container px-4 sm:px-6 lg:px-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              GitHub configuration is missing. Please set up GITHUB_TOKEN,
              GITHUB_USERNAME, and GITHUB_REPO in your environment variables.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Blog Grid */}
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Suspense fallback={<BlogListLoading />}>
            <BlogList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
