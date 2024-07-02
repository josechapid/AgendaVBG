const patchUserController= require("../../controllers/user/patchUserController")

const patchUserHandler= async(req, res)=>{
    const id= req.params
    const dataUser= req.body
    try {
        const response= await patchUserController(id, dataUser)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= patchUserHandler