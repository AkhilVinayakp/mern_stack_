const User = require("../models/user");

exports.sign_out = (req,res)=>{
    res.json({
        message:"sign out successfully"
    })
}
exports.sign_up=(req,res)=>{
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.statusCode(400).json({
                message:"user is not saved missing some data from front"
            });
        }
        res.json(user);
    })

};