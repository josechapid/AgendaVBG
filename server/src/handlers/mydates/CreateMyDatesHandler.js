const createMyDatesController = require("../../controllers/mydates/CreateMyDatesController");

const createMyDatesHandler = async (req, res) => {
  const { date, professional, address, userId } = req.body;

  try {
    if (!date || !professional || !address || !userId) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const newDate = await createMyDatesController(date, professional, address, userId);
    res.status(201).json(newDate);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor", message: error.message });
  }
};


module.exports = createMyDatesHandler;