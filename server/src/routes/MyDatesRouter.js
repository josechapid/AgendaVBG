const { Router } = require("express");

const myDatesRouter = Router();

const createMyDatesHandler = require("../handlers/mydates/CreateMyDatesHandler");
const getMyDatesHandler = require("../handlers/mydates/GetMyDatesHandler");
const getMyDatesByIdHandler = require("../handlers/mydates/GetMyDatesByIdHandler");
const updateMyDatesHandler = require("../handlers/mydates/UpdateMyDatesHandler");
const deleteMyDatesHandler = require("../handlers/mydates/DeleteMyDatesHandler");

//Ruta para crear una cita
myDatesRouter.post("/", createMyDatesHandler);
//Ruta para obtener todas las citas
myDatesRouter.get("/", getMyDatesHandler);
//Rutas para obtener cita por ID
myDatesRouter.get("/:id", getMyDatesByIdHandler);
//Ruta para actualizar un cita
myDatesRouter.put("/:id", updateMyDatesHandler);
//Ruta para eliminar una cita
myDatesRouter.delete("/:id", deleteMyDatesHandler);


module.exports = myDatesRouter;