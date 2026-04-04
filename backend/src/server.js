import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import careerPathRoutes from './routes/careerPathRoutes.js';
import userProgressRoutes from './routes/userProgressRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('Missing MONGODB_URI in environment');
  process.exit(1);
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/career-paths', careerPathRoutes);
app.use('/api/user-progress', userProgressRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
