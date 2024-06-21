/* eslint-disable import/no-absolute-path */
import les from '/data/childish-gambino/Childish-Gambino-Les.mp3'
import redbone from '/data/childish-gambino/Childish-Gambino-Redbone.mp3'

const CHILDISH = [
  {
    id: crypto.randomUUID(),
    titulo: 'Les',
    artista: 'Childish Gambino',
    album: '',
    src: les,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Redbone',
    artista: 'Childish Gambino',
    album: '',
    src: redbone,
    duracion: 0
  }
]

export default CHILDISH
