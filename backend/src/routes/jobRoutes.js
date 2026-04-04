import express from 'express';
import JobOpportunity from '../models/JobOpportunity.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { career_path, type } = req.query;
    const filter = {};
    if (career_path) {
      filter.career_path = career_path;
    }
    if (type) {
      filter.type = type;
    }
    const jobs = await JobOpportunity.find(filter).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body;
    const created = Array.isArray(payload)
      ? await JobOpportunity.insertMany(payload)
      : await JobOpportunity.create(payload);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

export default router;
