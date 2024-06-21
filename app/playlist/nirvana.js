import drainu from '/data/nirvana/Nirvana-Drain-You.mp3'
import inBloom from '/data/nirvana/Nirvana-In-Bloom.mp3'
import loungeAc from '/data/nirvana/Nirvana-Lounge-Act.mp3'

const NIRVANA = [
  {
    id: crypto.randomUUID(),
    titulo: 'Drain You',
    artista: 'Nirvana',
    album: 'Nevermind',
    src: drainu,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'In Bloom',
    artista: 'Nirvana',
    album: 'Nevermind',
    src: inBloom,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Lounge Act',
    artista: 'Nirvana',
    album: 'Nevermind',
    src: loungeAc,
    duracion: 0
  }
]

export default NIRVANA
