const BrandService = require("../services/brand.service.js");
const { responseWithError, responseWithSuccess } = require("../util/response");
const { checkEmpty } = require("../util/checkParams.js");

module.exports = {
  async getAllBrand(req, res, next) {
    try {
      const data = await BrandService.getAllBrand();
      return responseWithSuccess(res, "Lấy dữ liệu thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async createBrand(req, res, next) {
    try {
      const { name, imageId } = req.body;
      checkEmpty(name);
      const data = await BrandService.createBrand(name, imageId);
      return responseWithSuccess(res, "Tạo Brand thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async editBrand(req, res, next) {
    try {
      const { id, name, imageId } = req.body;
      checkEmpty(name);
      const data = await BrandService.editBrand(id, name, imageId);
      return responseWithSuccess(res, "sửa Brand thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async deleteBrand(req, res, next) {
    try {
      const { brandId } = req.body;
      const data = await BrandService.deleteBrand(brandId);
      return responseWithSuccess(res, "delete Brand thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
  async getBrandAndProduct(req, res, next) {
    try {
      const { id } = req.params;
      const data = await BrandService.getBrandAndProduct(id);
      return responseWithSuccess(res, "lấy Brand thành công", null, data);
    } catch (error) {
      return responseWithError(res, error.message);
    }
  },
};
