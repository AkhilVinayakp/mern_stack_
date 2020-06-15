const mongoose = require("mongoose")
const schema = mongoose.Schema;

let UserSchema = new schema({
    name :{
        type:String,
        required:true,
        maxlength:34,
        trim:true
    },
    lastname:{
        type: String,
        maxlength: 32,
        trim: true
    },
    email:{
        type:String,
        trim:true,
        maxlength:55,
        required: true,
        unique:true
    },
    user_info:{
        type:String,
        maxlength:67,
        trim:true
    },


    // need to be updated
    enc_password:{
        type:String,
        trim:true
    },
    salt : String,
    role:{
        type:Number,
        default:0
    },
    purchases:{
        type:Array,
        default: []
    }

});
//creating the schema methods
UserSchema.method={
    sec_password: function (plain_password) {
        return  crypto.createHmac('sha256', this.salt)
            .update(plain_password)
            .digest('hex');
    }
}



// exporting the model using the schema created
module.exports = mongoose.model("user",UserSchema)

