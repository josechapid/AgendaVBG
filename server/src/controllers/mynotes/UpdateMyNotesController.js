const { MyNotes } = require("../../db");

const updateMyNotesController = async (id, title, description) => {
  try {
    const [updated] = await MyNotes.update({ title, description }, { where: { id } });

    if (updated === 0) {
      throw new Error("Nota no encontrada o no se realizaron cambios");
    }    
    const updatedNote = await MyNotes.findByPk(id);
    return updatedNote;
  } catch (error) {
    throw new Error("Error al actualizar la nota: " + error.message);
  }
};

module.exports = updateMyNotesController;