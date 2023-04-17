const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const championsSchema = new Schema({
  namefight: {
    type: String,
    require:true
  },
  kata: {
    type: Schema.Types.ObjectId,
    ref: "Kata",
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    }],
  users_request: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
  winner:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  function: {
    type:String
  },
  status:{
    type: String,
    enum: ['REQUEST','START','FINISHED'],
    default:'REQUEST'
  },
  time:{
    type:Number,
    default:300
  }
},
  {
    timestamps: true
  });

module.exports = model("Champions", championsSchema);


