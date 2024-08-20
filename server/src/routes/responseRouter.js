const {Router} = require ("express")
const responseRouter= Router()

const postResponseHandler= require("../handlers/response/postresponseHandler")
const getResponseHandler = require("../handlers/response/getResponseHandler")


responseRouter.post("/", postResponseHandler)
responseRouter.get("/", getResponseHandler);


module.exports= responseRouter