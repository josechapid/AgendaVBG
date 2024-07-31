const {User}= require("../../db")

const postLoginController = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      throw new Error("No se encontró usuario con el correo ingresado");
    }

    if (user.password !== password) {
      throw new Error("Contraseña incorrecta");
    }

    return { success: true, message: "Login exitoso", data: user };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports= postLoginController