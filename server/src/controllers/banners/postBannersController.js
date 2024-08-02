const {Banners} = require ("../../db")

const postBannersController = async ({ title, description, image }) => {
  try {
    const newBanner = await Banners.create({
      title,
      description,
      image,
    });

    return { success: true, message: "Banner creado exitosamente", data: newBanner };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports= postBannersController