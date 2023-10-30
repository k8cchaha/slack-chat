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
    namespacesDiv.innerHTML += `<div class="namespace" ns="${ns.name}"><img src="${ns.image}"></div>`
  })
})