const { Router } = require("express");
const { registro } = require("../controllers/usuario");

const router = Router();

router.post('/registro', registro)


module.exports = router;