const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.ObjectId;
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength:32,
        required:true,
        unique:true
    },
    description:{
        type: String,
        maxlength: 1200,
        required: true,
    },
    price:{
        type:Number,
        required:true,
        trim: true,
        maxlength:32
    },
    category:{
        ref:"Category",
        type:ObjectIdb,
        required:true
    },
    stock: Number,
    sold:{type:Number, default: 0},
    photo:{
        data:Buffer,
        contentType:String
    }

});