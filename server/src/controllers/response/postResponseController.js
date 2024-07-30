const {Response} = require("../../db")

const postResponseController = async (user_id, workshop_id, response) => {
  try {
    const newResponse = await Response.create({
      user_id,
      workshop_id,
      response,
    });
    if (newResponse) {
      return { message: "Datos enviados correctamente" };
    } else {
      return { message: "No se enviaron los datos " };
    }
  } catch (error) {
    console.log("Error en el controlador:", error); // Log de error
    throw error;
  }
};
/*  const newResponse = await Response.create({
   user_id,
   workshop_id,
   response,
 });
 if (newResponse) {
   return { message: "Datos enviados correctamente" };
 } else {
   return { message: "No se enviaron los datos " };
   
 }
} */

module.exports= postResponseController