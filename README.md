# Congkong Dashboard

## Overview

A Next.js-based dashboard application for managing events, tracking matches, and monitoring meetings. Integrates Supabase for data storage and NextAuth.js for Google authentication.

## Features

- Google OAuth login with session persistence using local storage
- Real-time dashboard with participant metrics and charts
- Tab-based navigation for event management, matching tracker, and more
- Supabase integration for user, match, and meeting data

## Prerequisites

- Node.js (v18 or higher)
- Supabase account
- Google Developer Console account for OAuth credentials

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd congkong_dashboard
   ```

2. in .env.local:
   ```bash
   SUPABASE_URL=<your-supabase-url>
   SUPABASE_KEY=<your-supabase-anon-key>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   NEXTAUTH_URL=http://localhost:3000
   ```
