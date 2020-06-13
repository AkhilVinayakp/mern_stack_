const express = require("express")
const app = express()// creating the express object

// setting up the port for out app

const port = 3000

// setting the default routing for the port >> the default end point for the port is set via / 

// Routing is set by .get() method the app listen and take a callback funtion
app.get('/', (req,res)=> res.send("work fine"))

//instruct the app to listen to a purticular port

app.listen(port,()=>{console.log('server up and running...............')})
