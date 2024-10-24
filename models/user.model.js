const { default: mongoose, model } = require("mongoose");
const { type } = require("os");

const userSchema = mongoose.Schema({
  id:{
    type:String,
    require: true
  },
  name:{
    type:String,
    require: true
  },
  age:{
    type:Number,
    require: true
  },
  createdOn:{
    type:Date,
    default: Date.now
  },
})

module.exports = mongoose.model("User",
userSchema)