# GitHub Blog Setup - Verification Checklist

Use this checklist to verify your GitHub-powered blog system is properly configured.

## Installation Verification

- [ ] All packages installed successfully

  ```bash
  npm ls react-markdown remark-gfm rehype-highlight gray-matter reading-time @tailwindcss/typography highlight.js
  ```

- [ ] No TypeScript errors

  ```bash
  npx tsc --noEmit
  ```

- [ ] Development server starts without errors
  ```bash
  npm run dev
  ```

## Configuration Verification

- [ ] `.env.local` file exists in project root

  ```bash
  ls -la .env.local
  ```

- [ ] Environment variables are set correctly:
  - [ ] `GITHUB_TOKEN` is present and valid
  - [ ] `GITHUB_USERNAME` matches your GitHub username
  - [ ] `GITHUB_REPO` matches your repository name

- [ ] `.env.local` is in `.gitignore` (never commit secrets!)
  ```bash
  cat .gitignore | grep env.local
  ```

## Code Verification

### Files Created

- [ ] `lib/github.ts` exists and exports:
  - [ ] `getAllBlogs()`
  - [ ] `getBlogBySlug(slug)`
  - [ ] `getAllBlogSlugs()`
  - [ ] `isGitHubConfigured()`

- [ ] `components/blog-card.tsx` exists and exports `BlogCard`
- [ ] `components/blog-header.tsx` exists and exports `BlogHeader`
- [ ] `components/markdown-renderer.tsx` exists and exports `MarkdownRenderer`

### Files Updated

- [ ] `app/blog/page.tsx` - Uses `getAllBlogs()` and renders `BlogCard`
- [ ] `app/blog/[slug]/page.tsx` - Uses `getBlogBySlug()` and renders blog post
- [ ] `types/index.ts` - Contains `BlogPost`, `BlogListItem`, `BlogFrontmatter` types
- [ ] `tailwind.config.ts` - Includes `@tailwindcss/typography` plugin

## GitHub Repository Verification

- [ ] GitHub repository created and accessible
- [ ] GitHub Personal Access Token created with `public_repo` scope
  - Token should start with `ghp_`
  - Never commit this token!

- [ ] Repository structure created:

  ```
  your-repo/
  └── blogs/
      ├── my-first-blog/
      │   └── README.md
      └── another-post/
          └── README.md
  ```

- [ ] At least one blog post created with proper frontmatter:

  ```yaml
  ---
  title: "Post Title"
  description: "Description"
  date: "2026-05-22"
  tags:
    - tag1
  ---
  # Post content...
  ```

## Testing Checklist

### Local Testing

- [ ] Development server runs without errors

  ```bash
  npm run dev
  ```

- [ ] `/blog` page loads
  - Visit: `http://localhost:3000/blog`
  - Should see blog listing with blog cards

- [ ] Blog cards display correctly
  - [ ] Title is visible
  - [ ] Description shows (if available)
  - [ ] Date displays correctly
  - [ ] Tags render as badges
  - [ ] Hover effects work

- [ ] Blog listing fetches from GitHub
  - Check browser console for any errors
  - Should see your blog posts from the `blogs` folder

- [ ] Click on a blog card
  - Should navigate to `/blog/[slug]`
  - Blog post content should load

- [ ] Blog post page displays correctly
  - [ ] Title is visible
  - [ ] Cover image displays (if available)
  - [ ] Author and date show
  - [ ] Tags display
  - [ ] Reading time calculates correctly
  - [ ] Markdown content renders properly
  - [ ] Code blocks have syntax highlighting
  - [ ] Images render correctly
  - [ ] Links work

### Build Testing

- [ ] Production build succeeds

  ```bash
  npm run build
  ```

- [ ] No build warnings or errors related to blog system

- [ ] Build output shows static generation
  ```bash
  npm run build 2>&1 | grep -i "blog"
  ```

### Markdown Rendering Tests

Create a test blog post with:

