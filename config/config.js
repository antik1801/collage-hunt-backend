require("dotenv").config()

const dev = {
    app: {
        PORT: process.env.PORT
    },
    dev: {
        url: process.env.URL || "mongodb://localhost:2701/userDbTest"
    }
}

module.exports = dev;