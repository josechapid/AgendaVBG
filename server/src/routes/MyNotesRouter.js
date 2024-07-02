const { Router } = require("express");

const myNotesRouter = Router();

const createMyNotesHandler = require("../handlers/mynotes/CreateMyNotesHandler");
const getMyNotesHandler = require("../handlers/mynotes/GetMyNotesHandler");
const getMyNotesByIdHandler = require("../handlers/mynotes/GetMyNotesByIdHandler");
const updateMyNotesHandler = require("../handlers/mynotes/UpdateMyNotesHandler");
const deleteMyNotesHandler = require("../handlers/mynotes/DeleteMyNotesHandler");

//Ruta para crear una nota
myNotesRouter.post("/", createMyNotesHandler);
//Ruta para obtener todas las notas
myNotesRouter.get("/", getMyNotesHandler);
//Ruta para obtener las notas por Id
myNotesRouter.get("/:id", getMyNotesByIdHandler);
//Ruta para actualizar las notas
myNotesRouter.put("/:id", updateMyNotesHandler);
//Ruta para eliminar las notas
myNotesRouter.delete("/:id",deleteMyNotesHandler);






module.exports = myNotesRouter;