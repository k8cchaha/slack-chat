const Namespace = require('../classes/Namespace')
const Room = require('../classes/Room')

const wikiNs = new Namespace(0, 'Wikipedia', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png', '/wiki')
const mozNs = new Namespace(1, 'Mozilla', 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png', '/mozilla')
const linuxNs = new Namespace(2, 'Linux', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png','/linux')

wikiNs.addRoom(new Room (0, 'Kobe Bryant', 0))
wikiNs.addRoom(new Room (1, 'Michael Jordan', 0))
wikiNs.addRoom(new Room (2, 'Magic Johnson', 0))

mozNs.addRoom(new Room (0, 'Food', 1))
mozNs.addRoom(new Room (1, 'Tech', 1))
mozNs.addRoom(new Room (2, 'Finance', 1))
mozNs.addRoom(new Room (3, 'Medical', 1))

linuxNs.addRoom(new Room (0, 'Red Head', 2))
linuxNs.addRoom(new Room (1, 'Ubuntu', 2))

// const wikiNs = {
//   name: '/wiki',
//   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png'
// }

// const mozNs = {
//   name: '/mozilla',
//   image: 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png'
// }

// const linuxNs = {
//   name: '/linux',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png'
// }

const namespaces = [wikiNs, mozNs, linuxNs]

module.exports = namespaces