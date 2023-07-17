const { responseWithError, responseWithSuccess } = require("../util/response");
const {
  checkEmpty,
  checkEmail,
  checkFullName,
  checkPassword,
} = require("../util/checkParams");
const { ACCESS_TOKEN, OPTION_SET_COOKIE } = require("../constants/cookie");
const AuthService = require("../services/auth.service");

module.exports = {
  async registerUser(req, res, next) {
    const { fullName, email, password } = req.body;
    try {
      checkEmpty(fullName, email, password);
      checkEmail(email);
      checkFullName(fullName);
      checkPassword(password);
      const data = await AuthService.registerUser(fullName, email, password);
      return responseWithSuccess(res, "Đăng ký thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async loginUser(req, res, next) {
    const { email, password } = req.body;
    try {
      checkEmpty(email, password);
      checkEmail(email);
      checkPassword(password);
      const data = await AuthService.loginUser(email, password);
      res.cookie(ACCESS_TOKEN, data.accessToken, OPTION_SET_COOKIE);
      data.password = "";
      data.accessToken = "";
      return responseWithSuccess(res, "Đăng nhập thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async getInfoUser(req, res, next) {
    try {
      const user = req.user;
      user.password = "";
      user.accessToken = "";
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, user);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async logoutUser(req, res, next) {
    try {
      const { id } = req.user;
      await AuthService.logoutUser(id);
      res.cookie(ACCESS_TOKEN, "", OPTION_SET_COOKIE);
      return responseWithSuccess(res, "Đăng xuất thành công");
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async getAllUser(req, res, next) {
    try {
      const data = await AuthService.getAllUser();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },

  async changeRole(req, res, next) {
    try {
      const { userId, role } = req.body;
      const data = await AuthService.changeRole(userId, role);
      return responseWithSuccess(res, "Phân quyền thành công", null, data);
    } catch (error) {
      console.log(error);
      return responseWithError(res, "Có lỗi xảy ra");
    }
  },
};
