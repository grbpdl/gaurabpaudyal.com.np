# Deployment Guide - GitHub-Powered Blog System

## Deployment Overview

Your blog system can be deployed to any Next.js-compatible platform. This guide covers the most popular options.

## Pre-Deployment Checklist

- [ ] All environment variables configured locally
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] Blog pages render correctly locally
- [ ] GitHub repository has `/blogs` folder with test posts
- [ ] GitHub token has `public_repo` scope

## Deployment Platforms

### 1. Vercel (Recommended)

**Why Vercel?**

- Made by Next.js creators
- Zero-config deployment
- Automatic ISR support
- Best performance
- Free tier available
- GitHub integration included

#### Setup Steps

##### Option A: GitHub Dashboard

1. **Connect Vercel**
   - Go to https://vercel.com
   - Click "Continue with GitHub"
   - Authorize Vercel to access your repositories

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your portfolio repository
   - Click "Import"

3. **Configure Environment Variables**
   - In the "Environment Variables" section, add:
     - `GITHUB_TOKEN` = your token
     - `GITHUB_USERNAME` = your username
     - `GITHUB_REPO` = your repo name
   - Make sure `GITHUB_TOKEN` is marked as "Sensitive"
   - Select all environments (Production, Preview, Development)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Click "Visit" to view your site

##### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Navigate to project directory
cd "d:\files\learn\portfolio website"

# Deploy project
vercel --prod

# Add environment variables
vercel env add GITHUB_TOKEN
vercel env add GITHUB_USERNAME
vercel env add GITHUB_REPO

# Redeploy with environment variables
vercel --prod
```

#### Vercel Configuration File

Create `vercel.json` in your project root for custom settings:

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "env": ["GITHUB_TOKEN", "GITHUB_USERNAME", "GITHUB_REPO"],
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

#### Vercel Environment Variables Security

```bash
# For Sensitive Variables (recommended for GITHUB_TOKEN):
# - Not exposed to browser (client-side)
# - Only available server-side
# - Not shown in build logs

# In Vercel Dashboard:
# Settings → Environment Variables
# Check "Sensitive" checkbox for GITHUB_TOKEN
```

#### Expected Build Time

- Initial: 2-3 minutes
- Subsequent: 30-60 seconds
- ISR Revalidation: Background (transparent)

### 2. Netlify

**Pros:** Good free tier, easy to use  
**Cons:** Slower ISR support

#### Setup Steps

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Navigate to project
cd "d:\files\learn\portfolio website"

# Login
netlify login

# Initialize
netlify init

# During setup, when asked about build command:
# Build command: next build
# Publish directory: .next
```

#### Create netlify.toml

```toml
[build]
  command = "next build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NEXT_PUBLIC_API_URL = "https://api.example.com"

[functions]
  included_files = ["src/**"]
  directory = "netlify/functions"

[[redirects]]
  from = "/blog/*"
  to = "/:splat"
  status = 200

[dev]
  framework = "next"
  targetPort = 3000
  command = "next dev"
  port = 8888
```

#### Add Environment Variables

1. Go to Netlify Dashboard
2. Select your site
3. Settings → Build & deploy → Environment
4. Click "Edit variables"
5. Add:
   - `GITHUB_TOKEN`
   - `GITHUB_USERNAME`
   - `GITHUB_REPO`
6. Trigger deploy

#### Deploy

```bash
netlify deploy --prod
```

### 3. AWS Amplify

**Pros:** Scalable, reliable  
**Cons:** More setup required

#### Setup Steps

```bash
# Install Amplify CLI
npm i -g @aws-amplify/cli

# Configure
amplify configure

# Navigate to project
cd "d:\files\learn\portfolio website"

# Initialize
amplify init
# Choose Next.js when prompted

# Add hosting
amplify add hosting
# Choose "Amazon CloudFront and S3"

# Publish
amplify publish
```

#### Environment Variables

