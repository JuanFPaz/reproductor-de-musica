/* eslint-disable no-undef */
/* eslint-disable promise/param-names */
export default async function getAllDuration ({ infoPlaylist, playlist: playlistPromises }) {
  const playlist = await Promise.all(playlistPromises.map((pl) => {
    return new Promise(res => {
      let { duracion } = pl
      const audio = new Audio()
      audio.src = pl.src
      audio.addEventListener('loadedmetadata', () => {
        duracion = audio.duration
        res(
          { ...pl, duracion }
        )
      })
    })
  }))

  const duracionMs = playlist.reduce((total, pl) => {
    return total + pl.duracion
  }, 0)

  infoPlaylist.duracion = duracionMs

  return {
    infoPlaylist,
    playlist
  }
}
