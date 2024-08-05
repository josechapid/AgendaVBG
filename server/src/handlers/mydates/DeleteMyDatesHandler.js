const deleteMyDatesController = require("../../controllers/mydates/DeleteMyDatesController");

const deleteMyDatesHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteMyDatesController(id);
    res.status(200).json(response);
  } catch (error) {
    if (error.message.includes("Date not found")) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = deleteMyDatesHandler;