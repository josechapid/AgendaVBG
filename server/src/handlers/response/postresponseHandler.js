const postResponseController = require("../../controllers/response/postResponseController")

const postResponseHandler = async (req, res) => {
  const { user_id, workshop_id, response, filled } = req.body;
  console.log("Datos recibidos en el handler:", {
    user_id,
    workshop_id,
    response,
    filled
  });

  try {
    if (!user_id || !workshop_id || !response || !filled) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const newResponse = await postResponseController(
      user_id,
      workshop_id,
      response,
      filled
    );

    if (newResponse.success) {
      res.status(200).json(newResponse);
    } else {
      res.status(400).json({ error: newResponse.message });
    }
  } catch (error) {
    
    res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
};

module.exports= postResponseHandler