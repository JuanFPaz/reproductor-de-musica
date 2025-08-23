/* eslint-disable no-undef */
import nextButton from '../../assets/media-player/next.png'
import playButton from '../../assets/media-player/play.png'
import pauseButton from '../../assets/media-player/pause.png'
import randomButton from '../../assets/media-player/random.png'
import repeatButton from '../../assets/media-player/repeat.png'

export default function mediaPlayer () {
  let audio
  let indice = 0
  let maxIndice = 0
  let currentPlaylist = []
  let currentAudio = null

  const footerContainer = document.querySelector('footer')

  const mediaPlayerInfo = document.createElement('div')
  const mediaPlayerControl = document.createElement('div')
  const mediaPlayerControlDos = document.createElement('div')

  function init () {
    audio = new Audio()
    mediaPlayerInfo.setAttribute('class', 'media-player-info')
    mediaPlayerControl.setAttribute('class', 'media-player-control')
    mediaPlayerControlDos.setAttribute('class', 'media-player-relleno')

    footerContainer.appendChild(mediaPlayerInfo)
    footerContainer.appendChild(mediaPlayerControl)
    footerContainer.appendChild(mediaPlayerControlDos)
  }

  function render () {
    if (!currentAudio) {
      mediaPlayerControl.innerHTML = `
          <div class="media-player-button">
            <button id="random" disabled><img src="${randomButton} " /></button>
            <button id="prev" disabled><img src="${nextButton}" /></button>
            <button id="play" disabled><img src="${playButton}" /></button>
            <button id="next" disabled><img src="${nextButton}" /></button>
            <button id="repeat" disabled>
              <img src="${repeatButton} " />
            </button>
          </div>
          <div class="media-player-playbar">
            <div class="time-container">
              <span id="time-progress">-- : --</span>
            </div>
            <input
              disabled
              type="range"
              class="playbar-progress"
              id="playbar-progress"
              min="0"
              max="100"
              value="0"
              focus
            />
            <div class="time-container">
              <span id="time-song">-- : --</span>
            </div>
          </div
    `
    } else {
      mediaPlayerInfo.innerHTML = `
          <div class="media-player-pic">
            <div class="image-container">
              <img src=${currentAudio.pic} alt="Imagen 1" />
            </div>
          </div>
          <div class="media-player-data-song">
            <span id="song-name">${currentAudio.titulo}</span>
            <span id="artis-name">${currentAudio.artista} </span>
          </div>      
      `
      mediaPlayerControl.innerHTML = `
          <div class="media-player-button">
            <button id="random" ><img src="${randomButton} " /></button>
            <button id="prev" ><img src="${nextButton}" /></button>
            <button id="play" ><img src="${playButton}" /></button>
            <button id="next" ><img src="${nextButton}" /></button>
            <button id="repeat" >
              <img src="${repeatButton} " />
            </button>
          </div>
          <div class="media-player-playbar">
            <div class="time-container">
              <span id="time-progress">00 : 00</span>
            </div>
            <input
              type="range"
              class="playbar-progress"
              id="playbar-progress"
              min="0"
              max="100"
              value="0"
              focus
            />
            <div class="time-container">
              <span id="time-song">00 : 00</span>
            </div>
          </div
    `

      window.addEventListener('beforeunload', () => {
        const guardarSesion = {
          indice,
          currentPlaylist,
          currentAudio,
          currentTime: audio.currentTime
        }

        localStorage.setItem('dataSesion', JSON.stringify(guardarSesion))
      })
      audio.addEventListener('loadedmetadata', () => {
        mediaPlayerInfo.innerHTML = `
          <div class="media-player-pic">
            <div class="image-container">
              <img src="${currentAudio.pic} " alt="Imagen 1" />
            </div>
          </div>
          <div class="media-player-data-song">
            <span id="song-name">${currentAudio.titulo}</span>
            <span id="artis-name">${currentAudio.artista} </span>
          </div>      
      `
        document.querySelector('#time-song').innerHTML = `${Math.floor(audio.duration / 60).toString().padStart(2, '0')} : ${Math.floor(audio.duration % 60).toString().padStart(2, '0')}`

        if ('mediaSession' in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: currentAudio.titulo,
            artist: currentAudio.artista,
            album: currentAudio.album,
            artwork: [
              {
                src: currentAudio.pic,
                sizes: '96x96',
                type: 'image/*'
              },
              {
                src: currentAudio.pic,
                sizes: '128x128',
                type: 'image/*'
              },
              {
                src: currentAudio.pic,
                sizes: '192x192',
                type: 'image/*'
              },
              {
                src: currentAudio.pic,
                sizes: '256x256',
                type: 'image/*'
              },
              {
                src: currentAudio.pic,
                sizes: '384x384',
                type: 'image/*'
              },
              {
                src: currentAudio.pic,
                sizes: '512x512',
                type: 'image/*'
              }
            ]
          })
        }
      })
      document.querySelector('#play').addEventListener('click', () => {
        setPlay()
      })
      document.querySelector('#prev').addEventListener('click', () => {
        setDecremento()
      })
      document.querySelector('#next').addEventListener('click', () => {
        setIncremento()
      })
      document.querySelector('#playbar-progress').addEventListener('input', (e) => {
        const progressTime = audio.duration * (e.target.value / 100)
        audio.currentTime = progressTime
        document.querySelector('#time-progress').innerHTML = `${Math.floor(audio.currentTime / 60).toString().padStart(2, '0')} : ${Math.floor(audio.currentTime % 60).toString().padStart(2, '0')}`
      })
      audio.addEventListener('play', () => {
        document.querySelector('#play img').src = pauseButton
      })
      audio.addEventListener('pause', () => {
        document.querySelector('#play img').src = playButton
      })
      audio.addEventListener('ended', () => {
        setIncremento()
        mediaPlayerInfo.innerHTML = `
          <div class="media-player-pic">
            <div class="image-container">
              <img src="${currentAudio.pic} " alt="Imagen 1" />
            </div>
          </div>
          <div class="media-player-data-song">
            <span id="song-name">${currentAudio.titulo}</span>
            <span id="artis-name">${currentAudio.artista} </span>
          </div>      
      `
      })
      audio.addEventListener('timeupdate', () => {
        const updateProgressBar = (audio.currentTime / audio.duration) * 100
        document.querySelector('#playbar-progress').value = updateProgressBar
        document.querySelector('#playbar-progress').style.setProperty('--progress-value', updateProgressBar)
        document.querySelector('#time-progress').innerHTML = `${Math.floor(audio.currentTime / 60).toString().padStart(2, '0')} : ${Math.floor(audio.currentTime % 60).toString().padStart(2, '0')}`
      })
      if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', function () {
          setPlay()
        })

        navigator.mediaSession.setActionHandler('pause', function () {
          setPlay()
        })

        navigator.mediaSession.setActionHandler('previoustrack', function () {
          setDecremento()
        })

        navigator.mediaSession.setActionHandler('nexttrack', function () {
          setIncremento()
        })
      }
    }
  }

  function setPlay () {
    if (audio.paused) {
      audio.play()
      navigator.mediaSession.playbackState = 'playing'
    } else {
      audio.pause()
      navigator.mediaSession.playbackState = 'paused'
    }
  }
  function setDataSesion () {
    const dataSesion = JSON.parse(localStorage.getItem('dataSesion'))

    if (!dataSesion) return

    indice = dataSesion.indice
    currentAudio = dataSesion.currentAudio
    currentPlaylist = dataSesion.currentPlaylist
    audio.src = currentAudio.src
    audio.currentTime = dataSesion.currentTime
    maxIndice = currentPlaylist.length - 1
  }
  function setPlaylist ({ data }) {
    currentPlaylist = data.dataPlaylist
    currentAudio = data.dataSong
    maxIndice = currentPlaylist.length - 1
    indice = currentPlaylist.indexOf(currentAudio)
    audio.src = currentAudio.src
    audio.play()
  }

  function setIncremento () {
    audio.pause()
    indice = indice === maxIndice ? 0 : ++indice
    currentAudio = currentPlaylist[indice]
    audio.src = currentAudio.src
    audio.play()
  }

  function setDecremento () {
    if (audio.currentTime > 1.5) {
      audio.currentTime = 0
      return
    }
    audio.pause()
    indice = indice === 0 ? maxIndice : --indice
    currentAudio = currentPlaylist[indice]
    audio.src = currentAudio.src
    audio.play()
  }
  return {
    init,
    render,
    setDataSesion,
    setPlaylist
  }
}
