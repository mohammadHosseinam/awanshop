const express = require('express')
const router = express.Router()
const { handelLoginUser , handelSignInUser} = require('./../controller/auth/index.js')
const { handelShowPtoduct, handelCreateProduct , handelShowPopularPtoducts , handelShowPopularPtoducts} = require('./../controller/product/index.js')
const { handelShowComments , handelCreateComment } = require('./../controller/comment/index.js')
const { handelShowAllUserOrders , handelCreateOrder , handelShowUnsendUserOrders , handelShowRejectedUserOrders} = require('./../controller/order/index.js')
const { showAllOrdersHandeler , showUnsendOrdersHandeler , showReturnedOrdersHandeler , updateOrderStatusHandeler} = require('./../controller/admin/index.js')

exports.loginRoute = router.post("/login" , handelLoginUser)
exports.signInRoute = router.post("/signIn" , handelSignInUser)
exports.createProductRoute = router.post("/creatProduct" , handelCreateProduct)
exports.showProductRoute = router.get("/showProduct" , handelShowPtoduct)
exports.popularProductsRoute = router.get("/popularProducts" , handelShowPopularPtoducts)
exports.sectionProductsRoute = router.get("/sectionProducts" , handelShowPopularPtoducts)
exports.createCommentRoute = router.post("/createComment" , handelCreateComment)
exports.showCommentsRoute = router.get("/showComments" , handelShowComments)
exports.createOrderRoute = router.post("/createOrder" , handelCreateOrder)
exports.showeAllUserOrdersRoute = router.get("/showeAllUserOrders" , handelShowAllUserOrders)
exports.showUnsendUserOrdersRoute = router.get("/showUnsendUserOrders" , handelShowUnsendUserOrders)
exports.showRejectedUserOrdersRoute = router.get("/showRejectedUserOrders" , handelShowRejectedUserOrders)
exports.updateOrderStatusRoute = router.post("/updateOrderStatus" , updateOrderStatusHandeler)
exports.showAllOrdersRoute = router.get("/showAllOrders" , showAllOrdersHandeler)
exports.showUnsendOrdersRoute = router.get("/showUnsendOrders" , showUnsendOrdersHandeler)
exports.showReturnedOrdersRoute = router.get("/showReturnedOrders" , showReturnedOrdersHandeler)
