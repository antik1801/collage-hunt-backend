const express = require('express')
const app = express();
const cors = require('cors')
const bodyPerser = require('body-parser')
const collageRoutes = require('./routes/collages.route')
require('dotenv').config()


// middlewares
app.use(cors())
app.use(bodyPerser.urlencoded({extended: true}))
app.use(express.json())

// routes

// api/collages : get - get all information about collages
// api/research : get - get all research information


// collage routes

app.get("/", (req,res) =>{
    res.status(200).sendFile(__dirname+"/views/home.html")
})


app.use("/api/collages", collageRoutes)

//! Error Router not found

app.use((req,res,next)=>{
    res.status(404).json({
        message: "Route not found"
    })
})


//! Error: Server Broken

app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "SERVER broken"
    })
})

module.exports = app;




