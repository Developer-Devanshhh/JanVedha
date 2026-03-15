# JanVedha AI Deployment Guide

## Quick Start for Publishing

### Option 1: Deploy to Vercel (Easiest)

1. **Connect your GitHub repo to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Select this project root

2. **Set environment variables in Vercel dashboard**
   ```
   NEXT_PUBLIC_API_URL = https://your-backend-api.com
   ```

3. **Deploy**
   - Vercel will automatically detect Next.js and build it
   - Your app will be live in minutes!

### Option 2: Deploy Anywhere with Docker

1. **Create a Dockerfile in the root**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**
   ```bash
   docker build -t janvedha-ai .
   docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.example.com janvedha-ai
   ```

### Option 3: Traditional Server Deployment

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Run production**
   ```bash
   npm start
   ```
   
   App will run on `http://localhost:3000`

## Environment Configuration

### Required Variables
- `NEXT_PUBLIC_API_URL` - Your backend API endpoint (http://localhost:8000 for local dev)

### Optional Variables
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - For map features (if not using OpenStreetMap)

## Troubleshooting

### Build Fails
- Clear `.next/` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

### API Connection Issues
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check if backend is running
- Check CORS settings on backend
- Use browser DevTools Network tab to debug

### Components Not Found
- All UI components should be in `src/components/ui/`
- Check imports use `@/` alias
- Verify `tsconfig.json` has path aliases configured

## Production Checklist

- [ ] `NEXT_PUBLIC_API_URL` points to production backend
- [ ] Backend CORS allows your frontend domain
- [ ] JWT secret key is secure
- [ ] Database backups are configured
- [ ] Error logging is set up
- [ ] Analytics are configured
- [ ] SSL certificate is installed
- [ ] Rate limiting is enabled
- [ ] CDN is configured (optional)

## Monitoring & Logs

### Vercel Deployment
- Logs: https://vercel.com/dashboard → Select project → Deployments
- Analytics: https://vercel.com/dashboard → Select project → Analytics
- Real-time monitoring available in Vercel dashboard

### Traditional Server
- Check Node.js logs for errors
- Use PM2 for process management: `npm install -g pm2`
- Start with PM2: `pm2 start npm --name janvedha -- start`

## Performance Optimization

The app includes:
- ✅ Next.js Image optimization
- ✅ Code splitting & lazy loading
- ✅ Tailwind CSS tree-shaking
- ✅ Compression enabled
- ✅ Caching headers configured

For better performance:
1. Enable CDN (Vercel automatically includes this)
2. Use a database connection pool
3. Configure Redis for session storage
4. Implement API response caching

## Need Help?

- Check the main [README.md](./README.md)
- Review Next.js docs: https://nextjs.org/docs
- Check backend API documentation

Good luck with your deployment! 🚀
