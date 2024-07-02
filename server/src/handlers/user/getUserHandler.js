const getUserController= require("../../controllers/user/getUserController")

const getUserHandler = async (req, res)=>{
    try {
        const {id}= req.params
        const response= await getUserController(id)
        res.status(200).json(response)

    } catch (error) {  
        res.status(400).json({error: error.message})
        
    }
}
module.exports= getUserHandler