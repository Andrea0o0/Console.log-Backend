const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const solutionSchema = new Schema({
  kata: {
    type: Schema.Types.ObjectId,
    ref: "Kata",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: Boolean,
    default: false
  },
  function: {
    type:String
  }
},
  {
    timestamps: true
  });

module.exports = model("Solution", solutionSchema);



