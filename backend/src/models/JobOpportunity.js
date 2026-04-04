import mongoose from 'mongoose';

const jobOpportunitySchema = new mongoose.Schema({
  career_path: { type: String, required: true, index: true },
  title: { type: String, required: true },
  company: { type: String },
  location: { type: String },
  description: { type: String },
  url: { type: String },
  type: { type: String, enum: ['job', 'internship'], default: 'job' },
}, {
  timestamps: true
});

export default mongoose.models.JobOpportunity || mongoose.model('JobOpportunity', jobOpportunitySchema);
