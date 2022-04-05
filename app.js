require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./config/mongo")
const app = express()

app.use(cors())
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`your app is ready by http://localhost:${port}`)
})

db()