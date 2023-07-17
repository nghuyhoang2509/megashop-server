const CategoryRouter = require("express").Router();
const CategoryController = require("../controllers/category.controller");
const {
  checkAuth,
  checkPermissonManager,
} = require("../middlewares/auth.middleware");

CategoryRouter.get("/", CategoryController.getAllCategory);

CategoryRouter.post(
  "/",
  checkAuth,
  checkPermissonManager,
  CategoryController.createCategory
);

CategoryRouter.patch(
  "/",
  checkAuth,
  checkPermissonManager,
  CategoryController.deleteCategory
);

CategoryRouter.put(
  "/",
  checkAuth,
  checkPermissonManager,
  CategoryController.editCategory
);

CategoryRouter.get("/:id", CategoryController.getCategoryAndProduct);

module.exports = CategoryRouter;
