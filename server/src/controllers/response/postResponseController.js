const {Response} = require("../../db")

const postResponseController= async (usuario_id, taller_id, response)=>{
 const newResponse= await Response.create({
    usuario_id,
    taller_id,
    response
 })
 if (newResponse) {
   return { message: "Datos enviados correctamente" };
 } else {
   return { message: "No se enviaron los datos " };
 }
}

module.exports= postResponseController