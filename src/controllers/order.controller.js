const { responseWithError, responseWithSuccess } = require("../util/response");
const OrderService = require("../services/order.service");
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
      const data = await OrderService.createOrder(
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
  async getAllOrder(req, res, next) {
    try {
      const data = await OrderService.getAllOrder();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message || "Lấy dữ liệu thất bại");
    }
  },
};
