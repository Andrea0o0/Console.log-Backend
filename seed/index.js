require('dotenv').config();
const mongoose = require('mongoose');

const Kata = require('../models/Kata')
const kata = require('./data/kata')

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
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