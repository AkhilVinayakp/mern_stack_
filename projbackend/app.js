//
const express = require("express");
const mongoose = require("mongoose");

// creating the express app
const app = express();


//assigning the port to run TODO change
const port =8000;


//listening to the port
app.listen(port,()=>{
   console.log(`app listening at ${port}`);  // `````
});
//nodemon has been configured running only required npm start