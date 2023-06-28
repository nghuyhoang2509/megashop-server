const AuthRouter = require("express").Router();
const AuthController = require("../controllers/auth.controller");
const { checkAuth } = require("../middlewares/auth.middleware");

AuthRouter.post("/login", AuthController.loginUser);
AuthRouter.post("/register", AuthController.registerUser);
AuthRouter.get("/user", checkAuth, AuthController.getInfoUser);
AuthRouter.get("/logout", checkAuth, AuthController.logoutUser);

module.exports = AuthRouter;
