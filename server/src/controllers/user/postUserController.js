const {User} = require ("../../db")
const { Op } = require("sequelize");
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
    const existingUser= await User.findOne({
      where:{
        [Op.or]: [{user}, {email}]
      }
    })
   
    if(existingUser){
      throw new Error("Ya existe un usuario con ese nombre o correo")
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
    } 
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postUserController