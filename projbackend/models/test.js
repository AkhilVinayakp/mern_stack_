/*
 testing on 15-06-2020 for schema modeling
const mongoose = require("mongoose")
let schema1 = new mongoose.Schema({name:String, lastname:String})

schema1.virtual('fullname').set(function (name) {
    let names= name.split(' ');
 this.name = names[0];
 this.lastname = names[1];
}).get(function () {
    return this.name + this.lastname
})
// testing for the methods
/*
schema1.method("printhai",function () {
    return "test method"+this.name
})

schema1.method={
    ssc:function () {
        return "function in type 2 format"

    }
}
schema1.method.test = function(){ return 1}




let model = mongoose.model("s1",schema1)
let test = new model({name:'ravi', lastname:"kumar"})
console.log(test.fullname)
let rm = new model({})
rm.fullname = 'akv vin'
console.log(rm.name)
console.log(rm.lastname)

 */

/* extended testing for schema methods and static methods
 */

const mongoose = require("mongoose")
const testSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    salt:String
})

/*
testSchema.method("wishyou",function () {
    return "good morning "+ this.name
})

 */

testSchema.method={
    test:function () {
        return "hai"+this.name
    }
}


// creating model
let model = mongoose.model("nm",testSchema)
let me = new model({name:"Akhil", password: "vinayak"})
console.log(me.name)
console.log(me.test)




