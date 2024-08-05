const { MyDate } = require("../../db");

const getMyDatesByIdController = async (id) => {
  try {
    const date = await MyDate.findByPk(id);
    if (!date) {
      throw new Error('Cita no encontrada');
    }
    return date;
  } catch (error) {
    throw new Error('Error al obtener la cita: ' + error.message);
  }
};

module.exports = getMyDatesByIdController;