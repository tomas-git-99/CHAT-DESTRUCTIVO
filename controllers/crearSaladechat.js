const { response, request } = require("express");
const jwt = require ('jsonwebtoken');
const { generadorJWTmensaje } = require("../helpers/generador-JWT");
const { Usuario, Mensaje } = require("../models");



const crearSaladechat = async( req = request, res=response) => {

    const token = req.header('x-token');
    const {nombre, tiempo} = req.body;

    try {
        
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);


        const usuario = await Usuario.findById(uid);

        const nuevoToken = await generadorJWTmensaje(uid, tiempo);

        //const chatNuevo = new Mensaje()

        res.json({
            usuario,
            nombre,
            nuevoToken
        });

    } catch (error) {
        res.status(400).json({
            error
        })
    }
}



module.exports ={
    crearSaladechat
}