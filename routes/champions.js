const router = require('express').Router();
const Champions = require('../models/Champions');
const User = require('../models/User')
const jwt = require("jsonwebtoken");
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Get all champions by USER
// @route   GET /champion
// @access  Private
router.get('/', isAuthenticated, async (req, res, next) => {;
  try {
    const { _id:user_id } = req.payload
    // const champions = await Champions.find({users: { $in:[user_id] }})
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
      const champion = await Champions.findById(championId)
      res.status(200).json(champion)
  } catch (error) {
      next(error)
  }
});

router.get('/status/request', isAuthenticated, async (req, res, next) => {
  try {
      const champion = await Champions.find({status:'REQUEST'})
      res.status(200).json(champion)
  } catch (error) {
      next(error)
  }
});


// @desc    Edit one champion USER_REQUEST
// @route   PUT /champions/user-request/:championId
// @access  Admin
router.put('/user-request/:championId', isAuthenticated, async (req, res, next) => {
  const { championId } = req.params
  const { _id:user_id } = req.payload
  try {
      const champions = await Champions.findById(championId)
      const editChampions = await Champions.findByIdAndUpdate(championId, { $push :{users: user_id},number_players:champions.number_players+1}, { new: true})
      res.redirect(`/champions/${championId}`)
      res.status(204).json(editChampions)
  } catch (error) {
      next(error)
  }
});

// @desc    Edit one champion STATUS
// @route   PUT /champions/status/:championId
// @access  Private
router.put('/status/:championId', isAuthenticated, async (req, res, next) => {
  const { championId } = req.params
  try {
      const editChampions = await Champions.findByIdAndUpdate(championId,req.body)
      res.redirect(`/champions/${championId}`)
      res.status(204).json(editChampions)
  } catch (error) {
      next(error)
  }
});

// @desc    Edit one champion CLASSIFICATION
// @route   PUT /champions/classification/:championId
// @access  Private
router.put('/classification/:championId', isAuthenticated, async (req, res, next) => {
const { championId } = req.params
  
  try {
      const editChampions = await Champions.findByIdAndUpdate(championId,{$push:{classification:req.payload}})
      
      res.status(204).json(editChampions)
  } catch (error) {
      next(error)
  }
});

// @desc    Create one champion
// @route   POST /champions
// @access  Private
router.post('/', isAuthenticated, async (req, res, next) => {
  const { users_request, namefight,status, kata } = req.body
  const { _id:user_id } = req.payload
  try {
      users_request.push(user_id)
      const newChampions = await Champions.create({namefight:namefight, users_request: users_request,status:status,number_players:1, kata:kata})
      const userInDB = await User.findById(user_id) 
      req.payload.request = true
      const payload = {
        email: userInDB.email,
        username: userInDB.username,
        role: userInDB.role,
        _id: userInDB._id,
        image:userInDB.image,
        request:true
      }
      // Use the jwt middleware to create de token
      const authToken = jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        { algorithm: 'HS256', expiresIn: "30d" }
      );
      res.status(200).json({ authToken: authToken,champions:newChampions})
  } catch (error) {
      next(error)
  }
});

// @desc    Delete one champion
// @route   DELETE /champion/:championId
// @access  Admin
router.delete('/:championId',isAuthenticated, isAdmin, async (req, res, next) => {
  const { championId } = req.params
  try {
      const deletechampion = await Champions.findByIdAndDelete(championId)
      res.status(201).json(deleteChampions)
  } catch (error) {
      next(error)
  }
});

module.exports = router;