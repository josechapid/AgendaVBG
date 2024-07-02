const deleteMyNotesController = require("../../controllers/mynotes/DeleteMyNotesController")

const deleteMyNotesHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteMyNotesController(id);
    if (!deleted) {
      res.status(404).json({ error: "Note not found" });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteMyNotesHandler;