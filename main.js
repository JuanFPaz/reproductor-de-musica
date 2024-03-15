/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './style.css'
import welcome from './resource/01-Welcome.mp3'
import haveyouever from './resource/02-Have-You-Ever.mp3'
import staring from './resource/03-Staring-at-The-Sun.mp3'
import prettyFly from './resource/04-Prety-Fly.mp3'
import kidsArentRight from './resource/05-The-Kids-Arent-Alright.mp3'
import feelings from './resource/06-Feelings.mp3'
import shesgotissues from './resource/07-Shes-Got-Issues.mp3'
import wallawalla from './resource/08-Walla-Walla.mp3'
import theEnd from './resource/09-The-End-of-The-Line.mp3'
import noBrakes from './resource/10-No-Brakes.mp3'
import whyDontYouGetAJob from './resource/11-Why-Dont-You-Get-a-Job.mp3'
import americanaSong from './resource/12-Americana.mp3'
import payTheMan from './resource/13-Pay-The-Man.mp3'
import luxaPic from './luxita-pic.jpg'
import { Encabezado, Playlist, Reproductor, establecerReproduccionAutomatica } from './Componentes/playlist.js'

const usuario = {
  nombre: 'Americana',
  img: luxaPic
}

const playlist = [
  {
    id: crypto.randomUUID(),
    titulo: 'Welcome',
    artista: 'The Offspring',
    album: 'Americana',
    src: welcome,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Have you ever',
    artista: 'The Offspring',
    album: 'Americana',
    src: haveyouever,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Staring at the Sun',
    artista: 'The Offspring',
    album: 'Americana',
    src: staring,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Pretty Fly (For a White Guy)',
    artista: 'The Offspring',
    album: 'Americana',
    src: prettyFly,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'The Kids Aren`t Right',
    artista: 'The Offspring',
    album: 'Americana',
    src: kidsArentRight,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Feelings',
    artista: 'The Offspring',
    album: 'Americana',
    src: feelings,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Shes Got Issues',
    artista: 'The Offspring',
    album: 'Americana',
    src: shesgotissues,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Walla Walla',
    artista: 'The Offspring',
    album: 'Americana',
    src: wallawalla,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'The End of The Line',
    artista: 'The Offspring',
    album: 'Americana',
    src: theEnd,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'No Brakes',
    artista: 'The Offspring',
    album: 'Americana',
    src: noBrakes,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Why Dont You Get a Job',
    artista: 'The Offspring',
    album: 'Americana',
    src: whyDontYouGetAJob,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Americana',
    artista: 'The Offspring',
    album: 'Americana',
    src: americanaSong,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Pay The Man',
    artista: 'The Offspring',
    album: 'Americana',
    src: payTheMan,
    duracion: 0
  }
]

const cancion = playlist[0]

document.querySelector('#app').innerHTML = `
  <div id='lctmBrave'>
    <div id='encabezado'>

    </div>
    <div id='playlist'>

    </div>
    <div id='reproductor'>

    </div>
  </div>
`

Encabezado(document.querySelector('#encabezado'), { ...usuario, playlistName: 'Luxita Playlist', playListLength: playlist.length })

Playlist(document.querySelector('#playlist'), { unArreglo: playlist })

Reproductor(document.querySelector('#reproductor'), { cancion })

establecerReproduccionAutomatica({ playlist })
