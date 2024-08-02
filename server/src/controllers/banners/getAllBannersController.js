const {Banners} = require ("../../db")

const getAllBannersController = async () => {
  try {
    const bannersDb = await Banners.findAll();
    return bannersDb;
  } catch (error) {
    throw new Error("Error al obtener los banners: " + error.message);
  }
};

module.exports = getAllBannersController;


module.exports= getAllBannersController
