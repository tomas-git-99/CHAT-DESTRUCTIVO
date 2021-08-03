/* const { Usuario } = require("../models"); */
const Usuario = require("../models/usuario");
const bcryptjs = require('bcryptjs');

const registro = async(req, res) => {

    const {nombre, email, password} = req.body;

    const usuario = new Usuario({nombre, email, password});

    
    //incriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt);

    await usuario.save();
    
    res.json({
        usuario
    })


}


module.exports = {
    registro
}