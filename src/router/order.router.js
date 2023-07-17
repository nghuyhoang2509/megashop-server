const OrderRouter = require("express").Router();
const OrderController = require("../controllers/order.controller");
const {
  checkAuth,
  checkPermissonManager,
} = require("../middlewares/auth.middleware");

OrderRouter.get(
  "/",
  checkAuth,
  checkPermissonManager,
  OrderController.getAllOrder
);

OrderRouter.post("/", checkAuth, OrderController.createOrder);

module.exports = OrderRouter;
