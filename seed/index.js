require('dotenv').config();
const mongoose = require('mongoose');

const Solution = require('../models/Solution')
const Kata = require('../models/Kata')
const User = require('../models/User')
const Comment = require('../models/Comment')
const Champions = require('../models/Champions')
const kata = require('./data/kata')

const newkata =         {
  "name": "Range Extraction",
  "initialValue": `function solution(list){
    // TODO: complete solution 
  }`,
  "input":"solution(${input})",
  "instructions": `
  <p>A format for expressing an ordered list of integers is to use a comma separated list of either</p>
  <ul>
  <li>individual integers</li>
  <li>or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"</li>
  </ul>
  <p>Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.</p>
  <h4>Example</h4>
  <ControlledEditor/>`,
  "example":[`solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
  // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"`],
  "output": [ [`[-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]`, "-6,-3-1,3-5,7-11,14,15,17-20"],
              [`[-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]`,"-10--8,-6,-3-1,3-5,7-11,14,15,17-20"],
              [`[-50.5,-49.5,-48.5,-20,-19,-18,-3,-2,-1,0,1,1.5,6,9,15]`,"-50.5--48.5,-20--18,-3-1,1.5,6,9,15"],
              [`[-8,-8,-7,-6,-5,-4,-1,-0,1,5,7,8,9,10]`,"-8,-8--4,-1-1,5,7-10"],
              [`[-22,-21,-19,2,3,6,7,9,10]`,"-22,-21,-19,2,3,6,7,9,10"],
              [`[-256,-22,-21,-20,-19,63,2,3,6,36,7,8,9,10,63]`,"-256,-22--19,63,2,3,6,36,7-10,63"],
              [`[-45,-44,-43.0299,-42,-3,7,8,9.00000,10]`,"-45,-44,-43.0299,-42,-3,7-10"],
              [`[-36,-35.00000000000000000000000000001,-34,-4-33-3,-32]`,"-36--34,-40,-32"],
              [`[-34-1-2,-30,-27-3+1,-28,-9*3,0,3,4,5,8.0000000000000000000003,9,10]`,"-37,-30--27,0,3-5,8-10"],
              [`[-((9*9)**2),-6560,-656*8-1582+271.00000000000002,-3,-2,-1,67,68,'69','70',71]`,"-6561--6559,-3--1,67,68,69,70,71"]
],
  "level": 1
}

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  // .then(() => User.deleteMany({}))
  // .then(() => Kata.deleteMany({}))
  // .then(() => Solution.deleteMany({}))
  // .then(() => console.log('Deleted all data'))
  .then(() => Kata.create(newkata))
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed 

 // .then(() => User.deleteMany({}))
  // .then(() => Champions.deleteMany({}))
  // .then(() => Comment.deleteMany({}))