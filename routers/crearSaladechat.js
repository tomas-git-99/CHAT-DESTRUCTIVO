const { Router } = require("express");
const { crearSaladechat } = require("../controllers/crearSaladechat");
const { registro } = require("../controllers/usuario");

const router = Router();

router.post('/', crearSaladechat);
router.get('/:id', );

module.exports = router;