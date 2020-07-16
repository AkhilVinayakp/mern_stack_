const express = require("express");
const router = express.Router();
const {get_UserById, getUser, updateUser} = require("../controllers/user");
const {isSigned, isAuthenticated,isAdmin } = require("../controllers/auth");
 

router.param("userId",get_UserById);

// routes for getting a user by id
router.get("/user/:userId",[isSigned,isAuthenticated],getUser);
//router.get("/users",getAllUsers);

router.put("/users/:userId",[isSigned,isAuthenticated], updateUser)

module.exports = router