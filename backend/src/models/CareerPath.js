import mongoose from 'mongoose';

const careerPathSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  required_skills: { type: [String], default: [] },
  skill_order: { type: [String], default: [] },
  icon: { type: String },
  created_by: { type: String },
}, {
  timestamps: true
});

export default mongoose.models.CareerPath || mongoose.model('CareerPath', careerPathSchema);
