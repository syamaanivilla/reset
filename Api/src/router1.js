const express = require("express");
const router1 = express.Router();
const { getOneUser } = require("./controllers1");

// router1.get("/users", users);
router1.get("/get-one-user", getOneUser);

module.exports = router1;
