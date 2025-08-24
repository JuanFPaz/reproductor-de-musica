import almendra from '../data/almendra/almendra.js'
import articMonkeys from '../data/arctic-monkeys/arcticMonkeys.js'
import autenticosDecadentes from '../data/autenticos-decadentes/autenticosDecadentes.js'
import babasonicos from '../data/babasonicos/babasonicos.js'
import blur from '../data/blur/blur.js'
import catupecuMachu from '../data/catupecu-machu/catupecuMachu.js'
import charlyGarcia from '../data/charly-garcia/charlyGarcia.js'
import chicoBuarque from '../data/chico-buarque/chicoBuarque.js'
import childishGambino from '../data/childish-gambino/childishGambino.js'
import ccr from '../data/creedence-clearwater-revival/ccr.js'

export default function request () {
  const data = []

  function init () {
    window.localStorage.removeItem('data')
    const localData = JSON.parse(window.localStorage.getItem('data'))

    if (!localData) {
      data.push({ dataArtista: almendra().getArtista(), dataAudios: almendra().getAudios() })
      data.push({ dataArtista: articMonkeys().getArtista(), dataAudios: articMonkeys().getAudios() })
      data.push({ dataArtista: autenticosDecadentes().getArtista(), dataAudios: autenticosDecadentes().getAudios() })
      data.push({ dataArtista: babasonicos().getArtista(), dataAudios: babasonicos().getAudios() })
      data.push({ dataArtista: blur().getArtista(), dataAudios: blur().getAudios() })
      data.push({ dataArtista: catupecuMachu().getArtista(), dataAudios: catupecuMachu().getAudios() })
      data.push({ dataArtista: charlyGarcia().getArtista(), dataAudios: charlyGarcia().getAudios() })
      data.push({ dataArtista: chicoBuarque().getArtista(), dataAudios: chicoBuarque().getAudios() })
      data.push({ dataArtista: childishGambino().getArtista(), dataAudios: childishGambino().getAudios() })
      data.push({ dataArtista: ccr().getArtista(), dataAudios: ccr().getAudios() })
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
