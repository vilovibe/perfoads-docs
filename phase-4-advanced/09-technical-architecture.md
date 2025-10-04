---
title: Technical - System Architecture
description: Technical reference for developers - complete system architecture including backend API, frontend, database, AI services, and infrastructure
category: advanced
phase: 4
order: 09
---

# Technical Reference: System Architecture

**Audience**: Developers, technical users, system administrators, integrators

PerfoAds is a full-stack application with Express.js backend API, Next.js 15 frontend, PostgreSQL database, and AI-powered features using Claude API. This technical guide documents the complete system architecture, technology choices, data flow, and infrastructure setup.

---

## What You'll Learn

- High-level system architecture
- Technology stack breakdown
- Backend API structure
- Frontend architecture (Next.js 15)
- Database schema overview
- AI integration (Claude API)
- Sync system architecture
- Deployment and infrastructure
- Performance optimizations
- Scalability considerations

**Time needed**: 20 minutes to read

**Prerequisite Knowledge**: Web application development, APIs, databases

---

## High-Level Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                        │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS
                         ↓
┌─────────────────────────────────────────────────────────────┐
│              FRONTEND (Next.js 15 on Render)                │
│                  app.aiperfoads.xyz                     │
│  - Server-Side Rendering (SSR)                              │
│  - API Proxy Routes                                         │
│  - React Components                                         │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS API Calls
                         ↓
┌─────────────────────────────────────────────────────────────┐
│            BACKEND API (Express.js on Render)               │
│                 api.aiperfoads.xyz                      │
│  - REST API (35+ endpoints)                                 │
│  - Authentication (JWT + httpOnly cookies)                  │
│  - Business Logic                                           │
│  - Sync Queue Management                                    │
└──────┬──────────────────┬─────────────────┬────────────────┘
       │                  │                 │
       ↓                  ↓                 ↓
┌──────────────┐  ┌───────────────┐ ┌──────────────────┐
│   SUPABASE   │  │  GOOGLE ADS   │ │   CLAUDE API     │
│  PostgreSQL  │  │      API      │ │  (Anthropic)     │
│   Database   │  │               │ │                  │
└──────────────┘  └───────────────┘ └──────────────────┘
```

---

## Technology Stack

### Backend (API Server)

**Core**:
- **Runtime**: Node.js 20
- **Framework**: Express.js 4.x
- **Language**: TypeScript 5.x
- **Build Tool**: tsx (TypeScript execution)

**Key Libraries**:
- `google-ads-api` - Direct Google Ads API access (Opteo)
- `@anthropic-ai/sdk` - Claude AI API client
- `pg` - PostgreSQL client
- `jsonwebtoken` - JWT authentication
- `bcrypt` - Password hashing
- `cookie-parser` - Cookie handling
- `cors` - Cross-origin resource sharing
- `helmet` - Security headers

**Port**: 3000 (backend API)

---

### Frontend (Web App)

**Core**:
- **Framework**: Next.js 15
- **React**: 19.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **UI Components**: shadcn/ui

**Key Libraries**:
- `next` - Next.js framework
- `react` - UI library
- `react-dom` - React DOM rendering
- `recharts` - Performance charts
- `date-fns` - Date formatting
- `lucide-react` - Icons

**Build Output**: Static and SSR pages

**Port**: 3001 (local dev), 443 (production)

---

### Database

**Provider**: Supabase PostgreSQL

**Version**: PostgreSQL 15

**Hosting**: Supabase Cloud

**Schema**: 53 tables (clients, campaigns, keywords, metrics, alerts, conversations, etc.)

**Size**: ~500MB typical agency (100 clients)

**Migrations**: Custom SQL migration system

---

### AI Services

**Provider**: Anthropic Claude API

**Model**: Claude Sonnet 4 (`claude-sonnet-4-20250514`)

**Use Cases**:
- Smart Alerts generation
- AI Chat conversations
- Context analysis
- Alert severity calculation

**Rate Limits**: Managed by backend queue system

---

## Backend API Architecture

### API Structure

**Base URL**: `https://api.aiperfoads.xyz`

