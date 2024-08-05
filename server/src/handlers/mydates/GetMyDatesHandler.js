const getMyDatesController = require("../../controllers/mydates/GetMyDatesController");

const getMyDatesHandler = async (req, res) => {
  try {
    const dates = await getMyDatesController();
    res.status(200).json(dates);
  } catch (error) {
    if (error.message === 'No se encontraron citas.') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor", message: error.message });
    }
  }
};

module.exports = getMyDatesHandler;