const { MyNotes } = require("../../db");

const getMyNotesByIdController = async (id) => {
  try {
    const note = await MyNotes.findByPk(id);

    if (!note) {
      throw new Error("Nota no encontrada");
    }

    return note;
  } catch (error) {
    throw new Error("Error al obtener la nota: " + error.message);
  }
};


module.exports = getMyNotesByIdController;