require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./config/mongo")
const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000

//routers

app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`your app is ready by http://localhost:${port}`)
})

db()
