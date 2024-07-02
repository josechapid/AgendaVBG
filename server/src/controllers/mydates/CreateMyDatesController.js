const { MyDate } = require("../../db");

const createMyDatesController = async (date, professional, address, password) => {
  const newDate = await MyDate.create({ date, professional, address, password });
  return newDate;
};

module.exports = createMyDatesController;