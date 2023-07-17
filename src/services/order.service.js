const {
  Category,
  Product,
  Order,
  OrderProduct,
  User,
  image,
} = require("../models/index");
module.exports = {
  /**
   * @param {Number} userId
   * @param {String} fullName
   * @param {String} email
   * @param {String} address
   * @param {String} phone
   * @param {Array} products
   */
  async createOrder(userId, fullName, email, address, phone, products) {
    let queryProducts = [];
    let total = 0;
    // Kiểm tra xem số lượng sản phẩm còn đủ không
    let checkQty = null;
    for (const product of products) {
      const queryProduct = await Product.findByPk(product.id);
      if (product.qtyOrder > queryProduct.quantity) {
        checkQty = {
          qtyOrder: product.qtyOrder,
          quantity: queryProduct.quantity,
          name: product.name,
        };
        break;
      } else {
        queryProduct.qtyOrder = product.qtyOrder;
        queryProduct.quantity -= product.qtyOrder;
        total +=
          (product.salesPrice == null ? product.price : product.salesPrice) *
          product.qtyOrder;
        queryProducts.push(queryProduct);
      }
    }
    if (checkQty) {
      throw new Error(
        `Sản phẩm ${checkQty.name} không còn đủ số lượng chỉ còn ${checkQty.quantity}`
      );
    }
    // Tạo đơn (Order)
    const order = await Order.create({ address, phone, total, userId });
    // Thay đổi số lượng sản phẩm trong kho và tạo OrderProduct với mỗi sản phẩm
    await queryProducts.forEach(async (product) => {
      await product.save();
      await OrderProduct.create({
        productId: product.id,
        orderId: order.id,
        qtyOrder: product.qtyOrder,
      });
    });
    return true;
  },
  async getAllOrder() {
    return await Order.findAll({
      include: [
        { model: User, as: "users", attributes: ["fullName", "email"] },
        {
          model: OrderProduct,
          as: "orderproducts",
          include: [
            {
              model: Product,
              as: "orderproducts",
              include: { model: image, as: "image" },
            },
          ],
        },
      ],
    });
  },
};
