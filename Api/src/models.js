const mongoose = require("mongoose");
const dbConnect = require("./utils/db");
const userSchema = mongoose.Schema({
  id: Number,
  dob: String,
  email: String,
  name: String,
  username: String,
  password: String,
  enc_password: String,
  uniqueId: String,
  gender: String,
});

const Users = dbConnect.model("Users", userSchema);
module.exports = Users;
