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
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      desc: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      salesPrice: DataTypes.INTEGER,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
