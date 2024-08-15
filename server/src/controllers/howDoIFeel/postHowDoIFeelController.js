const {HowDoIFeel} = require("../../db")

const postHowDoIFeelController= async ({user_id, response, number})=>{
try {
    const postDate = await HowDoIFeel.create({
        user_id,
        response,
        number
    })
    if (postDate){
        return {success: true, message: "Datos enviados correctamente", data:postDate}
    } else {
        throw new Error("No se enviaron los datos")
    }
} catch (error) {
    console.log("Error en el controlador: ", error);
    throw new Error(error.message)    
}
}

module.exports= postHowDoIFeelController