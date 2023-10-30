class Room {
  constructor(roomId, roomTitle, namespaceId, privateRoom = false) {
    this.roomId = roomId
    this.roomTitle = roomTitle
    this.namespaceId = namespaceId
    this.privateRoom = privateRoom
    this.history = []
  }

  addMessage(msg) {
    // 訊息過多時把最舊的刪除
    if (this.history.length === 1000) {
      this.history.splice(1)
    }
    this.history.push(msg)
  }

  clearHistory() {
    this.history = []
  }
}

module.exports = Room