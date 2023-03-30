const router = require('express').Router();
const Like = require('../models/Like')
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Get all likes from KATA
// @route   GET /likes/kata/:kataId
// @access  Private
router.get('/kata/:kataId', isAuthenticated, async (req, res, next) => {
    const { kataId } = req.params
  try {
    const likes_kata = await Like.find(({kata:kataId}))
    res.status(200).json(likes_kata)
  } catch (error) {
    next(error)
  }
});

// @desc    Get all likes from SOLUTION
// @route   GET /likes/solution/:solutionId
// @access  Private
router.get('/solution/:solutionId', isAuthenticated, async (req, res, next) => {
    const { solutionId } = req.params
  try {
    const likes_solution = await Like.find(({solution:solutionId}))
    res.status(200).json(likes_solution)
  } catch (error) {
    next(error)
  }
});

// @desc    Create one like KATA/SOLUTION
// @route   POST /likes
// @access  Private
router.post('/', isAuthenticated, async (req, res, next) => {
  try {
      const { _id:user_id } = req.payload
      const like_created = await Like.create(req.body)
      const newLike = await Like.findByIdAndUpdate(like_created._id,{user:user_id},{new:true}).populate("user")

      res.status(201).json(newLike)
  } catch (error) {
      next(error)
  }
});

// @desc    Delete one like
// @route   DELETE /likes/:likeId
// @access  Admin
router.delete('/:likeId', isAuthenticated, isAdmin, async (req, res, next) => {
  const { likeId } = req.params
  try {
      const deleteLike = await Like.findByIdAndDelete(likeId)
      res.status(201).json(deleteLike)
  } catch (error) {
      next(error)
  }
});

module.exports = router;