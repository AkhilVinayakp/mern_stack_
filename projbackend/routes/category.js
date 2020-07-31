const express = require('express')
const router = express.Router()
const {isSigned, isAuthenticated,isAdmin } = require("../controllers/auth");
const {get_UserById} = require("../controllers/user");
const {get_CatbyId} = require("../controllers/category");

// extracting the catagory from the parameter
router.param('cat_id', get_CatbyId);



// assigning  the different routes for the app
