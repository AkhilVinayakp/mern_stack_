const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.sign_out = (req,res)=>{
    res.json({
        message:"sign out successfully"
    })
}
exports.sign_up=(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
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