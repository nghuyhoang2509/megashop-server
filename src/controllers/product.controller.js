const ProductService = require("../services/product.service");
const { responseWithError, responseWithSuccess } = require("../util/response");

module.exports = {
  async getAllCategory(req, res, next) {
    try {
      const data = await ProductService.getAllCategory();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async getAllProduct(req, res, next) {
    try {
      const data = await ProductService.getAllProduct();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async getProductByCategory(req, res, next) {
    const { id } = req.params;
    try {
      const data = await ProductService.getProductByCategory(id);
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async getProduct(req, res, next) {
    const { id } = req.params;
    try {
      const data = await ProductService.getProduct(id);
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
};
