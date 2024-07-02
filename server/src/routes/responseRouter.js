const {Router} = require ("express")
const responseRouter= Router()

const postResponseHandler= require("../handlers/response/postresponseHandler")


responseRouter.post("/", postResponseHandler)


module.exports= responseRouter