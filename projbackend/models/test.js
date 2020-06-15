const mongoose = require("mongoose")
let schema1 = new mongoose.Schema({name:String, lastname:String})

schema1.virtual('fullname').set(function (name) {
    let names= name.split(' ');
 this.name = names[0];
 this.lastname = names[1];
}).get(function () {
    return this.name + this.lastname
})

let model = mongoose.model("s1",schema1)

let test = new model({name:'ravi', lastname:"kumar"})
console.log(test.fullname)
let rm = new model({})
rm.fullname = 'akv vin'
console.log(rm.name)
console.log(rm.lastname)