1. Go to AWS Amplify Console
2. Select your app
3. Environment → Build settings
4. Update build specification
5. Add environment variables

### 4. Railway

**Pros:** Simple, GitHub-integrated  
**Cons:** Paid plans start sooner

#### Setup Steps

```bash
# Install Railway CLI
npm install -g @railway/cli

# Navigate to project
cd "d:\files\learn\portfolio website"

# Login
railway login

# Initialize
railway init

# Add environment variables
railway variables set GITHUB_TOKEN=your_token
railway variables set GITHUB_USERNAME=your_username
railway variables set GITHUB_REPO=your_repo

# Deploy
railway up
```

### 5. Render

**Pros:** Free tier available, Node.js optimized  
**Cons:** Cold starts possible

#### Setup Steps

1. Go to https://render.com
2. Click "New +"
3. Select "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** your-portfolio-blog
   - **Environment:** Node
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start`

6. Add environment variables:
   - `GITHUB_TOKEN`
   - `GITHUB_USERNAME`
   - `GITHUB_REPO`
   - `NODE_ENV=production`

7. Deploy

### 6. Self-Hosted (Docker)

**Pros:** Full control, cost-effective at scale  
**Cons:** Requires infrastructure knowledge

#### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy application
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

#### docker-compose.yml

```yaml
version: "3.8"

services:
  blog:
    build: .
    container_name: portfolio-blog
    ports:
      - "3000:3000"
    environment:
      - GITHUB_TOKEN=${GITHUB_TOKEN}
      - GITHUB_USERNAME=${GITHUB_USERNAME}
      - GITHUB_REPO=${GITHUB_REPO}
      - NODE_ENV=production
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs

volumes:
  logs:
```

#### Deploy with Docker

```bash
# Build image
docker build -t portfolio-blog .

# Run container
docker run -e GITHUB_TOKEN=xxx -e GITHUB_USERNAME=xxx -e GITHUB_REPO=xxx -p 3000:3000 portfolio-blog

# Or use docker-compose
docker-compose up -d
```

## Post-Deployment

### Verify Deployment

```bash
# Check if site is accessible
curl https://your-domain.com/blog

# Verify blog posts load
curl https://your-domain.com/blog -i | grep "200"

# Check a specific blog post
curl https://your-domain.com/blog/post-slug
```

### Monitor Logs

#### Vercel

1. Go to Vercel Dashboard
2. Select project
3. Click "Functions" or "Deployments"
4. View logs in real-time

#### Netlify

1. Go to Netlify Dashboard
2. Select site
3. Deploys → View deploy logs

#### AWS Amplify

1. Go to AWS Amplify Console
2. Deployments
3. View build/deploy logs

### Set Up Domain (Optional)

#### Vercel

1. Domains → Add domain
2. Configure DNS with your registrar
3. Verify ownership

#### Netlify

1. Domains → Add custom domain
2. Add DNS records
3. SSL automatically configured

## Environment Variable Security

### ✅ Do's

- ✅ Store `GITHUB_TOKEN` in environment variables only
- ✅ Mark sensitive variables as "Sensitive" in platform
- ✅ Use personal access tokens (not full account tokens)
- ✅ Rotate tokens regularly
- ✅ Store backup of token separately (encrypted)
- ✅ Use `.env.local` locally (in `.gitignore`)

### ❌ Don'ts

- ❌ Never commit `.env.local` to GitHub
- ❌ Never hardcode tokens in code
- ❌ Never share tokens in messages/emails
- ❌ Never use full account access tokens
- ❌ Never display tokens in logs
- ❌ Never grant more permissions than needed

## ISR Behavior by Platform

### Vercel

- ✅ Fully supported
- ✅ Revalidates at exact interval
- ✅ Serves stale while revalidating
- ✅ Best performance

### Netlify

- ⚠️ Limited support
- ⚠️ On-demand revalidation only
- ⚠️ May require webhooks

### AWS Amplify

- ⚠️ Limited support
- ⚠️ Redeploy required for revalidation

### Railway/Render

- ⚠️ Limited support
- ⚠️ Requires custom logic

**Recommendation:** Use Vercel for best ISR support

## Performance Optimization

### Enable Compression

```javascript
// next.config.js
module.exports = {
  compress: true,
  // ... other config
};
```

### Enable SWR (Stale-While-Revalidate)

Already configured in `lib/github.ts`:

```typescript
next: {
  revalidate: 3600;
} // 1 hour
```

### Cache Headers

Add to `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/blog/:slug*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      ]
    }
  ]
}
```

## Monitoring & Analytics

### Vercel Analytics

```bash
# Enable in Vercel Dashboard
# Settings → Analytics
```

### Google Analytics

```bash
# Install
npm install next-google-analytics

