const { MyDate } = require("../../db");

const updateMyDatesController = async (id, date, professional, address, userId) => {
  try {
    if (!id) {
      throw new Error("ID es requerido");
    }

    const [updated] = await MyDate.update(
      { date, professional, address, userId },
      { where: { id } }
    );

    if (updated) {
      const updatedDate = await MyDate.findByPk(id);
      if (!updatedDate) {
        throw new Error("Fecha no encontrada después de la actualización");
      }
      return updatedDate;
    } else {
      throw new Error("No se pudo actualizar la fecha, puede que no exista");
    }
  } catch (error) {
    throw new Error("Error en el controlador: " + error.message);
  }
};

module.exports = updateMyDatesController;