**Authentication**: JWT in httpOnly cookies + Authorization header

**Response Format**: JSON

**Error Format**: `{ error: "message" }`

---

### Endpoint Groups

**Authentication** (`/api/auth`):
- `POST /api/auth/google` - Google Sign-In
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Current user

**OAuth** (`/api/oauth`):
- `GET /api/oauth/url` - Get OAuth authorization URL
- `POST /api/oauth/callback` - Handle OAuth callback
- `POST /api/oauth/refresh` - Refresh OAuth token
- `GET /api/oauth/status` - Check OAuth health

**Clients** (`/api/clients`):
- `GET /api/clients` - List all clients
- `POST /api/clients` - Create client
- `GET /api/clients/:id` - Get client details
- `PATCH /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client
- `POST /api/clients/:id/sync` - Trigger sync
- `POST /api/clients/bulk-sync` - Sync multiple clients

**Campaigns** (`/api/campaigns`):
- `GET /api/campaigns/:clientId` - Get campaigns for client
- `GET /api/campaigns/:clientId/:campaignId` - Get campaign details

**AI** (`/api/universal-ai`):
- `POST /api/universal-ai/chat` - AI Chat (streaming)
- `POST /api/universal-ai/quick-actions` - Quick Action templates
- `GET /api/universal-ai/conversations` - List conversations
- `DELETE /api/universal-ai/conversations/:id` - Delete conversation

**Alerts** (`/api/alerts`):
- `GET /api/alerts/:clientId` - Get alerts for client
- `POST /api/alerts/:id/accept` - Accept alert
- `POST /api/alerts/:id/decline` - Decline alert
- `POST /api/alerts/:clientId/generate` - Force alert generation

**...and 20+ more endpoint groups**

---

### API Authentication Flow

```
1. User clicks "Log in with Google"
   ↓
2. Frontend redirects to Google OAuth
   ↓
3. User grants permissions
   ↓
4. Google redirects to /api/oauth/callback
   ↓
5. Backend:
   - Validates OAuth code
   - Gets user info from Google
   - Creates/updates user in database
   - Generates JWT
   - Sets httpOnly cookie with JWT
   ↓
6. Redirects to frontend dashboard
   ↓
7. Frontend makes API calls with cookie
   ↓
8. Backend validates JWT from cookie
   ↓
9. Returns protected data
```

---

## Frontend Architecture

### Next.js 15 App Router

**Structure**:
```
frontend/src/app/
├── (auth)/
│   └── login/
│       └── page.tsx
├── (dashboard)/
│   ├── page.tsx (dashboard)
│   ├── clients/
│   │   ├── page.tsx (client list)
│   │   └── [id]/
│   │       └── page.tsx (client details)
│   └── settings/
│       └── page.tsx
└── api/  (Next.js API routes - proxy to backend)
    ├── auth/
    ├── clients/
    └── ...
```

**Key Next.js 15 Features Used**:
- App Router (not Pages Router)
- Server Components
- Async request params (breaking change from Next.js 14)
- API Routes as backend proxy
- Middleware for auth checks

---

### Frontend API Proxy Pattern

**Why Proxy**:
- Hide backend API keys from browser
- Handle authentication securely (httpOnly cookies)
- CORS management
- Request/response transformation

**Pattern**:
```
Browser Request:
  POST /api/clients (Next.js API route)
    ↓
Next.js API Route:
  Validates session
  Forwards to: POST api.aiperfoads.xyz/api/clients
    ↓
Backend API:
  Processes request
  Returns JSON
    ↓
Next.js API Route:
  Returns response to browser
```

**Example** (`frontend/src/app/api/clients/route.ts`):
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { proxyGetRequest } from '@/lib/api-proxy';

export async function GET(request: NextRequest) {
  return proxyGetRequest(request, '/api/clients');
}
```

