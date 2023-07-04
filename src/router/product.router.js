const ProductRouter = require("express").Router();
const ProductController = require("../controllers/product.controller");
const { checkAuth } = require("../middlewares/auth.middleware");

ProductRouter.get("/", ProductController.getAllProduct);

ProductRouter.post("/order", checkAuth, ProductController.createOrder);

ProductRouter.get("/category", ProductController.getAllCategory);

ProductRouter.get("/category/:id", ProductController.getProductByCategory);

ProductRouter.get("/:id", ProductController.getProduct);

module.exports = ProductRouter;
