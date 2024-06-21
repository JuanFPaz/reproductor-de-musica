/* eslint-disable import/no-absolute-path */
import loseurself from '/data/daft-punk/Daft-Punk-Lose-Yourself-To-Dance.mp3'
import somethingaboutus from '/data/daft-punk/Daft-Punk-Something-About-Us.mp3'

const DAFT_PUNK = [
  {
    id: crypto.randomUUID(),
    titulo: 'Lose Yourself To Dance',
    artista: 'Daft Punk',
    album: '',
    src: loseurself,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Something About Us',
    artista: 'Daft Punk',
    album: '',
    src: somethingaboutus,
    duracion: 0
  }
]

export default DAFT_PUNK
