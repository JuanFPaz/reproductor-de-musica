import './mediaPlayer.css'

export default function mediaPlayer (element, { titulo, artista }) {
  const mPlayer = `
    <div id='media-player-dataSong'>
      ${titulo} - ${artista}
    </div>
    <div id='media-player-button'>
      <button id='random'>Random</button>
      <button id='prev'>Prev</button>
      <button id='play'>Play</button>
      <button id='next'>Next</button>
      <button id='repeat' disabled>Repeat</button>
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
      <input type="range" class='playbar_progress' id="playbar_progress" min="0" max="100" value="0">
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
