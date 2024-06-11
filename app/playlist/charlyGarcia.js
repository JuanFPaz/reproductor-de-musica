/* eslint-disable import/no-absolute-path */
import PromisesAboutBidet from '/data/charly-garcia/Charly-Garcia-Promesas-Sobre-El-Bidet.mp3'
import RarosPeinados from '/data/charly-garcia/Charly-Garcia-Raros-peinados-nuevos.mp3'
import PianoBar from '/data/charly-garcia/Charly-Garcia-Piano-Bar.mp3'
import TotalInterferencia from '/data/charly-garcia/Charly-Garcia-Total-Interferencia.mp3'
import PlateadoSobrePlateado from '/data/charly-garcia/Charly-Garcia-Plateado-sobre-plateado.mp3'
import NoSoyUnExtraño from '/data/charly-garcia/Charly-Garcia-No-soy-un-extraño.mp3'

const CHARLY_GARCIA = [
  {
    id: crypto.randomUUID(),
    titulo: 'Plateado Sobre Plateado (Huellas en el mar)',
    artista: 'Charly Garcia',
    album: 'Clics modernos',
    src: PlateadoSobrePlateado,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'No soy un extraño',
    artista: 'Charly Garcia',
    album: 'Clics modernos',
    src: NoSoyUnExtraño,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Promesas sobre el bidet',
    artista: 'Charly Garcia',
    album: 'Piano Bar',
    src: PromisesAboutBidet,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Raros Peinados Nuevos',
    artista: 'Charly Garcia',
    album: 'Piano Bar',
    src: RarosPeinados,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Piano Bar',
    artista: 'Charly Garcia',
    album: 'Piano Bar',
    src: PianoBar,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Total Inteferencia',
    artista: 'Charly Garcia',
    album: 'Piano Bar',
    src: TotalInterferencia,
    duracion: 0
  }
]

export default CHARLY_GARCIA
