const { MyDate } = require("../../db");

const createMyDatesController = async (date, professional, address) => {
  const newDate = await MyDate.create({ date, professional, address});
  return newDate;
};

module.exports = createMyDatesController;