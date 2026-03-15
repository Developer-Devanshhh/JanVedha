#!/bin/bash
# Quick Start Script for JanVedha AI

echo "🚀 JanVedha AI - Quick Start Setup"
echo "===================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js found: $NODE_VERSION"
echo ""

# Create env file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local..."
    echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
    echo "✅ .env.local created (update with your backend URL if needed)"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "   1. For development:"
echo "      npm run dev"
echo ""
echo "   2. For production:"
echo "      npm run build"
echo "      npm start"
echo ""
echo "   3. To deploy to Vercel:"
echo "      npm install -g vercel"
echo "      vercel"
echo ""
echo "📚 For more info, check:"
echo "   - README.md (Project documentation)"
echo "   - DEPLOY.md (Deployment guide)"
echo "   - SETUP_COMPLETE.md (Setup summary)"
