const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const likeSchema = new Schema({
  solution: {
    type: Schema.Types.ObjectId,
    ref: "Solution",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
},
  {
    timestamps: true
  });

module.exports = model("Like", likeSchema);