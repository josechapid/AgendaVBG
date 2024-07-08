const postResponseController = require("../../controllers/response/postResponseController")

const postResponseHandler =async (req, res)=>{
    const {user_id, workshop_id, response}=req.body
    try {
        if (!user_id || !workshop_id || !response) {
          return res.status(400).json({ error: "Faltan datos obligatorios" });
        }
        const newResponse = await postResponseController(
          user_id,
          workshop_id,
          response
        );
        res.status(200).json(newResponse)
    } catch (error) {
        res
          .status(500)
          .json({
            error: "Error interno del servidor",
            message: error.message,
          });
    }
}

module.exports= postResponseHandler