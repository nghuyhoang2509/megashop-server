"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Brand.belongsTo(models.image, {
        foreignKey: "imageId",
        as: "image",
      });
      Brand.hasMany(models.Product, {
        foreignKey: "brandId",
        as: "brand",
      });
    }
  }
  Brand.init(
    {
      name: DataTypes.STRING,
      imageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Brand",
    }
  );
  return Brand;
};
