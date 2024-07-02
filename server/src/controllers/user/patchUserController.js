const {User}= require("../../db")

const patchUserController = async(
  { id },
  { name, lastName, password, address, phone, email, dateOfBirth}
)=>{
    const user= await User.findOne({where: {id: parseInt(id, 10)}})
    if(user){
        const upDateData={
            name, lastName, password, address, phone, email, dateOfBirth
        }

        const editUser= await User.update(upDateData, {
            where:{
                id: parseInt(id, 10)
            }
        })

        if(editUser){
            return {message: "Perfil actualizado exitosamente"}
        } else {
            return {
                message: "No se realizaron cambios"
            }
        }
    }
    else{
        return{
            message: "Usuario no encontrado"
        }
    }
};

module.exports= patchUserController