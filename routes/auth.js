const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { Octokit, App } = require("octokit");
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');
const fetch = (...args) => import('node-fetch').then(({default:fetch}) => fetch(...args))
const saltRounds = 10;

// @desc    SIGN UP new user
// @route   POST /api/v1/auth/signup
// @access  Public
router.post('/signup', async (req, res, next) => {
  const { email, password, username } = req.body;
  // Check if email or password or name are provided as empty string 
  if (email === "" || password === "" || username === "") {
    res.status(400).json({ message: 'Please fill all the fields to register' });
    return;
  }
  // Use regex to validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: 'Not a valid email format' });
    return;
  }
   // Use regex to validate the password format
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter' });
    return;
  }
  try {
    const userInDB = await User.findOne({ email });
    const usernameInDB = await User.findOne({ username });
    if (userInDB) {
      res.status(400).json({ message: `User already exists with email ${email}` })
      return;
    } else if (usernameInDB) {
      res.status(400).json({ message: `User already exists with username ${username}` })
      return;
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = await User.create({ email, hashedPassword, username });
      res.status(201).json({ data: newUser });
    }
  } catch (error) {
    next(error);
  }
});


// @desc    LOG IN user
// @route   POST /api/v1/auth/login
// @access  Public
router.post('/login', async (req, res, next) => { 
  const { email, password } = req.body;
  // Check if email or password are provided as empty string 
  if (email === "" || password === "") {
    res.status(400).json({ message: 'Please fill all the fields to login' });
    return;
  }
  try {
    // First let's see if the user exists
    const userInDB = await User.findOne({ email });
    // If they don't exist, return an error
    if (!userInDB) {
      res.status(404).json({ success: false, message: `No user registered by email ${email}` })
      return;
    } else {
      const passwordMatches = bcrypt.compareSync(password, userInDB.hashedPassword);
      if (passwordMatches) {
        // Let's create what we want to store in the jwt token
        const payload = {
          email: userInDB.email,
          username: userInDB.username,
          role: userInDB.role,
          _id: userInDB._id,
          image:userInDB.image,
          request:false
        }
        // Use the jwt middleware to create de token
        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "30d" }
        );
        res.status(200).json({ authToken: authToken })
      } else {
        // If the password is not right, return an error
        res.status(401).json({ success: false, message: 'Unable to authenticate user'})
      }
    }
  } catch (error) {
    next(error)
  }
});

// @desc    LOG IN user with GitHub
// @route   POST /api/v1/auth/login/github/:githubId
// @access  Public
router.get('/github/:githubId',async function (req,res,next) {
  const { githubId } = req.params
  const params = `?client_id=${process.env.CLIENT_ID_GITHUB}&client_secret=${process.env.CLIENT_ID_GITHUB_SECRET}&code=${githubId}`

  try {
    const newFetch = await fetch(`https://github.com/login/oauth/access_token${params}`,{
    method:"POST",
    headers: {
      "Accept":"application/json"
    }
    }) 
       const fetchjson = await newFetch.json()
       const octokit = await new Octokit({
      auth: fetchjson.access_token
    })
    const response_octokit = await octokit.request('GET /user', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }) 
      const data = response_octokit.data

      const image = data.avatar_url
      let username = data.login
      const email = data.avatar_url
      const password = `Github_${Math.floor(Math.random()*10000)+10000}`
      const userInDB = await User.findOne({ email });
      const usernameInDB = await User.findOne({username});
    if (userInDB) {
        // Let's create what we want to store in the jwt token
        const payload = {
          email: userInDB.email,
          username: userInDB.username,
          role: userInDB.role,
          _id: userInDB._id,
          image:userInDB.image,
          request:false
        }
        // Use the jwt middleware to create de token
        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "30d" }
        );
        res.status(200).json({ authToken: authToken })
      return;
    } else{
      username += usernameInDB ? `_${Math.floor(Math.random()*10000)+10000}`:''
    

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = await User.create({ email, hashedPassword, username,image});
      const payload = {
        email: newUser.email,
        username: newUser.username,
        role: newUser.role,
        _id: newUser._id,
        image:newUser.image,
        request:false
      }
      // Use the jwt middleware to create de token
      const authToken = jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        { algorithm: 'HS256', expiresIn: "30d" }
      );
      res.status(200).json({ authToken: authToken })
    }
    
  } catch (error) {
    next(error)
  } 
})

// @desc    LOG IN user with Google
// @route   POST /api/v1/auth/login/google/:githubId
// @access  Public
router.post('/google',async function (req,res,next) {
  const { email, username, image } = req.body;
  let newusername = username.slice(0)
  const password = `Github_${Math.floor(Math.random()*10000)+10000}`

  try {
      const userInDB = await User.findOne({ email });
      const usernameInDB = await User.findOne({username});
      
    if (userInDB) {
        // Let's create what we want to store in the jwt token
        const payload = {
          email: userInDB.email,
          username: userInDB.username,
          role: userInDB.role,
          _id: userInDB._id,
          image:userInDB.image,
          request:false
        }
        // Use the jwt middleware to create de token
        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "30d" }
        );
        res.status(200).json({ authToken: authToken })
      return;
    } 

    if(usernameInDB){
      newusername += `_${Math.floor(Math.random()*10000)+10000}`
    }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = await User.create({ email, hashedPassword, username:newusername,image});
      const payload = {
        email: newUser.email,
        username: newUser.username,
        role: newUser.role,
        _id: newUser._id,
        image:newUser.image,
        request:false
      }
      // Use the jwt middleware to create de token
      const authToken = jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        { algorithm: 'HS256', expiresIn: "30d" }
      );
      res.status(200).json({ authToken: authToken })
    
  } catch (error) {
    next(error)
  } 
})


// @desc    Edit Image
// @route   PUT /api/v1/auth/me
// @access  Private
router.post('/imageusername', isAuthenticated, async (req, res, next) => {
  const { _id:user_id } = req.payload
  
  try {
      const finduser = await User.findById(user_id)
      const editUser = await User.findByIdAndUpdate(finduser._id,req.body,{new:true})
      req.payload.image = editUser.image
      const payload = {
        email: editUser.email,
        username: editUser.username,
        role: editUser.role,
        _id: editUser._id,
        image:editUser.image,
        request:false
      }
      // Use the jwt middleware to create de token
      const authToken = jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        { algorithm: 'HS256', expiresIn: "30d" }
      );
      res.status(200).json({ authToken: authToken,user:editUser})
  } catch (error) {
      next(error)
  }
});

// @desc    GET user
// @route   GET /api/v1/auth/me
// @access  Private
router.get('/userinfo', isAuthenticated, async (req, res, next) => {
  try {
      const userfind = await User.findById(req.payload._id)
      res.status(200).json(userfind)
  } catch (error) {
      next(error)
  }
});

// @desc    GET all users
// @route   GET /api/v1/auth/me
// @access  Private
router.get('/users', isAuthenticated, async (req, res, next) => {
  try {
      const users = await User.find({})
      res.status(200).json(users)
  } catch (error) {
      next(error)
  }
});

// @desc    GET logged in user
// @route   GET /api/v1/auth/me
// @access  Private
router.get('/me', isAuthenticated, (req, res, next) => {
  // If JWT token is valid the payload gets decoded by the
  // isAuthenticated middleware and made available on `req.payload`
  // console.log('Whose token is on the request:', req.payload);
  // Send back the object with user data
  // previously set as the token payload
  res.status(200).json(req.payload);
})




module.exports = router;