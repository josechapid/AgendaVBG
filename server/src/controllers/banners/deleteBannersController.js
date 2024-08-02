const {Banners} = require ("../../db")

const deleteBannersController = async (id) => {
  try {
    const bannerPk = await Banners.findByPk(id);

    if (!bannerPk) {
      throw new Error("Banner no encontrado");
    }

    await bannerPk.destroy();
    return { success: true, message: "Banner eliminado exitosamente" };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = deleteBannersController