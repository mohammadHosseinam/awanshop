const express = require('express')
const cors = require("cors");
const appRootPath = require("app-root-path")
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload")

app = express()

require('dotenv').config({
    path: appRootPath + "/.env"
})

app.use(cors())
app.use("/static", express.static(appRootPath + "/public"))
app.use(express.json({ extended: false }))

app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    createParentPath: true,
    limits: {
        filesize: 2 * 1024 * 1024,
    }
}))

mongoose.connect(process.env.DATABASE_URL , {authSource : "admin" }).then((res) => {
   console.log("DB conected Ok!")
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
const PORT = process.env.PORT || 4000
app.listen(PORT, () => { console.log(`server is run at port ${PORT}`) })