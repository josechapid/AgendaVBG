const {Router} = require("express")
const loginRouter= Router()

const postLoginHandler= require("../handlers/login/postLoginHandler")

loginRouter.post("/", postLoginHandler)

module.exports= loginRouter