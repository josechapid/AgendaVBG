const deleteMyNotesController = require("../../controllers/mynotes/DeleteMyNotesController")

const deleteMyNotesHandler = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({ error: "ID es requerido" });
    }
    const deleted = await deleteMyNotesController(id);

    if (deleted === 0) {
      return res.status(404).json({ error: "Nota no encontrada" });
    }

    res.status(204).json({message:"Nota eliminada con exito"}); 
  } catch (error) {
    console.log("Error en el handler:", error); 
    res.status(500).json({ error: "Error interno del servidor", message: error.message });
  }
};
module.exports = deleteMyNotesHandler;