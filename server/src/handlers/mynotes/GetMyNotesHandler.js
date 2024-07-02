const getMyNotesController = require("../../controllers/mynotes/GetMyNotesController")

const getMyNotesHandler = async (req, res) => {
  try {
    const notes = await getMyNotesController();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getMyNotesHandler;