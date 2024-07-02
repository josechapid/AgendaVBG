const { MyNotes } = require("../../db");


const getMyNotesController = async () => {
  const notes = await MyNotes.findAll();
  return notes;
};

module.exports = getMyNotesController;