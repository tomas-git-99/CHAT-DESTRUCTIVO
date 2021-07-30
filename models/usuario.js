const { Schema, model } = require('mongoose')



const UsuarioSchema = Schema({
    nombre:{
        type: String,
        require:[true, 'el nombre es obligatorio']
    },
    email:{
        type: String,
        require:[true, 'el correo es obligatorio'],
    },
    password:{
        type: String,
        require:[true, 'el contraseña es obligatorio'],
    },
    img:{
        type:String,
    },
    online:{
        type: Boolean,
        default: false
    },
    estado:{
        type:Boolean,
        default: true
    },

});
//con esto extraemos lo que queremos la base de datos y sacarlo

UsuarioSchema.methods.toJSON = function() { // <--- cuando es llamdo el json se va ejecutar la funcion
    const { __v, password, _id, ...usuario } = this.toObject(); //genera los objetos
    usuario.uid = _id; //subcribiendo el nombre de ID
    return usuario;
}

 
module.exports = model( 'Usuario', UsuarioSchema );