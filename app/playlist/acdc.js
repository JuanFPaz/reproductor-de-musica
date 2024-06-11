/* eslint-disable import/no-absolute-path */
import DirtyDeeds from '/data/ACDC-Dirty-Deeds-Done-Dirt-Cheap.mp3'
import HighwayToHell from '/data/ACDC-Highway-to-Hell .mp3'
import IfYouWannaBlood from '/data/ACDC-Its-a-Long-Way-to-the-Top.mp3'

const ACDC = [
  {
    id: crypto.randomUUID(),
    titulo: 'Dirty Deeds Done Dirt Cheap',
    artista: 'ACDC',
    album: '',
    src: DirtyDeeds,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Highway to Hell',
    artista: 'ACDC',
    album: '',
    src: HighwayToHell,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Its a Long Way to the Top (If you wanna Rock\'n\'Roll)',
    artista: 'ACDC',
    album: '',
    src: IfYouWannaBlood,
    duracion: 0
  }
]

export default ACDC
