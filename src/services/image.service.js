const { image } = require("../models/index");
const cloudinary = require("../config/cloudinary");
module.exports = {
  async uploadImage(img) {
    const uploadResponse = await cloudinary.uploader.upload(img, {});
    const imageUploaded = await image.create({
      url: uploadResponse.url,
      publicId: uploadResponse.public_id,
      signature: uploadResponse.signature,
    });
    return { id: imageUploaded.id, url: imageUploaded.url };
  },
  async deleteImage(id) {
    const imageNeedDestroy = await image.findByPk(id);
    await imageNeedDestroy.destroy();
    await cloudinary.uploader.destroy(imageNeedDestroy.publicId);
    return true;
  },
  async getAllImage() {
    const imageGet = await image.findAll({ attributes: ["id", "url"] });
    return imageGet;
  },
};
