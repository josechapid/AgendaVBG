const postLoginController= require("../../controllers/login/postLoginController")

const postLoginHandler= async(req, res)=>{
    try {
        const user= req.body
        const response= await postLoginController(user)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports= postLoginHandler