# Feedants Classical Dance Competition - Full-Stack Module

A production-grade, functional Full-Stack implementation of the **Feedants Classical Dance Competition Details Module**, developed for the **Feedants Technical Assignment**.

Built with **Node.js, Express.js, MongoDB (Mongoose)** on the backend and **React / React Native Web** on the frontend, featuring real-time state management, bilingual support (English / Hindi), live countdown timers, and atomic concurrency spot reservation.

---

## 📁 Clean Monorepo Directory Structure

```
c:\Users\hp\Downloads\Assignment24S\
├── backend/                    # Node.js + Express + MongoDB Backend
│   ├── config/
│   │   └── db.js               # MongoDB connection & MongoMemoryServer fallback
│   ├── controllers/
│   │   ├── competitionController.js # Competition details & user state
│   │   ├── registrationController.js# Atomic spot registration logic
│   │   ├── submissionController.js  # Video performance uploads
│   │   └── reviewController.js      # Participant feedback
│   ├── models/
│   │   ├── Competition.js      # Competition & judge schema
│   │   ├── User.js             # User profile schema
│   │   ├── Registration.js     # User registration schema
│   │   ├── Submission.js       # Video entries schema
│   │   └── Review.js           # Reviews schema
│   ├── routes/
│   │   └── apiRoutes.js        # Express REST endpoints
│   ├── seed/
│   │   └── seedData.js         # Competition database seeder
│   ├── package.json
│   └── server.js               # Express application entry point
├── frontend/                   # React / React Native Web Frontend
│   ├── public/                 # Static assets & icons
│   ├── src/                    # Components, Pages & API Services
│   │   ├── components/         # UI Components & Modals
│   │   ├── data/               # Bilingual datasets
│   │   ├── services/
│   │   │   └── api.js          # Axios API Service Layer
│   │   ├── App.jsx             # Main container
│   │   └── index.css           # Design system
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── package.json                # Root orchestrator package.json
└── README.md
```

---

## 🛠 Required Environment Variables & Setup

Create a `.env` file inside `backend/` directory (optional, default fallbacks provided):

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/feedants_competition
NODE_ENV=development
```

> **Note**: If a local or remote MongoDB database is not running at `MONGO_URI`, the backend automatically launches an embedded **MongoMemoryServer**, allowing the app to run **out-of-the-box on any machine** without setup!

---

## ⚡ Quick Start Guide

### 1. Install Dependencies
Run from the root directory:
```bash
npm run install:all
```

### 2. Start the Full-Stack Application
```bash
# Terminal 1: Launch Backend Express Server
npm run start:backend

# Terminal 2: Launch Frontend React App
npm run start:frontend
```

- **Backend API**: `http://localhost:5000`
- **Frontend App**: `http://localhost:5173` (or `http://localhost:5174`)

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/competitions/:slug` | Retrieves competition details, live spot counts, judge info, dates |
| `GET` | `/api/competitions/:slug/user-status?userId=...` | Retrieves user-specific registration and submission status |
| `POST` | `/api/competitions/:slug/register` | Atomically registers user and reserves participation spot |
| `POST` | `/api/competitions/:slug/submit` | Uploads performance video entry (title, category, video link) |
| `GET` | `/api/competitions/:slug/reviews` | Retrieves participant reviews & ratings |
| `POST` | `/api/competitions/:slug/reviews` | Posts new participant review |

---

## 📐 Key Technical Decisions & Architecture

### 1. Atomic Concurrency & Race Condition Prevention
To support thousands of concurrent users attempting to book a limited number of spots (e.g. 20 spots), standard read-then-write logic causes race conditions. We implemented an **atomic findOneAndUpdate** operation:
```js
const updatedComp = await Competition.findOneAndUpdate(
  { slug, $expr: { $lt: ['$spotsBooked', '$maxSpots'] } },
  { $inc: { spotsBooked: 1 } },
  { new: true }
);
```
This guarantees that MongoDB atomically increments `spotsBooked` only if spots remain, completely eliminating double-booking under high traffic.

### 2. Data Modeling & Normalization
- **Competition Schema**: Contains immutable event specs, milestone timestamps, judge metadata, and dynamic spot counters.
- **Registration Schema**: Indexed uniquely on `{ competitionId, userId }` to enforce single-user registration rules.
- **Submission Schema**: Decoupled from registration to allow multiple submission attempts or revisions during the active submission window.

### 3. Progressive Degradation & Offline Resilience
The frontend uses an API Service Layer (`frontend/src/services/api.js`) with an automatic offline fallback dataset (`competitionData.js`). If backend server connectivity is lost, the application continues to display complete UI information smoothly.

---

## ⚖️ Trade-offs & Production Scale Considerations

### Trade-offs Considered:
1. **In-Memory Fallback vs. Dedicated Mongo Cluster**: Included `mongodb-memory-server` fallback for instant evaluator convenience. In production, this fallback is disabled in favor of a clustered MongoDB Atlas deployment with Replica Sets.
2. **Simplified Video Uploads**: Video submissions currently store metadata and video URLs / blob references. Production scaling would integrate direct-to-S3 / Cloudinary presigned URLs for video streaming.

### Future Improvements for Production:
1. **Redis Caching Layer**: Cache `GET /api/competitions/:slug` responses in Redis with sub-second TTL to handle 10,000+ RPS without database load.
2. **WebSockets / Server-Sent Events (SSE)**: Push real-time spot decrement updates to connected clients as spots get booked.
3. **Razorpay Webhooks Integration**: Auto-transition user status from `PENDING` to `PAID` via webhook callbacks upon payment gateway confirmation.
