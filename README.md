# Smart Home Care - Backend (Deploy Ready)

## Quick start
1. Copy `.env.example` to `.env` and fill values (MongoDB Atlas URI, JWT secret, Razorpay keys).
2. `npm install`
3. `npm start` (or `npm run dev` with nodemon)

## Deploy
- Works on Render / Heroku. Set environment variables on hosting platform.
- After deploy, call `POST /api/seed` to create demo services.
