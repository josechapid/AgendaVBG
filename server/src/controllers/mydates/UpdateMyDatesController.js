const { MyDate } = require("../../db");

const updateMyDatesController = async (id, date, professional, address, password) => {
  const [updated] = await MyDate.update({ date, professional, address, password }, { where: { id } });
  if (updated) {
    const updatedDate = await myDate.findByPk(id);
    return updatedDate;
  }
  return null;
};

module.exports = updateMyDatesController;