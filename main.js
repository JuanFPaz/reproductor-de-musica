/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './style.css'
import playlist from './components/playlist.js'
import fakeRequest from './components/playlist/mixPlaylist.js'
import audioControl from './components/audioControl.js'

async function app () {
  document.querySelector('#app').innerHTML = `
    <h1>Cargando<h1>
  `
  try {
    const dataPlaylist = await fakeRequest()
    document.querySelector('#app').innerHTML = `
    <div class='pseudo-router'>
    </div>
    <div class='media-player-container'>
    </div>
  `
    /* Crear un helper, que recorre la playlist, rellene la duracion de cada cancion. */
    playlist({ routerProvider: '.pseudo-router', ...dataPlaylist })
    audioControl({ ...dataPlaylist })
  } catch (error) {
    console.log(error)
    document.querySelector('.playlist-main-container').innerHTML = `
      <h1>Error: ${error.message}</h1>
    `
  }
}

app()
