# PodcastHub - Multi-Page Podcast Website

## Overview

PodcastHub is a modern, multi-page podcast website built with React and Express. The application showcases podcast episodes, hosts, and provides visitor engagement through a contact form. It integrates with YouTube's API to dynamically fetch and display the latest podcast episodes from a specified channel. The site features a clean, professional design inspired by modern podcast platforms like Spotify and Apple Podcasts, with an emphasis on content hierarchy and visual storytelling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (alternative to React Router)
- React Query (TanStack Query) for server state management and data fetching

**UI Component System:**
- shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- "New York" style variant with custom color schemes and spacing system
- Custom CSS variables for theme management (light mode currently implemented)

**Design System:**
- Typography: Inter for UI/headings, Merriweather for body text
- Spacing: Consistent 4-unit scale (4, 6, 8, 12, 16, 20, 24)
- Container strategy: Full-width sections with constrained inner containers (max-w-7xl, max-w-6xl, max-w-4xl)
- Elevation system using subtle shadows and hover states

**Application Structure:**
- Four main pages: Home, About, Hosts, Contact
- Shared Navigation and Footer components
- Reusable UI components: Hero, EpisodeCard (clickable links to YouTube), HostCard, ContactForm, LogoCarousel
- Path aliases configured for clean imports (@/, @shared/, @assets/)
- Mobile-responsive design with optimized layouts for 320px-414px viewports

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js with ESM module system
- TypeScript for type safety across the application
- Custom logging middleware for API request tracking

**API Design:**
- RESTful endpoint structure with `/api` prefix
- YouTube integration endpoint: `/api/youtube/latest-episodes` fetches episodes via YouTube Data API v3
- In-memory storage implementation with interface-based design for future database migration
- User schema defined but currently using in-memory storage (MemStorage class)

**Development Tools:**
- Vite middleware integration for development HMR
- Runtime error overlay for better debugging experience
- Custom error handling and logging

### Data Layer & Schema

**ORM & Database:**
- Drizzle ORM configured with PostgreSQL dialect
- Schema defined in `shared/schema.ts` with user table structure
- Zod integration for runtime validation via drizzle-zod
- Migration support configured but currently using in-memory storage

**Data Models:**
- Users: id (UUID), username (unique), password
- Episode data (from YouTube API): id, youtubeId, title, host, publishedAt, thumbnail, duration
  - Episode titles are automatically cleaned to remove "Not Safe For Kids Podcast" prefix/suffix
  - Each episode card is a clickable link to the YouTube video
- Host profiles: image, name, role, bio

**Storage Strategy:**
- Currently implementing MemStorage class with Map-based storage
- IStorage interface defines CRUD operations, allowing easy swap to database-backed storage
- Designed for future migration to PostgreSQL with Neon serverless driver

### External Dependencies

**Third-Party Services:**
- YouTube Data API v3: Fetches latest podcast episodes from specified channel (channelId required)
  - Endpoints used: search (for latest videos), videos (for detailed metadata including duration)
  - API key required via `YOUTUBE_API_KEY` environment variable
  - Configurable max results per request (default: 4 episodes)
  - Filters out shorts (videos under 5 minutes)
  - Automatically cleans episode titles by removing podcast name
  - Episodes link directly to YouTube for playback

**Database (Configured but not active):**
- Neon serverless PostgreSQL (via @neondatabase/serverless)
- Connection via `DATABASE_URL` environment variable
- Session management support with connect-pg-simple

**UI & Component Libraries:**
- Radix UI: Comprehensive set of accessible component primitives (dialogs, dropdowns, navigation, forms, etc.)
- Embla Carousel: Touch-friendly carousel component
- cmdk: Command palette component
- Lucide React: Icon library

**Utilities & Validation:**
- React Hook Form with @hookform/resolvers for form validation
- Zod for schema validation
- date-fns for date manipulation
- class-variance-authority (CVA) for component variant management
- clsx & tailwind-merge for conditional className handling

**Development Dependencies:**
- tsx: TypeScript execution for development server
- esbuild: Production build bundling
- Replit-specific plugins: runtime error modal, cartographer, dev banner

**Key Environment Variables:**
- `DATABASE_URL`: PostgreSQL connection string (configured for future use)
- `YOUTUBE_API_KEY`: Required for fetching YouTube episode data
- `NODE_ENV`: Environment mode (development/production)

## SEO & Metadata

**Implemented (November 2025):**
- Primary meta tags: Page title, description, keywords, author
- Open Graph tags for Facebook/LinkedIn social sharing
- Twitter Card tags for Twitter sharing
- Dynamic page titles for each route:
  - Home: "Not Safe For Kids Podcast | Four Mums. No Filter."
  - About: "About Us | Not Safe For Kids Podcast"
  - Hosts: "Our Hosts | Not Safe For Kids Podcast"
  - Contact: "Contact Us | Not Safe For Kids Podcast"

**Future Enhancements:**
- Add og:image and twitter:image meta tags (requires social share image)
- Implement JSON-LD structured data for Podcast schema
- Add episode-specific metadata if individual episode pages are created
- Consider adding transcripts for episodes to improve SEO

## Pending Tasks

**Contact Form Email Integration:**
- Status: Form submissions currently only show toast notifications and log to console
- Required: Email functionality to send form submissions to hello@nsfkpod.com
- User dismissed Resend and SendGrid integrations
- User preference: SMTP email integration (Option 4)
- Needed from user:
  - SMTP_HOST (mail server address)
  - SMTP_PORT (usually 587 or 465)
  - SMTP_USER (hello@nsfkpod.com)
  - SMTP_PASS (email password or app-specific password)
- Form should include: Form type (Listener/Guest/Sponsor), name, email, company (if sponsor), and message

**TikTok Link:**
- User requested TikTok link update in footer but didn't provide complete URL
- Current footer link: https://tiktok.com/notsafeforkidspod
- Contact page link: https://tiktok.com/@notsafeforkidspodcast
- Awaiting user to provide final TikTok URL to ensure consistency across all pages