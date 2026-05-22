/**
 * GitHub Blog API Utilities
 * Handles fetching blog posts from GitHub repository
 */

import {
  BlogPost,
  BlogListItem,
  GitHubFileResponse,
  BlogFrontmatter,
} from "@/types";
import matter from "gray-matter";
import readingTime from "reading-time";

const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "";
const GITHUB_REPO = process.env.GITHUB_REPO || "";

/**
 * Get request headers with GitHub token for authentication
 */
function getHeaders() {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Next.js-Blog",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  return headers;
}

/**
 * Fetch all blog post directories from the GitHub repository
 * Each folder represents a blog post
 */
export async function getAllBlogs(): Promise<BlogListItem[]> {
  try {
    if (!GITHUB_USERNAME || !GITHUB_REPO) {
      console.warn("GitHub credentials not configured");
      return [];
    }

    const url = `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/blogs`;

    const response = await fetch(url, {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const contents = (await response.json()) as GitHubFileResponse[];

    // Filter only directories (blog folders)
    const blogDirs = contents.filter((item) => item.type === "dir");

    // Fetch README.md from each directory to get metadata
    const blogs: BlogListItem[] = await Promise.all(
      blogDirs.map(async (dir) => {
        try {
          const readmeUrl = `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/blogs/${dir.name}/README.md`;

          const readmeResponse = await fetch(readmeUrl, {
            headers: getHeaders(),
            next: { revalidate: 3600 },
          });

          if (!readmeResponse.ok) {
            return {
              slug: dir.name,
              title: dir.name.replace(/-/g, " "),
              description: "",
              date: undefined,
              tags: undefined,
            };
          }

          const readmeData =
            (await readmeResponse.json()) as GitHubFileResponse;
          const content = Buffer.from(
            readmeData.content || "",
            "base64",
          ).toString("utf-8");
          const { data: frontmatter } = matter(content);

          return {
            slug: dir.name,
            title:
              (frontmatter as BlogFrontmatter).title ||
              dir.name.replace(/-/g, " "),
            description: (frontmatter as BlogFrontmatter).description,
            date: (frontmatter as BlogFrontmatter).date,
            tags: (frontmatter as BlogFrontmatter).tags,
          };
        } catch (error) {
          console.error(`Error fetching metadata for ${dir.name}:`, error);
          return {
            slug: dir.name,
            title: dir.name.replace(/-/g, " "),
          };
        }
      }),
    );

    // Sort by date (newest first)
    return blogs.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error fetching blogs from GitHub:", error);
    throw error;
  }
}

/**
 * Fetch a specific blog post by slug
 * Fetches the README.md file from the blog folder
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  try {
    if (!GITHUB_USERNAME || !GITHUB_REPO) {
      throw new Error("GitHub credentials not configured");
    }

    const url = `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/blogs/${slug}/README.md`;

    const response = await fetch(url, {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Blog post not found: ${slug}`);
    }

    const data = (await response.json()) as GitHubFileResponse;

    if (!data.content) {
      throw new Error(`No content found for blog: ${slug}`);
    }

    // Decode base64 content
    const markdownContent = Buffer.from(data.content, "base64").toString(
      "utf-8",
    );

    // Parse frontmatter and content
    const { data: frontmatter, content } = matter(markdownContent);
    const fm = frontmatter as BlogFrontmatter;

    // Calculate reading time
    const stats = readingTime(content);

    const blogPost: BlogPost = {
      title: fm.title || slug.replace(/-/g, " "),
      slug,
      description: fm.description,
      date: fm.date,
      tags: fm.tags,
      cover: fm.cover,
      author: fm.author,
      content,
      readTime: {
        text: stats.text,
        minutes: Math.ceil(stats.minutes),
        time: stats.time,
        words: stats.words,
      },
    };

    return blogPost;
  } catch (error) {
    console.error(`Error fetching blog ${slug}:`, error);
    throw error;
  }
}

/**
 * Fetch all blog slugs for static generation
 * Used for generateStaticParams
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const blogs = await getAllBlogs();
    return blogs.map((blog) => blog.slug);
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

/**
 * Check if GitHub is configured properly
 */
export function isGitHubConfigured(): boolean {
  return Boolean(GITHUB_USERNAME && GITHUB_REPO && GITHUB_TOKEN);
}

/**
 * Get GitHub configuration status for debugging
 */
export function getGitHubConfig() {
  return {
    username: GITHUB_USERNAME ? "✓ Configured" : "✗ Missing",
    repo: GITHUB_REPO ? "✓ Configured" : "✗ Missing",
    token: GITHUB_TOKEN ? "✓ Configured" : "✗ Missing",
  };
}
