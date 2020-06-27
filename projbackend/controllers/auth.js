const User = require("../models/user");
const { validationResult } = require("express-validator")
// adding the token headers for authentication
const jwt = require("jsonwebtoken");
const expressJwt =require("express-jwt");

//sign_out handler ***********************************************************************************
exports.sign_out = (req,res)=>{
    res.clearCookie("token");
    res.json({
        message:"sign out successfully"
    })
}
//sign_up handler *************************************************************************************
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

//sign_in handler *************************************************************************************
exports.sign_in=function (req,res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    //destructuring the request.body
    const {email, password} = req.body;
    User.findOne({email},(err,user)=>{
        if(err || !user)
            return res.status(200).json({
                error:"email does not exist"
            })
        if(!user.authenticate(password)){
            return res.status(402).json({
                error:"email password mismatch"
            });
            }
        // creating jwt token
        const token = jwt.sign({id:user._id},process.env.SECRET);
        // storing inside cookies
        res.cookie("token",token,{expire:new Date()+9999});
        // sending the response back to the call
        const {_id, name, email, role} = user;
        res.status(200).json({
            token:token,
            user:{_id,name,email,role}
        });
    })

}