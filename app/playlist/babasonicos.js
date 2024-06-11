/* eslint-disable import/no-absolute-path */
import Delectrico from '/data/babasonicos/Babasonicos-Delectrico.mp3'
import Fizz from '/data/babasonicos/Babasonicos-Fizz.mp3'
import LosCalientes from '/data/babasonicosBabasonicos-Los-Calientes.mp3'
const BABASONICOS = [
  {
    id: crypto.randomUUID(),
    titulo: 'Los Calientes',
    artista: 'Babasonicos',
    album: 'Jessico',
    src: LosCalientes,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Fizz',
    artista: 'Babasonicos',
    album: 'Jessico',
    src: Fizz,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Delectrico',
    artista: 'Babasonicos',
    album: 'Jessico',
    src: Delectrico,
    duracion: 0
  }
]

export default BABASONICOS
