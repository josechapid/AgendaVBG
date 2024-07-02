const { MyNotes } = require("../../db");

const deleteMyNotesController = async (id) => {
  const deleted = await MyNotes.destroy({ where: { id } });
  return deleted;
};

module.exports = deleteMyNotesController;