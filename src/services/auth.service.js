const { User } = require("../models/index");
const {
  hashPassword,
  verifyHashPassword,
  createAccessToken,
} = require("../util/auth");
const uuid = require("uuid");
const CONSTANT_ROLE = require("../constants/role");

module.exports = {
  /**
   * @async
   * @param {String} fullName
   * @param {String} email
   * @param {String} password
   *
   */
  async registerUser(fullName, email, password) {
    const queryUser = await User.findOne({ where: { email } });
    if (queryUser) {
      throw new Error("Email này đã tồn tại");
    }
    const hashPass = await hashPassword(password);
    const id = uuid.v4();
    const newUser = await User.create({
      id,
      fullName,
      email,
      password: hashPass,
    });
    return newUser;
  },
  /**
   *
   * @param {String} email
   * @param {String} password
   */
  async loginUser(email, password) {
    let queryUser = await User.findOne({ where: { email } });
    if (!queryUser) {
      throw new Error("Không tìm thấy account có email này");
    }
    await verifyHashPassword(queryUser.password, password);
    const accessToken = await createAccessToken({
      email,
      role: queryUser.role,
      id: queryUser.id,
    });
    queryUser.accessToken = accessToken;
    queryUser = await queryUser.save();
    return queryUser;
  },
  /**
   *
   * @param {String} data
   * @param {String} accessToken
   */
  async checkAuth(data, accessToken) {
    let queryUser = await User.findByPk(data.id);
    if (!queryUser) {
      throw new Error("Không tìm thấy user");
    }
    if (accessToken != queryUser.accessToken) {
      throw new Error("Xác thực không thành công");
    }
    const newAccessToken = await createAccessToken({
      email: queryUser.email,
      role: queryUser.role,
      id: queryUser.id,
    });
    queryUser.accessToken = newAccessToken;
    queryUser = await queryUser.save();
    return queryUser;
  },
  /**
   *
   * @param {String} id Id user cần logout
   */
  async logoutUser(id) {
    const queryUser = await User.findByPk(id);
    if (!queryUser) {
      throw new Error("Không tìm thấy user");
    }
    queryUser.accessToken = "";
    await queryUser.save();
    return true;
  },
  async getAllUser() {
    return await User.findAll({
      attributes: ["fullName", "email", "role", "id"],
    });
  },

  /**
   *
   * @param {Number} userId
   * @param {String} role
   */
  async changeRole(userId, role) {
    let newRole = CONSTANT_ROLE.CUSTOMER;
    if (role == CONSTANT_ROLE.ADMIN) {
      throw new Error("Không thể phân quyền cho người dùng có quyền cao nhất");
    }
    if (role == CONSTANT_ROLE.CUSTOMER) {
      newRole = CONSTANT_ROLE.MANAGER;
    }
    return await User.update({ role: newRole }, { where: { id: userId } });
  },
};
