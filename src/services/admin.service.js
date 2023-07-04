const {
  Category,
  Product,
  Order,
  OrderProduct,
  User,
} = require("../models/index");
const { Op } = require("sequelize");
const CONSTANT_ROLE = require("../constants/role");

module.exports = {
  async getAllOrder() {
    return await Order.findAll({
      include: [
        { model: User, as: "users", attributes: ["fullName", "email"] },
        {
          model: OrderProduct,
          as: "orderproducts",
          include: [{ model: Product, as: "orderproducts" }],
        },
      ],
    });
  },
  async getAllUser() {
    return await User.findAll({
      attributes: ["fullName", "email", "role", "id"],
    });
  },
  /**
   *
   * @param {{name: String,desc: String,quantity: Number,price: Number,salesPrice: Number,image: String,categoryId: Number}} object
   * @returns
   */
  async createProduct({
    name,
    desc,
    quantity,
    price,
    salesPrice,
    image,
    categoryId,
  }) {
    return await Product.create({
      name,
      desc,
      quantity,
      price,
      salesPrice,
      image,
      categoryId,
    });
  },
  /**
   *
   * @param {Array} productId
   * @returns
   */
  async deleteProduct(productId) {
    return await Product.destroy({ where: { id: { [Op.in]: productId } } });
  },
  /**
   *
   * @param {{id:Number,name: String,desc: String,quantity: Number,price: Number,salesPrice: Number,image: String,categoryId: Number}} product
   * @returns
   */
  async updateProduct(product) {
    const { id, ...productUpdate } = product;
    return await Product.update(productUpdate, { where: { id: id } });
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
