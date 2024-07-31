const patchUserController= require("../../controllers/user/patchUserController")

const patchUserHandler = async (req, res) => {
  const { id } = req.params;
  const dataUser = req.body;

  try {
    const response = await patchUserController({ id }, dataUser);

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

module.exports= patchUserHandler