- [ ] **Bold** and _italic_ text
- [ ] [Links](https://example.com)
- [ ] Numbered lists
- [ ] Bullet points
- [ ] Code blocks with syntax highlighting
  ```typescript
  const test = "highlight";
  ```
- [ ] Tables
- [ ] Blockquotes
- [ ] Images
- [ ] Headings (H1-H6)

### SEO Verification

- [ ] Blog listing page has metadata
  - [ ] Title tag
  - [ ] Meta description
  - [ ] OG tags
  - [ ] Twitter card

- [ ] Blog post pages have metadata
  - [ ] Dynamic title with post title
  - [ ] Dynamic meta description
  - [ ] OG image (cover image)
  - [ ] Published date in metadata

Check metadata with:

```bash
# In browser inspector
document.querySelector('title').textContent  # Title
document.querySelector('meta[name="description"]')?.content  # Description
```

### Dark Mode Testing

- [ ] Toggle dark mode (if implemented)
  - [ ] Blog cards look good in dark mode
  - [ ] Blog post content readable in dark mode
  - [ ] Syntax highlighting visible in dark mode
  - [ ] Links visible in dark mode
  - [ ] Code blocks readable in dark mode

### Performance Testing

- [ ] Page loads in reasonable time (< 2 seconds)

  ```bash
  # Check in browser DevTools > Network
  ```

- [ ] ISR caching works
  - [ ] First visit fetches from GitHub
  - [ ] Subsequent visits use cache (faster)
  - [ ] Cache revalidates after 1 hour

- [ ] Images are optimized
  - [ ] No warnings about unoptimized images
  - [ ] Images load with proper sizes

### Error Handling Tests

- [ ] Try accessing non-existent blog
  - Visit: `/blog/non-existent-slug`
  - Should show 404 page

- [ ] Disconnect from internet (simulate offline)
  - Should show error message with "Back to Blog" link

- [ ] Remove environment variables temporarily
  - Blog listing should show warning alert
  - Should guide user to configure

- [ ] Try with invalid GitHub token
  - Should show error message gracefully
  - Should not crash the app

## Deployment Verification (Vercel)

- [ ] Project connected to Vercel
- [ ] Environment variables configured on Vercel
  - [ ] `GITHUB_TOKEN`
  - [ ] `GITHUB_USERNAME`
  - [ ] `GITHUB_REPO`

- [ ] Deployment successful
- [ ] Production site loads without errors
- [ ] Blog pages render correctly on production
- [ ] Blog posts fetch from GitHub on production

## Documentation Verification

- [ ] `GITHUB_BLOG_QUICK_START.md` exists and is readable
- [ ] `GITHUB_BLOG_SETUP.md` exists with complete documentation
- [ ] `SAMPLE_BLOG_POST.md` exists with example
- [ ] `.env.local.example` exists in project root

## Optional Enhancements (Not Required)

- [ ] Comments system (Giscus/Disqus)
- [ ] Search functionality
- [ ] Newsletter subscription
- [ ] Related posts suggestions
- [ ] Table of contents
- [ ] Social sharing buttons
- [ ] Tags/Categories pages
- [ ] Reading progress indicator

## Troubleshooting Log

Use this section to document any issues and their solutions:

### Issue 1: Blogs not showing

- [ ] Verified GitHub credentials
- [ ] Checked `/blogs` folder exists
- [ ] Cleared `.next` cache
- [ ] Restarted dev server
- **Solution:** ********\_********

### Issue 2: Images not loading

- [ ] Verified image URLs are HTTPS
- [ ] Checked URLs are publicly accessible
- [ ] Tested URLs in browser
- **Solution:** ********\_********

### Issue 3: Markdown not rendering

- [ ] Verified frontmatter syntax
- [ ] Checked markdown syntax is valid
- [ ] Cleared `.next` cache
- [ ] Reinstalled dependencies
- **Solution:** ********\_********

## Performance Benchmarks

After setup, record these baseline metrics:

- [ ] Blog listing page load time: \_\_\_ ms
- [ ] Blog post page load time: \_\_\_ ms
- [ ] Lighthouse score (blog page): \_\_\_ / 100
- [ ] Lighthouse score (blog post): \_\_\_ / 100

Re-test after optimizations to compare.

## Sign-Off

When everything is working:

- [ ] All items above are checked
- [ ] Blog system is fully functional
- [ ] Documentation is complete
- [ ] Ready to write blog posts!

**Date Completed:** ******\_\_\_******  
**Verified By:** ******\_\_\_******  
**Notes:** ******\_\_\_******

---

## Quick Verification Command

Run this command to do a quick sanity check:

```bash
# Check required files exist
echo "=== Checking Files ===" && \
test -f lib/github.ts && echo "✓ lib/github.ts" || echo "✗ lib/github.ts" && \
test -f components/blog-card.tsx && echo "✓ components/blog-card.tsx" || echo "✗ components/blog-card.tsx" && \
test -f components/blog-header.tsx && echo "✓ components/blog-header.tsx" || echo "✗ components/blog-header.tsx" && \
test -f components/markdown-renderer.tsx && echo "✓ components/markdown-renderer.tsx" || echo "✗ components/markdown-renderer.tsx" && \
test -f .env.local && echo "✓ .env.local (not in git)" || echo "✗ .env.local (missing)" && \

# Check environment variables
echo "" && \
echo "=== Checking Environment Variables ===" && \
test -n "$GITHUB_TOKEN" && echo "✓ GITHUB_TOKEN is set" || echo "✗ GITHUB_TOKEN is missing" && \
test -n "$GITHUB_USERNAME" && echo "✓ GITHUB_USERNAME is set" || echo "✗ GITHUB_USERNAME is missing" && \
test -n "$GITHUB_REPO" && echo "✓ GITHUB_REPO is set" || echo "✗ GITHUB_REPO is missing"
```

Run from project root:

```bash
source .env.local && bash check.sh
```

---

**Everything verified?** You're ready to start blogging! 🚀
