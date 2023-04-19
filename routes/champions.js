const router = require('express').Router();
const Champions = require('../models/Champions');
const User = require('../models/User')
const jwt = require("jsonwebtoken");
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Get one champions by USER
// @route   GET /champions/:championsId
// @access  Private
router.get('/:championsId', isAuthenticated, async (req, res, next) => {;
  try {
    const { championsId } = req.params
    const champions = await Champions.findById(championsId).populate('users').populate('winner')
    res.status(200).json(champions)
  } catch (error) {
    next(error)
  }
});


// @desc    Get by status champions by USER
// @route   GET /champions/status/:typeStatus
// @access  Private
router.get('/status/:typeStatus', isAuthenticated, async (req, res, next) => {
  const { typeStatus } = req.params
  const { _id:user_id } = req.payload
  try {
    if(typeStatus === 'REQUEST'){
      const championsRequest = await Champions.find({status:typeStatus,users_request:user_id}).populate('users_request').populate('kata')
      res.status(200).json(championsRequest)
    } else if(typeStatus === 'START'){
      const championsStart = await Champions.find({status:typeStatus,users:user_id}).populate('users').populate('kata')
      res.status(200).json(championsStart)
    } else if(typeStatus === 'FINISHED'){
      const championsStart = await Champions.find({status:typeStatus,users:user_id}).populate('users').populate('kata').populate('winner')
      res.status(200).json(championsStart)
    }
  } catch (error) {
      next(error)
  }
});


// @desc    Edit one champion USER_REQUEST
// @route   PUT /champions/user-request/:championId
// @access  Private
router.put('/user-request/:championId', isAuthenticated, async (req, res, next) => {
  const { championId } = req.params
  const { _id:user_id } = req.payload
  try {
      const editChampions = await Champions.findByIdAndUpdate(championId, { $push :{users: user_id }}, { new: true})
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

// @desc    Edit one champion CLASSIFICATION
// @route   PUT /champions/classification/:championId
// @access  Private
router.put('/winner/:championId', isAuthenticated, async (req, res, next) => {
  const { championId } = req.params
  const { _id:user_id } = req.payload
    
    try {
        const editChampions = await Champions.findByIdAndUpdate(championId,{function:req.body.function,winner:user_id,status:'FINISHED'})
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
      const newChampions = await Champions.create({namefight:namefight, users_request: users_request,status:status,number_players:1, kata:kata,users:[user_id]})
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
      let timer = 300
      const intervalId = setInterval(async function() {
        if(timer < 1){
          clearInterval(intervalId)
          const championss = await Champions.findById(newChampions._id)
          championss.users.length>1 ?  await Champions.findByIdAndUpdate(newChampions._id,{status:'START'}): await Champions.findByIdAndDelete(newChampions._id)
          let end = false
          const intervalStartId = setInterval(async function() {
            await Champions.findByIdAndDelete(newChampions._id)
            end = true
          },14400000)
          end === true && clearInterval(intervalStartId)
        }else{
           timer-=5
           await Champions.findByIdAndUpdate(newChampions._id,{time:timer})
        }
         
      }, 5000);


      res.status(200).json({ authToken: authToken,champions:newChampions})
  } catch (error) {
      next(error)
  }
});

// @desc    Delete one champion
// @route   DELETE /champion/:championId
// @access  Admin
router.delete('/:championId',isAuthenticated, async (req, res, next) => {
  const { championId } = req.params
  try {
      const deletechampion = await Champions.findByIdAndDelete(championId)
      res.status(201).json(deleteChampions)
  } catch (error) {
      next(error)
  }
});

module.exports = router;