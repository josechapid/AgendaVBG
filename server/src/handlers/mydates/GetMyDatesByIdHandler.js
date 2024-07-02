const getMyDatesByIdController = require("../../controllers/mydates/GetMyDatesByIdController");

const getMyDatesByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const date = await getMyDatesByIdController(id);
    if (!date) {
      res.status(404).json({ error: "Date not found" });
    } else {
      res.status(200).json(date);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getMyDatesByIdHandler;