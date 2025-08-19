import biblioteca from '../Biblioteca/biblioteca.js'
import artista from '../Artista/artista.js'
import request from '../../services/request.js'
import './home.css'
import router from '../../services/router.js'

export default function home () {
  const appContainer = document.querySelector('#app')
  const headerContainer = document.createElement('header')
  const mainContainer = document.createElement('main')
  const footerContainer = document.createElement('footer')

  const dataBiblioteca = []
  let Biblioteca
  let Artista

  function init () {
    setData(request) // Croe que esto, de llamar un seter en el constructor en TS no se podia. aca si se ve
    headerContainer.setAttribute('class', 'header')
    headerContainer.setAttribute('id', 'header')
    mainContainer.setAttribute('class', 'main')
    mainContainer.setAttribute('id', 'main')
    footerContainer.setAttribute('class', 'footer')
    footerContainer.setAttribute('id', 'footer')
    appContainer.appendChild(headerContainer)
    appContainer.appendChild(mainContainer)
    appContainer.appendChild(footerContainer)

    Biblioteca = biblioteca()
    Artista = artista()
  }

  function setData (req) {
    const data = req()
    data.init()
    data.getDataBiblioteca().forEach((d) => dataBiblioteca.push(d))
  }

  function getDataSelect (id) {
    console.log('getDataSelect')
    console.log(dataBiblioteca)
    console.log(id)

    const [artista] = dataBiblioteca.filter(db => db.id === id[0])
    console.log(artista)

    return artista
  }
  function render () {
    router('/', () => {
      console.log(dataBiblioteca)
      Biblioteca.init({ data: dataBiblioteca, className: 'col-12' })
      Biblioteca.render()
      Biblioteca.eventSelectArtista(({ id, href }) => {
        window.history.pushState(null, null, href)
        render()
      })
    })

    router('/artista/:id', (params) => {
      console.log('en /artista/:id')
      console.log('id: ' + params)
      const dataSelect = getDataSelect(params)
      Biblioteca.init({ data: dataBiblioteca, className: 'col-3' })
      Biblioteca.render()
      Biblioteca.eventSelectArtista(({ id, href }) => {
        window.history.pushState(null, null, href)
        render()
      })

      Artista.init({ data: dataSelect, className: 'col-9' })
      Artista.render()
    })
  }
  return {
    init,
    render
  }
}
