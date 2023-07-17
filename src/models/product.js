"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "categories",
      });
      Product.hasMany(models.OrderProduct, {
        foreignKey: "productId",
        as: "orderproducts",
      });
      Product.belongsTo(models.image, {
        foreignKey: "imageId",
        as: "image",
      });
      Product.belongsTo(models.Brand, {
        foreignKey: "brandId",
        as: "brands",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      desc: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      salesPrice: DataTypes.INTEGER,
      imageId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
