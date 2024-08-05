const { MyDate } = require("../../db");

const createMyDatesController = async (date, professional, address, userId) => {
  try {
    const newDate = await MyDate.create({ date, professional, address, userId });
    return newDate;
  } catch (error) {
    throw new Error('Error al crear la cita: ' + error.message);
  }
};

module.exports = createMyDatesController;