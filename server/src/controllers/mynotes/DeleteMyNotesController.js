const { MyNotes } = require("../../db");

const deleteMyNotesController = async (id) => {
  try {
    const deleted = await MyNotes.destroy({ where: { id } });

    if (deleted === 0) {
      throw new Error("Nota no encontrada");
    }

    return deleted;
  } catch (error) {
    throw new Error("Error al eliminar la nota: " + error.message);
  }
};

module.exports = deleteMyNotesController;