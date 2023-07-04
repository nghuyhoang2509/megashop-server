"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: "userId",
        as: "users",
      });
      Order.hasMany(models.OrderProduct, {
        foreignKey: "orderId",
        as: "orderproducts",
      });
    }
  }
  Order.init(
    {
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      total: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
