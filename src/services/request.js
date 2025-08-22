import babasonicos from '../data/babasonicos/babasonicos.js'
import charlyGarcia from '../data/charly-garcia/charly-garcia.js'

export default function request () {
  const data = []

  function init () {
    const localData = JSON.parse(window.localStorage.getItem('data'))
    console.log(localData)

    if (!localData) {
      data.push({ dataArtista: babasonicos().getArtista(), dataAudios: babasonicos().getAudios() })
      data.push({ dataArtista: charlyGarcia().getArtista(), dataAudios: charlyGarcia().getAudios() })
      window.localStorage.setItem('data', JSON.stringify(data))
      return
    }

    localData.forEach(ld => data.push(ld))
  }

  function getData () {
    return data
  }
  function getDataBiblioteca () {
    return data.map((d) => d.dataArtista)
  }

  function getDataPlaylist (id) {
    const [_data] = data.filter(d => d.dataArtista.id === id)
    return _data.dataAudios
  }
  return {
    init,
    getData,
    getDataBiblioteca,
    getDataPlaylist
  }
}
