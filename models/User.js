const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  image:{
    type:String,
    default:'default'
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: [true, "Username is required."],
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
},
  {
    timestamps: true
  });

module.exports = model("User", userSchema);





