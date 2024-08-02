const createMyNotesController = require("../../controllers/mynotes/CreateMyNotesController")

const createMyNotesHandler = async (req, res) => {
  const { title, description, userId } = req.body;

  try {
   if (!title || !description || !userId) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const note = await createMyNotesController(title, description, userId);
    res.status(201).json(note);
  } catch (error) {
    console.log("Error en el handler:", error); 
    res.status(500).json({ error: "Error interno del servidor", message: error.message });
  }
};
module.exports = createMyNotesHandler;