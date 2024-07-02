const {Router} = require ("express")
const userRouter = Router()

const postUserHandler = require("../handlers/user/postUserHandler")
const getUserHandler = require("../handlers/user/getUserHandler")
const patchUserHandler = require("../handlers/user/patchUserHandler")

userRouter.post("/", postUserHandler)
userRouter.get("/:id", getUserHandler)
userRouter.patch("/:id", patchUserHandler)

module.exports= userRouter
