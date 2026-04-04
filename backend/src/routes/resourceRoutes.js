import express from 'express';
import LearningResource from '../models/LearningResource.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { skill_name } = req.query;
    const filter = {};
    if (skill_name) {
      filter.skill_name = skill_name;
    }
    const resources = await LearningResource.find(filter).sort({ createdAt: -1 });
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body;
    const created = Array.isArray(payload)
      ? await LearningResource.insertMany(payload)
      : await LearningResource.create(payload);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

export default router;
