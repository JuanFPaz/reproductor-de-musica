import './playlist.css'
import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs'

const colorThief = new ColorThief()

export default function playlist ({ routerProvider, playlist, infoPlaylist }) {
  document.querySelector(routerProvider).innerHTML = `
        <div id='playlist-main-container'>
            <div id='playlist-header'>
            </div>
            <div id='playlist-body'>
            </div>
        </div>
    `
  headerPlaylist({ ...infoPlaylist, playlist })
  bodyPlaylist({ playlist })
}

function headerPlaylist ({ nombrePlaylist, playlistPic, userPic, userName, lanzamiento, duracion, playlist }) {
  document.querySelector('#playlist-header').innerHTML = `
        <div id='playlist-header-column-one'>
            <div class='img-container'>
                <img src=${userPic} />
            </div>
        </div>
        <div id='playlist-header-column-two'>
            <h1>${nombrePlaylist}</h1>
            <ul>
                <li>Creada por: ${userName} </li>
                <li>Fecha de creacion: ${lanzamiento}</li>
                <li>Duracion: ${Math.floor(duracion / 60).toString()} : ${Math.floor(duracion % 60).toString().padStart(2, '0')}</li>
                <li>Canciones: ${playlist.length}</li>
            </ul>
        </div>

    `

  document.querySelector('img').addEventListener('load', (e) => {
    const [r, g, b] = colorThief.getColor(e.target)
    const plHeader = document.querySelector('#playlist-header')
    plHeader.style.setProperty('--colorThief-value', `${r},${g},${b}`)
  })
}

function bodyPlaylist ({ playlist }) {
  document.querySelector('#playlist-body').innerHTML = `
        <div id='playlist-body-table'>
            <table>
                <thead>
                    <th>#</th>
                    <th>Cancion</th>
                    <th>Duracion</th>
                </thead>
                <tbody>
                    ${playlist
                      .map((pl, idx) => {
                        return `
                      <tr id=${pl.id}>
                          <td id=${pl.id}>${idx + 1}</td>
                          <td class='td-info-song' id=${pl.id}>
                              ${tdInfo(pl)}
                          </td>
                          <td> ${Math.floor(pl.duracion / 60).toString()} : ${Math.floor(pl.duracion % 60).toString().padStart(2, '0')}</td>
                      </tr>
                      `
                      })
                      .join('')}
                </tbody>
            </table>
        </div>
    `
}

function tdInfo ({ titulo, artista, album }) {
  return `
        <div class='info-song-container'>
            <div class='info-song-albumPic'>
            </div>
            <div class='info-song-dataSong'>
                <span>${titulo} - ${album}</span>
                <span>${artista}</span>
            </div>
        </div>
    `
}
