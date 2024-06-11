/* eslint-disable import/no-absolute-path */
import Flourescente from '/data/arctic-monkeys/Arctic-Monkeys-Fluorescent-Adolescent.mp3'
import Balaclava from '/data/arctic-monkeys//Arctic-Monkeys-Balaclava.mp3'
import FiveOrFive from '/data/arctic-monkeys/Arctic-Monkeys-505.mp3'
import SecretDoor from '/data/arctic-monkeys//Arctic-Monkeys-Secret-Door.mp3'

const ARCTIC_MONKEYS = [
  {
    id: crypto.randomUUID(),
    titulo: 'Balaclava',
    artista: 'Arctic Monkey',
    album: '',
    src: Balaclava,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Flourescent Adolescent',
    artista: 'Arctic Monkey',
    album: '',
    src: Flourescente,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: '505',
    artista: 'Arctic Monkey',
    album: '',
    src: FiveOrFive,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Secret Door',
    artista: 'Arctic Monkey',
    album: '',
    src: SecretDoor,
    duracion: 0
  }
]

export default ARCTIC_MONKEYS
