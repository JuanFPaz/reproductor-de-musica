/* eslint-disable n/no-callback-literal */
import './biblioteca.css'

export default function biblioteca () {
  const mainContainer = document.querySelector('main')

  const bibliotecaContainer = document.createElement('div')
  const bibliotecaView = document.createElement('div')

  let idBibliotecaView = 'biblioteca-0'
  let enlacesArtistas

  let dataBiblioteca

  function init ({ data, className }) {
    dataBiblioteca = data
    bibliotecaContainer.setAttribute('class', `biblioteca ${className}`)
    bibliotecaContainer.setAttribute('id', 'biblioteca')
    bibliotecaView.setAttribute('class', 'biblioteca-view')

    bibliotecaView.innerHTML = `
    <div class="biblioteca-header pt-3 pb-1 px-3">
      <div>
        <h1>Mi Biblioteca</h1></div>
        <div>
          <button id="new-playlist">Crear Playlist</button>
        </div>
      </div>
      <div class="biblioteca-nav pt-2 pb-1 px-3">
        <nav>
          <button>Listas</button>
          <button>Artistas</button>
          <button>Canciones</button>
        </nav>
        <div>
           <div>
              <button>Ordenar por:</button>
              <button>Ver Como:</button>
            </div>
        </div>
      </div>
      <div class="biblioteca-main" id='biblioteca-main'>
        <div class="biblioteca-grid">
          No hay nada aun :(
        </div>
      </div>
    `

    mainContainer.appendChild(bibliotecaContainer)
    bibliotecaContainer.appendChild(bibliotecaView)
  }

  function render () {
    bibliotecaView.setAttribute('id', idBibliotecaView)
    document.querySelector('#biblioteca-main').innerHTML = `
      <div class="biblioteca-list">
          ${dataBiblioteca.map(
            (db) => `
            <a href=${db.href} class='enlaces-artistas' id=${db.id}>
              <div class="image-container">
                <img src=${db.profile} alt="Foto de perfil de ${db.nombre} " />
                <div class="biblioteca-data">
                  <span>${db.nombre}</span>
                  <span>${db.tipo} · ${db.canciones} Canciones</span>
                </div>
              </div>
            </a>
            `
          ).join('')}
      </div>
    `

    enlacesArtistas = document.querySelectorAll('a.enlaces-artistas')
  }

  function eventSelectArtista (callback) {
    enlacesArtistas.forEach((artista) => {
      artista.addEventListener('click', (e) => {
        e.preventDefault()
        // const id = e.currentTarget.id
        const href = e.currentTarget.href
        callback({ href })
      })
    })
  }

  function setViewBiblioteca (value) {
    idBibliotecaView = value
  }
  return { init, render, eventSelectArtista, setViewBiblioteca }
}
