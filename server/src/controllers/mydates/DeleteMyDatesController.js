const { MyDate } = require("../../db");

const deleteMyDatesController = async (id) => {
  const deleted = await MyDate.destroy({ where: { id } });
  return deleted;
};

module.exports = deleteMyDatesController;