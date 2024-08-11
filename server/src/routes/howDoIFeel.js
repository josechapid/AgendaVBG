const { Router } = require("express");
const howDoIFeelRouter = Router();

const postHowDoIFeelHandler = require("../handlers/howDoIFeel/postHowDoIFeelHandler");

howDoIFeelRouter.post("/", postHowDoIFeelHandler);

module.exports = howDoIFeelRouter;
