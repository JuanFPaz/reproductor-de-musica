import anotheronebite from '/data/queen/Queen-Another-One-Bites-the-Dust.mp3'
import killerqueen from '/data/queen/Queen-Killer-Queen.mp3'

const QUEEN = [
  {
    id: crypto.randomUUID(),
    titulo: 'Another One Bites the Dust',
    artista: 'Queen',
    album: '',
    src: anotheronebite,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Killer Queen',
    artista: 'Queen',
    album: '',
    src: killerqueen,
    duracion: 0
  }
]

export default QUEEN
