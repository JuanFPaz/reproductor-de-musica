import charming from '/data/the-smiths/The-Smiths-This-Charming-Man.mp3'
import lastNight from '/data/the-smiths/The-Smiths-Last-Night-I-Dreamt-That-Somebody-Loved-Me.mp3'
import iStarted from '/data/the-smiths/The-Smiths-I-Started-Something-I-Couldnt-Finish.mp3'

const THE_SMITHS = [
  {
    id: crypto.randomUUID(),
    titulo: 'This Charming Man',
    artista: 'The Smiths',
    album: 'The Smiths',
    src: charming,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Last Night I Dreamt That Somebody Loved Me',
    artista: 'The Smiths',
    album: 'Strangeways, Here We Come',
    src: lastNight,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'I Started Something I Couldnt Finish',
    artista: 'The Smiths',
    album: 'Strangeways, Here We Come',
    src: iStarted,
    duracion: 0
  }
]

export default THE_SMITHS
