const { MyNotes } = require("../../db");

const createMyNotesController = async (title, description,userId) => {
  const note = await MyNotes.create({ title, description, userId });
  return note;
};

module.exports = createMyNotesController;