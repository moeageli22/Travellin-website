# Travelinn - AI-Powered Travel Platform

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/moeageli22s-projects/v0-travellin-website-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/oScYoobknCE)

## Overview

Your intelligent travel companion for finding perfect accommodations, connecting with fellow travelers, and creating unforgettable experiences.

This repository stays in sync with your deployed chats on [v0.dev](https://v0.dev). Any changes made to your deployed app will be automatically pushed here.

## Project Structure

\`\`\`
travelinn/
├── frontend/          # Next.js application (UI/UX)
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   ├── public/       # Static assets
│   └── lib/          # Utilities
│
├── backend/          # API and business logic
│   ├── api/         # API routes
│   ├── services/    # Business services
│   └── middleware/  # Express middleware
│
└── database/        # Database schemas and migrations
    ├── schemas/     # SQL schema definitions
    ├── migrations/  # Database migrations
    └── seeds/       # Seed data
\`\`\`

## Features

- 🏨 AI-powered hotel recommendations
- 👥 Travel groups and communities (Food, Fitness, Gaming, Music, Culture)
- 🤖 AI travel assistant chatbot with Lottie animations
- 💪 Health & wellbeing support
- 🔔 24/7 Concierge services
- 🌍 Dynamic destination backgrounds (NYC, London, Beaches)
- 🔐 OAuth authentication (Google, Facebook, Apple)

## Deployment

Your project is live at:

**[https://vercel.com/moeageli22s-projects/v0-travellin-website-design](https://vercel.com/moeageli22s-projects/v0-travellin-website-design)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/oScYoobknCE](https://v0.dev/chat/oScYoobknCE)**

## Getting Started

### Frontend
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

The frontend will run on `http://localhost:3000`

### Backend
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

The backend API will run on `http://localhost:3001`

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS v4
- **Backend**: Node.js, Express (planned)
- **Database**: PostgreSQL (recommended)
- **Auth**: OAuth (Google, Facebook, Apple)
- **Animations**: Lottie Web Components

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
