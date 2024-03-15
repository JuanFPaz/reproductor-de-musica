/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './style.css'
import { Playlist, Reproductor } from './Componentes/playlist.js'
import { datosPlaylist, playlist } from './Componentes/primera-playlist.js'
import { EstablecerPlaylist } from './Componentes/completePlaylist.js'

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

// PRIMERO CREAMOS EL DOM:
Playlist(document.querySelector('#playlist'))

Reproductor(document.querySelector('#reproductor'))

// AUDIO Control
let { indice, maxIndice } = {
  indice: 0,
  maxIndice: playlist.length
}
const audio = new Audio()
audio.src = playlist[indice].src

const tiempoDelAudio = (idx) => {
  return new Promise((resolve) => {
    const nuevoAudio = new Audio()
    nuevoAudio.src = playlist[idx].src
    nuevoAudio.addEventListener('loadedmetadata', () => {
      resolve(nuevoAudio.duration)
    })
  })
}
playlist[0].duracion = await tiempoDelAudio(0)
playlist[1].duracion = await tiempoDelAudio(1)
playlist[2].duracion = await tiempoDelAudio(2)
playlist[3].duracion = await tiempoDelAudio(3)
playlist[4].duracion = await tiempoDelAudio(4)
playlist[5].duracion = await tiempoDelAudio(5)
playlist[6].duracion = await tiempoDelAudio(6)
playlist[7].duracion = await tiempoDelAudio(7)
playlist[8].duracion = await tiempoDelAudio(8)
playlist[9].duracion = await tiempoDelAudio(9)
playlist[10].duracion = await tiempoDelAudio(10)
playlist[11].duracion = await tiempoDelAudio(11)
playlist[12].duracion = await tiempoDelAudio(12)

let duracionTotal = 0
playlist.forEach(pl => {
  duracionTotal = duracionTotal + pl.duracion
})

datosPlaylist.duracion = duracionTotal

const setIncremento = () => {
  indice = indice >= maxIndice - 1 ? 0 : ++indice % maxIndice
  console.log(indice)
  audio.pause()
  audio.src = playlist[indice].src
  audio.play()
}

const setDecremento = () => {
  indice = indice <= 0 ? maxIndice - 1 : --indice % maxIndice
  console.log(indice)
  audio.pause()
  audio.src = playlist[indice].src
  audio.play()
}

const setZero = () => {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}

const setEleccion = ({ cancion }) => {
  console.log(cancion._indice)
  indice = cancion._indice
  audio.pause()
  audio.src = cancion.src
  audio.play()
}
// Rellenar Playlist.

EstablecerPlaylist(document.querySelector('.tabla-container'), { playlist, datosPlaylist })

// EVENTOS DE AUDIO CONTROL

document.querySelector('#play').addEventListener('click', () => {
  setZero()
})

document.querySelector('#prev').addEventListener('click', () => {
  setDecremento()
  console.log(indice)
})

document.querySelector('#next').addEventListener('click', () => {
  setIncremento()
  console.log(indice)
})

document.querySelector('table').addEventListener('click', (event) => {
  if (event.target.tagName === 'TD') {
    const fila = event.target.parentNode
    const idCancion = fila.id
    const cancion = playlist.find((pl) => {
      if (pl.id === idCancion) {
        return pl
      }
    })
    cancion._indice = playlist.indexOf(cancion)
    setEleccion({ cancion })
  }
})

audio.addEventListener('ended', () => {
  setIncremento()
  console.log(indice)
})
