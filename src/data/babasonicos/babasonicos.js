/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
import profile from './images/profile.webp'
import putitaxd from './audios/Babasonicos-Putita.mp3'
import irresponsables from './audios/Babasonicos-Irresponsables.mp3'
import Fizz from './audios/Babasonicos-Fizz.mp3'
import LosCalientes from './audios/Babasonicos-Los-Calientes.mp3'
/** portada album */
import jessico from './images/jessico.jpg'
import infame from './images/infame.jpg'

const id = crypto.randomUUID().replace(/-/g, '').slice(0, 10)
function babasonicos () {
  const dataArtista = {
    id,
    nombre: 'Babasonicos',
    tipo: 'Artista',
    profile,
    href: `/artista/${id}`
  }

  const dataAudios = [
    {
      id: crypto.randomUUID(),
      titulo: 'Los Calientes',
      artista: 'Babasonicos',
      album: 'Jessico',
      src: LosCalientes,
      pic: jessico,
      duracion: 0
    },
    {
      id: crypto.randomUUID(),
      titulo: 'Fizz',
      artista: 'Babasonicos',
      album: 'Jessico',
      src: Fizz,
      pic: jessico,
      duracion: 0
    },
    {
      id: crypto.randomUUID(),
      titulo: 'Irresponsables',
      artista: 'Babasonicos',
      album: 'Infame',
      src: irresponsables,
      pic: infame,
      duracion: 0
    },
    {
      id: crypto.randomUUID(),
      titulo: 'Putita',
      artista: 'Babasonicos',
      album: 'Infame',
      src: putitaxd,
      pic: infame,
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

export default babasonicos
