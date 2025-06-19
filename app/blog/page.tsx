import { Metadata } from "next";
import { BlogPostCard } from "@/components/blog-post-card";
import { blogsData } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | Gaurab Paudyal",
  description:
    "Articles, tutorials, and thoughts on web development, design, and technology",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Blog & Articles
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[700px]">
            Thoughts, tutorials, and insights on web development, design trends,
            and technology. I share what I learn along the way.
          </p>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
