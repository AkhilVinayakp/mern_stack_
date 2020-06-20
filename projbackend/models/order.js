// required two schemas
/*
orderschema : Place orders multiple order may be made by the user
            adding additional data of the user
product_in_cart: product in cart required additional data such as the quantity >
 */

const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.ObjectId;

const productCart = new mongoose.Schema({
    products:{
        type:ObjectId,
        ref:"product"
    },
    name:String,
    count:Number,
    price:Number
},{timestamps:true});

const product_cart= mongoose.model("productCart",productCart)


// adding the orderSchema
//
const orderSchema = new mongoose.Schema({
    order:[productCart],
    transactionId:{},
    amount:Number,
    address:String,
    update:Date,// when ever an update made by the admin
    user:{
        type:ObjectId,
        ref:"user"
    }
},{timestamps:true});

const order= mongoose.model("order",orderSchema);

module.exports = {product_cart, order};

