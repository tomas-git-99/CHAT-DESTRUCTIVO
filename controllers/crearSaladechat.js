const { response, request } = require("express");
const jwt = require ('jsonwebtoken');
const { generadorJWTmensaje } = require("../helpers/generador-JWT");
const { Usuario} = require("../models");
const Saladechat = require("../models/saladechat");



const crearSaladechat = async( req = request, res=response) => {

    const token = req.header('x-token');
    const {titulo, tiempo} = req.body;

    try {
        
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const nuevoToken = await generadorJWTmensaje(uid, tiempo);
        
        const data = {
            titulo,
            tiempo,
            creadoPor: uid,
            token:nuevoToken
            
        }
        const saladechat = new Saladechat(data);

        await saladechat.save();
        
        res.json({
            saladechat
        });

    } catch (error) {
        res.status(400).json({
            error
        })
    }
};

const obtenerInfo = async( req = request, res=response) => {
    const {id} = req.params;


    const usuario = await Saladechat.findById(id).populate('usuario');

    res.json({
        usuario
    })
}



module.exports ={
    crearSaladechat,
    obtenerInfo
}