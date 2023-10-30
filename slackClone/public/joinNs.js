
const joinNs = (elem, data) => {
  const nsEndpoint = elem.getAttribute('ns')
  console.log(nsEndpoint)

  const clickdNs = data.find(row=>row.endpoint === nsEndpoint)
  const rooms = clickdNs.rooms

  let roomList = document.querySelector('.room-list')
  roomList.innerHTML = ''
  rooms.forEach(room=>{
    roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.roomTitle}</li>`
  })

  localStorage.setItem('lastNs', nsEndpoint)
}