/* eslint-disable n/no-callback-literal */
import './artista.css'

export default function artista () {
  const mainContainer = document.querySelector('main')

  const artistaContainer = document.createElement('div')
  const artistaView = document.createElement('div')

  let botonBack

  let dataArtista
  let dataPlaylist

  let tableRowsSong

  function init ({ data, className }) {
    dataArtista = data.dataArtista
    dataPlaylist = data.dataPlaylist
    artistaContainer.setAttribute('class', `artista ${className}`)
    artistaContainer.setAttribute('id', 'artista')
    artistaView.setAttribute('class', 'artista-view')

    artistaView.innerHTML = `
    <div class="artista-header pt-3 pb-1 px-3">
        <div class="boton-volver d-lg-none" id='botonBack'>
          <button> <- Volver atras (?</button>
        </div>
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
    botonBack = document.querySelector('#botonBack')
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

  function eventSelectSong (callback) {
    tableRowsSong.forEach((rowSong) => {
      rowSong.addEventListener('click', (e) => {
        const id = e.currentTarget.id

        const [selectSong] = dataPlaylist.filter(dp => dp.id === id)
        callback({ data: { dataSong: selectSong, dataPlaylist, dataArtista } })
      })
    })
  }

  function eventBotonBack (callback) {
    botonBack.addEventListener('click', () => {
      artistaContainer.setAttribute('class', 'artista d-none col-sm-12 col-lg-10 px-1')
      callback()
    })
  }
  return { init, render, eventSelectSong, eventBotonBack }
}
