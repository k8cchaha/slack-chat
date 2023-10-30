console.log('Client Start')
const userName = prompt('Whats your name?')
const userPW = prompt('Whats your password?')

const socket = io('http://localhost:9001')

socket.on('connect', ()=>{
  console.log('Connected!')
  socket.emit('clientConnect')
})

socket.on('nsList', (data)=>{
  const lastNs = localStorage.getItem('lastNs')

  console.log(data)
  const namespacesDiv = document.querySelector('.namespaces')
  data.forEach(ns=>{
    // updated the HTML
    namespacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`
    // 為每個 namespace 建立連線
    io(`http://localhost:9001${ns.endpoint}`)
  })

  Array.from(document.getElementsByClassName('namespace')).forEach((elem)=>{
    console.log(elem)
    elem.addEventListener('click', e => {
      joinNs(elem, data)
    })
  })

  // web init
  // TODO: If lastNs is set, grab that element instead of 0
  joinNs(document.getElementsByClassName('namespace')[0], data)
})