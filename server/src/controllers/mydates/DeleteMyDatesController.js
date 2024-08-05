const { MyDate } = require("../../db");

const deleteMyDatesController = async (id) => {
  try {
    const deleted = await MyDate.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Date not found");
    }
    return { message: "Date deleted successfully" };
  } catch (error) {
    throw new Error("Error in controller: " + error.message);
  }
};
module.exports = deleteMyDatesController;