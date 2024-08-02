const { MyNotes } = require("../../db");

const getMyNotesController = async () => {
  try {
    const notes = await MyNotes.findAll();
    if (!notes.length) {
      throw new Error("No hay notas disponibles");
    }
    return notes;
  } catch (error) {
    throw new Error("Error al obtener las notas: " + error.message);
  }
};

module.exports = getMyNotesController;