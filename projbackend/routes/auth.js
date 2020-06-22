const express = require("express");
const router = express.Router();

router.get("/sign_out",(req,res)=>{
    res.send("sign out successfully");
});

module.exports = router;
