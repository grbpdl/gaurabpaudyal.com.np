# GitHub Blog - Quick Start Guide

## 5-Minute Setup

### Step 1: Get GitHub Token (2 min)

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select `public_repo` scope
4. Copy the token

### Step 2: Create Environment File (1 min)

```bash
# Create .env.local in project root
echo "GITHUB_TOKEN=your_token_here" > .env.local
echo "GITHUB_USERNAME=your_username" >> .env.local
echo "GITHUB_REPO=your_repo_name" >> .env.local
```

### Step 3: Create Blog Folder in GitHub

In your repository, create this structure:

```
/blogs
  /my-first-blog
    /README.md
```

### Step 4: Write First Blog

Create `blogs/my-first-blog/README.md`:

```markdown
---
title: My First Blog Post
description: This is my first blog post
date: 2026-05-22
tags:
  - blog
  - first
cover: https://example.com/image.jpg
author: Your Name
---

# My First Blog Post

This is the content of your blog post written in Markdown!

## Features

- **Bold text**
- _Italic text_
- [Links](https://example.com)

\`\`\`typescript
// Code blocks with syntax highlighting
const hello = "world";
\`\`\`
```

### Step 5: Run Locally

```bash
npm run dev
# Visit http://localhost:3000/blog
```

## Files Created/Modified

### New Files

- `lib/github.ts` - GitHub API utilities
- `components/blog-card.tsx` - Blog listing card
- `components/blog-header.tsx` - Blog post header
- `components/markdown-renderer.tsx` - Markdown renderer
- `.env.local.example` - Environment template
- `GITHUB_BLOG_SETUP.md` - Full documentation

### Modified Files

- `app/blog/page.tsx` - Blog listing page
- `app/blog/[slug]/page.tsx` - Blog post page
- `types/index.ts` - Blog types
- `tailwind.config.ts` - Added typography plugin

## Installed Packages

```bash
npm install react-markdown remark-gfm rehype-highlight gray-matter reading-time @tailwindcss/typography highlight.js
```

## Frontmatter Format

```yaml
---
title: "Post Title" # Required
description: "Short description" # Optional
date: "2026-05-22" # Optional (YYYY-MM-DD)
author: "Your Name" # Optional
tags: # Optional (array)
  - tag1
  - tag2
cover: "https://example.com/img.jpg" # Optional
published: true # Optional
---
```

## Features Included

✅ Automatic blog discovery from GitHub  
✅ Markdown rendering with syntax highlighting  
✅ Frontmatter metadata extraction  
✅ Reading time calculation  
✅ Dark mode support  
✅ Mobile responsive design  
✅ SEO optimization  
✅ Image optimization  
✅ Performance caching (ISR)  
✅ Error handling

## Folder Structure

```
blogs/
├── blog-post-1/
│   └── README.md
├── blog-post-2/
│   └── README.md
└── blog-post-3/
    └── README.md
```

Each folder name becomes the blog URL slug.
Example: `/blogs/my-first-blog/` → `/blog/my-first-blog`

## Common Issues

### Blogs not appearing?

- Check `GITHUB_USERNAME` and `GITHUB_REPO` are correct
- Verify `GITHUB_TOKEN` is valid
- Confirm `/blogs` folder exists in repo
- Clear Next.js cache: `rm -rf .next`

### Images not loading?

- Use absolute URLs (https://...)
- Verify image URL is publicly accessible
- Test URL in browser directly

### Markdown not rendering?

- Check frontmatter syntax (must start with `---`)
- Verify markdown syntax is correct
- Clear `.next` folder and rebuild

## Markdown Examples

### Links

```markdown
[Text](https://example.com)
```

### Code Blocks

````markdown
```typescript
const code = "highlighted";
```
````

### Images

```markdown
![Alt text](https://example.com/image.jpg)
```

### Lists

```markdown
- Item 1
- Item 2
  - Nested item

1. Ordered 1
2. Ordered 2
```

### Tables

```markdown
| Column 1 | Column 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

### Blockquotes

```markdown
> This is a quote
> Spanning multiple lines
```

## Environment Variables

Required:

- `GITHUB_TOKEN` - Your GitHub personal access token
- `GITHUB_USERNAME` - Your GitHub username
- `GITHUB_REPO` - Repository name (where `/blogs` folder is)

Get token: https://github.com/settings/tokens

## Deployment (Vercel)

1. Push code to GitHub
2. Import on Vercel
3. Add environment variables
4. Deploy!

```bash
# Or use CLI
vercel env add GITHUB_TOKEN
vercel env add GITHUB_USERNAME
vercel env add GITHUB_REPO
vercel deploy --prod
```

## Next Steps

1. Write your first blog post
2. Push to GitHub
3. Visit `/blog` to see it live
4. Share with the world!

## Full Documentation

See `GITHUB_BLOG_SETUP.md` for complete documentation including:

- Architecture overview
- Component API reference
- TypeScript types
- Advanced customization
- Optional enhancements
- Troubleshooting guide
- Performance tips

---

**Happy Blogging!** 🎉
