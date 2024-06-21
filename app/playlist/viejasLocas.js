import Homero from '/data/viejas-locas/Viejas-Locas-Homero.mp3'

const VIEJAS_LOCAS = [
  {
    id: crypto.randomUUID(),
    titulo: 'Homero',
    artista: 'Viejas Locas',
    album: '',
    src: Homero,
    duracion: 0
  }
]

export default VIEJAS_LOCAS
