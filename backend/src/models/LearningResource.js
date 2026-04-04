import mongoose from 'mongoose';

const learningResourceSchema = new mongoose.Schema({
  skill_name: { type: String, required: true, index: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  platform: { type: String },
  type: { type: String, enum: ['free', 'paid'], default: 'free' },
}, {
  timestamps: true
});

export default mongoose.models.LearningResource || mongoose.model('LearningResource', learningResourceSchema);
