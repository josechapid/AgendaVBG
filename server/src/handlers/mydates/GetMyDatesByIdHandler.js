const getMyDatesByIdController = require("../../controllers/mydates/GetMyDatesByIdController");

const getMyDatesByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const date = await getMyDatesByIdController(id);
    res.status(200).json(date);
  } catch (error) {
    if (error.message === 'Cita no encontrada') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor", message: error.message });
    }
  }
};

module.exports = getMyDatesByIdHandler;