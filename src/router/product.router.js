const ProductRouter = require("express").Router();
const ProductController = require("../controllers/product.controller");

ProductRouter.get("/", ProductController.getAllProduct);

ProductRouter.get("/category", ProductController.getAllCategory);

ProductRouter.get("/category/:id", ProductController.getProductByCategory);

ProductRouter.get("/:id", ProductController.getProduct);

module.exports = ProductRouter;
