const postHowDoIFellController = require("../../controllers/howDoIFeel/postHowDoIFeelController");

const postHowDoIFeelHandler = async (req, res) => {
  const { user_id, response } = req.body;
  try {
    if (!user_id || !response) {
      return res.status(400).json({ error: "Flatan datos" });
    }
    const responseController = await postHowDoIFellController({
      user_id,
      response,
    });
    if (responseController.success) {
      res.status(200).json(responseController);
    } else {
      res.status(400).json({ error: responseController.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor", message: error.message });
  }
};

module.exports = postHowDoIFeelHandler;
