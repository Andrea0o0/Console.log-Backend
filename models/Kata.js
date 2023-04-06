const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const kataSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  initialValue: {
    type: String,
    required: true
  },
  input: {
    type: String
  },
  instructions: {
    type: String,
    required: true
  },
  example: {
    type: Array,
    default:[]
  },
  output: {
    type: Array,
    required: true
  },
  level: {
    type: Number,
    enum: [1,2,3,4,5]
  }
},
  {
    timestamps: true
  });

module.exports = model("Kata", kataSchema);





