/* eslint-disable import/no-absolute-path */
import CoffeAndTv from '/data/blur/Blur-Coffee-&-TV.mp3'
import GirlsAndBoys from '/data/blur/Blur-Girls-&-Boys.mp3'
import Parklife from '/data/blur/Blur-Parklife.mp3'
const BLUR = [
  {
    id: crypto.randomUUID(),
    titulo: 'Coffee & TV',
    artista: 'Blur',
    album: '',
    src: CoffeAndTv,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Girls & Boys',
    artista: 'Blur',
    album: '',
    src: GirlsAndBoys,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Parklife',
    artista: 'Blur',
    album: '',
    src: Parklife,
    duracion: 0
  }
]

export default BLUR
