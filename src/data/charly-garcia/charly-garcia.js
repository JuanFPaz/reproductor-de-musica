import profile from './images/profile.webp'
import noToquen from './audios/Charly-Garcia-No-Toquen.mp3'
import yendoDeLaCamaAlLiving from './audios/Charly-Garcia-Yendo-De-La-Cama-Al-Living.mp3'
import nosSiguenPegando from './audios/Charly-Garcia-Nos-Siguen-Pegando-Abajo.mp3'
import demoliendoHoteles from './audios/Charly-Garcia-Demoliendo-Hoteles.mp3'
import PromisesAboutBidet from './audios/Charly-Garcia-Promesas-Sobre-El-Bidet.mp3'
import RarosPeinados from './audios/Charly-Garcia-Raros-peinados-nuevos.mp3'
import PianoBar from './audios/Charly-Garcia-Piano-Bar.mp3'
import TotalInterferencia from './audios/Charly-Garcia-Total-Interferencia.mp3'
import PlateadoSobrePlateado from './audios/Charly-Garcia-Plateado-sobre-plateado.mp3'
import NoSoyUnExtraño from './audios/Charly-Garcia-No-soy-un-extraño.mp3'
import NoSeVaALlamar from './audios/Charly-Garcia-No-Se-Va-A-Llamar-Mi-Amor.mp3'
/* Portadas */
import picYendoDeLaCama from './images/yendo.jpg'
import picPianoBar from './images/piano-bar.jpg'
import picClicsModernos from './images/clics-modernos.jpg'
import picComoConseguirChicas from './images/como-conseguir-chicas.jpg'

const id = crypto.randomUUID().replace(/-/g, '').slice(0, 10)
function charlyGarcia () {
  const dataArtista = {
    id,
    nombre: 'Charly Garcia',
    tipo: 'Artista',
    profile,
    href: `/artista/${id}`
  }

  const dataAudios = [
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Yendo de la cama al living',
      artista: 'Charly Garcia',
      album: 'Yendo de la cama al living',
      src: yendoDeLaCamaAlLiving,
      pic: picYendoDeLaCama,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Nos Siguen Pegando Abajo',
      artista: 'Charly Garcia',
      album: 'Clics modernos',
      src: nosSiguenPegando,
      pic: picClicsModernos,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'No soy un extraño',
      artista: 'Charly Garcia',
      album: 'Clics modernos',
      src: NoSoyUnExtraño,
      pic: picClicsModernos,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Plateado Sobre Plateado (Huellas en el mar)',
      artista: 'Charly Garcia',
      album: 'Clics modernos',
      src: PlateadoSobrePlateado,
      pic: picClicsModernos,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Demoliendo Hoteles',
      artista: 'Charly Garcia',
      album: 'Piano Bar',
      src: demoliendoHoteles,
      pic: picPianoBar,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Promesas sobre el bidet',
      artista: 'Charly Garcia',
      album: 'Piano Bar',
      src: PromisesAboutBidet,
      pic: picPianoBar,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Raros Peinados Nuevos',
      artista: 'Charly Garcia',
      album: 'Piano Bar',
      src: RarosPeinados,
      pic: picPianoBar,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'No se va a llamar Mi Amor',
      artista: 'Charly Garcia',
      album: 'Piano Bar',
      src: NoSeVaALlamar,
      pic: picPianoBar,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Piano Bar',
      artista: 'Charly Garcia',
      album: 'Piano Bar',
      src: PianoBar,
      pic: picPianoBar,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'Total Inteferencia',
      artista: 'Charly Garcia',
      album: 'Piano Bar',
      src: TotalInterferencia,
      pic: picPianoBar,
      duracion: 0
    },
    {
      id: crypto.randomUUID().replace(/-/g, '').slice(0, 10),
      titulo: 'No toquen',
      artista: 'Charly Garcia',
      album: 'Como conseguir chicas',
      src: noToquen,
      pic: picComoConseguirChicas,
      duracion: 0
    }
  ]

  function getArtista () {
    const canciones = dataAudios.length
    dataArtista.canciones = canciones
    return dataArtista
  }

  function getAudios () {
    return dataAudios
  }
  return {
    getArtista,
    getAudios
  }
}

export default charlyGarcia
