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
app.use('/api',require('./routes').loginRoute)
app.use('/api',require('./routes').signInRoute)
app.use('/api',require('./routes').createProductRoute)
app.use('/api',require('./routes').showProductRoute)
app.use('/api',require('./routes').popularProductsRoute)
app.use('/api',require('./routes').sectionProductsRoute)
app.use('/api',require('./routes').createCommentRoute)
app.use('/api',require('./routes').showCommentsRoute)
app.use('/api',require('./routes').createOrderRoute)
app.use('/api',require('./routes').verifyPayment)
app.use('/api',require('./routes').showeAllUserOrdersRoute)
app.use('/api',require('./routes').showUnsendUserOrdersRoute)
app.use('/api',require('./routes').showRejectedUserOrdersRoute)
app.use('/api',require('./routes').updateOrderStatusRoute)
app.use('/api',require('./routes').showAllOrdersRoute)
app.use('/api',require('./routes').showUnsendOrdersRoute)
app.use('/api',require('./routes').showReturnedOrdersRoute)
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
const PORT = process.env.PORT || 4000
app.listen(PORT, () => { console.log(`server is run at port ${PORT}`) })