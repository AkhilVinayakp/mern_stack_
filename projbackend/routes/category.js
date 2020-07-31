const express = require('express')
const router = express.Router()
const {isSigned, isAuthenticated,isAdmin } = require("../controllers/auth");
const {get_UserById} = require("../controllers/user");
const {get_Category_byId, createCategory, get_Category, getAllCategories} = require("../controllers/category");

// extracting the catagory from the parameter
router.param('cat_id', get_Category_byId);
router.param("userId", get_UserById);



//*************************** assigning  the different routes for the app *****************************************************

// category/create/:userId for creating a new category for the tshirt * catagory name should be passed via json
router.push("/category/create/:userId",[isSigned,isAuthenticated,isAdmin], createCategory)

// route for returning a category data through the cat_id
router.get("/category/:cat_id",[isSigned], get_Category)

// route for returning all the categories
router.get("/categories",[isSigned], getAllCategories)

// exporting the route
module.exports = router;
