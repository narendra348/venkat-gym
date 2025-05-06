# Architecture Overview

## Overview

Elevate is a fitness studio web application that allows users to view fitness programs, trainers, class schedules, and submit testimonials. The application is built with a modern full-stack architecture, with separate client and server components that share some common code.

The system follows a typical web application architecture with:
- React-based frontend for the client interface
- Express.js backend for API services
- PostgreSQL database accessed through Drizzle ORM
- RESTful API endpoints for data access

## System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│  Client (React) │ ──────> │  Server (Node)  │ ──────> │     Database    │
│                 │         │                 │         │  (PostgreSQL)   │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

### Technology Stack

- **Frontend**: React, ShadCN UI, TailwindCSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL via Neon Serverless with Drizzle ORM
- **Build Tools**: Vite, ESBuild, TypeScript
- **Deployment**: Support for Replit, Netlify

## Key Components

### Frontend

The frontend is a React application structured as follows:

1. **Pages**: Main application views (Home, NotFound)
2. **Components**: UI components including:
   - Layout components (Navbar, Footer)
   - Feature components (ProgramsSection, TrainersSection, ScheduleSection)
   - UI components (using ShadCN UI framework via Radix UI)
3. **Hooks**: Custom React hooks for state management and UI functionality
4. **Lib**: Utility functions, data access, and shared code

The frontend uses a component-based architecture with TailwindCSS for styling and ShadCN UI components for consistent UI elements. The design follows a responsive approach with mobile considerations through hooks like `useMobile`.

### Backend

The backend is an Express.js server with the following components:

1. **API Routes**: RESTful endpoints for accessing application data
2. **Storage Layer**: Data access abstraction using Drizzle ORM
3. **Vite Dev Integration**: Development server configuration for the frontend
4. **Error Handling**: Global error handling middleware

The backend uses a middleware approach for logging and error handling, with clear separation between route definition and data access.

### Database

The database is a PostgreSQL instance hosted on Neon Serverless, with the following schema:

1. **Users**: Authentication and user management
2. **Programs**: Fitness programs offered by the studio
3. **Trainers**: Information about fitness trainers
4. **Classes**: Class schedule information (with relationships to programs and trainers)
5. **Testimonials**: User feedback and testimonials

The database schema is defined using Drizzle ORM schema definitions with Zod validation.

## Data Flow

### Frontend to Backend

1. The frontend makes API requests to the backend for data retrieval and submission
2. These requests are primarily handled through RESTful endpoints (`/api/programs`, `/api/trainers`, etc.)
3. For server-side rendering or development, Vite handles the connection between frontend and backend

### Backend to Database

1. The backend uses a storage abstraction layer to access database data
2. Drizzle ORM is used for type-safe database queries
3. The database connection is managed through the Neon Serverless PostgreSQL client

## External Dependencies

### Frontend Dependencies

- **@radix-ui/react-***: UI component primitives
- **@tanstack/react-query**: Data fetching and caching
- **class-variance-authority**: Component styling utilities
- **wouter**: Lightweight routing
- **react-hook-form**: Form handling
- **zod**: Schema validation

### Backend Dependencies

- **express**: Web server framework
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Database ORM
- **vite**: Development server and bundling

## Deployment Strategy

The application supports multiple deployment targets:

### Replit Deployment

The application is configured to run on Replit with:
- Combined frontend and backend deployment
- Automatic build and start commands
- Port mapping for web access

### Netlify Deployment

The frontend can be deployed to Netlify with:
- Static site generation using Vite
- Customized build configuration in `vite.netlify.config.js`
- URL rewriting for SPA navigation

### Database Deployment

The database is deployed on Neon Serverless PostgreSQL, accessed via connection string environment variable (`DATABASE_URL`).

## Development Workflow

1. **Local Development**: Using `npm run dev` to run both frontend and backend
2. **Database Management**: 
   - Schema migrations with `drizzle-kit push`
   - Seeding with `db:seed` command
3. **Build Process**: 
   - Frontend bundled with Vite
   - Backend bundled with ESBuild
   - Combined output in `dist` directory

## Authentication & Authorization

The application includes a basic user authentication structure with:
- User schema with username/password
- Session management capabilities (via integration with PostgreSQL)