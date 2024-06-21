import amerika from '/data/rammstein/Rammstein-Amerika.mp3'
import moskau from '/data/rammstein/Rammstein-Moskau.mp3'

const RAMMSTEIN = [
  {
    id: crypto.randomUUID(),
    titulo: 'Amerika',
    artista: 'Rammstein',
    album: '',
    src: amerika,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Moskau',
    artista: 'Rammstein',
    album: '',
    src: moskau,
    duracion: 0
  }
]

export default RAMMSTEIN
