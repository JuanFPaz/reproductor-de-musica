import router from '../../services/router.js'
import biblioteca from '../Biblioteca/biblioteca.js'
import artista from '../Artista/artista.js'
import mediaPlayer from '../MediaPlayer/mediaPlayer.js'
import './home.css'

export default function home () {
  const appContainer = document.querySelector('#app')
  const headerContainer = document.createElement('header')
  const mainContainer = document.createElement('main')
  const footerContainer = document.createElement('footer')

  // Data Base
  let dataBase
  let dataBiblioteca = []
  let dataArtista = {}
  let dataPlaylist = []
  let dataMediaPlayer = {}
  // Componentes
  let Biblioteca
  let Artista
  let MediaPlayer

  function init ({ req }) {
    dataBase = req

    headerContainer.setAttribute('class', 'header')
    headerContainer.setAttribute('id', 'header')
    mainContainer.setAttribute('class', 'main container-fluid')
    mainContainer.setAttribute('id', 'main')
    footerContainer.setAttribute('class', 'footer')
    footerContainer.setAttribute('id', 'footer')
    appContainer.appendChild(headerContainer)
    appContainer.appendChild(mainContainer)
    appContainer.appendChild(footerContainer)

    Biblioteca = biblioteca()
    Artista = artista()
    MediaPlayer = mediaPlayer()
    MediaPlayer.init()
    MediaPlayer.setDataSesion()
    MediaPlayer.render()
  }

  function setBiblioteca () {
    dataBiblioteca = dataBase.getDataBiblioteca()
  }

  function setArtista (id) {
    try {
      const [artista] = dataBiblioteca.filter(db => db.id === id[0])
      if (!artista) {
        throw new Error('Ocurrio un error filtrando la ID del artista')
      }
      dataArtista = artista
    } catch (error) {
      window.history.pushState(null, null, '/404')
    }
  }

  function setPlaylist (id) {
    try {
      const playlist = dataBase.getDataPlaylist(id[0])
      if (!playlist) throw new Error('Ocurrio un error filtrando la ID del artista')
      dataPlaylist = playlist
    } catch (error) {
      window.history.pushState(null, null, '/404')
    }
  }

  function render () {
    router('/', () => {
      Biblioteca.init({ data: dataBiblioteca, className: 'col-12' })
      Biblioteca.render()
      Biblioteca.eventSelectArtista(({ id, href }) => {
        window.history.pushState(null, null, href)
        render()
      })
    })

    router('/artista/:id', (params) => {
      setArtista(params)
      setPlaylist(params)
      Biblioteca.init({ data: dataBiblioteca, className: 'col-2' })
      Biblioteca.render()
      Biblioteca.eventSelectArtista(({ id, href }) => {
        window.history.pushState(null, null, href)
        render()
      })

      Artista.init({ data: { dataArtista, dataPlaylist }, className: 'col-10' })
      Artista.render()
      Artista.eventeSelectSong((data) => {
        dataMediaPlayer = data
        MediaPlayer.setPlaylist(dataMediaPlayer)
        MediaPlayer.render()
      })
    })

    router('/404', () => {
      mainContainer.innerHTML = 'Ocurrio un error x_x'
    })
  }
  return {
    init,
    render,
    setBiblioteca
  }
}
