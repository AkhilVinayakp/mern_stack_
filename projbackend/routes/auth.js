const express = require("express");
const router = express.Router();
// adding the controllers to handle the routes
const { sign_out, sign_up } = require("../controllers/auth");

router.get("/sign_out",sign_out);
router.post("/sign_up",sign_up);

module.exports = router;
