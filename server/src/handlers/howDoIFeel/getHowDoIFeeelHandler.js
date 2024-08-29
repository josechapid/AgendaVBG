const getHowDoIFeelController= require ("../../controllers/howDoIFeel/getHowDoIFeeelController")

const getHowDoIFeelHandler= async (req, res)=>{
try {
    const {user_id, number}= req.body
    const response= await getHowDoIFeelController(user_id, number)
    if(response){
        res.status(200).json(response)
    } else{
        res.status(200).json(response.success)
    }
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

module.exports= getHowDoIFeelHandler