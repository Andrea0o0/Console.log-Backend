const router = require('express').Router();
const Kata = require('../models/Kata')
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Create one KATA
// @route   POST /admin
// @access  Admin
router.post('/', isAuthenticated, isAdmin, async (req, res, next) => {
    try {
        console.log(req.body)
        const newKata = await Kata.create(req.body)
        res.status(201).json(newKata)
    } catch (error) {
        next(error)
    }
  });

// @desc    Delete one kata
// @route   DELETE admin/delete/:kataId
// @access  Admin
router.delete('/:kataId', isAuthenticated, isAdmin, async (req, res, next) => {
  const { kataId } = req.params
  try {
      const deleteKata = await Kata.findByIdAndDelete(kataId)
      res.status(201).json(deleteKata)
  } catch (error) {
      next(error)
  }
});

module.exports = router;