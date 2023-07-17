const { Brand, Product, image } = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
  async getAllBrand() {
    return await Brand.findAll({
      include: { model: image, as: "image", attributes: ["id", "url"] },
    });
  },
  async createBrand(name, imageId) {
    return await Brand.create({ name, imageId });
  },
  async deleteBrand(BrandId) {
    return await Brand.destroy({ where: { id: { [Op.in]: BrandId } } });
  },
  async editBrand(id, name, imageId) {
    return await Brand.update(
      { name, imageId },
      {
        where: {
          id,
        },
      }
    );
  },
  async getBrandAndProduct(id) {
    return await Brand.findOne({
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
