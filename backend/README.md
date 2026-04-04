# CareerPath Backend

This backend provides REST APIs for the CareerPath frontend and connects to MongoDB.

## Setup

1. Copy `.env.example` to `.env`
2. Set `MONGODB_URI` using your MongoDB connection string.
3. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Start the backend:
   ```bash
   npm start
   ```

## Development

The frontend proxies `/api` requests to `http://localhost:5000` during local development.

The backend exposes these main routes:

- `GET /api/career-paths`
- `POST /api/career-paths`
- `PUT /api/career-paths/:id`
- `GET /api/user-progress`
- `POST /api/user-progress`
- `PUT /api/user-progress/:id`
- `GET /api/quizzes`
- `POST /api/quizzes`
- `GET /api/resources`
- `POST /api/resources`
- `GET /api/jobs`
- `POST /api/jobs`
