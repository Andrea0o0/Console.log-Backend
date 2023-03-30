const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  solution: {
    type: Schema.Types.ObjectId,
    ref: "Solution",
  },
  kata: {
    type: Schema.Types.ObjectId,
    ref: "Kata",
  },
  comment: {
    type: String,
    required:true
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: "User",
  }
},
  {
    timestamps: true
  });

module.exports = model("Comment", commentSchema);