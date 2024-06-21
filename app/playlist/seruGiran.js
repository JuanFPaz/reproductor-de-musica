import ALosJovenes from '/data/seru-giran/Serú-Girán-A-Los-Jóvenes-De-Ayer.mp3'
import CancionDeAlicia from '/data/seru-giran/Serú-Girán-Canción-De-Alicia-En-El-País.mp3'
import DesarmaYSangra from '/data/seru-giran/Serú-Girán-Desarma-Y-Sangra.mp3'
import CinemaVerite from '/data/seru-giran/Serú-Girán-Cinema-Verité.mp3'
import Peperina from '/data/seru-giran/Serú-Girán-Peperina.mp3'
import LlorandoEnElEspejo from '/data/seru-giran/Serú-Girán-Llorando-En-El-Espejo.mp3'
import PerroAndaluz from '/data/seru-giran/Serú-Girán-Perro-Andaluz.mp3'

const SERU_GIRAN = [
  {
    id: crypto.randomUUID(),
    titulo: 'A Los Jóvenes De Ayer',
    artista: 'Serú Girán',
    album: 'Bicicleta',
    src: ALosJovenes,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Canción De Alicia En El País',
    artista: 'Serú Girán',
    album: 'Bicicleta',
    src: CancionDeAlicia,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Cinema Verité',
    artista: 'Serú Girán',
    album: 'Bicicleta',
    src: CinemaVerite,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Desarma y Sangra',
    artista: 'Serú Girán',
    album: 'Bicicleta',
    src: DesarmaYSangra,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Peperina',
    artista: 'Serú Girán',
    album: 'Peperina',
    src: Peperina,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Llorando en el Espejo',
    artista: 'Serú Girán',
    album: 'Peperina',
    src: LlorandoEnElEspejo,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Perro Andaluz',
    artista: 'Serú Girán',
    album: 'La grasa de las capitales',
    src: PerroAndaluz,
    duracion: 0
  }
]

export default SERU_GIRAN
