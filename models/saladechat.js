const { Schema, model } = require('mongoose')



const SaladeChatSchema = Schema({
    titulo:{
        type: String,
        require:[true, 'el titulo es obligatorio']
    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required: true,
    },
    token:{
        type:String,
        required: [true, 'el token es obligatorio'],
    },
    tiempo:{
        type:String,
        required: true,
    }
},{
    timestamps:true
});
//con esto extraemos lo que queremos la base de datos y sacarlo

SaladeChatSchema.methods.toJSON = function() { // <--- cuando es llamdo el json se va ejecutar la funcion
    const { __v, password, _id, ...sala } = this.toObject(); //genera los objetos
    sala.uid = _id; //subcribiendo el nombre de ID
    return sala;
}

 
module.exports = model( 'Saladechat', SaladeChatSchema );