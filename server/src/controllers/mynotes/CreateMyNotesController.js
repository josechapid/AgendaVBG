const { MyNotes } = require("../../db");

const createMyNotesController = async (title, description, userId) => {
  try {
    const note = await MyNotes.create({ title, description, userId});
    return note;
  } catch (error) {
    throw new Error("Error al crear la nota: " + error.message);
  }
};

module.exports = createMyNotesController;