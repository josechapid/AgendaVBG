const { Response } = require("../../db");

const getResponseController = async (user_id, workshop_id) => {
  try {
    const response = await Response.findOne({
      where: {
        user_id,
        workshop_id,
        
      }
    });
    
    if (response && response.filled) {
      return { success: true, data: response.response };
    } else {
      return { success: false, message: "No se encontraron respuestas" };
    }
  } catch (error) {
    console.log("Error en el controlador:", error);
    throw new Error(error.message);
  }
};

module.exports = getResponseController;