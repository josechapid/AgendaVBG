const {Banners} = require ("../../db")

const patchBannersController = async ({ id }, { title, description, image }) => {
  try {
    if (!id) {
      throw new Error("ID de banner faltante");
    }

    const [updated] = await Banners.update(
      { title, description, image },
      {
        where: {
          id: parseInt(id, 10),
        },
      }
    );

    if (updated) {
      return { success: true, message: "Banner actualizado exitosamente" };
    } else {
      throw new Error("No se encontró el banner o no se hizo la actualización");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports= patchBannersController