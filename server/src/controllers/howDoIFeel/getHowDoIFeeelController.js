const {HowDoIFeel} = require ("../../db")

const getHowDoIFeelController = async ({user_id, number})=>{
    try {
    const response= await HowDoIFeel.findOne({
        where: {user_id:user_id}
    })
    if(!response){
        return {success: false, message: "Registro no encontrado"}
    } else{
        if (response.number===number){
            return {success: true, message: "Registro encontrado", data:response.response}
        }
    }
    }catch (error) {
    throw new Error(error.message);
  }
}

module.exports= getHowDoIFeelController