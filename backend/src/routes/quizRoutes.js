import express from 'express';
import Quiz from '../models/Quiz.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { skill_name } = req.query;
    const filter = {};
    if (skill_name) {
      filter.skill_name = skill_name;
    }
    const quizzes = await Quiz.find(filter).sort({ createdAt: -1 });
    res.json(quizzes);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body;
    const created = Array.isArray(payload)
      ? await Quiz.insertMany(payload)
      : await Quiz.create(payload);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

export default router;
