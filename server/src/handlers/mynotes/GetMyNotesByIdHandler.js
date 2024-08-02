const getMyNotesByIdController = require("../../controllers/mynotes/GetMyNotesByIDController")

const getMyNotesByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({ error: "ID es requerido" });
    }

    const note = await getMyNotesByIdController(id);

    if (!note) {
      return res.status(404).json({ error: "Nota no encontrada" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.log("Error en el handler:", error); // Opcional: registrar el error
    res.status(500).json({ error: "Error interno del servidor", message: error.message });
  }
};
module.exports = getMyNotesByIdHandler;