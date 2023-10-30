console.log('Client Start')
const userName = prompt('Whats your name?')
const userPW = prompt('Whats your password?')

const socket = io('http://localhost:9001')

const namespaceSockets = []
const listeners = {
  nsChange: []
}

const addListeners = (nsId) => {
  if (!listeners.nsChange[nsId]) {
    namespaceSockets[nsId].on('nsChange', data=>{
      console.log('Namespace changed')
      console.log(data)
    })
    listeners.nsChange[nsId] = true
  }
}

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
    
    if (!namespaceSockets[ns.id]) {
      namespaceSockets[ns.id] = io(`http://localhost:9001${ns.endpoint}`)
    }
    
    addListeners(ns.id)
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