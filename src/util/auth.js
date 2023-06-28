const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_LIFE = process.env.JWT_ACCESS_LIFE;

module.exports = {
  /**
   * @param  {...any} args
   * @description Hàm kiểm tra xem dữ liệu có falsy hay không
   */
  checkEmpty(...args) {
    if (!args.find((arg) => arg)) {
      throw new Error("Dữ liệu không hợp lệ");
    }
  },
  /**
   *
   * @param {String} email
   * @description Hãy kiểm tra email có đúng định dàng hay không
   */
  checkEmail(email) {
    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailformat)) {
      throw new Error("Email không đúng định dạng ");
    }
  },
  /**
   *
   * @param {String} fullName
   * @description Hãy kiểm tra fullName đúng định dạng >=8 && <=100
   */
  checkFullName(fullName) {
    if (!(fullName.length >= 8 && fullName.length <= 100)) {
      throw new Error("FullName không đúng định dang >=8 && <=100");
    }
  },
  /**
   *
   * @param {String} password
   * @description Hàm kiểm tra password đúng định dạng >=8 && <=24
   */
  checkPassword(password) {
    if (!(password.length >= 8 && password.length <= 24)) {
      throw new Error("password không đúng định dạng >=8 && <=24");
    }
  },
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
