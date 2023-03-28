const router = require('express').Router();
const Kata = require('../models/Kata')
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Get all katas
// @route   GET /kata
// @access  Public
router.get('/', async (req, res, next) => {;
  try {
    const katas = await Kata.find()
    res.status(200).json(katas)
  } catch (error) {
    next(error)
  }
});

// @desc    Get one kata
// @route   GET /kata/:kataId
// @access  Public
router.get('/:kataId', async (req, res, next) => {
  const { kataId } = req.params
  try {
      const kata = await Kata.findById(kataId)
      res.status(200).json(kata)
  } catch (error) {
      next(error)
  }
});

// @desc    Edit one kata
// @route   PUT /kata/:kataId
// @access  Admin
router.put('/:kataId', isAdmin, async (req, res, next) => {
  const { kataId } = req.params
  try {
      const editKata = await Kata.findByIdAndUpdate(kataId, req.body, { new: true})
      res.status(204).json(editKata)
  } catch (error) {
      next(error)
  }
});

// @desc    Create one kata
// @route   POST /kata
// @access  Admin
router.post('/', isAdmin, async (req, res, next) => {
  try {
      const newKata = await Kata.create(req.body)
      res.status(201).json(newKata)
  } catch (error) {
      next(error)
  }
});

module.exports = router;