---

### State Management

**Approach**: Server-side data fetching + React state for UI

**No Global State Library**: Next.js 15 server components reduce need

**Data Flow**:
1. Server component fetches data (SSR)
2. Passes to client component via props
3. Client component manages local UI state
4. User interactions → API calls → server refetch

---

## Database Architecture

### Schema Overview

**Tables** (53 total):

**Core Entities**:
- `users` - User accounts
- `clients` - Google Ads clients
- `campaigns` - Campaign data
- `ad_groups` - Ad group data
- `keywords` - Keyword data
- `ads` - Ad creative data

**Metrics & Performance**:
- `campaign_performance` - Campaign metrics by date
- `keyword_performance` - Keyword metrics by date
- `conversion_events` - Conversion tracking

**AI Features**:
- `ai_alerts` - Generated alerts
- `ai_conversations` - Chat conversations
- `ai_messages` - Chat messages
- `ai_business_context` - Business profiles
- `ai_custom_context` - Custom context entries

**Sync & Logs**:
- `sync_logs` - Sync history
- `sync_queue` - Pending syncs
- `api_tracking` - API usage metrics

**Settings**:
- `settings` - User settings
- `column_preferences` - Column customization

---

### Database Design Principles

**Normalization**: 3NF (Third Normal Form)

**Relationships**:
```
users 1──────┤ clients
clients 1────┤ campaigns
campaigns 1──┤ ad_groups
ad_groups 1──┤ keywords
clients 1────┤ ai_alerts
```

**Indexes**: On foreign keys, frequently queried fields (customer_id, user_id, date ranges)

**Data Retention**:
- Performance data: 2 years rolling
- Sync logs: 90 days
- AI conversations: Indefinite (user can delete)

---

## Smart Sync Architecture

### Sync Types

**Smart Sync** (default):
- Only pulls data changed since last sync
- 30x faster than full sync
- Batched database operations
- 10-batch structure for progress tracking

**Full Sync** (rarely used):
- Pulls all data regardless of last sync
- Used for troubleshooting or initial sync
- Slower but comprehensive

---

### Sync Process Flow

```
1. User triggers sync (manual or auto)
   ↓
2. Sync added to queue (sync_queue table)
   ↓
3. Background worker picks up sync job
   ↓
4. Determine API client (Direct or MCC)
   ↓
5. Fetch data from Google Ads API:
   - Campaigns
   - Ad Groups
   - Keywords
   - Ads
   - Performance metrics (last 30 days)
   - Conversion events
   ↓
6. Batch process:
   Batch 1: Campaigns
   Batch 2: Ad Groups
   Batch 3: Keywords (chunk 1)
   Batch 4: Keywords (chunk 2)
   Batch 5: Ads
   Batch 6-9: Performance data
   Batch 10: Conversion events
   ↓
7. For each batch:
   - Transform API response
   - Handle dual API format (camelCase/snake_case)
   - Batch insert/update to database
   - Update progress
   ↓
8. Mark sync complete
   ↓
9. Trigger alert generation (async)
```

**Duration**: 2-5 minutes typical, 5-15 minutes for large accounts

---

### Concurrent Sync Queue

**Max Concurrent**: 3 syncs simultaneously

**Queue Management**:
- Priority: Manual sync > Auto-sync
- Deduplication: No duplicate syncs for same client
- Retry logic: 3 attempts with exponential backoff

**Database Table** (`sync_queue`):
```sql
CREATE TABLE sync_queue (
  id SERIAL PRIMARY KEY,
  client_id INTEGER REFERENCES clients(id),
  status VARCHAR(20), -- pending, in_progress, completed, failed
  priority INTEGER,   -- 1=high, 5=low
  created_at TIMESTAMP,
  started_at TIMESTAMP,
  completed_at TIMESTAMP
);
```

---

## AI Integration Architecture

### Alert Generation System

**Trigger**: After successful sync

