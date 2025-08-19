import babasonicos from '../data/babasonicos/babasonicos'
import charlyGarcia from '../data/charly-garcia/charly-garcia'

export default function request () {
  const dataBiblioteca = []

  function init () {
    dataBiblioteca.push(babasonicos().getDataArtista())
    dataBiblioteca.push(charlyGarcia().getDataArtista())
  }

  function getDataBiblioteca () {
    return dataBiblioteca
  }

  return {
    init,
    getDataBiblioteca
  }
}
