import haveyouever from '/data/the-offspring/02-Have-You-Ever.mp3'
import prettyFly from '/data/the-offspring/04-Prety-Fly.mp3'
import feelings from '/data/the-offspring/06-Feelings.mp3'
import payTheMan from '/data/the-offspring/13-Pay-The-Man.mp3'

const THE_OFFSPRING = [
  {
    id: crypto.randomUUID(),
    titulo: 'Have you ever',
    artista: 'The Offspring',
    album: 'Americana',
    src: haveyouever,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Pretty Fly (For a White Guy)',
    artista: 'The Offspring',
    album: 'Americana',
    src: prettyFly,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Feelings',
    artista: 'The Offspring',
    album: 'Americana',
    src: feelings,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Pay The Man',
    artista: 'The Offspring',
    album: 'Americana',
    src: payTheMan,
    duracion: 0
  }
]

export default THE_OFFSPRING
