const { check } = require("express-validator");
const Usuario = require("../models/usuario");


//validar Correo
const existeEmail = async ( email ='') => {

    const existeCorreo = await Usuario.findOne({ email });

    if(existeCorreo){
        throw new Error (`El correo ${existeCorreo} ya esta registrado`)
    }
}


// validar ID
const existeUsurioPorID = async ( id = '' ) => {

    const existeUsuario = await Usuario.findById( id );

    if ( !existeUsuario){
        throw new Error ( `El id ${existeUsuario} no existe`);
    }
}



 


module.exports = {
    existeEmail,
    existeUsurioPorID,
}