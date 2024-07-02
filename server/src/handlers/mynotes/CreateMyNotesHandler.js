const createMyNotesController = require("../../controllers/mynotes/CreateMyNotesController")

const createMyNotesHandler = async (req, res) => {
 const { title, description } = req.body;
  try {
    const note = await createMyNotesController (title, description);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createMyNotesHandler;