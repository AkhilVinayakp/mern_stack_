// importing the model
const User = require("../models/user");
// importing the order model 
const Order = require("../models/order")

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

exports.getAllUsers = (req,res) =>{
	User.find().exec((err,users)=>{
		res.json({
			users:users
		})
	})
}

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

// viewing all the ordered list placed by list
exports.orderedList = (res,req) =>{
	Order.find({user: req.profile.id})
		 .populate({
		 	path:user,
		 	select:'name'
		 })
		.exec((err, order)=>{
			if(err){
				return res.status(400).json({
					error:"no data available right now!"
				})
			}
			return res.json(order);
		})
}
// writting the middleware to push the details into the purchases list of the user wh