# Add to app/layout.tsx
import { GoogleAnalytics } from 'next-google-analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <GoogleAnalytics trackingId="G-XXXXXXXXXX" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Sentry (Error Tracking)

```bash
# Install
npm install @sentry/nextjs

# Configure
npx @sentry/wizard@latest -i nextjs
```

## Troubleshooting Deployment

### Blogs Not Loading on Production

```bash
# 1. Check environment variables are set
# 2. Verify GitHub token has public_repo scope
# 3. Check GitHub repository structure
# 4. Review deployment logs

# View logs (Vercel):
vercel logs your-project-name --follow
```

### Build Failures

```bash
# 1. Run build locally
npm run build

# 2. Check for TypeScript errors
npx tsc --noEmit

# 3. Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install

# 4. Try build again
npm run build
```

### Slow Performance

```bash
# 1. Enable caching headers
# 2. Check bundle size
npm run build -- --analyze

# 3. Verify ISR is working
# 4. Check image optimization

# Test locally:
npm run build && npm run start
```

## Rollback Procedure

### Vercel

1. Go to Deployments
2. Click on previous deployment
3. Click "Redeploy"

### Netlify

1. Go to Deploys
2. Click on previous deploy
3. Click "Publish deploy"

### Other Platforms

```bash
# Git rollback
git revert <commit-hash>
git push

# Redeploy
# (depends on platform)
```

## SSL/TLS Certificate

### Automatic (Recommended)

- Vercel: Automatic with Let's Encrypt
- Netlify: Automatic with Let's Encrypt
- Render: Automatic with Let's Encrypt

### Manual

```bash
# Using certbot (self-hosted)
certbot certonly --standalone -d your-domain.com
```

## Backup & Recovery

### Backup GitHub

```bash
# Clone with all history
git clone --mirror https://github.com/your-username/your-repo.git
```

### Backup Environment Variables

```bash
# Export from Vercel (if using their CLI)
vercel env list

# Keep secure backup of GITHUB_TOKEN
# (encrypted, not in version control)
```

## Cost Estimates

| Platform    | Free Tier    | Paid Tier     | Notes              |
| ----------- | ------------ | ------------- | ------------------ |
| Vercel      | ✅ Limited   | $20+/month    | Recommended        |
| Netlify     | ✅ Limited   | $19+/month    | Good alternative   |
| Render      | ✅ Small     | $7+/month     | Budget-friendly    |
| Railway     | ✅ $5 credit | Usage-based   | Generous free tier |
| AWS Amplify | ✅ Free tier | Pay-as-you-go | Scalable           |
| Self-hosted | ✅ VPS       | $5-50+/month  | Full control       |

## Next Steps

1. Choose deployment platform
2. Follow platform-specific setup
3. Add environment variables
4. Deploy
5. Test in production
6. Set up monitoring
7. Configure domain (optional)
8. Enable auto-deployments from GitHub

## Support & Documentation

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **AWS Amplify:** https://docs.amplify.aws
- **Docker Docs:** https://docs.docker.com
- **Next.js Deployment:** https://nextjs.org/docs/deployment

---

**Ready to deploy?** Choose your platform and follow the steps above! 🚀
