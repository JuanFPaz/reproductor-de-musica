/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './style.css'
import playlist from './components/playlist.js'
import audioControl from './components/audioControl.js'
import fakeRequest from './components/playlist/mixPlaylist.js'
// import { ActualizarDuracion, EstablecerPlaylist, EstablecerReproductor } from './components/completePlaylist.js'

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
    playlist(document.querySelector('.pseudo-router'), { ...dataPlaylist })
    // audioControl
    audioControl({ ...dataPlaylist })
  } catch (error) {
    console.log(error)
    document.querySelector('.playlist-main-container').innerHTML = `
      <h1>Error: ${error.message}</h1>
    `
  }
}

app()
