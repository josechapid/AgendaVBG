const { MyDate } = require("../../db");

const updateMyDatesController = async (id, date, professional, address) => {
  const [updated] = await MyDate.update({ date, professional, address}, { where: { id } });
  if (updated) {
    const updatedDate = await MyDate.findByPk(id);
    return updatedDate;
  }
  return null;
};

module.exports = updateMyDatesController;