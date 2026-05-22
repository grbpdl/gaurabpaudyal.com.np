"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import Image from "next/image";

interface MarkdownRendererProps {
  content: string;
}

/**
 * MarkdownRenderer Component
 * Renders markdown content with syntax highlighting and GitHub-flavored markdown support
 * Supports tables, task lists, code fences, blockquotes, and images
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Custom image component for Next.js optimization
          img: ({ src, alt }) => {
            if (!src)
              return (
                <div className="bg-neutral-200 dark:bg-neutral-700 h-64 rounded" />
              );

            // Check if src is a string (not a Blob)
            if (typeof src === "string") {
              return (
                <div className="relative h-auto w-full">
                  <Image
                    src={src}
                    alt={alt || "Blog image"}
                    width={800}
                    height={400}
                    className="rounded-lg"
                    priority={false}
                  />
                </div>
              );
            }

            // Fallback for non-string sources (Blob, etc)
            return (
              <img
                src={URL.createObjectURL(src as Blob)}
                alt={alt || "Blog image"}
                className="rounded-lg w-full h-auto"
              />
            );
          },

          // Custom table styling
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">{children}</table>
            </div>
          ),

          // Custom link handling
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          // Custom code block styling
          code: ({ className, children }) => {
            const isCodeBlock = className?.startsWith("language-");
            if (!isCodeBlock) {
              return (
                <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            return <code className={className}>{children}</code>;
          },

          // Custom pre styling
          pre: ({ children }) => (
            <pre className="overflow-x-auto rounded-lg bg-neutral-900 p-4 dark:bg-neutral-950">
              {children}
            </pre>
          ),

          // Custom heading styling
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-6 mb-3">
              {children}
            </h3>
          ),

          // Custom blockquote styling
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-600 dark:text-neutral-400">
              {children}
            </blockquote>
          ),

          // Custom list styling
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2">{children}</ul>
          ),

          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2">{children}</ol>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
