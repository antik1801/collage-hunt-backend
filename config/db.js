const mongoose = require("mongoose")
const config = require("./config")

const dbUrl = config.dev.url

mongoose.connect(dbUrl)
.then(()=>{
    console.log(`Mongodb atlas is connected`)
})
.catch(error=>{
    console.log(error)
    process.exit(1)
})