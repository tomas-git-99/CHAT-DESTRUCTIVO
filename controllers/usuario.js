/* const { Usuario } = require("../models"); */
const Usuario = require("../models/usuario");
 

const registro = async(req, res) => {

    const {nombre, email, password} = req.body;

    const usuario = new Usuario({nombre, email, password});

    await usuario.save();
    
    res.json({
        usuario
    })


}


module.exports = {
    registro
}