const express = require("express");
const router = express.Router();
// adding the controllers to handle the routes
const { sign_out, sign_up, sign_in } = require("../controllers/auth");
// applying validation
const { check } = require("express-validator");

router.get("/sign_out",sign_out);
router.post("/sign_up",[
    check("name").isLength({min:3,max:32}).withMessage("the name should have minimum 3 and max 32 characters"),
    check("password").isLength({min:3,max:20}).withMessage("the password length should be 3 to 20 ch"),
    check("email").isEmail().withMessage("not a valid email")
],sign_up);

// sign in route
router.post("/sign_in",[
    check("password").isLength({min:1}).withMessage("please enter your password password "),
    check("email").isEmail().withMessage("not a valid email")
],sign_in);

module.exports = router;
