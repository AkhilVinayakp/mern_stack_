const express = require('express')
const router = express.Router()
const {isSigned, isAuthenticated,isAdmin } = require("../controllers/auth");
const {get_UserById} = require("../controllers/user");
const {get_Category_byId, createCategory} = require("../controllers/category");

// extracting the catagory from the parameter
router.param('cat_id', get_Category_byId);
router.param("userId", get_UserById);



// assigning  the different routes for the app
// category/create/:userId for creating a new category for the tshirt * catagory name should be passed via json
router.push("category/create/:userId",[isSigned,isAuthenticated,isAdmin], createCategory)

// exporting the route
module.exports = router;
