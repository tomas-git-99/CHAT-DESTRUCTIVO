const { Mensaje, Usuario } = require("../models");
const Saladechat = require("../models/saladechat");
const jwt = require ('jsonwebtoken');



const mensajes = async(req, res) => {

    
    const {idSala, para, mensaje} = req.body;
    const {creadoPor, token} = await Saladechat.findById(idSala).populate('Saladechat');
    
    try {

        //verificando si el token esta vivo o muerto
        const vetificarToken = jwt.verify(token, process.env.SECRETORPRIVATEKEY);


        if(!vetificarToken){

            return res.status(404).json({
                ok: false,
                msg:"Esta sala ya no existe"
            })
        }

        const data = {
            idSala,
            de:creadoPor,
            para:creadoPor,
            mensaje
        }
        const guardar = new Mensaje(data);

        await guardar.save();
        res.json({
            guardar
        }) 


    } catch (error) {
        res.status(400).json(error)
    }



}


module.exports = {mensajes}