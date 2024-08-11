const {HowDoIFeel} = require("../../db")

const postHowDoIFeelController= async ({user_id, response})=>{
try {
    const postDate = await HowDoIFeel.create({
        user_id,
        response
    })
    if (postDate){
        return {success: true, message: "Datos enviados correctamente"}
    } else {
        throw new Error("No se enviaron los datos")
    }
} catch (error) {
    console.log("Error en el controlador: ", error);
    throw new Error(error.message)    
}
}

module.exports= postHowDoIFeelController