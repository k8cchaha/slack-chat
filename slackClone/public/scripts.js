console.log('Client Start')
const userName = prompt('Whats your name?')
const userPW = prompt('Whats your password?')

const socket = io('http://localhost:9001')

socket.on('connect', ()=>{
  console.log('Connected!')
  socket.emit('clientConnect')
})

socket.on('nsList', (data)=>{
  console.log(data)
  const namespacesDiv = document.querySelector('.namespaces')
  data.forEach(ns=>{
    // updated the HTML
    namespacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`
  })

  Array.from(document.getElementsByClassName('namespace')).forEach((elem)=>{
    console.log(elem)
    elem.addEventListener('click', e => {
      const nsEndpoint = elem.getAttribute('ns')
      console.log(nsEndpoint)

      const clickdNs = data.find(row=>row.endpoint === nsEndpoint)
      const rooms = clickdNs.rooms

      let roomList = document.querySelector('.room-list')
      roomList.innerHTML = ''
      rooms.forEach(room=>{
        roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.roomTitle}</li>`
      })
    })

  })
})