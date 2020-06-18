const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:29,
        //making unique
        unique:true
    }
},{timestamp:true});

module.exports = mongoose.model("Category",categorySchema)
