const { Router } = require('express');


const router = Router();

const MyNotesRouter = require("./MyNotesRouter")
const MyDatesRouter = require("./MyDatesRouter")
const userRouter= require("./userRouter")
const bannersRouter= require("./bannersRouter")
const responseRouter= require("./responseRouter")
const workshopRouter= require("./workshopRouter") 
const loginRouter= require("./loginRouter")
const howDoIFeelRouter= require("./howDoIFeelRouter")


//Router User
router.use("/user", userRouter)
router.use("/banners", bannersRouter)
router.use("/response", responseRouter)
router.use("/workshop", workshopRouter)
router.use("/mynotes", MyNotesRouter)
router.use("/mydates", MyDatesRouter)
router.use("/login", loginRouter)
router.use("/howDoIFeel", howDoIFeelRouter)


module.exports = router;
