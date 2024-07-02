const deleteMyDatesController = require("../../controllers/mydates/DeleteMyDatesController");

const deleteMyDatesHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteMyDatesController(id);
    if (!deleted) {
      res.status(404).json({ error: "Date not found" });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteMyDatesHandler;