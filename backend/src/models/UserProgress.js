import mongoose from 'mongoose';

const userProgressSchema = new mongoose.Schema({
  created_by: { type: String, required: true, index: true },
  career_path_id: { type: mongoose.Schema.Types.ObjectId, ref: 'CareerPath' },
  known_skills: { type: [String], default: [] },
  missing_skills: { type: [String], default: [] },
  completed_skills: { type: [String], default: [] },
  level: { type: String, default: 'beginner' },
  percentage: { type: Number, default: 0 },
  quiz_scores: { type: Map, of: Number, default: {} },
  theme: { type: String, enum: ['light', 'dark'], default: 'light' },
  notifications_enabled: { type: Boolean, default: true },
}, {
  timestamps: true
});

export default mongoose.models.UserProgress || mongoose.model('UserProgress', userProgressSchema);
