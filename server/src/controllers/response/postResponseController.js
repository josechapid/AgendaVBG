const {Response} = require("../../db")

const postResponseController = async (user_id, workshop_id, response) => {
  try {
    const newResponse = await Response.create({
      user_id,
      workshop_id,
      response,
    });

    if (newResponse) {
      return { success: true, message: "Datos enviados correctamente" };
    } else {
      throw new Error("No se enviaron los datos");
    }
  } catch (error) {
    console.log("Error en el controlador:", error);
    throw new Error(error.message);
  }
};


module.exports= postResponseController