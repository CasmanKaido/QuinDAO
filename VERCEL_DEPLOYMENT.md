# Deploying QuinDAO to Vercel

## Prerequisites
- ✅ GitHub account with QuinDAO repository
- ✅ Vercel account (free tier works)
- ✅ Reown Project ID

## Step-by-Step Deployment

### Option 1: Deploy via Vercel Website (Easiest)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find `QuinDAO` in your repository list
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   **Key**: `NEXT_PUBLIC_REOWN_PROJECT_ID`  
   **Value**: Your Reown Project ID (from https://cloud.reown.com)
   
   Click "Add"

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site will be live at `https://quin-dao-xxxxx.vercel.app`

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate

3. **Deploy from Project Directory**
   ```bash
   cd "C:\Users\DELL\Desktop\New folder\moment\QuinDAO"
   vercel
   ```

4. **Answer Setup Questions**
   ```
   Set up and deploy? Y
   Which scope? (Select your account)
   Link to existing project? N
   What's your project's name? QuinDAO
   In which directory is your code located? ./
   Want to override settings? N
   ```

5. **Add Environment Variable**
   ```bash
   vercel env add NEXT_PUBLIC_REOWN_PROJECT_ID
   ```
   Paste your Reown Project ID when prompted

6. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## Post-Deployment Configuration

### 1. Set Custom Domain (Optional)

In Vercel Dashboard:
1. Go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 2. Configure Build Settings

If you encounter build errors:

1. Go to Project Settings → "Build & Development Settings"
2. Update:
   - **Framework**: Next.js
   - **Node.js Version**: 18.x or 20.x
   - **Build Command**: `npm run build -- --webpack`
   - **Output Directory**: `.next`

### 3. Environment Variables

Required variables:
- `NEXT_PUBLIC_REOWN_PROJECT_ID` - Your Reown Project ID

Optional variables:
- `NEXT_PUBLIC_CHAIN_ID` - Default: 8453 (Base)
- `NEXT_PUBLIC_APP_URL` - Your production URL

---

## Troubleshooting

### Build Fails with "Module not found"

**Solution**: Install missing dependencies
```bash
npm install @walletconnect/ethereum-provider @coinbase/wallet-sdk
git add package.json package-lock.json
git commit -m "Add missing dependencies"
git push origin main
```
Vercel will auto-redeploy

### Build Fails with Webpack Errors

**Solution**: Use webpack flag
1. In Vercel Dashboard → Settings → Build & Development
2. Override Build Command: `npm run build -- --webpack`
3. Redeploy

### Environment Variable Not Working

**Solution**: 
1. Check variable name starts with `NEXT_PUBLIC_`
2. Redeploy after adding variables
3. Clear cache: Settings → "Clear Cache and Redeploy"

### "Invalid EVM version" Error

**Solution**: Already fixed in contracts (using 0.8.19 + paris EVM)

---

## Vercel Configuration File

Create `vercel.json` in project root (optional):

```json
{
  "buildCommand": "npm run build -- --webpack",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_REOWN_PROJECT_ID": "@reown_project_id"
  }
}
```

---

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main`** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull requests** → Preview deployment with unique URL

---

## Performance Optimization

### 1. Enable Edge Runtime (Optional)

In `src/app/layout.tsx`, add:
```typescript
export const runtime = 'edge'
```

### 2. Enable Image Optimization

Already configured in Next.js

### 3. Enable Analytics

In Vercel Dashboard:
1. Go to "Analytics" tab
2. Enable "Web Analytics"
3. Enable "Speed Insights"

---

## Monitoring

### Check Deployment Status

1. Vercel Dashboard → Your Project
2. View "Deployments" tab
3. Click deployment to see logs

### View Build Logs

If deployment fails:
1. Click failed deployment
2. View "Building" section
3. Check error messages

---

## Custom Domain Setup

### 1. Add Domain in Vercel

1. Project Settings → Domains
2. Add domain (e.g., `quindao.app`)
3. Choose domain type:
   - Root domain: `quindao.app`
   - Subdomain: `app.quindao.app`

### 2. Configure DNS

Add these records to your DNS provider:

**For root domain:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Wait for Verification

- DNS propagation: 24-48 hours
- SSL certificate: Automatic

---

## Production Checklist

Before going live:

- [ ] Environment variables set
- [ ] Build succeeds
- [ ] Test on preview URL
- [ ] Wallet connection works
- [ ] Contract addresses correct
- [ ] Base network configured
- [ ] Analytics enabled
- [ ] Custom domain (optional)
- [ ] SSL certificate active

---

## Useful Commands

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]

# Link local project
vercel link
```

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Vercel Support**: https://vercel.com/support

---

## Estimated Costs

**Free Tier Includes:**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Preview deployments
- Analytics

**Pro Tier ($20/month):**
- Unlimited bandwidth
- Advanced analytics
- Team collaboration
- Priority support

---

**Your QuinDAO will be live at:**
`https://quin-dao-[random].vercel.app`

You can then add a custom domain like `quindao.app`!
