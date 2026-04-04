import express from 'express';
import UserProgress from '../models/UserProgress.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { created_by } = req.query;
    const filter = {};
    if (created_by) {
      filter.created_by = created_by;
    }
    const progress = await UserProgress.find(filter).sort({ updatedAt: -1 });
    res.json(progress);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const record = new UserProgress(req.body);
    const created = await record.save();
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updated = await UserProgress.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'User progress not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

export default router;
