const Category = require('../models/category')
exports.get_Category_byId = (req,res,next,cat_id)=>{
    Category.findById({id:cat_id}).exec((err,catagory)=>{
        if(err || !catagory){
            res.status(400).json({
                error:"No category found check the id"
            })
        }
        // if no error populate the category to the request object
        req.category = catagory
    })
    next();
}