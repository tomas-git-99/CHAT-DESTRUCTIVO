/* PATH:http://localhost:8010/api/usuario/registro */

const { Router } = require("express");
const { check } = require("express-validator");
const { mensajes } = require("../controllers/mensaje");
const { validarJWT } = require("../middlewares/validar-jwt");


const router = Router();


router.post('/',[validarJWT], mensajes) 


module.exports = router;