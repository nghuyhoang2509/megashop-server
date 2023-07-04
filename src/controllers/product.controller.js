const ProductService = require("../services/product.service");
const { responseWithError, responseWithSuccess } = require("../util/response");
const checkParams = require("../util/checkParams");

module.exports = {
  async createOrder(req, res, next) {
    const { fullName, email, address, phone, products } = req.body;
    const { id } = req.user;
    try {
      checkParams.checkFullName(fullName);
      checkParams.checkEmail(email);
      checkParams.checkIsPhone(phone);
      checkParams.checkEmpty(address);
      if (products.length == 0) {
        throw new Error("Đơn hàng không có sản phẩm");
      }
      const data = await ProductService.createOrder(
        id,
        fullName,
        email,
        address,
        phone,
        products
      );
      return responseWithSuccess(res, "Đặt hàng thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message || "Tạo đơn hàng thất bại");
    }
  },
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
