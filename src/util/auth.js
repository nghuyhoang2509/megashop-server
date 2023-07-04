const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_LIFE = process.env.JWT_ACCESS_LIFE;

module.exports = {
  /**
   * @async
   * @param {String} password
   * @description Hàm này return về hash password
   * @returns {String}
   */
  async hashPassword(password) {
    return await argon2.hash(password);
  },
  /**
   * @async
   * @param {String} hashPassword
   * @param {String} password
   * @description Hàm verify hash password
   */
  async verifyHashPassword(hashPassword, password) {
    if (!(await argon2.verify(hashPassword, password))) {
      throw new Error("Mật khẩu không đúng");
    }
  },
  /**
   *
   * @param {any} data
   * @description Hàm tạo accessToken
   * @returns {String}
   */
  async createAccessToken(data) {
    return await jwt.sign(data, JWT_SECRET, { expiresIn: JWT_LIFE });
  },
  /**
   *
   * @param {String} token
   * @returns Hàm trả về payload trong jwt token
   * @description Hàm này verify JWT TOKEN
   */
  async verifyAccessToken(token) {
    return await jwt.verify(token, JWT_SECRET);
  },
};
