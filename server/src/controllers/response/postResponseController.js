const {Response} = require("../../db")

const postResponseController= async (user_id, workshop_id, response)=>{
 const newResponse = await Response.create({
   user_id,
   workshop_id,
   response,
 });
 if (newResponse) {
   return { message: "Datos enviados correctamente" };
 } else {
   return { message: "No se enviaron los datos " };
   
 }
}

module.exports= postResponseController