import profile from './images/profile.webp'

// const id = crypto.randomUUID().replace(/-/g, '').slice(0, 10)
function charlyGarcia () {
  const id = '2423fds'

  const dataArtista = {
    id,
    nombre: 'Charly Garcia',
    tipo: 'Artista',
    canciones: 4,
    profile,
    href: `/artista/${id}`
  }

  function getDataArtista () {
    return dataArtista
  }

  return {
    getDataArtista
  }
}

export default charlyGarcia
