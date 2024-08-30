const getHowDoIFeelController= require ("../../controllers/howDoIFeel/getHowDoIFeeelController")

const getHowDoIFeelHandler= async (req, res)=>{
try {
    const {user_id, number}= req.query
    console.log("estos son los datos", user_id, number);
    
    const response= await getHowDoIFeelController(user_id, number)
    console.log("Response from controller:", response);
    if(response){
        res.status(200).json(response)
    } else{
        res
          .status(200)
          .json({ success: false, message: "No se encontró respuesta" });
    }
} catch (error) {
     console.error("Error en getHowDoIFeelHandler:", error);
    res.status(500).json({ error: error.message });
}
}

module.exports= getHowDoIFeelHandler