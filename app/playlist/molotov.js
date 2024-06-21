import Frijolero from '/data/molotov/Molotov-Frijolero.mp3'
import HereWeKum from '/data/molotov/Molotov-Here-We-Kum.mp3'

const MOLOTOV = [
  {
    id: crypto.randomUUID(),
    titulo: 'Here We Kum',
    artista: 'Molotov',
    album: 'Dance dense and denso',
    src: HereWeKum,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Frijolero',
    artista: 'Molotov',
    album: 'Dance dense and denso',
    src: Frijolero,
    duracion: 0
  }
]

export default MOLOTOV
