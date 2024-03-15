/* eslint-disable no-undef */
import './playlistyle.css'

// function Encabezado (element) {
//   const encabezado = `
//     <img id='user' src=${img}>
//     <p>LuxitaPaz</p>
//     <h1>${nombre}</h1>
//     <h3>Cargando...</h3>
//   `
//   element.innerHTML = encabezado
// }

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

// function Playlist (element, { unArreglo }) {
//   const playList = `
//   <div class='tabla-container'>
//   <h2>Playlist</h2>
//   <table>
//     <thead>
//       <th>#</th>
//       <th>Titulo</th>
//       <th>Artista</th>
//       <th>Álbum</th>
//       <th>Duración</th>
//     </thead>
//     <tbody>
//     ${unArreglo.map((pl, idx) => {
//       return `
//       <tr id=${pl.id}>
//         <td>${idx + 1}</td>
//         <td class='titulo-song'>${pl.titulo}</td>
//         <td class='artista'>${pl.artista}</td>
//         <td>${pl.album}</td>
//         <td>${Math.floor(pl.duracion / 60)} : ${Math.floor(pl.duracion % 60)}</td>
//       </tr>
//       `
//     })}
//     </tbody>
//   </table>
//   </div>
//   `
//   element.innerHTML = playList

//   document.querySelector('.tabla-container').addEventListener('click', (event) => {
//     if (event.target.parentNode.tagName === 'TR') {
//       const fila = event.target.parentNode
//       const idCancion = fila.id
//       const cancion = unArreglo.find(pl => pl.id === idCancion)
//       if (cancion) {
//         AUDIO.pause()
//         Reproductor(document.querySelector('#reproductor'), { cancion })
//         AUDIO.play()
//       } else {
//         console.log('No se encontró la canción con el ID:', idCancion)
//       }
//     }
//   })
// }

// function Reproductor (element, { cancion }) {
//   AUDIO.src = cancion.src
//   const reproductor = `
//   <p> ${cancion.titulo} - ${cancion.artista}</p>
//     <div>
//     <button id='prev'>Prev</button>
//     <button id='play'>Play</button>
//     <button id='next'>Next</button>
//     </div>
//     `
//   element.innerHTML = reproductor

//   document.querySelector('#play').addEventListener('click', () => {
//     console.log('Se presiono el boton')
//     if (AUDIO.paused) {
//       AUDIO.play()
//     } else {
//       AUDIO.pause()
//     }
//   })
// }

function Reproductor (element) {
  const reproductor = `
    <div id='datos-song'>Cargando...</div>
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
