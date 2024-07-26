const {User}= require("../../db")

const postLoginController= async({email, password})=>{
    const user= await User.findOne({
        where: {email}
    })
    if(!user){
        throw new Error("No se encontro usuario con el correo ingresado")
    } else{
        if(user.password !== password){
            throw new Error("Contraseña incorrecta")
        }
        return user
        

    }

}

module.exports= postLoginController