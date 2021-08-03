/* PATH: http://localhost:8010/api/auth */


const { Router } = require("express");
const { check } = require("express-validator");
const { auth, revalidarToken } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
require('dotenv').config();
const router = Router();




router.post('/login',[ 
    check('email', ' El email es invalido ').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos], auth );

router.get('/', validarJWT ,revalidarToken);

module.exports = router;