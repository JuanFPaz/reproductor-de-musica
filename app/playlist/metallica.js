/* eslint-disable import/no-absolute-path */

import orion from '/data/metallica/Metallica-Orion.mp3'

const METALLICA = [
  {
    id: crypto.randomUUID(),
    titulo: 'Orion',
    artista: 'Metallica',
    album: 'Master of Puppets',
    src: orion,
    duracion: 0
  }
]

export default METALLICA
