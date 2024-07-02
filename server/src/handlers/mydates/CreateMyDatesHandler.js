const createMyDatesController = require("../../controllers/mydates/CreateMyDatesController");

const createMyDatesHandler = async (req, res) => {
  const { date, professional, address, password } = req.body;
  try {
    const newDate = await createMyDatesController(date, professional, address, password);
    res.status(201).json(newDate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createMyDatesHandler;