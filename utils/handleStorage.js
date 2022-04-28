const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStore = `${__dirname}/../storage`
    cb(null, pathStore)
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop()
    const filename = `file-${Date.now()}.${ext}`
    cb(null, filename)
  }
})

const updateMiddkeware = multer({ storage })

module.exports = updateMiddkeware
