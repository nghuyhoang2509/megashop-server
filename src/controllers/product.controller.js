const ProductService = require("../services/product.service");
const { responseWithError, responseWithSuccess } = require("../util/response");
const { checkEmpty } = require("../util/checkParams");

module.exports = {
  async getAllProduct(req, res, next) {
    try {
      const { category, brand, search } = req.query;
      const data = await ProductService.getAllProduct(brand, category, search);
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
  async createProduct(req, res, next) {
    try {
      const {
        name,
        desc,
        quantity,
        price,
        salesPrice,
        image,
        categoryId,
        brandId,
      } = req.body;
      checkEmpty(name, desc, quantity, price, categoryId);
      const data = await ProductService.createProduct({
        name,
        desc,
        quantity,
        price,
        salesPrice,
        image,
        categoryId,
        brandId,
      });
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      console.log(error);
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },
  async deleteProduct(req, res, next) {
    try {
      const { productId } = req.body;
      const data = await ProductService.deleteProduct(productId);
      return responseWithSuccess(res, "Xoá dữ liệu thành công", null, data);
    } catch (error) {
      console.log(error);
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },
  async updateProduct(req, res, next) {
    try {
      const product = req.body;
      const data = await ProductService.updateProduct(product);
      return responseWithSuccess(
        res,
        "Chỉnh sửa dữ liệu thành công",
        null,
        data
      );
    } catch (error) {
      console.log(error);
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },
};
