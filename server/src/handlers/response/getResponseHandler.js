const getResponseController = require("../../controllers/response/getResponseController")

const getResponseHandler = async (req, res) => {
  const { user_id, workshop_id } = req.body;

  try {
    if (!user_id || !workshop_id ) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const response = await getResponseController(user_id, workshop_id);

    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: response.message });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
};

module.exports = getResponseHandler;