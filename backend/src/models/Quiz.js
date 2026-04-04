import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  skill_name: { type: String, required: true, index: true },
  question: { type: String, required: true },
  options: { type: [String], default: [] },
  correct_answer: { type: Number, required: true },
  explanation: { type: String },
}, {
  timestamps: true
});

export default mongoose.models.Quiz || mongoose.model('Quiz', quizSchema);
