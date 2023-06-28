const AuthRouter = require("./auth.router.js");
const ProductRouter = require("./product.router.js");

module.exports = function Route(app) {
  app.use("/auth", AuthRouter);
  app.use("/product", ProductRouter);
  app.use("/", (req, res) => {
    res.send("hello");
  });
};
