const {User} = require("../../db")

const getUserController = async (id) => {
  try {
    if (!id) {
      throw new Error("ID de usuario faltante");
    }

    const user = await User.findOne({
      where: { id }
    });

    if (user) {
      return { success: true, message: "Usuario encontrado", data: user };
    } else {
      throw new Error("Usuario no encontrado");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getUserController