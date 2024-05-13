/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import mediaPlayer, { actualizarMediaPlayerDataSong, actualizarMediaPlayerTimeProgress, actualizarMediaPlayerTimeSong } from './mediaPlayer.js'

export default function audioControl ({ playlist }) {
  let { indice, maxIndice, currentPlaylist, random } = {
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

  // Set para el evento Prev
  const setDecremento = () => {
    indice = indice <= 0 ? maxIndice - 1 : --indice % maxIndice
    audio.pause()
    audio.src = currentPlaylist[indice].src
    audio.play()
    actualizarMediaPlayerDataSong({ ...currentPlaylist[indice] })
  }

  // Set para el evento Play/Puase
  const setZero = () => {
    if (audio.paused) {
      audio.play()
      document.querySelector('#play').innerHTML = 'Stop'
    } else {
      audio.pause()
      document.querySelector('#play').innerHTML = 'Play'
    }
  }

  // Set para el seleccion en Playlist table
  const setEleccion = ({ cancion }) => {
    indice = cancion._indice
    audio.pause()
    audio.src = cancion.src
    actualizarMediaPlayerDataSong({ ...currentPlaylist[indice] })
    setZero()
    console.log(currentPlaylist)
  }

  // Set para el time Progress + barra de progreso
  const setProgressTime = ({ duracion }) => {
    actualizarMediaPlayerTimeProgress({ duracion })
  }

  // Set para establcer duracion de la cancion
  const setSongTime = ({ duracion }) => {
    actualizarMediaPlayerTimeSong({ duracion })
  }

  // Setters para random
  const setRandom = () => {
    if (!random) {
      random = true

      const randomPlaylist = [...currentPlaylist].sort(() => Math.random() - 0.5)
      const indexCurrentAudio = randomPlaylist.indexOf(currentPlaylist[indice])
      randomPlaylist.splice(indexCurrentAudio, 1)
      randomPlaylist.splice(0, 0, currentPlaylist[indice])
      currentPlaylist = randomPlaylist
      indice = 0
      actualizarMediaPlayerDataSong({ ...currentPlaylist[indice] })
      document.querySelector('#random').style.backgroundColor = 'blue'
    } else {
      random = false
      const currentAudio = currentPlaylist[indice]
      currentPlaylist = [...playlist]
      indice = currentPlaylist.indexOf(currentAudio)
      document.querySelector('#random').style.backgroundColor = ''
    }
  }

  // Solucion del setRandomEleccion: No le indique nunca al audio.src cual debe ser su nuevo source.-
  const setRandomEleccion = ({ cancion }) => {
    const randomPlaylist = [...currentPlaylist].sort(() => Math.random() - 0.5)
    const indexCurrentAudio = randomPlaylist.indexOf(currentPlaylist[cancion._indice])
    randomPlaylist.splice(indexCurrentAudio, 1)
    randomPlaylist.splice(0, 0, currentPlaylist[cancion._indice])
    currentPlaylist = randomPlaylist
    indice = 0
    audio.pause()
    audio.src = cancion.src
    actualizarMediaPlayerDataSong({ ...currentPlaylist[indice] })
    setZero()
    console.log(currentPlaylist)
  }

  // Eventos de principales
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

  document.querySelector('#random').addEventListener('click', () => {
    setRandom()
  })

  document.querySelector('#playbar_progress').addEventListener('input', (e) => {
    const progressTime = audio.duration * (e.target.value / 100)
    audio.currentTime = progressTime
    setProgressTime({ duracion: audio.currentTime })
  })

  document.querySelector('table').addEventListener('click', (event) => {
    const fila = event.target.closest('tr')
    const idCancion = fila.id
    const cancion = currentPlaylist.find((pl) => pl.id === idCancion)
    cancion._indice = currentPlaylist.indexOf(cancion)
    if (!random) {
      setEleccion({ cancion })
    } else {
      setRandomEleccion({ cancion })
    }
  })

  audio.addEventListener('timeupdate', () => {
    const updateProgressBar = (audio.currentTime / audio.duration) * 100
    document.querySelector('#playbar_progress').value = updateProgressBar
    document.querySelector('#playbar_progress').style.setProperty('--progress-value', updateProgressBar)
    setProgressTime({ duracion: audio.currentTime })
  })

  audio.addEventListener('loadedmetadata', () => {
    setSongTime({ duracion: currentPlaylist[indice].duracion })
  })

  audio.addEventListener('ended', () => {
    setIncremento()
  })
}
