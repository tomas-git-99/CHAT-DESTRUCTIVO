const { request, response } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Usuario = require('../models/usuario');



const validarJWT = async( req = request, res = response, next ) => {
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
  

        // leer el usuario que corresponde al uid
        
        const usuario = await Usuario.findById( uid );
        
        if (!usuario){
            return res.status(401).json({
                ok:false,
                msg:'token no valido'
            })
        }

        // verificar si el uid tiene estado esta en true

        if ( !usuario.estado ){
            return res.status(401).json({
                ok:false,
                msg:'token no valido'
            })
        }
        req.usuario = usuario; 

        next();

    } catch (error) {

        return res.status(401).json({
            ok:false,
            msg:'bro ese token no es el correcto'
        })
        
    }


}


module.exports = {
    validarJWT
}