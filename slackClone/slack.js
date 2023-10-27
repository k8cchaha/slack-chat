const express = require('express');
const app = express();
const socketio = require('socket.io')

const namespaces = require('./data/namespaces')

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9001);
const io = socketio(expressServer)

io.on('connection',(socket)=>{
    console.log(socket.id, "has connected")

    socket.emit('welcome', "hahahahahahahah")

    socket.on('newMessageToServer',(dataFromClient)=>{
        console.log("Data:",dataFromClient);
        io.emit('newMessageToClients',{text:dataFromClient.text});
    })
    socket.emit('nsList', namespaces)
})