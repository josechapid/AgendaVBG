const postBannersController = require ("../../controllers/banners/postBannersController")

const postBannersHandler = async (req, res) => {
  const { title, description, image } = req.body;

  try {
    if (!title || !description || !image) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const response = await postBannersController({ title, description, image });

    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: response.message });
    }
  } catch (error) {
    console.log("Error en el handler:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
};

module.exports= postBannersHandler