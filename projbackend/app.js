//
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// creating the express app
const app = express();


//assigning the port to run TODO change
const port =process.env.PORT;

//creating the connection with mongodb
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`CONNECTION SUCCESS WITH MONGODB AT PORT 27017`);
}).catch(reason => {
    console.log(`error \n ${reason}`);
});



//listening to the port
app.listen(port,()=>{
   console.log(`app listening at ${port}`);  // `````
});
//nodemon has been configured running only required npm start