/* eslint-disable no-undef */
import './playlistyle.css'

function Encabezado (element, { nombre, img, playlistName, playListLength }) {
  const encabezado = `
    <img id='user' src=${img}>
    <p>LuxitaPaz</p>
    <h1>${nombre}</h1>
    <h3>${playlistName} - ${playListLength} Canciones </h3>
  `
  element.innerHTML = encabezado
}

function Playlist (element, { unArreglo }) {
  console.log(unArreglo)
  const playList = `
  <div class='tabla-container'>
  <h2>Playlist</h2>
  <table>
    <thead>
      <th>#</th>
      <th>Titulo</th>
      <th>Artista</th>
      <th>Álbum</th>
      <th>Duración</th>
    </thead>
    <tbody>
    ${unArreglo.map((pl, idx) => {
      return `
      <tr id=${pl.id}>
        <td>${idx + 1}</td>
        <td class='titulo-song'>${pl.titulo}</td>
        <td class='artista'>${pl.artista}</td>
        <td>${pl.album}</td>
        <td>${Math.floor(pl.duracion / 60)} : ${Math.floor(pl.duracion % 60)}</td>
      </tr>
      `
    })}
    </tbody>
  </table>
  </div>
  `
  element.innerHTML = playList
}

function Reproductor (element, { cancion }) {
  if (!cancion) {
    const reproductor = `
    <p> No hay cancion en el reproductor</p>
    `
    element.innerHTML = reproductor
  } else {
    console.log('Cancion Seleccionada')
    const reproductor = `
    <div>
    <button id='prev'>Prev</button>
    <button id='play'>Play</button>
    <button id='next'>Next</button>
    </div>

    <p> ${cancion.titulo} - ${cancion.artista}</p>
    `
    element.innerHTML = reproductor
  }
}

export {
  Encabezado,
  Playlist,
  Reproductor
}
