const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const MyNotesRouter = require("./MyNotesRouter")
const MyDatesRouter = require("./MyDatesRouter")

router.use("/mynotes", MyNotesRouter)
router.use("/mydates", MyDatesRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
