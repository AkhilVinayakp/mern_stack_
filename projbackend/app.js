//
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


//adding the installed middleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//importing the routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// creating the express app
const app = express();
// adding the middleware bodyparser
app.use(bodyParser.json());// parsing using json data
app.use(cookieParser());
app.use(cors());


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


//creating routes
app.use("/auth",authRoutes);
app.use("/user",userRoutes);




//listening to the port
app.listen(port,()=>{
   console.log(`app listening at ${port}`);  // `````
});
//nodemon has been configured running only required npm start