import heyPixies from '/data/pixies/Pixies-Hey.mp3'
import monkeysgonetoheaven from '/data/pixies/Pixies-Monkey-Gone-To-Heaven.mp3'
import theThing from '/data/pixies/Pixies-The-Thing.mp3'
import waveOfMutilation from '/data/pixies/Pixies-Wave-of-Mutilation-UK-Surf.mp3'

const PIXIES = [
  {
    id: crypto.randomUUID(),
    titulo: 'Hey',
    artista: 'Pixies',
    album: '',
    src: heyPixies,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Monkey Gone To Heaven',
    artista: 'Pixies',
    album: '',
    src: monkeysgonetoheaven,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'The Thing',
    artista: 'Pixies',
    album: '',
    src: theThing,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Wave of Mutilation (UK Surf)',
    artista: 'Pixies',
    album: '',
    src: waveOfMutilation,
    duracion: 0
  }
]

export default PIXIES
