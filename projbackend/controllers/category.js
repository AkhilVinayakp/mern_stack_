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
};

//************************************create new category : createCategory *********************************************
// the category name should be passed through json from front end
// route :category/create/:userId

exports.createCategory = (req,res)=>{
//    creating new object of Category which should be populate from the req.body
    const category = new Category(req.body);
//    saving the new model into DB
    category.save((err, category)=>{
        if(err || !category){
            res.status(400).json({
                error:" can not save into dB may already exist........"
            })
        }
        res.json(category);
    //    return the created category..
    })
}