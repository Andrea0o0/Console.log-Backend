require('dotenv').config();
const mongoose = require('mongoose');

const Solution = require('../models/Solution')
const Kata = require('../models/Kata')
const User = require('../models/User')
const kata = require('./data/kata')

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  // .then(() => User.deleteMany({}))
  .then(() => Kata.deleteMany({}))
  .then(() => Solution.deleteMany({}))
  .then(() => User.deleteMany({}))
  .then(() => console.log('Deleted all data'))
  .then(() => Kata.create(kata))
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed 