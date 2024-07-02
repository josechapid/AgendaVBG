const updateMyNotesController = require("../../controllers/mynotes/UpdateMyNotesController")

const updateMyNotesHandler = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedNote = await updateMyNotesController(id, title, description);
    if (!updatedNote) {
      res.status(404).json({ error: "Note not found" });
    } else {
      res.status(200).json(updatedNote);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateMyNotesHandler;