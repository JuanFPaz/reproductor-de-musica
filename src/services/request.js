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
import macMiller from '../data/mac-miller/macMiller.js'
import metallica from '../data/metallica/metallica.js'
import misfits from '../data/misfits/misfits.js'
import muse from '../data/muse/muse.js'
import nirvana from '../data/nirvana/nirvana.js'
import noDoubt from '../data/no-doubt/noDoubt.js'
import oasis from '../data/oasis/oasis.js'
import patricioRey from '../data/patricio-rey/patricioRey.js'
import pescadoRabioso from '../data/pescado-rabioso/pescadoRabioso.js'
import pixies from '../data/pixies/pixies.js'
import queen from '../data/queen/queen.js'
import rageAgainst from '../data/rage-against/rageAgainst.js'
import rammstein from '../data/rammstein/rammstein.js'
import ramones from '../data/ramones/ramones.js'
import seruGiran from '../data/seru-giran/seruGiran.js'
import smino from '../data/smino/smino.js'
import sodaStereo from '../data/soda-stereo/sodaStereo.js'
import sumo from '../data/sumo/sumo.js'
import tameImpala from '../data/tame-impala/tameImpala.js'
import theBeatles from '../data/the-beatles/theBeatles.js'
import theCranberries from '../data/the-cranberries/theCranberries.js'
import theDoors from '../data/the-doors/theDoors.js'
import theOffspring from '../data/the-offspring/theOffspring.js'
import thePolice from '../data/the-police/thePolice.js'
import theSmiths from '../data/the-smiths/theSmiths.js'
import theStrokes from '../data/the-strokes/theStrokes.js'
import thinLizzy from '../data/thin-lizzy/thinLizzy.js'
import turf from '../data/turf/turf.js'
import viejasLocas from '../data/viejas-locas/viejasLocas.js'
import virus from '../data/virus/virus.js'

export default function request () {
  const data = []

  function init () {
    /** TODO:
     * No solo comprobar si la instancia localData existe,
     * tambien, hacer una comprobacion para cuando actualice la carpeta data
     * sea agregando nuevos artistas, o más audios, o algo por el estilo
     * poder sobreeescribir lo que tenemos en localData, sin eliminar los ID'S
     * detodas formas gh pages no le importa mucho las urls q le pasamos, pero bueno
     * ya lo voy a solucionar a eso.
     */
    const localData = JSON.parse(window.localStorage.getItem('dataDos'))

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
      data.push({ dataArtista: macMiller().getArtista(), dataAudios: macMiller().getAudios() })
      data.push({ dataArtista: metallica().getArtista(), dataAudios: metallica().getAudios() })
      data.push({ dataArtista: misfits().getArtista(), dataAudios: misfits().getAudios() })
      data.push({ dataArtista: muse().getArtista(), dataAudios: muse().getAudios() })
      data.push({ dataArtista: nirvana().getArtista(), dataAudios: nirvana().getAudios() })
      data.push({ dataArtista: noDoubt().getArtista(), dataAudios: noDoubt().getAudios() })
      data.push({ dataArtista: oasis().getArtista(), dataAudios: oasis().getAudios() })
      data.push({ dataArtista: patricioRey().getArtista(), dataAudios: patricioRey().getAudios() })
      data.push({ dataArtista: pescadoRabioso().getArtista(), dataAudios: pescadoRabioso().getAudios() })
      data.push({ dataArtista: pixies().getArtista(), dataAudios: pixies().getAudios() })
      data.push({ dataArtista: queen().getArtista(), dataAudios: queen().getAudios() })
      data.push({ dataArtista: rageAgainst().getArtista(), dataAudios: rageAgainst().getAudios() })
      data.push({ dataArtista: rammstein().getArtista(), dataAudios: rammstein().getAudios() })
      data.push({ dataArtista: ramones().getArtista(), dataAudios: ramones().getAudios() })
      data.push({ dataArtista: seruGiran().getArtista(), dataAudios: seruGiran().getAudios() })
      data.push({ dataArtista: smino().getArtista(), dataAudios: smino().getAudios() })
      data.push({ dataArtista: sodaStereo().getArtista(), dataAudios: sodaStereo().getAudios() })
      data.push({ dataArtista: sumo().getArtista(), dataAudios: sumo().getAudios() })
      data.push({ dataArtista: tameImpala().getArtista(), dataAudios: tameImpala().getAudios() })
      data.push({ dataArtista: theBeatles().getArtista(), dataAudios: theBeatles().getAudios() })
      data.push({ dataArtista: theCranberries().getArtista(), dataAudios: theCranberries().getAudios() })
      data.push({ dataArtista: theDoors().getArtista(), dataAudios: theDoors().getAudios() })
      data.push({ dataArtista: theOffspring().getArtista(), dataAudios: theOffspring().getAudios() })
      data.push({ dataArtista: thePolice().getArtista(), dataAudios: thePolice().getAudios() })
      data.push({ dataArtista: theSmiths().getArtista(), dataAudios: theSmiths().getAudios() })
      data.push({ dataArtista: theStrokes().getArtista(), dataAudios: theStrokes().getAudios() })
      data.push({ dataArtista: thinLizzy().getArtista(), dataAudios: thinLizzy().getAudios() })
      data.push({ dataArtista: turf().getArtista(), dataAudios: turf().getAudios() })
      data.push({ dataArtista: viejasLocas().getArtista(), dataAudios: viejasLocas().getAudios() })
      data.push({ dataArtista: virus().getArtista(), dataAudios: virus().getAudios() })

      window.localStorage.setItem('dataDos', JSON.stringify(data))
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
