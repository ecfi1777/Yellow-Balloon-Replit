# The Yellow Balloon - Children's Hair Salon Website

## Overview

This is a marketing website for The Yellow Balloon, a children's hair salon located in Gaithersburg, Maryland. The salon has been serving families in Montgomery County for over 20 years, specializing in kids' haircuts, lice treatment, and glamour styling services. The website is built as a single-page application showcasing services, gallery, testimonials, and contact information with a warm, family-friendly design approach.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing (currently single-page design)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom design system based on child-friendly color palette (yellow, blue, sage)
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular components (Header, Hero, Features, Services, Gallery, Contact, Footer)

### Design System
- **Typography**: Poppins font family for friendly, rounded appearance
- **Color Palette**: Primary yellow (#FFD84D), soft blue (#AEE6FA), navy for contrast, with supporting cream, sage, and coral accents
- **Layout**: Mobile-first responsive design with generous whitespace and consistent spacing units
- **Component Library**: Custom-styled components following children's service design patterns

### Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **API Structure**: RESTful API design with `/api` prefix routing
- **Development Tooling**: Vite dev server with HMR, custom error handling middleware
- **Build Process**: ESBuild for production server bundling, Vite for client build

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: PostgreSQL with user management schema (extendable for future features)
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Database Config**: Drizzle Kit for migrations and schema management

### Development Features
- **TypeScript**: Full type safety across client, server, and shared code
- **Path Aliases**: Configured aliases for clean imports (@, @shared, @assets)
- **Hot Reload**: Vite HMR for development experience
- **Error Handling**: Runtime error overlay and structured error responses

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library for consistent iconography

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database (via @neondatabase/serverless)
- **Drizzle ORM**: Modern TypeScript ORM with PostgreSQL support
- **Express.js**: Web application framework for API endpoints

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type checking and development experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Asset Management
- **Gallery Images**: Organized in `client/public/assets/gallery/` with categorized folders (home, glamour, lice, other)
- **Logo Asset**: Yellow balloon logo stored in `client/public/assets/`
- **Image Management**: Single source of truth via `client/src/data/galleries.ts` for all gallery images
- **Font Integration**: Google Fonts (Poppins) via CDN
- **Image Optimization**:
  - All gallery images have descriptive, specific alt text for accessibility
  - Width/height attributes (1200x800) prevent layout shift during loading
  - Lazy loading for gallery grid images (below fold)
  - Eager loading for hero carousel images (above fold)
  - Async decoding for non-blocking rendering

### Form and Data Management
- **React Hook Form**: Form handling with validation
- **TanStack Query**: Server state management and caching
- **Zod**: Schema validation integrated with Drizzle

### SEO and Search Optimization
- **LocalBusiness JSON-LD Schema**: Comprehensive structured data in `client/index.html` with:
  - Business name, address, phone, geo-coordinates
  - Price range ($$) and service offerings with pricing
  - Opening hours and area served (Gaithersburg, Potomac, Germantown, Montgomery County)
- **SEO Component** (`client/src/components/SEO.tsx`): Reusable component for page-specific metadata
  - Dynamic title, description, and keywords
  - OpenGraph tags (og:title, og:description, og:image, og:url)
  - Twitter Card tags for social media sharing
  - Canonical URLs for each page
- **Sitemap & Robots**: `client/public/sitemap.xml` and `client/public/robots.txt` configured
- **Page-Specific SEO**: Each route has unique, optimized metadata:
  - Homepage: General salon information
  - Gallery pages: Photo gallery with service-specific keywords
  - Service pages: Pricing and service details in descriptions
  - All pages include location (Gaithersburg, MD) for local SEO

### Error Handling and User Experience
- **Custom 404 Page** (`client/src/pages/not-found.tsx`): Branded error page with:
  - Animated Yellow Balloon logo with bouncing animation
  - Friendly message "This page flew away with a balloon!"
  - Action buttons to return home or contact salon
  - Quick links to main service pages
  - SEO metadata for 404 pages
- **Error Boundary** (`client/src/components/ErrorBoundary.tsx`): Application-level error handling
  - Catches runtime errors and displays friendly recovery screen
  - Provides "Refresh Page" and "Go Back Home" options
  - Shows error details in development mode only
  - Wraps entire application in App.tsx
- **Loading States** (`client/src/components/Loading.tsx`): Consistent loading experience
  - Full-page loading screen with animated Yellow Balloon
  - Smaller LoadingSpinner component for inline use
  - Used in Suspense fallback for lazy-loaded routes
  - Matches Yellow Balloon branding and color scheme