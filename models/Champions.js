const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const championsSchema = new Schema({
  namefight: {
    type: String,
    require:true
  },
  users: [
    {
    type: Schema.Types.ObjectId,
    ref: "User",
    }
  ],
  number_players: {
    type: Number,
    enum: [2,3,4]
  },
  classification: {
    first:
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    second:
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    third:
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    fourth:
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
  },
  completed:{
    type: Boolean,
    default:false
  }
},
  {
    timestamps: true
  });

module.exports = model("Champions", championsSchema);