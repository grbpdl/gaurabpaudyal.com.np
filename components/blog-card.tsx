"use client";

import Link from "next/link";
import { BlogListItem } from "@/types";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  blog: BlogListItem;
}

/**
 * BlogCard Component
 * Displays a single blog post in card format
 * Shows title, description, date, and tags
 */
export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <article className="group relative h-full overflow-hidden rounded-lg border border-neutral-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-950/20" />

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {blog.title}
          </h3>

          {/* Description */}
          {blog.description && (
            <p className="mb-4 line-clamp-2 text-neutral-600 dark:text-neutral-400">
              {blog.description}
            </p>
          )}

          {/* Meta information */}
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            {blog.date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {blog.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                >
                  {tag}
                </Badge>
              ))}
              {blog.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{blog.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Read more link */}
          <div className="flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400">
            Read Article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
