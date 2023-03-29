const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  solution: {
    type: Schema.Types.ObjectId,
    ref: "Solution",
  },
  comment: {
    type: String,
    required:true
  }
},
  {
    timestamps: true
  });

module.exports = model("Comment", commentSchema);