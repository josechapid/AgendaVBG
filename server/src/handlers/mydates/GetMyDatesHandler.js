const getMyDatesController = require("../../controllers/mydates/GetMyDatesController");

const getMyDatesHandler = async (req, res) => {
  try {
    const dates = await getMyDatesController();
    res.status(200).json(dates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getMyDatesHandler;