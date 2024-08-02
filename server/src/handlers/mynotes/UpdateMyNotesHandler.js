const updateMyNotesController = require("../../controllers/mynotes/UpdateMyNotesController")

const updateMyNotesHandler = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    if (!id || !title || !description) {
      return res.status(400).json({ error: "ID, título y descripción son requeridos" });
    }

    const updatedNote = await updateMyNotesController(id, title, description);

    if (!updatedNote) {
      return res.status(404).json({ error: "Nota no encontrada" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error en el handler:", error); // Opcional: registrar el error
    res.status(500).json({ error: "Error interno del servidor", message: error.message });
  }
};
module.exports = updateMyNotesHandler;