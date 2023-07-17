const BrandRouter = require("express").Router();
const BrandController = require("../controllers/brand.controller");
const {
  checkAuth,
  checkPermissonAdmin,
  checkPermissonManager,
} = require("../middlewares/auth.middleware");

BrandRouter.get("/", BrandController.getAllBrand);

BrandRouter.post(
  "/",
  checkAuth,
  checkPermissonManager,
  BrandController.createBrand
);

BrandRouter.patch(
  "/",
  checkAuth,
  checkPermissonManager,
  BrandController.deleteBrand
);

BrandRouter.put(
  "/",
  checkAuth,
  checkPermissonManager,
  BrandController.editBrand
);

BrandRouter.get("/:id", BrandController.getBrandAndProduct);

module.exports = BrandRouter;
