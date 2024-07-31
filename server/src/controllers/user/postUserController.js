const {User} = require ("../../db")
const postUserController = async ({
  name,
  user,
  email,
  address,
  phone,
  password,
  dateOfBirth,
}) => {
  try {
    if (!name || !user || !email || !password) {
      throw new Error("Campos obligatorios faltantes");
    }

    const newUser = await User.create({
      name,
      user,
      email,
      address,
      phone,
      password,
      dateOfBirth,
    });

    if (newUser) {
      return { success: true, message: "Usuario creado con éxito", data: newUser };
    } else {
      throw new Error("No se pudo crear el usuario");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postUserController