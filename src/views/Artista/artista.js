/* eslint-disable n/no-callback-literal */
import './artista.css'

export default function artista () {
  const mainContainer = document.querySelector('main')

  const artistaContainer = document.createElement('div')
  const artistaView = document.createElement('div')

  let dataArtista
  let dataPlaylist

  let tableRowsSong

  function init ({ data, className }) {
    dataArtista = data.dataArtista
    dataPlaylist = data.dataPlaylist
    artistaContainer.setAttribute('class', `artista ${className} px-2`)
    artistaContainer.setAttribute('id', 'artista')
    artistaView.setAttribute('class', 'artista-view')

    artistaView.innerHTML = `
    <div class="artista-header pt-3 pb-1 px-3">
        <div class="image-container">
          <img src=${dataArtista.profile} alt="Imagen 1" />
          <div class="artista-data">
            <h1>${dataArtista.nombre}</h1>
            <h1>${dataArtista.tipo} </h1>
          </div>
        </div>
    </div>
    <div class='artista-tabla pt-3 pb-1 px-3"'>
        Cargando playliist
    </div>    
    `

    mainContainer.appendChild(artistaContainer)
    artistaContainer.appendChild(artistaView)
  }

  function render () {
    document.querySelector('.artista-tabla').innerHTML = `
              <div class="tabla-control"></div>
              <div class="tabla-playlist">
                <h1>Lista Completa:</h1>
                <table class="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Título</th>
                      <th scope="col">Album</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${dataPlaylist
                      .map(
                        (dp, idx) => `
                        <tr id=${dp.id}>
                          <th scope="row">${idx + 1}</th>
                          <td>${dp.titulo} </td>
                          <td>${dp.album} </td>
                        </tr>                      
                      `
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
    `

    tableRowsSong = document.querySelectorAll('tr')
  }

  function eventeSelectSong (callback) {
    tableRowsSong.forEach((rowSong) => {
      rowSong.addEventListener('click', (e) => {
        const id = e.currentTarget.id
        const [selectSong] = dataPlaylist.filter(dp => dp.id === id)
        callback({ data: { dataSong: selectSong, dataPlaylist } })
      })
    })
  }
  return { init, render, eventeSelectSong }
}
