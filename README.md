# The Yellow Balloon - Kids Hair Salon Website

A modern, responsive marketing website for The Yellow Balloon, a children's hair salon in Gaithersburg, Maryland. The site features auto-sliding carousels, comprehensive SEO optimization, and a warm, family-friendly design.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Auto-Sliding Carousels**: 3-second interval hero carousels on all service pages
- **SEO Optimized**: LocalBusiness schema, unique meta tags, sitemap, and robots.txt
- **Image Optimization**: Lazy loading, explicit dimensions, and descriptive alt text
- **Error Handling**: Custom 404 page and error boundary with Yellow Balloon branding
- **Service Pages**: Dedicated pages for Kids Haircuts, Lice Treatment, and Glamour Parties
- **Photo Galleries**: Organized galleries for each service with thumbnail grids

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Wouter** - Lightweight client-side routing
- **Radix UI** - Accessible UI primitives
- **shadcn/ui** - Component library
- **TanStack Query** - Server state management

### Backend
- **Express.js** - Web server
- **TypeScript** - Type safety
- **Drizzle ORM** - Type-safe database ORM
- **PostgreSQL** - Database (Neon serverless)

### Development Tools
- **ESBuild** - Fast bundling
- **PostCSS** - CSS processing
- **Lucide React** - Icon library

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd the-yellow-balloon
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory (see `.env.example` for reference):

```bash
cp .env.example .env
```

Then update the values in `.env` with your actual configuration.

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📝 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production (client + server)
- **`npm start`** - Start production server
- **`npm run check`** - Run TypeScript type checking
- **`npm run db:push`** - Push database schema changes (Drizzle)

## 🗄️ Database Setup

This project uses PostgreSQL with Drizzle ORM. To set up the database:

1. Ensure you have a PostgreSQL database URL in your `.env` file
2. Run the schema push command:

```bash
npm run db:push
```

## 🌐 Deployment

### Current Deployment
The website is currently deployed on **Replit**.

### Live Site
🔗 [Visit The Yellow Balloon Website](https://www.theyellowballoonmaryland.com)

### Deployment Steps (Replit)

1. The project auto-deploys on Replit when you commit changes
2. Environment variables are configured in Replit Secrets
3. Database is automatically managed via Neon PostgreSQL integration

### Manual Deployment (Other Platforms)

1. Build the project:
   ```bash
   npm run build
   ```

2. Set environment variables on your hosting platform

3. Start the production server:
   ```bash
   npm start
   ```

## 📂 Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Gallery images and static data
│   │   └── lib/         # Utilities and configurations
│   ├── public/          # Static assets
│   └── index.html       # HTML entry point
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Storage interface
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema (Drizzle)
└── package.json         # Dependencies and scripts
```

## 🎨 Design System

- **Primary Color**: Yellow (#FFD84D) - The signature yellow balloon
- **Accent Color**: Soft Blue (#AEE6FA) - Friendly and calming
- **Secondary Color**: Navy - Professional contrast
- **Typography**: Poppins font family for friendly, rounded appearance
- **Layout**: Mobile-first responsive design with generous whitespace

## 🔍 SEO Features

- **LocalBusiness Schema**: Full JSON-LD structured data
- **Meta Tags**: Unique titles and descriptions for all pages
- **OpenGraph Tags**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawler configuration
- **Canonical URLs**: Prevent duplicate content issues

## 📱 Services Offered

1. **Kids Haircuts** - Fun haircuts with toys, rides, and TVs
2. **Lice Screening & Treatment** - Private, professional lice services
3. **Glamour Parties** - Confidence-boosting styling party experiences

## 📞 Contact Information

- **Address**: 255 Market Street West, Gaithersburg, MD 20878
- **Phone**: (301) 569-6756
- **Hours**: 
  - Tue, Wed, Fri: 10am-6pm
  - Sat, Sun: 10am-5pm
  - Mon, Thu: Closed

## 🤝 Contributing

This is a private project for The Yellow Balloon hair salon. For questions or updates, please contact the development team.

## 📄 License

MIT

---

Built with ❤️ for The Yellow Balloon Kids Hair Salon
