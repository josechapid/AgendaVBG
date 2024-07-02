const getMyNotesIDController = require("../../controllers/mynotes/GetMyNotesByIDController")

const getMyNotesByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await getMyNotesIDController(id);
    if (!note) {
      res.status(404).json({ error: "Note not found" });
    } else {
      res.status(200).json(note);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getMyNotesByIdHandler;