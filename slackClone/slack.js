const express = require('express');
const app = express();
const socketio = require('socket.io');
const Room = require('./classes/Room')

const namespaces = require('./data/namespaces')

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9001);
const io = socketio(expressServer)

// express
app.get('/change-ns', (req, res)=>{
  namespaces[0].addRoom(new Room(0, 'Deleted Article', 0))
  console.log('WTF')
  console.log(namespaces[0])
  io.of(namespaces[0].endpoint).emit('nsChange', namespaces[0])
  res.json(namespaces[0])
})

io.on('connection',(socket)=>{
    console.log(socket.id, "has connected")

    socket.emit('welcome', "hahahahahahahah")

    socket.on('newMessageToServer',(dataFromClient)=>{
        console.log("Data:",dataFromClient);
        io.emit('newMessageToClients',{text:dataFromClient.text});
    })
    socket.emit('nsList', namespaces)
})

namespaces.forEach(ns=>{
  io.of(ns.endpoint).on('connection', socket=>{
    console.log(`${socket.id} has connected to ${ns.endpoint}`)
  })
})