**Process**:
```
1. Sync completes
   ↓
2. Gather context for client:
   - Campaign performance (last 30 days)
   - Keywords with issues
   - Budget data
   - Business profile
   - Custom context entries
   ↓
3. Build prompt for Claude AI:
   - System prompt (role definition)
   - Context data (JSON)
   - Instructions (generate alerts, severity 1-10)
   ↓
4. Call Claude API (streaming):
   - Model: claude-sonnet-4
   - Max tokens: 4096
   - Temperature: 0.3 (low creativity for consistency)
   ↓
5. Parse Claude response:
   - Extract alerts
   - Validate severity (1-10)
   - Categorize (Budget, Performance, etc.)
   ↓
6. Save to database (ai_alerts table)
   ↓
7. Notify user (badge count updates)
```

---

### AI Chat System

**Architecture**: Streaming chat with Claude Sonnet 4

**Context Assembly**:
```
User Message:
  "Why is my CPA increasing?"
    ↓
Backend assembles context:
  - Last 10 messages in conversation
  - Client's current performance data
  - Business profile
  - Custom context
  - Active alerts
    ↓
Claude API Request:
  System Prompt: "You are an expert Google Ads analyst..."
  Messages: [conversation history + new message]
  Context: [JSON with client data]
    ↓
Claude Streams Response:
  "Your CPA increased from $45 to $58 (29% increase) over
   the past 7 days. This is driven by three factors:
   1. Quality Score dropped from 7.2 to 5.8...
   2. Clicks decreased 18% but conversions down 35%...
   3. ..."
    ↓
Frontend displays streaming response in real-time
```

**Auto-Summarization**: After 10 messages, summarizes conversation to save tokens (60-80% token reduction)

---

## Infrastructure and Deployment

### Hosting

**Both Frontend and Backend**: Render.com

**Regions**: US East (primary)

**Deployment**:
- Auto-deploy from GitHub main branch
- Docker containers
- Zero-downtime deployments

---

### Frontend Deployment (Render)

**Service Type**: Web Service

**Domain**: https://app.aiperfoads.xyz

**Build Command**: `cd frontend && npm install && npm run build`

**Start Command**: `cd frontend && npm start`

