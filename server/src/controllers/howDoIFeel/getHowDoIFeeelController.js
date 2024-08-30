const {HowDoIFeel} = require ("../../db")

const getHowDoIFeelController = async (user_id, number)=>{
    try {
    const response = await HowDoIFeel.findOne({
      where: { user_id: user_id },
    });
    console.log("response desde el controller", response);
    
    if(!response){
        return {success: false, message: "Registro no encontrado"}
    } else{
        if (response.number === Number(number)) {
          return {
            success: true,
            message: "Registro encontrado",
            data: response.response,
          };
        } else {
          return {
            success: false,
            message: "El número proporcionado no coincide.",
          };
        }
    }
    }catch (error) {
    throw new Error(error.message);
  }
}

module.exports= getHowDoIFeelController