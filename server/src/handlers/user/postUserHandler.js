const postUserController= require("../../controllers/user/postUserController")

const postUserHandler = async (req, res) => {
  const user = req.body;
  try {
    const response = await postUserController(user);

    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: response.message });
    }
  } catch (error) {
    if (error.message.includes("Campos obligatorios faltantes")) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports= postUserHandler