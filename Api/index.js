//const { users } = require("./src/controllers");
const {
  registerNewUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  loginUser,
  isAuthenticated,
  forgetPassword,
  forget,
  reset,
  resetpassword,
} = require("./src/controllers");
const ejs = require("ejs");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const router = require("./src/router");
const dbConnect = require("./src/utils/db");
server.use(cors());
server.use(bodyParser.json());

server.use("/api", router);
server.use(express.json());

server.use(express.urlencoded({ extended: false }));
server.set("view engine", "ejs");
server.set("views", "./src/views");

server.listen(4003, () => {
  console.log("Server Started.. http://localhost:4003");
});
