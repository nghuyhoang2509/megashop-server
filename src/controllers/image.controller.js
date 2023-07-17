const ImageService = require("../services/image.service");
const { responseWithError, responseWithSuccess } = require("../util/response");

module.exports = {
  async uploadImage(req, res, next) {
    try {
      const { image } = req.body;
      const data = await ImageService.uploadImage(image);
      return responseWithSuccess(res, null, null, data);
    } catch (error) {
      console.log(error);
      return responseWithError(res, error);
    }
  },
  async deleteImage(req, res, next) {
    try {
      const { id } = req.query;
      const data = await ImageService.deleteImage(id);
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error);
    }
  },
  async getAllImage(req, res, next) {
    try {
      const data = await ImageService.getAllImage();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error);
    }
  },
};
