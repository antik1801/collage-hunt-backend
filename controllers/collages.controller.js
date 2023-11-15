
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