require("dotenv").config()
const app = require("./app")
const config = require("./config/config")
const PORT = config.app.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`The application is running at http://localhost:${PORT}`);
})

