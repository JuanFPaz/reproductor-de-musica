/* eslint-disable import/no-absolute-path */

import moonage from '/data/david-bowie/David-Bowie-Moonage-Daydream.mp3'
import letsDance from '/data/david-bowie/David-Bowie-Lets-Dance.mp3'
import modernLove from '/data/david-bowie/David-Bowie-Modern-Love.mp3'
import chinaGirl from '/data/david-bowie/David-Bowie-China-Girl.mp3'

const DAVID_BOWIE = [
  {
    id: crypto.randomUUID(),
    titulo: 'Moonage Daydream',
    artista: 'David Bowie',
    album: '',
    src: moonage,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Modern Love',
    artista: 'David Bowie',
    album: '',
    src: modernLove,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Lets Dance',
    artista: 'David Bowie',
    album: '',
    src: letsDance,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'China Girl',
    artista: 'David Bowie',
    album: '',
    src: chinaGirl,
    duracion: 0
  }
]

export default DAVID_BOWIE
