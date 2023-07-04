const AuthRouter = require("./auth.router.js");
const ProductRouter = require("./product.router.js");
const AdminRouter = require("./admin.router.js");

module.exports = function Route(app) {
  app.use("/auth", AuthRouter);
  app.use("/admin", AdminRouter);
  app.use("/product", ProductRouter);
  app.use("/", (req, res) => {
    res.send("hello");
  });
};
