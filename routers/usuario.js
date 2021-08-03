/* PATH:http://localhost:8010/api/usuario/registro */

const { Router } = require("express");
const { check } = require("express-validator");
const { registro } = require("../controllers/usuario");
const { existeEmail} = require("../middlewares/db-validacion");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post('/registro', [ 
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email').custom(existeEmail),
    check('password', 'El password es obligatorio').isStrongPassword(
        { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, 
            returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, 
            pointsForContainingSymbol: 10}).withMessage('Error con el password'),
    validarCampos
 ],registro)


module.exports = router;