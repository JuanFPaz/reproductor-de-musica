/* eslint-disable import/no-absolute-path */
import NoTengoGanas from '/data/intoxicados/Intoxicados-No-tengo-ganas.mp3'

const INTOXICADOS = [
  {
    id: crypto.randomUUID(),
    titulo: 'No Tengo Ganas',
    artista: 'Intoxicados',
    album: '',
    src: NoTengoGanas,
    duracion: 0
  }
]

export default INTOXICADOS
