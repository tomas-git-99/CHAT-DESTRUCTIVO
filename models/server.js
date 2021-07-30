const express = require('express');
const cors = require('cors');

const socketio = require('socket.io');
const http = require('http');

const { dbCOnnection } = require('../db/config');
const Sockets = require('../socket/sockets');

require('dotenv').config();

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // Http server
        this.server = http.createServer(this.app);
        // Configuraciones de sockets

        this.io = socketio(this.server);

        this.path ={
            auth:'/api/auth',
            usuario:'/api/usuario',
            crear:'/api/crear'
        }
        this.configurarSockets();

        this.conectarDB();

        this.middlewares();

        this.routers();
    }

    async conectarDB(){
        await dbCOnnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'))
        this.app.use(express.json());

    }
    
    routers(){
        this.app.use(this.path.auth, require('../routers/auth'));
        this.app.use(this.path.usuario, require('../routers/usuario'));
        this.app.use(this.path.crear, require('../routers/crearSaladechat'));
    }

    configurarSockets(){
        new Sockets(this.io);
    }
    /* socket.handshake.time */


    run(){
        this.server.listen(this.port,  () => {
            console.log('conectado ' + this.port)
        })
    }


}




module.exports = Server;