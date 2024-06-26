import './mediaPlayer.css'
import './buttonMediaPlayer.css'
import play from '/media-player/play.png'
import pause from '/media-player/pause.png'
import random from '/media-player/random.png'
import nextprev from '/media-player/next.png'
import repeat from '/media-player/repeat.png'

export default function mediaPlayer (element, { titulo, artista }) {
  const mPlayer = `
    <div id='media-player-dataSong'>
      ${titulo} - ${artista}
    </div>
        <div id='media-player-time'>
      <div class='time_left'>
          <span id="time-progress">0 : 00</span>
      </div>
      <div class='time_right'>
          <span id="time-song">0 : 00</span>
      </div>
    </div>
    <div id='media-player-playbar'>
      <input type="range" class='playbar_progress' id="playbar_progress" min="0" max="100" value="0" focus>
    </div>
    <div id='media-player-button'>
      <button id='random'><img src=${random}></button>
      <button id='prev'><img src=${nextprev}></button>
      <button id='play'><img src=${play}></button>
      <button id='next'><img src=${nextprev}></button>
      <button id='repeat' disabled><img src=${repeat}></button>
    </div>
    `
  element.innerHTML = mPlayer
}

export function actualizarMediaPlayerDataSong ({ titulo, artista }) {
  document.querySelector('#media-player-dataSong').innerHTML = `
    ${titulo} - ${artista}
  `
}

export function actualizarMediaPlayerTimeProgress ({ duracion }) {
  document.querySelector('#time-progress').innerHTML = `${Math.floor(duracion / 60).toString()} : ${Math.floor(duracion % 60).toString().padStart(2, '0')}`
}

export function actualizarMediaPlayerTimeSong ({ duracion }) {
  document.querySelector('#time-song').innerHTML = `${Math.floor(duracion / 60).toString()} : ${Math.floor(duracion % 60).toString().padStart(2, '0')}`
}

export function actualizarMediaPlayButton ({ _play }) {
  document.querySelector('#play img').src = _play ? play : pause
  document.querySelector('#play').setAttribute('class', _play ? '' : 'active')
}

export function actualizarMediaRandomButton ({ random }) {
  document.querySelector('#random').setAttribute('class', random ? 'active' : '')
}
