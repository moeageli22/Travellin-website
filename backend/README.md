# Travelinn Backend

Backend structure for the Travelinn travel platform.

## 📁 Structure

\`\`\`
backend/
├── config/          # Configuration files
│   └── database.ts  # Database connection setup
├── controllers/     # Business logic
│   ├── authController.ts
│   ├── hotelController.ts
│   └── groupController.ts
├── models/         # Data models
│   ├── User.ts
│   ├── Hotel.ts
│   └── Group.ts
├── middleware/     # Express middleware
│   └── auth.ts
├── routes/         # API routes
│   └── api.ts
├── utils/          # Utility functions
│   ├── auth.ts
│   └── email.ts
└── README.md
\`\`\`

## 🚀 Getting Started

### Environment Variables

Create a `.env` file in the project root:

\`\`\`env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=travelinn
DB_USER=postgres
DB_PASSWORD=your_password

# MongoDB (for chat/messaging)
MONGODB_URI=mongodb://localhost:27017/travelinn

# Redis (for caching)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT
JWT_SECRET=your_jwt_secret_key

# Email
EMAIL_FROM=noreply@travelinn.com
SENDGRID_API_KEY=your_sendgrid_key

# Stripe (for payments)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
\`\`\`

### Installation

\`\`\`bash
# Install dependencies
npm install

# Or with pnpm
pnpm install
\`\`\`

### Database Setup

\`\`\`bash
# Run migrations (if using Prisma/TypeORM)
npm run migrate

# Seed database
npm run seed
\`\`\`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Hotels
- `GET /api/hotels` - Get all hotels (with filters)
- `GET /api/hotels/:id` - Get hotel details
- `POST /api/bookings` - Create booking (protected)

### Groups
- `GET /api/groups` - Get all communities
- `POST /api/groups/:id/join` - Join community (protected)
- `GET /api/groups/:id/messages` - Get messages
- `POST /api/groups/:id/messages` - Send message (protected)

## 🔒 Authentication

Protected routes require a JWT token in the Authorization header:

\`\`\`
Authorization: Bearer <your_token>
\`\`\`

## 🛠️ Development

\`\`\`bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
\`\`\`

## 📦 Dependencies to Install

\`\`\`bash
# Core
npm install express cors dotenv

# Database
npm install pg mongodb redis
npm install @types/pg @types/node

# Authentication
npm install bcrypt jsonwebtoken
npm install @types/bcrypt @types/jsonwebtoken

# Email
npm install @sendgrid/mail

# Payment
npm install stripe

# Validation
npm install zod
\`\`\`

## 🤝 Usage with Frontend

The Next.js frontend can call these backend endpoints using:

\`\`\`typescript
// Example: Login
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
})

const data = await response.json()
\`\`\`

## 📚 Next Steps

1. Set up database connections in `config/database.ts`
2. Implement actual database queries in controllers
3. Add input validation using Zod
4. Set up WebSocket for real-time chat
5. Implement payment processing with Stripe
6. Add rate limiting and security middleware
7. Set up logging and monitoring
