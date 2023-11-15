const express = require('express')
const {getAllCollages} = require("../controllers/collages.controller")
const router = express.Router()

router.get("/", getAllCollages)

module.exports = router;