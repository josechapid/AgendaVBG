const postUserController= require("../../controllers/user/postUserController")

const postUserHandler = async (req, res) => {
  const user = req.body;
  try {
    const response = await postUserController(user);
      res.status(200).json(response);
  } catch (error) {
    if (error.message.includes("Campos obligatorios faltantes")) {
      res.status(400).json({ error: error.message });
    } else if (
      error.message.includes("Ya existe un usuario con ese nombre o correo")
    ) {
      res.status(409).json({ error: error.message }); 
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports= postUserHandler