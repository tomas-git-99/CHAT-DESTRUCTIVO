


class Sockets {

    constructor(io){
        this.io = io;
        this.socketEvents();


    }


    socketEvents(){
        
        this.io.on("connection", (socket) =>{ 
            console.log('conectado socket ' + socket.id )
            socket.on('disconnect', () =>{ console.log('desconectado '+ socket.id)})
        });
    }



}

module.exports = Sockets