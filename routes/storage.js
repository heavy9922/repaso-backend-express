const express = require("express")
const router = express.Router()
const updateMiddkeware = require("../utils/handleStorage")
const { getItems, createItem } = require("../controllers/storage")

router.post("/", updateMiddkeware.single("myfile"), createItem)

module.exports = router
