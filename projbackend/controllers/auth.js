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
            return res.json({
                message:"error",
                code:res.statusCode,
                error:err
            });
        }
        res.json(user);
    })

};