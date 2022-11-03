const uuid = require("uuid");
const CryptoJS = require("crypto-js");

const { response } = require("express");
const Users = require("./models");

const getOneUser = (req, res) => {
  var newUser = Users({
    name: "Data",
    username: "data",
    password: "1234",
    email: { name: "shyama", name1: "renu" },
  });

  newUser.save().then((response) => {
    return res.send(response);
  });
};
// Users.find().then((response) => {
//   return res.json(respo);
// });

module.exports = {
  getOneUser,
};
