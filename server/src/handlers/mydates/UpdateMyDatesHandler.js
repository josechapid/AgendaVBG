const updateMyDatesController = require("../../controllers/mydates/UpdateMyDatesController");

const updateMyDatesHandler = async (req, res) => {
  const { id } = req.params;
  const { date, professional, address} = req.body;
  try {
    const updatedDate = await updateMyDatesController(id, date, professional, address);
    if (!updatedDate) {
      res.status(404).json({ error: "Date not found" });
    } else {
      res.status(200).json(updatedDate);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateMyDatesHandler;