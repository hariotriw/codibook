const {Router} = require('express')
const shoppingRoutes = Router()
const {ShoppingController} = require('../../controllers')

shoppingRoutes.get("/testing", ShoppingController.test)
// shoppingRoutes.post("/testing", ShoppingController.test)
shoppingRoutes.post("/addItemToCart", ShoppingController.addItemToCart)
shoppingRoutes.post("/checkoutCart", ShoppingController.checkoutCart)
shoppingRoutes.post("/orderCart", ShoppingController.orderCart)
shoppingRoutes.post("/payOrder", ShoppingController.payOrder)


module.exports = shoppingRoutes;