**Environment Variables**:
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NODE_ENV` - production

**Resources**: 512MB RAM, 0.5 CPU

---

### Backend Deployment (Render)

**Service Type**: Web Service

**Domain**: https://api.aiperfoads.xyz

**Build Command**: `npm install && npm run build`

**Start Command**: `npm run start`

**Environment Variables** (20+):
- `DATABASE_URL` - Supabase PostgreSQL connection
- `GOOGLE_CLIENT_ID` - Google OAuth
- `GOOGLE_CLIENT_SECRET` - Google OAuth
- `CLAUDE_API_KEY` - Anthropic API key
- `JWT_SECRET` - JWT signing key
- ...

**Resources**: 1GB RAM, 1 CPU

**Auto-Scaling**: Not enabled (single instance)

---

### Database (Supabase)

**Plan**: Pro Plan

**Connection**: PostgreSQL connection string

**Backups**: Daily automated backups (Supabase managed)

**Access**: Direct SQL via Supabase dashboard or MCP tools

---

## Performance Optimizations

### Backend

**1. Smart Sync Batching**:
- Batch database operations (not individual inserts)
- 30x faster than old sync method

**2. API Response Caching**:
- Google Ads account discovery cached 24 hours
- Reduces redundant API calls

**3. Concurrent Sync Queue**:
- 3 simultaneous syncs
- Utilizes server resources efficiently

**4. Database Connection Pooling**:
- Reuses connections
- Max 20 connections

---

### Frontend

**1. Server-Side Rendering (SSR)**:
- Initial page load shows data immediately
- No loading spinners for first view

**2. Code Splitting**:
- Next.js automatic code splitting
- Only load JavaScript for current page

**3. Image Optimization**:
- Next.js Image component
- Lazy loading, responsive images

**4. Client-Side Caching**:
- React Query (if used) caches API responses
- Reduces redundant fetches

---

## Scalability Considerations

### Current Limits

**Clients per User**: No hard limit (tested up to 500)

**Concurrent Syncs**: 3

**API Rate Limits**:
- Google Ads API: 15,000-50,000 operations/day (account-dependent)
- Claude API: 100,000 tokens/minute

---

### Scaling Strategies

**Horizontal Scaling**:
- Add more backend instances (Render supports this)
- Load balancer distributes traffic

**Database Scaling**:
- Supabase supports vertical scaling (more CPU/RAM)
- Read replicas for reporting queries

**Sync Queue Scaling**:
- Increase concurrent sync limit (adjust based on resources)
- Separate sync workers from API servers

**Caching Layer**:
- Add Redis for response caching
- Reduce database load

---

## Security Architecture

See: [Technical Security Reference](/docs/technical-security) for complete security documentation

**Highlights**:
- OAuth 2.0 for Google Ads access
- JWT authentication
- httpOnly cookies (no localStorage)
- HTTPS everywhere
- Input validation and sanitization
- SQL injection prevention (parameterized queries)
- Rate limiting on API endpoints
- CORS restrictions

---

## Monitoring and Logging

### Application Logs

**Backend**: Console logs (captured by Render)

**Frontend**: Browser console (local dev), Render logs (production)

**Log Retention**: 7 days (Render default)

---

### Error Tracking

**Not Implemented Yet**: Consider Sentry or similar for production

**Current**: Errors logged to console, manual monitoring

---

### Performance Monitoring

**Sync Logs Table**: Tracks sync duration, success/failure

**API Tracking Table**: Records API call counts and usage

**Database Queries**: Can monitor slow queries via Supabase

---

## Development Workflow

### Local Development

**Backend**:
```bash
npm run dev  # Runs backend on port 3000
```

**Frontend**:
```bash
cd frontend && npm run dev -- -p 3001  # Port 3001
```

**Database**: Connect to Supabase cloud (no local DB needed)

---

### Code Structure

**Backend** (`src/`):
```
src/
├── routes/        # Express route handlers
├── services/      # Business logic
├── utils/         # Helper functions
├── middleware/    # Auth, error handling
├── db.ts          # Database connection
└── server.ts      # Express app entry point
```

**Frontend** (`frontend/src/`):
```
frontend/src/
├── app/           # Next.js 15 app router
├── components/    # React components
├── lib/           # Utilities
└── styles/        # Tailwind CSS
```

---

## Common Questions

**Q: Why separate frontend and backend deployments?**
A: Allows independent scaling, clearer separation of concerns, easier debugging.

**Q: Why Next.js 15 instead of 14?**
A: Latest stable, better performance, improved server components. But has breaking changes (async params).

**Q: Why TypeScript?**
A: Type safety, better IDE support, catches errors at compile time.

**Q: Why Supabase vs self-hosted PostgreSQL?**
A: Managed backups, automatic scaling, built-in auth (not used), easier setup.

**Q: Why Express vs Nest.js or Fastify?**
A: Simpler, less opinionated, large community, easier onboarding for developers.

**Q: Why not use Next.js API routes for everything (no separate backend)?**
A: Separate backend allows for background jobs (sync queue), more control over deployment, clearer architecture.

---

## Next Steps

Deep dive into architecture components:

- **[Technical Dual API](/docs/technical-dual-api)** - Understand dual API format handling
- **[Technical Security](/docs/technical-security)** - Complete security documentation
- **[Smart Sync Explained](/docs/smart-sync-explained)** - Sync system details
- **[AI Context Explained](/docs/ai-context-explained)** - AI integration details

---

**Architecture evolves** based on performance needs and user feedback

**Modular design** allows swapping components without full rewrite

**Cloud-native** leverages managed services for reliability

**Last Updated**: October 4, 2025
