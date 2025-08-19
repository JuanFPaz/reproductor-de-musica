import profile from './images/profile.webp'
import putitaxd from './audios/Babasonicos-Putita.mp3'
import irresponsables from './audios/Babasonicos-Irresponsables.mp3'
import Fizz from './audios/Babasonicos-Fizz.mp3'
import LosCalientes from './audios/Babasonicos-Los-Calientes.mp3'

function babasonicos () {
  const id = 'a124asf'
  const dataArtista = {
    id,
    nombre: 'Babasonicos',
    tipo: 'Artista',
    canciones: 4,
    profile,
    href: `/artista/${id}`
  }

  // const dataAudios = [
  //   {
  //     id: crypto.randomUUID(),
  //     titulo: 'Los Calientes',
  //     artista: 'Babasonicos',
  //     album: 'Jessico',
  //     src: LosCalientes,
  //     duracion: 0
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     titulo: 'Fizz',
  //     artista: 'Babasonicos',
  //     album: 'Jessico',
  //     src: Fizz,
  //     duracion: 0
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     titulo: 'Irresponsables',
  //     artista: 'Babasonicos',
  //     album: 'Infame',
  //     src: irresponsables,
  //     duracion: 0
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     titulo: 'Putita',
  //     artista: 'Babasonicos',
  //     album: 'Infame',
  //     src: putitaxd,
  //     duracion: 0
  //   }
  // ]

  function getDataArtista () {
    return dataArtista
  }

  return {
    getDataArtista
  }
}

export default babasonicos
