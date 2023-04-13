const router = require('express').Router();
const Solution = require('../models/Solution')
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Get all solutions by USER
// @route   GET /solutions/user
// @access  Private
router.get('/user', isAuthenticated, async (req, res, next) => {;
  try {
    const solutions = {}
    const { _id:user_id } = req.payload
    const solutions_completed = await Solution.find({user:user_id,status:true}).populate('kata')
    const solutions_Incompleted = await Solution.find({user:user_id,status:false}).populate('kata')
    solutions.true = solutions_completed
    solutions.false = solutions_Incompleted
    console.log(solutions)
    res.status(200).json(solutions)
  } catch (error) {
    next(error)
  }
});

// @desc    Get all solutions by USER & KATA
// @route   GET /solutions/user
// @access  Private
router.get('/user/:kataId', isAuthenticated, async (req, res, next) => {;
  const { kataId } = req.params
  try {
    const { _id:user_id } = req.payload
    const solutions = await Solution.find({user:user_id,status:true,kata:kataId})
    res.status(200).json(solutions)
  } catch (error) {
    next(error)
  }
});

// @desc    Get all solutions by KATA
// @route   GET /solutions/kata/:kataId
// @access  Private
router.get('/kata/:kataId', isAuthenticated, async (req, res, next) => {;
  const { kataId } = req.params
  try {
    const solutions_KATA = await Solution.find({kata:kataId,status:true}).populate('user')
    res.status(200).json(solutions_KATA)
  } catch (error) {
    next(error)
  }
});


// @desc    Get one solution completed TO REFACTOR 
// REFACTOR = Same initialvalue as SOLUTION COMPLETED, BUT NEW SOLUTION
// @route   GET /solutions/:solutionId
// @access  Private
router.get('/:solutionId', isAuthenticated, async (req, res, next) => {
  const { solutionId } = req.params
  try {
      const solution = await Solution.findById(solutionId)
      res.status(200).json(solution)
  } catch (error) {
      next(error)
  }
});

// @desc    Edit one solution INCOMPLETED
// @route   PUT /solutions/:solutionId
// @access  Private
router.put('/:solutionId', isAuthenticated, async (req, res, next) => {
  const { solutionId } = req.params
  try {
      const editSolution = await Solution.findByIdAndUpdate(solutionId, req.body, { new: true})
      console.log(editSolution)
      const hello = 'hello'
      res.status(204).json(hello)
  } catch (error) {
      next(error)
  }
});

// @desc    Create one solution
// @route   POST /solutions
// @access  Private
router.post('/', isAuthenticated, async (req, res, next) => {
  try {
      const { _id:user_id } = req.payload
      const solution_created = await Solution.create(req.body)
      const newSolution = await Solution.findByIdAndUpdate(solution_created._id,{$push: { user: user_id }},{new:true})
      res.status(201).json(newSolution)
  } catch (error) {
      next(error)
  }
});

// @desc    Delete one solution
// @route   DELETE /solutions/:solutionId
// @access  Admin
router.delete('/:solutionId', isAuthenticated, isAdmin, async (req, res, next) => {
  const { solutionId } = req.params
  try {
      console.log(solutionId)
      const deleteSolution = await Solution.findByIdAndDelete(solutionId)
      res.status(201).json(deleteSolution)
  } catch (error) {
      next(error)
  }
});

module.exports = router;