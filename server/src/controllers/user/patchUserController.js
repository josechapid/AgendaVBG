const {User}= require("../../db")

const patchUserController = async (
  { id },
  { name, user, password, address, phone, email, dateOfBirth }
) => {
  try {
    // Verificar que el ID esté presente
    if (!id) {
      throw new Error("ID de usuario faltante");
    }

    const userName = await User.findOne({ where: { id: parseInt(id, 10) } });

    if (!userName) {
      throw new Error("Usuario no encontrado");
    }

    const upDateData = { name, user, password, address, phone, email, dateOfBirth };

    const [updated] = await User.update(upDateData, {
      where: { id: parseInt(id, 10) }
    });

    if (updated) {
      return { success: true, message: "Perfil actualizado exitosamente" };
    } else {
      return { success: false, message: "No se realizaron cambios" };
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports= patchUserController