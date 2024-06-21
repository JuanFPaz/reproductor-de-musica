import crua from '/data/sumo/Sumo-Crua-Chan.mp3'
import beautiful from '/data/sumo/Sumo-Beautiful-Losers.mp3'
import heroina from '/data/sumo/Sumo-Heroina.mp3'
import holaFrank from '/data/sumo/Sumo-Hola-Frank.mp3'
import regtest from '/data/sumo/Sumo-Regtest.mp3'

const SUMO = [
  {
    id: crypto.randomUUID(),
    titulo: 'Beautiful Losers',
    artista: 'Sumo',
    album: '',
    src: beautiful,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Heroina',
    artista: 'Sumo',
    album: '',
    src: heroina,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Crua Chan',
    artista: 'Sumo',
    album: 'After Chabon',
    src: crua,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Hola Frank',
    artista: 'Sumo',
    album: '',
    src: holaFrank,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Regtest',
    artista: 'Sumo',
    album: '',
    src: regtest,
    duracion: 0
  }
]

export default SUMO
