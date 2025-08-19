export default function artista () {
  const mainContainer = document.querySelector('main')

  const artistaContainer = document.createElement('div')
  const artistaView = document.createElement('div')

  let dataArtista

  function init ({ data, className }) {
    dataArtista = data
    artistaContainer.setAttribute('class', `artista ${className} container-fluid`)
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
    `

    mainContainer.appendChild(artistaContainer)
    artistaContainer.appendChild(artistaView)
  }

  function render () {
    document.querySelector('#artista-main').innerHTML = `
    `
  }

  return { init, render }
}
