const { model, Schema } = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
    }, 
  {
    timestamps: true
  }
);


userSchema.plugin(passportLocalMongoose, { usernameField: "email" })
const User = model("User", userSchema)
module.exports = User