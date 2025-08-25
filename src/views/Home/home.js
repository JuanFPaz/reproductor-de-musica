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

    headerContainer.setAttribute('class', 'header container-fluid')
    headerContainer.setAttribute('id', 'header')
    mainContainer.setAttribute('class', 'main container-fluid')
    mainContainer.setAttribute('id', 'main')
    footerContainer.setAttribute('class', 'footer container-fluid')
    footerContainer.setAttribute('id', 'footer')
    appContainer.appendChild(headerContainer)
    appContainer.appendChild(mainContainer)
    appContainer.appendChild(footerContainer)

    Biblioteca = biblioteca()
    Artista = artista()
    headerContainer.innerHTML = `
        <form>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Buscar en mi biblioteca"
          />
        </form>
    `
    MediaPlayer = mediaPlayer()
    MediaPlayer.init()
    MediaPlayer.setDataSesion()
    MediaPlayer.render()
  }

  function setBiblioteca () {
    dataBiblioteca = dataBase.getDataBiblioteca()
  }

  function setArtista (id) {
    const [artista] = dataBiblioteca.filter(db => db.id === id[0])
    if (!artista) {
      throw new Error('Ocurrio un error filtrando la ID del artista')
    }
    dataArtista = artista
  }

  function setPlaylist (id) {
    const playlist = dataBase.getDataPlaylist(id[0])
    if (!playlist) throw new Error('Ocurrio un error filtrando la ID del artista')
    dataPlaylist = playlist
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
      Biblioteca.setViewBiblioteca('biblioteca-1')
      try {
        setArtista(params)
        setPlaylist(params)
      } catch (error) {
        window.history.pushState(null, null, '/')
        return render()
      }

      Biblioteca.init({ data: dataBiblioteca, className: 'd-none d-lg-block col-12 col-lg-2 px-1' })
      Biblioteca.render()
      Biblioteca.eventSelectArtista(({ id, href }) => {
        window.history.pushState(null, null, href)
        render()
      })

      Artista.init({ data: { dataArtista, dataPlaylist }, className: 'd-block d-lg-block col-12 col-lg-10 px-1' })
      Artista.render()
      Artista.eventSelectSong((data) => {
        dataMediaPlayer = data
        MediaPlayer.setPlaylist(dataMediaPlayer)
        MediaPlayer.render()
      })
      Artista.eventBotonBack(() => {
        Biblioteca.setViewBiblioteca('biblioteca-0')
        window.history.pushState(null, null, '/')
        render()
      })
    })

    // router('/404', () => {
    //   window.history.pushState(null, null, '/')
    //   render()
    // })
  }
  return {
    init,
    render,
    setBiblioteca
  }
}
