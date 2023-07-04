const { responseWithError, responseWithSuccess } = require("../util/response");
const { checkEmpty } = require("../util/checkParams");

const AdminService = require("../services/admin.service");

module.exports = {
  async getAllOrder(req, res, next) {
    try {
      const data = await AdminService.getAllOrder();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message || "Lấy dữ liệu thất bại");
    }
  },
  async getAllUser(req, res, next) {
    try {
      const data = await AdminService.getAllUser();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },
  async createProduct(req, res, next) {
    try {
      const { name, desc, quantity, price, salesPrice, image, categoryId } =
        req.body;
      checkEmpty(name, desc, quantity, price, categoryId);
      const data = await AdminService.createProduct({
        name,
        desc,
        quantity,
        price,
        salesPrice,
        image,
        categoryId,
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
      const data = await AdminService.deleteProduct(productId);
      return responseWithSuccess(res, "Xoá dữ liệu thành công", null, data);
    } catch (error) {
      console.log(error);
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },
  async updateProduct(req, res, next) {
    try {
      const product = req.body;
      const data = await AdminService.updateProduct(product);
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
  async changeRole(req, res, next) {
    try {
      const { userId, role } = req.body;
      const data = await AdminService.changeRole(userId, role);
      return responseWithSuccess(res, "Phân quyền thành công", null, data);
    } catch (error) {
      console.log(error);
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },
};
