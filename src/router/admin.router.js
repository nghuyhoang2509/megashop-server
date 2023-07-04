const AdminRouter = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const {
  checkAuth,
  checkPermissonManager,
  checkPermissonAdmin,
} = require("../middlewares/auth.middleware");

AdminRouter.get(
  "/order",
  checkAuth,
  checkPermissonManager,
  AdminController.getAllOrder
);
AdminRouter.get(
  "/user",
  checkAuth,
  checkPermissonManager,
  AdminController.getAllUser
);

AdminRouter.post(
  "/product",
  checkAuth,
  checkPermissonManager,
  AdminController.createProduct
);

AdminRouter.patch(
  "/product",
  checkAuth,
  checkPermissonManager,
  AdminController.deleteProduct
);

AdminRouter.put(
  "/product",
  checkAuth,
  checkPermissonManager,
  AdminController.updateProduct
);

AdminRouter.patch(
  "/role",
  checkAuth,
  checkPermissonAdmin,
  AdminController.changeRole
);

module.exports = AdminRouter;
