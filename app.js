const express = require('express')
const app = express();
const cors = require('cors')
const bodyPerser = require('body-parser')
// const collageRoutes = require('./routes/collages.route')
require('dotenv').config()


// middlewares
app.use(cors())
app.use(bodyPerser.urlencoded({extended: true}))
app.use(express.json())

// routes

// api/collages : get - get all information about collages
// api/research : get - get all research information


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://collageHunt:tFyAxb9G0pIW86pz@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    const collageCollection = client.db("collageHunt").collection("collages")
    const researchCollection = client.db("collageHunt").collection("researches")

    // get all collages

    app.get("/collages", async(req, res) => {
        try {
            const result = await collageCollection.find().toArray()
            res.status(200).send(result)
        } catch (error) {
            res.status(404).send({
                status: 404,
                message: error.message
            })
        }
    })

    // get a specific collage
    app.get("/collages/:id", async(req,res)=>{
        try {
            const id = req.params.id;
             res.send(`This is the details of ${id}`)
        } catch (error) {
            res.status(404).send(error.message);
        }
    })

    // get all research papers
    app.get("/research", async(req, res) =>{
        try {
            const result = await researchCollection.find().toArray();
            res.status(200).send(result)
        } catch (error) {
            res.status(404).send(error.message);
        }
    })
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






// collage routes

app.get("/", (req,res) =>{
    res.status(200).sendFile(__dirname+"/views/home.html")
})


// app.use("/api/collages", collageRoutes)

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




