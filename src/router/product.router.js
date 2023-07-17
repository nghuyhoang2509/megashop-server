const ProductRouter = require("express").Router();
const ProductController = require("../controllers/product.controller");
const {
  checkAuth,
  checkPermissonManager,
} = require("../middlewares/auth.middleware");

ProductRouter.get("/", ProductController.getAllProduct);

ProductRouter.get("/:id", ProductController.getProduct);

ProductRouter.post(
  "/",
  checkAuth,
  checkPermissonManager,
  ProductController.createProduct
);

ProductRouter.patch(
  "/",
  checkAuth,
  checkPermissonManager,
  ProductController.deleteProduct
);

ProductRouter.put(
  "/",
  checkAuth,
  checkPermissonManager,
  ProductController.updateProduct
);

module.exports = ProductRouter;
