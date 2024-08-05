const updateMyDatesController = require("../../controllers/mydates/UpdateMyDatesController");

const updateMyDatesHandler = async (req, res) => {
  const { id } = req.params;
  const { date, professional, address, userId } = req.body;

  try {
    if (!id || !date || !professional || !address || !userId) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
    const updatedDate = await updateMyDatesController(id, date, professional, address, userId);
    if(updatedDate){
       res.status(200).json({message: "datos actualizados correctamente"});
    }
   
  } catch (error) {
    if (error.message.includes("no encontrada") || error.message.includes("No se pudo actualizar")) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};


module.exports = updateMyDatesHandler;