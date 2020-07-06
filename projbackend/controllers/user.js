// importing the model
const User = require("../model/user");

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
	return res.json(req.profile)

}