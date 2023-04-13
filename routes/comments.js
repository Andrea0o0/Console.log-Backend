const router = require('express').Router();
const Comment = require('../models/Comment')
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Get all commentss from KATA
// @route   GET /comments/kata/:kataId
// @access  Private
router.get('/kata/:kataId', isAuthenticated, async (req, res, next) => {
    const { kataId } = req.params
  try {
    const commentss_kata = await Comment.find(({kata:kataId})).populate('user')
    console.log(commentss_kata)
    res.status(200).json(commentss_kata)
  } catch (error) {
    next(error)
  }
});

// @desc    Get all commentss from SOLUTION
// @route   GET /comments/solution/:solutionId
// @access  Private
router.get('/solution/:solutionId', isAuthenticated, async (req, res, next) => {
    const { solutionId } = req.params
  try {
    const commentss_solution = await Comment.find(({solution:solutionId}))
    res.status(200).json(commentss_solution)
  } catch (error) {
    next(error)
  }
});

// @desc    Create one comments KATA/SOLUTION
// @route   POST /comments
// @access  Private
router.post('/', isAuthenticated, async (req, res, next) => {
  try {
      const { _id:user_id } = req.payload
      const comments_created = await Comment.create(req.body)
      const newComment = await Comment.findByIdAndUpdate(comments_created._id,{user:user_id},{new:true}).populate("user")
      console.log(newComment)
      const commentss_kata = await Comment.find(({kata:req.body.kata})).populate('user')
      res.status(201).json(commentss_kata)
  } catch (error) {
      next(error)
  }
});

// @desc    Delete one comments
// @route   DELETE /comments/:commentsId
// @access  Admin
router.delete('/:commentsId', isAuthenticated, isAdmin, async (req, res, next) => {
  const { commentsId } = req.params
  try {
      const deleteComment = await Comment.findByIdAndDelete(commentsId)
      res.status(201).json(deleteComment)
  } catch (error) {
      next(error)
  }
});

module.exports = router;