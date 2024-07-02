const { MyDate } = require("../../db");

const getMyDatesByIdController = async (id) => {
  const date = await MyDate.findByPk(id);
  return date;
};

module.exports = getMyDatesByIdController;