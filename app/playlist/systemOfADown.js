import revenga from '/data/system-of-a-down/SOAD-Revenga.mp3'
import violentXXX from '/data/system-of-a-down/SOAD-Violent-Pornography.mp3'

const SOAD = [
  {
    id: crypto.randomUUID(),
    titulo: 'Revenga',
    artista: 'System of a down',
    album: 'Mezmerize',
    src: revenga,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Violent Pornography',
    artista: 'System of a down',
    album: 'Mezmerize',
    src: violentXXX,
    duracion: 0
  }
]

export default SOAD
