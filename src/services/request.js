import almendra from '../data/almendra/almendra.js'
import articMonkeys from '../data/arctic-monkeys/arcticMonkeys.js'
import babasonicos from '../data/babasonicos/babasonicos.js'
import blur from '../data/blur/blur.js'
import catupecuMachu from '../data/catupecu-machu/catupecuMachu.js'
import charlyGarcia from '../data/charly-garcia/charlyGarcia.js'
import chicoBuarque from '../data/chico-buarque/chicoBuarque.js'
import childishGambino from '../data/childish-gambino/childishGambino.js'
import ccr from '../data/creedence-clearwater-revival/ccr.js'
import cuartetoDeNos from '../data/cuarteto-de-nos/cuartetoDeNos.js'
import daftPunk from '../data/daft-punk/daftpunk.js'
import darylJohn from '../data/daryl-hall-&-john-oates/darylJohn.js'
import davidBowie from '../data/david-bowie/davidBowie.js'
import direStraits from '../data/dire-straits/direStraits.js'
import divididos from '../data/divididos/divididos.js'
import harmless from '../data/harmless/harmless.js'
import heroesDelSilencio from '../data/heroes-del-silencio/heroesDelSilencio.js'
import intoxicados from '../data/intoxicados/intoxicados.js'
import joeyRamone from '../data/joey-ramone/joeyRamone.js'
import johnLennon from '../data/john-lennon/johnLennon.js'
import lasPelotas from '../data/las-pelotas/lasPelotas.js'
import lauraBranigan from '../data/laura-branigan/lauraBranigan.js'
import legiaoUrbana from '../data/legiao-urbana/legiaoUrbana.js'
import losAbuelosDeLaNada from '../data/los-abuelos/losAbuelosDeLaNada.js'
import losAutenticosDecadentes from '../data/los-autenticos-decadentes/losAutenticosDecadentes.js'
import losCaballerosdelaQuema from '../data/los-caballeros-de-la-quema/losCaballerosdelaQuema.js'
import losFabulososCadillacs from '../data/los-fabulosos/losFabulososCadillacs.js'
import losPiojos from '../data/los-piojos/losPiojos.js'
import losRodriguez from '../data/los-rodriguez/losRodriguez.js'
import losTipitos from '../data/los-tipitos/losTipitos.js'

export default function request () {
  const data = []

  function init () {
    // window.localStorage.removeItem('data')
    const localData = JSON.parse(window.localStorage.getItem('data'))

    if (!localData) {
      data.push({ dataArtista: almendra().getArtista(), dataAudios: almendra().getAudios() })
      data.push({ dataArtista: articMonkeys().getArtista(), dataAudios: articMonkeys().getAudios() })
      data.push({ dataArtista: babasonicos().getArtista(), dataAudios: babasonicos().getAudios() })
      data.push({ dataArtista: blur().getArtista(), dataAudios: blur().getAudios() })
      data.push({ dataArtista: catupecuMachu().getArtista(), dataAudios: catupecuMachu().getAudios() })
      data.push({ dataArtista: charlyGarcia().getArtista(), dataAudios: charlyGarcia().getAudios() })
      data.push({ dataArtista: chicoBuarque().getArtista(), dataAudios: chicoBuarque().getAudios() })
      data.push({ dataArtista: childishGambino().getArtista(), dataAudios: childishGambino().getAudios() })
      data.push({ dataArtista: ccr().getArtista(), dataAudios: ccr().getAudios() })
      data.push({ dataArtista: cuartetoDeNos().getArtista(), dataAudios: cuartetoDeNos().getAudios() })
      data.push({ dataArtista: daftPunk().getArtista(), dataAudios: daftPunk().getAudios() })
      data.push({ dataArtista: darylJohn().getArtista(), dataAudios: darylJohn().getAudios() })
      data.push({ dataArtista: davidBowie().getArtista(), dataAudios: davidBowie().getAudios() })
      data.push({ dataArtista: direStraits().getArtista(), dataAudios: direStraits().getAudios() })
      data.push({ dataArtista: divididos().getArtista(), dataAudios: divididos().getAudios() })
      data.push({ dataArtista: harmless().getArtista(), dataAudios: harmless().getAudios() })
      data.push({ dataArtista: heroesDelSilencio().getArtista(), dataAudios: heroesDelSilencio().getAudios() })
      data.push({ dataArtista: intoxicados().getArtista(), dataAudios: intoxicados().getAudios() })
      data.push({ dataArtista: joeyRamone().getArtista(), dataAudios: joeyRamone().getAudios() })
      data.push({ dataArtista: johnLennon().getArtista(), dataAudios: johnLennon().getAudios() })
      data.push({ dataArtista: lasPelotas().getArtista(), dataAudios: lasPelotas().getAudios() })
      data.push({ dataArtista: lauraBranigan().getArtista(), dataAudios: lauraBranigan().getAudios() })
      data.push({ dataArtista: legiaoUrbana().getArtista(), dataAudios: legiaoUrbana().getAudios() })
      data.push({ dataArtista: losAbuelosDeLaNada().getArtista(), dataAudios: losAbuelosDeLaNada().getAudios() })
      data.push({ dataArtista: losAutenticosDecadentes().getArtista(), dataAudios: losAutenticosDecadentes().getAudios() })
      data.push({ dataArtista: losCaballerosdelaQuema().getArtista(), dataAudios: losCaballerosdelaQuema().getAudios() })
      data.push({ dataArtista: losFabulososCadillacs().getArtista(), dataAudios: losFabulososCadillacs().getAudios() })
      data.push({ dataArtista: losPiojos().getArtista(), dataAudios: losPiojos().getAudios() })
      data.push({ dataArtista: losRodriguez().getArtista(), dataAudios: losRodriguez().getAudios() })
      data.push({ dataArtista: losTipitos().getArtista(), dataAudios: losTipitos().getAudios() })

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
