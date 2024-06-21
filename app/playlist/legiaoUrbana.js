/* eslint-disable import/no-absolute-path */
import indios from '/data/legiao-urbana/Legião-Urbana-Indios.mp3'
import tempoPerdido from '/data/legiao-urbana/Legião-Urbana-Tempo-Perdido.mp3'

const LEGIAO_URBANA = [
  {
    id: crypto.randomUUID(),
    titulo: 'Indios',
    artista: 'Legião Urbana',
    album: '',
    src: indios,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Tempo Perdido',
    artista: 'Legião Urbana',
    album: '',
    src: tempoPerdido,
    duracion: 0
  }
]

export default LEGIAO_URBANA
