import express from 'express';
import CareerPath from '../models/CareerPath.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { title } = req.query;
    const filter = {};
    if (title) {
      filter.title = { $regex: new RegExp(`^${title}$`, 'i') };
    }
    const paths = await CareerPath.find(filter).sort({ createdAt: -1 });
    res.json(paths);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const path = await CareerPath.findById(req.params.id);
    if (!path) return res.status(404).json({ message: 'Career path not found' });
    res.json(path);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const path = new CareerPath(req.body);
    const created = await path.save();
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updated = await CareerPath.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Career path not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

export default router;
