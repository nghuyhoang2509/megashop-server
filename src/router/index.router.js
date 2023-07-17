const AuthRouter = require("./auth.router.js");
const ProductRouter = require("./product.router.js");
const ImageRouter = require("./image.router.js");
const CategoryRouter = require("./category.router");
const OrderRouter = require("./order.router");
const BrandRouter = require("./brand.router");

module.exports = function Route(app) {
  app.use("/auth", AuthRouter);
  app.use("/product", ProductRouter);
  app.use("/image", ImageRouter);
  app.use("/category", CategoryRouter);
  app.use("/order", OrderRouter);
  app.use("/brand", BrandRouter);
  app.use("/", (req, res) => {
    res.send("hello");
  });
};
