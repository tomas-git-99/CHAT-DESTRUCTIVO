const { Router } = require("express");
const { auth, revalidarToken } = require("../controllers/auth");
const { validarJWT } = require("../middlewares/validar-jwt");
require('dotenv').config();
const router = Router();




router.post('/login', auth );
router.get('/', validarJWT ,revalidarToken);

module.exports = router;