const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const championsSchema = new Schema({
  namefight: {
    type: String,
    require:true
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    }],
  users_request: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
  number_players: {
    type: Number,
    enum: [1,2,3,4]
  },
  classification: [{
    type: Schema.Types.ObjectId,
    ref: "User"
    }],
  status:{
    type: String,
    enum: ['REQUEST','START','REFUSED','EQUAL','FINISHED'],
    default:'REQUEST'
  }
},
  {
    timestamps: true
  });

module.exports = model("Champions", championsSchema);


