# JanVedha AI - Smart Civic Issue Management System

A full-stack AI-powered civic complaint management system built with Next.js (frontend) and Python FastAPI (backend).

## 🎯 Project Overview

JanVedha AI provides an intelligent platform for citizens to report civic issues (potholes, street lights, drainage problems, etc.) with AI-powered classification, prioritization, and automatic routing to the appropriate municipal departments.

### Key Features
- **AI-Powered Classification**: Automatically categorizes complaints using machine learning
- **Smart Routing**: Routes complaints to the correct department based on content analysis
- **GPS Tracking**: Location-aware issue tracking with interactive heatmaps
- **Real-time Updates**: Live status tracking and notifications
- **Department Dashboard**: Officers can manage and resolve complaints
- **Performance Analytics**: Ward-level and city-level reporting

## 📁 Project Structure

```
/
├── src/                    # Next.js frontend (React + TypeScript)
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── features/          # Feature modules (chatbot, maps, etc)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and API client
│   └── context/           # Auth context
├── backend/               # Python FastAPI backend
├── frontend/              # Original frontend folder (deprecated - using src/)
├── package.json           # Frontend dependencies
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.9+ (for backend)
- npm or pnpm

### Frontend Setup (Next.js)

1. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   
   The app will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

### Backend Setup (Python)

The backend runs on a separate port (typically 8000). Refer to the backend README for setup instructions.

## 🔧 Development

### Key Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Directory Breakdown

**src/app/** - Next.js pages and layout
- `page.tsx` - Homepage
- `layout.tsx` - Root layout with providers
- `globals.css` - Global styles

**src/components/** - Reusable UI components
- `NavBar.tsx` - Navigation header
- `Button.tsx`, `Input.tsx`, etc. - shadcn/ui components
- `LoadingOverlay.tsx`, `PriorityBadge.tsx` - Custom components

**src/lib/** - Utilities and helpers
- `api.ts` - Axios API client with interceptors
- `constants.ts` - App constants and enums
- `utils.ts` - Utility functions
- `formatters.ts` - Date/text formatters

**src/context/** - React Context
- `AuthContext.tsx` - Authentication state and user info

## 📋 Environment Variables

Create a `.env.local` file with:

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000

# Backend variables (if backend runs in same process)
DATABASE_URL=postgresql://...
JWT_SECRET_KEY=your-secret-key
```

## 🎨 Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Framer Motion** - Animation library
- **Custom CSS variables** - Design tokens in `globals.css`

## 🔐 Authentication

- JWT-based authentication
- localStorage for token storage
- Automatic token attachment to API requests
- Auto-logout on 401 unauthorized

User roles:
- `PUBLIC_USER` - Citizens submitting complaints
- `JUNIOR_ENGINEER` - Technical staff
- `SUPERVISOR` - Ward supervisors
- `COUNCILLOR` - Ward councillors
- `COMMISSIONER` - City commissioner
- `SUPER_ADMIN` - System administrator

## 🌐 API Integration

The frontend communicates with a FastAPI backend at `NEXT_PUBLIC_API_URL`. The API client is in `src/lib/api.ts` with methods organized by role:

- `publicApi` - Public endpoints (complaints, tracking)
- `authApi` - Authentication (login, register)
- `officerApi` - Officer/staff operations
- `councillorApi` - Councillor dashboards
- `commissionerApi` - Commissioner dashboards

## 📦 Dependencies

Key packages:
- **Next.js 15.2** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Leaflet** - Map library

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect the repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL` - Your backend API URL
4. Deploy!

### Deploy to Other Platforms

The Next.js app can be deployed to any platform supporting Node.js:
- Railway
- Heroku
- AWS
- DigitalOcean
- etc.

## 📝 License

MIT License - feel free to use this project for your own civic tech initiatives!

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and add tests for new features.

## 📞 Support

For issues or questions, please open a GitHub issue or contact the development team.
