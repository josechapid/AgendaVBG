const postHowDoIFeelController = require("../../controllers/howDoIFeel/postHowDoIFeelController");

const postHowDoIFeelHandler = async (req, res) => {
  const { user_id, response, number } = req.body;
  try {
    if (!user_id || !response || !number) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    const responseController = await postHowDoIFeelController({
      user_id,
      response,
      number
    });
      res.status(200).json(responseController);    
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor", message: error.message });
  }
};

module.exports = postHowDoIFeelHandler;
