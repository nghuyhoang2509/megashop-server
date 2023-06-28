const { Category, Product } = require("../models/index");

module.exports = {
  async getAllCategory() {
    return await Category.findAll();
  },
  async getAllProduct() {
    return await Product.findAll();
  },
  /**
   *
   * @param {Number} id Id của category
   */
  async getProductByCategory(id) {
    return await Product.findAll({ where: { categoryId: id } });
  },
  async getProduct(id) {
    return await Product.findByPk(id, {
      include: { model: Category, as: "categories" },
    });
  },
};
