# replit.md

## Overview

This is a modern, professional mortgage agent website built for Sarah Thompson, a Level One Mortgage Agent working with LendCity Mortgages in Windsor, Ontario. The application is a full-stack web solution featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with Zod validation
- **Development**: Hot reload with Vite integration in development mode

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon serverless driver for PostgreSQL

## Key Components

### Frontend Components
1. **Layout Components**
   - Responsive navigation with sticky behavior
   - Professional footer with contact information
   - Floating CTA button for lead generation

2. **Section Components**
   - Hero section with compelling value proposition
   - About section highlighting professional credentials
   - Services overview with detailed mortgage offerings
   - Client testimonials with social proof
   - Contact form with validation and submission handling

3. **UI Components**
   - Complete shadcn/ui component library
   - Custom animations and transitions
   - Mobile-responsive design patterns
   - Professional mortgage industry styling

### Backend Components
1. **API Routes**
   - Contact form submission endpoint with validation
   - Error handling middleware
   - Request/response logging

2. **Data Validation**
   - Zod schemas for form validation
   - Type-safe request handling

3. **Storage Layer**
   - In-memory storage implementation
   - User management interfaces
   - Database abstraction layer

## Data Flow

1. **Client Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact forms are validated client-side then sent to Express API
3. **Server Processing**: Express routes handle validation using Zod schemas
4. **Response Handling**: Success/error responses are managed by React Query
5. **User Feedback**: Toast notifications provide immediate user feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon cloud database
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI components for accessibility
- **framer-motion**: Animation library for smooth interactions
- **drizzle-orm**: Type-safe database ORM
- **zod**: Runtime type validation

### Development Dependencies
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type safety and development experience
- **drizzle-kit**: Database schema management

### Styling and UI
- **shadcn/ui**: Modern component library with Tailwind CSS
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class conflict resolution

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application for production
2. **Backend Build**: esbuild bundles Express server with external packages
3. **Asset Generation**: Static assets are generated in `/dist/public`
4. **Server Bundle**: Node.js server bundle created in `/dist`

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built client
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Considerations
- **Frontend**: Static files can be served from any CDN or static host
- **Backend**: Node.js server requires hosting platform supporting ES modules
- **Database**: Configured for Neon PostgreSQL but compatible with any PostgreSQL instance
- **Replit Ready**: Includes Replit-specific configurations and development banner

The application is designed to be a professional lead generation website for a mortgage agent, with emphasis on user experience, mobile responsiveness, and conversion optimization through strategic placement of contact forms and consultation booking features.