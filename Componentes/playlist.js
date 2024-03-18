/* eslint-disable no-undef */
import './playlistyle.css'

function Encabezado (element) {
  const encabezado = `
  <h1>Cargando</h1>
  `
  element.innerHTML = encabezado
}

function Playlist (element) {
  const playList = `
  <div class='tabla-container'>
    <h1>Cargando...</h1>
  </div>
  `
  element.innerHTML = playList
}

function Reproductor (element) {
  const reproductor = `
    <div id='datos-song'>
      Cargando...
    </div>
    <div class='playbar'>
      <input type="range" class='playbar_inner' id="progress" min="0" max="100" value="0">
      <div class='playbar_left'>
          <span id="time-progress">0:00</span>
      </div>
      <div class='playbar_right'>
          <span id="time-song">0:00</span>
      </div>
    </div>
    <div>
      <button id='prev'>Prev</button>
      <button id='play'>Play</button>
      <button id='next'>Next</button>
    </div>
    `
  element.innerHTML = reproductor
}

export {
  Encabezado,
  Playlist,
  Reproductor
}
