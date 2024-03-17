/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './style.css'
import { Playlist, Reproductor } from './Componentes/playlist.js'
import { datosPlaylist, playlist } from './Componentes/mixPlaylist.js'
import { ActualizarDuracion, EstablecerPlaylist, EstablecerReproductor } from './Componentes/completePlaylist.js'

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

Reproductor(document.querySelector('#reproductor')); // <-Forzar semicolon para separar de la IIFE

//
(async () => {
  // AUDIO Control
  let { indice, maxIndice } = {
    indice: 0,
    maxIndice: playlist.length
  }
  const audio = new Audio()
  audio.src = playlist[indice].src

  // const tiempoDelAudio = (idx) => {
  //   return new Promise((resolve) => {
  //     const nuevoAudio = new Audio()
  //     nuevoAudio.src = playlist[idx].src
  //     nuevoAudio.addEventListener('loadedmetadata', () => {
  //       resolve(nuevoAudio.duration)
  //     })
  //   })
  // }
  // playlist.forEach(async (pl, idx) => {
  //   pl.duracion = await tiempoDelAudio(idx)
  //   console.log(`${pl.titulo} dura: ${pl.duracion}`)
  // })

  // console.log(playlist)
  // console.log(playlist[0].duracion)
  // let duracionTotal = 0

  // playlist.forEach(pl => {
  //   duracionTotal = duracionTotal + pl.duracion
  // })

  // datosPlaylist.duracion = duracionTotal

  const setIncremento = () => {
    indice = indice >= maxIndice - 1 ? 0 : ++indice % maxIndice
    audio.pause()
    audio.src = playlist[indice].src
    audio.play()
    document.querySelector('#progress').value = 0
    EstablecerReproductor(document.querySelector('#datos-song'), { unaCancion: playlist[indice] })
  }

  const setDecremento = () => {
    indice = indice <= 0 ? maxIndice - 1 : --indice % maxIndice
    audio.pause()
    audio.src = playlist[indice].src
    audio.play()
    document.querySelector('#progress').value = 0
    EstablecerReproductor(document.querySelector('#datos-song'), { unaCancion: playlist[indice] })
  }

  const setZero = () => {
    if (audio.paused) {
      audio.play()
      document.querySelector('#play').innerHTML = 'Stop'
    } else {
      audio.pause()
      document.querySelector('#play').innerHTML = 'Play'
    }
  }

  const setEleccion = ({ cancion }) => {
    indice = cancion._indice
    audio.pause()
    audio.src = cancion.src
    audio.play()
    document.querySelector('#progress').value = 0
    EstablecerReproductor(document.querySelector('#datos-song'), { unaCancion: cancion })
  }

  const setProgressTime = ({ unaDuracion }) => {
    ActualizarDuracion(document.querySelector('#time-progress'), { unaDuracion })
  }
  // Rellenar Playlist.

  EstablecerPlaylist(document.querySelector('.tabla-container'), { playlist, datosPlaylist })
  EstablecerReproductor(document.querySelector('#datos-song'), { unaCancion: playlist[0] })

  // EVENTOS DE AUDIO CONTROL

  document.querySelector('#play').addEventListener('click', () => {
    setZero()
  })

  document.querySelector('#prev').addEventListener('click', () => {
    setDecremento()
  })

  document.querySelector('#next').addEventListener('click', () => {
    setIncremento()
  })

  document.querySelector('#progress').addEventListener('input', (e) => {
    const progressTime = audio.duration * (e.target.value / 100)
    audio.currentTime = progressTime
    setProgressTime({ unaDuracion: audio.currentTime })
  })

  document.querySelector('table').addEventListener('click', (event) => {
    if (event.target.tagName === 'TD') {
      const fila = event.target.parentNode
      const idCancion = fila.id
      const cancion = playlist.find((pl) => pl.id === idCancion)
      cancion._indice = playlist.indexOf(cancion)
      setEleccion({ cancion })
    }
  })

  audio.addEventListener('timeupdate', () => {
    const updateProgressBar = (audio.currentTime / audio.duration) * 100
    document.querySelector('#progress').value = updateProgressBar
    document.querySelector('#progress').style.setProperty('--progress-value', updateProgressBar)
    setProgressTime({ unaDuracion: audio.currentTime })
  })

  audio.addEventListener('ended', () => {
    setIncremento()
  })
})()
