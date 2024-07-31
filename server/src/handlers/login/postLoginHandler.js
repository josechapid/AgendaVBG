const postLoginController= require("../../controllers/login/postLoginController")

const postLoginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const response = await postLoginController({ email, password });

    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: response.message });
    }
  } catch (error) {
    if (error.message.includes("No se encontró usuario con el correo ingresado") || error.message.includes("Contraseña incorrecta")) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor", message: error.message });
    }
  }
};

module.exports= postLoginHandler