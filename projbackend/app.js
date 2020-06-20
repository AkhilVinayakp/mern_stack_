//
const express = require("express");
const mongoose = require("mongoose");

// creating the express app
const app = express();


//assigning the port to run TODO change
const port =8000;

//creating the connection with mongodb
mongoose.connect("mongodb://localhost:27017/test",{
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