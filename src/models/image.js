"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      image.hasMany(models.Product, {
        foreignKey: "imageId",
        as: "products",
      });
      image.hasMany(models.Category, {
        foreignKey: "imageId",
        as: "categorys",
      });
      image.hasMany(models.Brand, {
        foreignKey: "imageId",
        as: "brands",
      });
    }
  }
  image.init(
    {
      url: DataTypes.STRING,
      publicId: DataTypes.STRING,
      signature: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
