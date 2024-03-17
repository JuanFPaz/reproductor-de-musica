import dirtyDeeds from '../resource/mix-fonky/ACDC-Dirty-Deeds-Done-Dirt-Cheap.mp3'
import highway from '../resource/mix-fonky/ACDC-Highway-to-Hell .mp3'
import ifyouwanna from '../resource/mix-fonky/ACDC-Its-a-Long-Way-to-the-Top.mp3'
import drainu from '../resource/mix-fonky/Nirvana-Drain-You.mp3'
import inBloom from '../resource/mix-fonky/Nirvana-In-Bloom.mp3'
import loungeAc from '../resource/mix-fonky/Nirvana-Lounge-Act.mp3'
import orion from '../resource/mix-fonky/Metallica-Orion.mp3'
import charming from '../resource/mix-fonky/The-Smiths-This-Charming-Man.mp3'
import lastNight from '../resource/mix-fonky/The-Smiths-Last-Night-I-Dreamt-That-Somebody-Loved-Me.mp3'
import iStarted from '../resource/mix-fonky/The-Smiths-I-Started-Something-I-Couldnt-Finish.mp3'
import haveyouever from '../resource/Americana/02-Have-You-Ever.mp3'
import prettyFly from '../resource/Americana/04-Prety-Fly.mp3'
import feelings from '../resource/Americana/06-Feelings.mp3'
import payTheMan from '../resource/Americana/13-Pay-The-Man.mp3'
import someMight from '../resource/mix-fonky/Oasis-Some-Might-Say.mp3'
import crua from '../resource/mix-fonky/Sumo-Crua-Chan.mp3'
import beautiful from '../resource/mix-fonky/Sumo-Beautiful-Losers.mp3'
import heroina from '../resource/mix-fonky/Sumo-Heroina.mp3'
import holaFrank from '../resource/mix-fonky/Sumo-Hola-Frank.mp3'
import regtest from '../resource/mix-fonky/Sumo-Regtest.mp3'
import estosHombres from '../resource/mix-fonky/Almendra-A-Estos-Hombres-Tristes.mp3'
import temaPototo from '../resource/mix-fonky/Almendra-Tema-De-Pototo.mp3'
import promesas from '../resource/mix-fonky/Charly-Garcia-Promesas-Sobre-El-Bidet.mp3'
import moonage from '../resource/mix-fonky/David-Bowie-Moonage-Daydream.mp3'
import letsDance from '../resource/mix-fonky/David-Bowie-Lets-Dance.mp3'
import modernLove from '../resource/mix-fonky/David-Bowie-Modern-Love.mp3'
import chinaGirl from '../resource/mix-fonky/David-Bowie-China-Girl.mp3'
import brianStorm from '../resource/mix-fonky/Arctic-Monkeys-Brianstorm.mp3'
import florurescent from '../resource/mix-fonky/Arctic-Monkeys-Fluorescent-Adolescent.mp3'
import balacava from '../resource/mix-fonky/Arctic-Monkeys-Balaclava.mp3'
import fivezerofive from '../resource/mix-fonky/Arctic-Monkeys-505.mp3'
import secret from '../resource/mix-fonky/Arctic-Monkeys-Secret-Door.mp3'
import luxa from '../resource/mix-fonky/luxita-pic.jpg'

const playlist = [
  {
    id: crypto.randomUUID(),
    titulo: 'Dirty Deeds Done Dirt Cheap',
    artista: 'ACDC',
    album: '',
    src: dirtyDeeds,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Highway to Hell',
    artista: 'ACDC',
    album: '',
    src: highway,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Its a Long Way to the Top (If you wanna Rock\'n\'Roll)',
    artista: 'ACDC',
    album: '',
    src: ifyouwanna,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'A estos Hombres Tristes',
    artista: 'Almendra',
    album: 'Almendra',
    src: estosHombres,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Tema de Pototo',
    artista: 'Almendra',
    album: '',
    src: temaPototo,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Brianstorm',
    artista: 'Arctic Monkey',
    album: '',
    src: brianStorm,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Balaclava',
    artista: 'Arctic Monkey',
    album: 'Piano Bar',
    src: balacava,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Flourescent Adolescent',
    artista: 'Arctic Monkey',
    album: '',
    src: florurescent,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: '505',
    artista: 'Arctic Monkey',
    album: '',
    src: fivezerofive,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Secret Door',
    artista: 'Arctic Monkey',
    album: '',
    src: secret,
    duracion: 0
  },

  {
    id: crypto.randomUUID(),
    titulo: 'Promesas Sobre El Bidet',
    artista: 'Charly Garcia',
    album: 'Piano Bar',
    src: promesas,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Moonage Daydream',
    artista: 'David Bowie',
    album: '',
    src: moonage,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Modern Love',
    artista: 'David Bowie',
    album: '',
    src: modernLove,
    duracion: 0
  },

  {
    id: crypto.randomUUID(),
    titulo: 'Lets Dance',
    artista: 'David Bowie',
    album: '',
    src: letsDance,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'China Girl',
    artista: 'David Bowie',
    album: '',
    src: chinaGirl,
    duracion: 0
  },
  // Metallica
  {
    id: crypto.randomUUID(),
    titulo: 'Orion',
    artista: 'Metallica',
    album: 'Master of Puppets',
    src: orion,
    duracion: 0
  },
  // Metallica
  // Nirvana
  {
    id: crypto.randomUUID(),
    titulo: 'Drain You',
    artista: 'Nirvana',
    album: 'Nevermind',
    src: drainu,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'In Bloom',
    artista: 'Nirvana',
    album: 'Nevermind',
    src: inBloom,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Lounge Act',
    artista: 'Nirvana',
    album: 'Nevermind',
    src: loungeAc,
    duracion: 0
  },
  // Nirvana
  {
    id: crypto.randomUUID(),
    titulo: 'Some Might Say',
    artista: 'Oasis',
    album: '(Whats the Story) Morning Glory? ',
    src: someMight,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Beautiful Losers',
    artista: 'Sumo',
    album: '',
    src: beautiful,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Heroina',
    artista: 'Sumo',
    album: '',
    src: heroina,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Crua Chan',
    artista: 'Sumo',
    album: 'After Chabon',
    src: crua,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Hola Frank',
    artista: 'Sumo',
    album: '',
    src: holaFrank,
    duracion: 0
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Regtest',
    artista: 'Sumo',
    album: '',
    src: regtest,
    duracion: 0
  },
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
  },
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

const datosPlaylist = {
  artista: 'Mix Fonky 1',
  album: 'Miau',
  img: luxa,
  lanzamiento: 2024,
  duracion: 0
}

export { playlist, datosPlaylist }
