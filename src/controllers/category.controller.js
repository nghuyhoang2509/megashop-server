const CategoryService = require("../services/category.service.js");
const { responseWithError, responseWithSuccess } = require("../util/response");
const { checkEmpty } = require("../util/checkParams.js");

module.exports = {
  async getAllCategory(req, res, next) {
    try {
      const data = await CategoryService.getAllCategory();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async createCategory(req, res, next) {
    try {
      const { name, imageId } = req.body;
      checkEmpty(name);
      const data = await CategoryService.createCategory(name, imageId);
      return responseWithSuccess(res, "Tạo category thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async editCategory(req, res, next) {
    try {
      const { id, name, imageId } = req.body;
      checkEmpty(name);
      const data = await CategoryService.editCategory(id, name, imageId);
      return responseWithSuccess(res, "sửa category thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async deleteCategory(req, res, next) {
    try {
      const { categoryId } = req.body;
      const data = await CategoryService.deleteCategory(categoryId);
      return responseWithSuccess(res, "delete category thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async getCategoryAndProduct(req, res, next) {
    try {
      const { id } = req.params;
      const data = await CategoryService.getCategoryAndProduct(id);
      return responseWithSuccess(res, "lấy category thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
};
