const mongoose = require("mongoose")
const crypto = require("crypto")
const uuid = require("uuid/v1")

let UserSchema = new mongoose.Schema({
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

},{timestamps:true});
//creating the schema methods
//TODO schema testing

UserSchema.method={
    authenticate: function(plain_password){
        return this.sec_password(plain_password) === this.enc_password
    },
    sec_password: function (plain_password) {
        if (!plain_password) return "";
        try {
            return  crypto.createHmac('sha256', this.salt)
                .update(plain_password)
                .digest('hex');
        }
        catch (e) {
            return "";
        }

    }
}
// setting up the virtual fild for password encryption
UserSchema.virtual("password").set(function (password) {
    this.enc_password = this.sec_password(password)
}).get(function () {
    return this.enc_password;
})
// exporting the model using the schema created
module.exports = mongoose.model("user",UserSchema)

