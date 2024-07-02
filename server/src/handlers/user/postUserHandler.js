const postUserController= require("../../controllers/user/postUserController")

const postUserHandler= async (req, res) =>{
    const user= req.body
    try {
        const response = await postUserController(user)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports= postUserHandler