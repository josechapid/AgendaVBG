const patchBannersController = require ("../../controllers/banners/patchBannersController")

const patchBannersHandler = async (req, res) => {
  const { id } = req.params;
  const bannersData = req.body;

  try {
    if (!id) {
      return res.status(400).json({ error: "ID de banner faltante" });
    }

    if (!bannersData.title || !bannersData.description || !bannersData.image) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const response = await patchBannersController({ id }, bannersData);

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

module.exports = patchBannersHandler