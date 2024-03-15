function EstablecerPlaylist (unElemento, { playlist, datosPlaylist }) {
  const playList = `
  <div>
    <h1>${datosPlaylist.artista} - ${datosPlaylist.album}</h1>
    <img src=${datosPlaylist.img}>
    <p>Lanzamiento: ${datosPlaylist.lanzamiento}</p>
  </div>
  <table>
    <thead>
      <th>#</th>
      <th>Titulo</th>
      <th>Artista</th>
      <th>Álbum</th>
      <th>Duración</th>
    </thead>
    <tbody>
    ${playlist.map((pl, idx) => {
      return `
      <tr id=${pl.id}>
        <td>${idx + 1}</td>
        <td class='titulo-song'>${pl.titulo}</td>
        <td class='artista'>${pl.artista}</td>
        <td>${pl.album}</td>
        <td>${Math.floor(pl.duracion / 60).toString()} : ${Math.floor(pl.duracion % 60).toString().padStart(2, '0')}</td>
      </tr>
      `
    })}
    </tbody>
  </table>
  `
  unElemento.innerHTML = playList
}

function EstablecerReproductor (unElemento, { unaCancion }) {
  const reproductor = `
    <div>
      <ul>
        <li>${unaCancion.titulo} - ${unaCancion.artista}</li>
      </ul>
    </div>
  `

  unElemento.innerHTML = reproductor
}

export { EstablecerPlaylist, EstablecerReproductor }
