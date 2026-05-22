"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogHeaderProps {
  blog: BlogPost;
}

/**
 * BlogHeader Component
 * Displays the blog post header with cover image, title, metadata, and tags
 */
export function BlogHeader({ blog }: BlogHeaderProps) {
  return (
    <div className="mb-8">
      {/* Cover Image */}
      {blog.cover && (
        <div className="relative mb-8 h-96 w-full overflow-hidden rounded-xl">
          <Image
            src={blog.cover}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Title */}
      <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white md:text-5xl">
        {blog.title}
      </h1>

      {/* Description */}
      {blog.description && (
        <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400">
          {blog.description}
        </p>
      )}

      {/* Meta Information */}
      <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
        {/* Author */}
        {blog.author && (
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{blog.author}</span>
          </div>
        )}

        {/* Date */}
        {blog.date && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        )}

        {/* Reading Time */}
        {blog.readTime && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime.text}</span>
          </div>
        )}
      </div>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="flex items-center gap-1"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="my-8 border-t border-neutral-200 dark:border-neutral-800" />
    </div>
  );
}
