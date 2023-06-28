const { ACCESS_TOKEN, OPTION_SET_COOKIE } = require("../constants/cookie");
const { checkAuth } = require("../services/auth.service");
const { verifyAccessToken } = require("../util/auth");
const { responseWithError } = require("../util/response");

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
};
