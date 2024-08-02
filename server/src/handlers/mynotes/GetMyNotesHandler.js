const getMyNotesController = require("../../controllers/mynotes/GetMyNotesController")

const getMyNotesHandler = async (req, res) => {
  try {
    const notes = await getMyNotesController();
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error en el handler:", error); // Opcional: registrar el error
    res.status(500).json({ error: "Error interno del servidor", message: error.message });
  }
};

module.exports = getMyNotesHandler;