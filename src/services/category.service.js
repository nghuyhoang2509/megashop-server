const { Category, Product, image } = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
  async getAllCategory() {
    return await Category.findAll({
      include: { model: image, as: "image", attributes: ["id", "url"] },
    });
  },
  async createCategory(name, imageId) {
    return await Category.create({ name, imageId });
  },
  async deleteCategory(categoryId) {
    return await Category.destroy({ where: { id: { [Op.in]: categoryId } } });
  },
  async editCategory(id, name, imageId) {
    return await Category.update(
      { name, imageId },
      {
        where: {
          id,
        },
      }
    );
  },
  async getCategoryAndProduct(id) {
    return await Category.findOne({
      where: { id },
      include: [
        {
          model: Product,
          as: "products",
          include: { model: image, as: "image", attributes: ["id", "url"] },
        },
      ],
    });
  },
};
