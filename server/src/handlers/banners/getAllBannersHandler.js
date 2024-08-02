const getAllBannersController = require ("../../controllers/banners/getAllBannersController")


const getAllBannersHandler = async (req, res) => {
  try {
    const allBanners = await getAllBannersController();

    if (allBanners.length === 0) {
      return res.status(404).json({ error: "No hay banners posteados" });
    }

    res.status(200).json(allBanners);
  } catch (error) {
    console.log("Error en el handler:", error); // Opcional: registrar el error
    res.status(500).json({ error: "Error interno del servidor", message: error.message });
  }
};

module.exports= getAllBannersHandler