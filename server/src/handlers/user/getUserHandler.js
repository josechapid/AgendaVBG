const getUserController= require("../../controllers/user/getUserController")

const getUserHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getUserController(id);

    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: response.message });
    }
  } catch (error) {
    if (error.message.includes("ID de usuario faltante") || error.message.includes("Usuario no encontrado")) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};
module.exports= getUserHandler