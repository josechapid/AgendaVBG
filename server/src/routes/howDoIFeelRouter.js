const { Router } = require("express");
const howDoIFeelRouter = Router();

const postHowDoIFeelHandler = require("../handlers/howDoIFeel/postHowDoIFeelHandler");
const getHowDoIFeelHandler = require("../handlers/howDoIFeel/getHowDoIFeeelHandler");

howDoIFeelRouter.post("/", postHowDoIFeelHandler);
howDoIFeelRouter.get("/", getHowDoIFeelHandler);

module.exports = howDoIFeelRouter;
