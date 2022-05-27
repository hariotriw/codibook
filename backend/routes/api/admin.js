const {Router} = require('express')
const adminRoutes = Router()
const {AdminController} = require('../../controllers')

// adminRoutes.get("/", AdminController.index)
adminRoutes.get("/products/lists", AdminController.index)
adminRoutes.post("/products/create", AdminController.store)
adminRoutes.get("/products/show/:id", AdminController.show)
adminRoutes.get("/products/edit/:id", AdminController.edit)
adminRoutes.post("/products/update", AdminController.update)
adminRoutes.post("/products/delete", AdminController.destroy)

// adminRoutes.get("/testing", AdminController.test)
// adminRoutes.post("/testing", AdminController.test)

module.exports = adminRoutes;
