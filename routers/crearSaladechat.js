const { Router } = require("express");
const { crearSaladechat } = require("../controllers/crearSaladechat");
const { registro } = require("../controllers/usuario");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post('/',[
    validarJWT,
] ,crearSaladechat);

router.get('/:id', );

module.exports = router;