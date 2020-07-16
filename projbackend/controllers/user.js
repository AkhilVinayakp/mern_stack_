// importing the model
const User = require("../models/user");

//controller to handle the params 
exports.get_UserById = (req,res,next,id) =>{

	User.findById(id).exec((err,user)=>{
		if(err || !user){
			return res.status(404).json({
				error:"NO User FOUND"
			})
		}
		req.profile = user
	})
	next();
}

exports.getUser = (req,res) =>{
	//TODO password
	// clearing sensitive data 
	req.profile.salt = undefined;
	req.profile.enc_password = undefined;
	req.profile.createdAt =undefined;
	req.profile.updatedAt = undefined;
	return res.json(req.profile)

}
//remove the following getAllUsers handler >> testing purpose only
/*
exports.getAllUsers = (req,res) =>{
	User.find().exec((err,users)=>{
		res.json({
			users:users
		})
	})
}
*/
exports.updateUser = (req,res)=>{
	User.findByIdAndUpdate(
		req.profile.id,
		{
			$set:req.body
		},
		{
			new:true,
			useFindAndModify:false
		}
	).exec((err,user)=>{
		if(err){
			return res.status(400).json({
				error:"can not update user internel server error unautherized!"
			})
		}
		user.salt = undefined;
		user.enc_password = undefined;
		user.createdAt =undefined;
		user.updatedAt = undefined;
		res.json(user)
	})
}