/* eslint-disable import/no-absolute-path */
import EstosHombres from '/data/almendra/Almendra-A-Estos-Hombres-Tristes.mp3'
import TemaPototo from '/data/alemdnra/Almendra-Tema-De-Pototo.mp3'
import Plegaria from '/data/almendra/Almendra-Plegaria-para-un-niño-dormido.mp3'

const ALMENDRA = [
  {
    id: crypto.randomUUID(),
    titulo: 'A estos Hombres Tristes',
    artista: 'Almendra',
    album: 'Almendra',
    src: EstosHombres,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Tema de Pototo',
    artista: 'Almendra',
    album: '',
    src: TemaPototo,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Plegaria para un niño dormido',
    artista: 'Almendra',
    album: '',
    src: Plegaria,
    duracion: 0
  }
]

export default ALMENDRA
