const {Router} = require("express")

const workshopRouter= Router()

const postWorkshopHandler=require("../handlers/workshop/postWorkshopHandler.js")

workshopRouter.post("/", postWorkshopHandler)

module.exports= workshopRouter