const router = require('express').Router();
const Champions = require('../models/Champions');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Get all champions
// @route   GET /champion
// @access  Public
router.get('/', async (req, res, next) => {;
  try {
    const champions = await Champion.find()
    res.status(200).json(champions)
  } catch (error) {
    next(error)
  }
});

// @desc    Get one champion
// @route   GET /champion/:championId
// @access  Public
router.get('/:championId', async (req, res, next) => {
  const { championId } = req.params
  try {
      const champion = await Champion.findById(championId)
      res.status(200).json(champion)
  } catch (error) {
      next(error)
  }
});

// @desc    Edit one champion
// @route   PUT /champion/:championId
// @access  Admin
router.put('/:championId', async (req, res, next) => {
  const { championId } = req.params
  try {
      const editChampion = await Champion.findByIdAndUpdate(championId, req.body, { new: true})
      res.status(204).json(editChampion)
  } catch (error) {
      next(error)
  }
});

// @desc    Create one champion
// @route   POST /champion
// @access  Admin
router.post('/', async (req, res, next) => {
  try {
      const newChampion = await Champion.create(req.body)
      res.status(201).json(newChampion)
  } catch (error) {
      next(error)
  }
});

// @desc    Delete one champion
// @route   DELETE /champion/:championId
// @access  Admin
router.delete('/:championId', isAdmin, async (req, res, next) => {
  const { championId } = req.params
  try {
      const deletechampion = await Champion.findByIdAndDelete(championId)
      res.status(201).json(deleteChampion)
  } catch (error) {
      next(error)
  }
});

module.exports = router;