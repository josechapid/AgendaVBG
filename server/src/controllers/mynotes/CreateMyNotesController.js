const { MyNotes } = require("../../db");

const createMyNotesController = async (title, description) => {
  const note = await MyNotes.create({ title, description });
  return note;
};

module.exports = createMyNotesController;