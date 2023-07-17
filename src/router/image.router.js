const ImageRouter = require("express").Router();
const ImageController = require("../controllers/image.controller");
const {
  checkAuth,
  checkPermissonManager,
} = require("../middlewares/auth.middleware");

ImageRouter.post(
  "/",
  checkAuth,
  checkPermissonManager,
  ImageController.uploadImage
);
ImageRouter.delete(
  "/",
  checkAuth,
  checkPermissonManager,
  ImageController.deleteImage
);
ImageRouter.get(
  "/",
  checkAuth,
  checkPermissonManager,
  ImageController.getAllImage
);

module.exports = ImageRouter;
