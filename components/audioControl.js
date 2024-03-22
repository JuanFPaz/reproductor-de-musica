/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import mediaPlayer, { actualizarMediaPlayerDataSong, actualizarMediaPlayerTimeProgress, actualizarMediaPlayerTimeSong } from './mediaPlayer.js'

export default function audioControl ({ playlist }) {
  let { indice, maxIndice, currentPlaylist } = {
    indice: 0,
    currentPlaylist: [...playlist],
    maxIndice: playlist.length,
    random: false,
    repeat: false
  }

  /* Instancia inicial */
  const audio = new Audio()
  audio.src = currentPlaylist[indice].src
  mediaPlayer(document.querySelector('.media-player-container'), { ...currentPlaylist[indice] })

  /* Creamos Setters */
  const setIncremento = () => {
    indice = indice >= maxIndice - 1 ? 0 : ++indice % maxIndice
    audio.pause()
    audio.src = currentPlaylist[indice].src
    audio.play()
    actualizarMediaPlayerDataSong({ ...currentPlaylist[indice] })
  }

  const setDecremento = () => {
    indice = indice <= 0 ? maxIndice - 1 : --indice % maxIndice
    audio.pause()
    audio.src = currentPlaylist[indice].src
    audio.play()
    actualizarMediaPlayerDataSong({ ...currentPlaylist[indice] })
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
    document.querySelector('#playbar_progress').value = 0
    actualizarMediaPlayerDataSong({ ...currentPlaylist[indice] })
  }

  const setProgressTime = ({ duracion }) => {
    actualizarMediaPlayerTimeProgress({ duracion })
  }
  const setSongTime = ({ duracion }) => {
    actualizarMediaPlayerTimeSong({ duracion })
  } // Eventos de principales
  document.querySelector('#play').addEventListener('click', () => {
    setZero()
  })

  document.querySelector('#prev').addEventListener('click', () => {
    if (audio.currentTime > 1.2) {
      audio.currentTime = 0
      return
    }
    setDecremento()
  })

  document.querySelector('#next').addEventListener('click', () => {
    setIncremento()
  })

  document.querySelector('#playbar_progress').addEventListener('input', (e) => {
    const progressTime = audio.duration * (e.target.value / 100)
    audio.currentTime = progressTime
    setProgressTime({ duracion: audio.currentTime })
  })

  /* Este evento podria estar en un handle en un futuro */
  document.querySelector('table').addEventListener('click', (event) => {
    const fila = event.target.closest('tr')
    const idCancion = fila.id
    const cancion = currentPlaylist.find((pl) => pl.id === idCancion)
    cancion._indice = currentPlaylist.indexOf(cancion)
    setEleccion({ cancion })
  })

  audio.addEventListener('timeupdate', () => {
    const updateProgressBar = (audio.currentTime / audio.duration) * 100
    document.querySelector('#playbar_progress').value = updateProgressBar
    document.querySelector('#playbar_progress').style.setProperty('--progress-value', updateProgressBar)
    setProgressTime({ duracion: audio.currentTime })
  })

  audio.addEventListener('loadedmetadata', () => {
    setSongTime({ duracion: audio.duration })
  })

  audio.addEventListener('ended', () => {
    setIncremento()
  })
}
