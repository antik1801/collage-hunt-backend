const { MongoClient, ServerApiVersion  } = require("mongodb")
const uri = "mongodb+srv://collageHunt:tFyAxb9G0pIW86pz@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority";


const getAllCollages = (req, res) =>{
    try {
        res.status(200).json({
            status: 200,
            message: "This will get all collages"
        })
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message 
        })
    }
}



module.exports = { getAllCollages }