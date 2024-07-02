const { MyDate } = require("../../db");

const getMyDatesController = async () => {
  const dates = await MyDate.findAll();
  return dates;
};

module.exports = getMyDatesController;