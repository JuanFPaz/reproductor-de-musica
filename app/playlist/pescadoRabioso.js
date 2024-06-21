import Bajan from '/data/pescado-rabioso/Pescado-Rabioso-Bajan.mp3'
import CementerioClub from '/data/pescado-rabioso/Pescado-Rabioso-Cementerio-Club.mp3'

const PESCADO_RABIOSO = [
  {
    id: crypto.randomUUID(),
    titulo: 'Bajan',
    artista: 'Pescado Rabioso',
    album: 'Artaud',
    src: Bajan,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Cementerio Club',
    artista: 'Pescado Rabioso',
    album: 'Artaud',
    src: CementerioClub,
    duracion: 0
  }
]

export default PESCADO_RABIOSO
