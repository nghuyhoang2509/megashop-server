const { ACCESS_TOKEN, OPTION_SET_COOKIE } = require("../constants/cookie");
const { checkAuth } = require("../services/auth.service");
const { verifyAccessToken } = require("../util/auth");
const { responseWithError } = require("../util/response");
const CONSTANT_ROLE = require("../constants/role");

module.exports = {
  async checkAuth(req, res, next) {
    try {
      const accessToken = req.signedCookies[ACCESS_TOKEN];
      const data = await verifyAccessToken(accessToken);
      const user = await checkAuth(data, accessToken);
      req.user = user;
      res.cookie(ACCESS_TOKEN, user.accessToken, OPTION_SET_COOKIE);
      return next();
    } catch (error) {
      return responseWithError(res, "Xác thực người dùng không thành công");
    }
  },
  async checkPermissonManager(req, res, next) {
    const { role } = req.user;
    if (role == CONSTANT_ROLE.MANAGER || role == CONSTANT_ROLE.ADMIN) {
      return next();
    } else {
      return responseWithError(res, "Không có quyền truy cập");
    }
  },
  async checkPermissonAdmin(req, res, next) {
    const { role } = req.user;
    if (role == CONSTANT_ROLE.ADMIN) {
      return next();
    } else {
      return responseWithError(res, "Không có quyền truy cập");
    }
  },
};
