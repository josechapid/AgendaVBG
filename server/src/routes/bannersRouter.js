const { Router } = require("express");
const bannersRouter = Router();


const postBannersHandler = require("../handlers/banners/postBannersHandler");
const patchBannersHandler = require("../handlers/banners/patchBannersHandler");
const deleteBannersHandler = require("../handlers/banners/deleteBannersHandler");
const getAllBannersHandler= require("../handlers/banners/getAllBannersHandler")

//crear un banner
bannersRouter.post("/", postBannersHandler);
//obtener todos los banners
bannersRouter.get("/", getAllBannersHandler)
//editar banners
bannersRouter.patch("/:id", patchBannersHandler);
// eliminar un banner
bannersRouter.delete("/:id", deleteBannersHandler);

module.exports = bannersRouter;
