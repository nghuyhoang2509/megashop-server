const statusRequest = require("../constants/statusRequest");
const { response } = require("express");

module.exports = {
  /**
   *
   * @param {response} res
   * @param {String} message
   * @param {Number} status
   * @description Xử lý response khi có lỗi
   */
  responseWithError(res, message, status) {
    return res
      .status(status || statusRequest.BAD_REQUEST)
      .json({ success: false, message: message || "Lỗi không xác định" });
  },
  /**
   *
   * @param {response} res
   * @param {String} message
   * @param {Number} status
   * @param {Object} data
   * @description Xử lý response khi thành công
   */
  responseWithSuccess(res, message, status, data) {
    return res.status(status || statusRequest.OK).json({
      success: true,
      message: message || "Yêu cầu thành công",
      data: data,
    });
  },
};
