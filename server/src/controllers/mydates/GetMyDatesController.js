const { MyDate } = require("../../db");

const getMyDatesController = async () => {
  try {
    const dates = await MyDate.findAll();
    if (dates.length === 0) {
      throw new Error('No se encontraron citas.');
    }
    return dates;
  } catch (error) {
    throw new Error('Error al obtener las citas: ' + error.message);
  }
};

module.exports = getMyDatesController;