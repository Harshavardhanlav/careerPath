import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  base44Id: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    type: Object,
    default: {}
  },
  learningProfile: {
    type: Object,
    default: {
      learningStyle: 'balanced', // fast/slow/balanced
      preference: 'practical', // practical/theory/balanced
      skillDecayRate: 0.1, // how fast skills decay
      confidenceLevels: {}, // skill -> confidence %
      lastActivity: new Date()
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);