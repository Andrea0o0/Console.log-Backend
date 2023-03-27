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
  example: String,
  output: {
    type: Array,
    required: true
  },
  level: {
    type: Number,
    enum: [1,2,3,4,5],
    default: 'user'
  }
},
  {
    timestamps: true
  });

module.exports = model("User", userSchema);