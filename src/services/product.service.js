const {
  Category,
  Product,
  Order,
  OrderProduct,
  User,
  image,
  Brand,
} = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
  async getAllProduct(brandId, categoryId, search) {
    const options = {
      include: [
        { model: Category, as: "categories" },
        { model: Brand, as: "brands" },
        { model: image, as: "image", attributes: ["id", "url"] },
      ],
      where: {},
    };
    if (brandId) {
      options.where.brandId = brandId;
    }
    if (categoryId) {
      options.where.categoryId = categoryId;
    }
    if (search) {
      options.where.name = { [Op.like]: `%${search}%` };
    }
    return await Product.findAll(options);
  },

  async getProduct(id) {
    return await Product.findByPk(id, {
      include: [
        { model: Category, as: "categories" },
        { model: Brand, as: "brands" },
        { model: image, as: "image" },
      ],
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
    brandId,
  }) {
    return await Product.create({
      name,
      desc,
      quantity,
      price,
      salesPrice,
      image,
      categoryId,
      brandId,
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
};
