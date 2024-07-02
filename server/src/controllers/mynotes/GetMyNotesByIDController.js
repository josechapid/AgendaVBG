const { MyNotes } = require("../../db");

const getMyNotesByIdController = async (id) => {
  const note = await MyNotes.findByPk(id);
  return note;
};

module.exports = getMyNotesByIdController;