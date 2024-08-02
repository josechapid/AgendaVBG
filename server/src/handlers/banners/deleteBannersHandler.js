const deleteBannersController = require ("../../controllers/banners/deleteBannersController")

const deleteBannersHandler = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({ error: "ID de banner es requerido" });
    }

    const response = await deleteBannersController(id);

    res.status(200).json(response);
  } catch (error) {
    console.log("Error en el handler:", error); // Opcional: registrar el error
    res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
};
module.exports = deleteBannersHandler