const { generarJWT, generadorJWTmensaje } = require("../helpers/generador-JWT");
const { Usuario } = require("../models");
const bcryptjs = require('bcryptjs');


const auth = async(req, res) => {

    const {email, password} = req.body;

    try {
        //verificar el email
        const usuario = await Usuario.findOne({ email })
        if ( !usuario ) {
            return res.status(400).json ({
                msg:'Usuario / Password no son correctos'
            })
        }


        //verifica el estado el usuario (si esta en la base de datos o no)
        if ( !usuario.estado ) {
            return res.status(400).json ({
                msg:'Usuario / Password no son correctos'
            })
        }

 

        //verificar el password
        const validPassword = bcryptjs.compareSync( password, usuario.password)
        if (!validPassword) {
            return res.status(400).json ( {
                mdg:'Usuario / Password no son correctos'
            });
        }
 
        //generar el JWT
        const token = await generarJWT ( usuario.id );


        res.json({
            ok: true,
            usuario,
            token
        })
    } catch (error) {
        res.status(500).json ( {
            ok: false,
            msg:"Hable con el administrador"
        })
    }

}

const revalidarToken = async (req, res) =>{
    const { usuario } = req;


    //generar el JWT
    const token = await generarJWT ( usuario.id );

    res.json ({
        ok:true,
        usuario, 
        token
    }) 

}
module.exports = {
    auth,
    revalidarToken
}