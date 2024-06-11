/* eslint-disable import/no-absolute-path */
import ABanda from '/data/chico-buarque/Chico-Buarque-A-Banda.mp3'
import Apesar from '/data/chico-buarque/Chico-Buarque-Apesar-De-Você.mp3'
import Construsao from '/data/chico-buarque/Chico-Buarque-Construção.mp3'
import Cotidiano from '/data/chico-buarque/Chico-Buarque-Cotidiano.mp3'
import GenieOZepelim from '/data/chico-buarque/Chico-Buarque-Geni-e-o-zepelim.mp3'
import Valsinha from '/data/chico-buarque/Chico-Buarque-Valsinha.mp3'

const CHICO_BUARQUE = [
  {
    id: crypto.randomUUID(),
    titulo: 'Construção',
    artista: 'Chico Buarque',
    album: '',
    src: Construsao,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Cotidiano',
    artista: 'Chico Buarque',
    album: '',
    src: Cotidiano,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Valsinha',
    artista: 'Chico Buarque',
    album: '',
    src: Valsinha,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'A Banda',
    artista: 'Chico Buarque',
    album: '',
    src: ABanda,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Apesar De Você',
    artista: 'Chico Buarque',
    album: '',
    src: Apesar,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Geni E O Zepelim',
    artista: 'Chico Buarque',
    album: '',
    src: GenieOZepelim,
    duracion: 0
  }
]

export default CHICO_BUARQUE
