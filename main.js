/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './style.css'
// import playlist from './app/components/playlist.js'
// import fakeRequest from './app/playlist/mixPlaylist.js'
// import audioControl from './app/util/audioControl.js'

// async function app () {
//   document.querySelector('#app').innerHTML = `
//     <h1>Cargando<h1>
//   `
//   try {
//     const dataPlaylist = await fakeRequest()
//     document.querySelector('#app').innerHTML = `
//     <div class='pseudo-router'>
//     </div>
//     <div class='media-player-container'>
//     </div>
//   `
//     /* Crear un helper, que recorre la playlist, rellene la duracion de cada cancion. */
//     playlist({ routerProvider: '.pseudo-router', ...dataPlaylist })
//     audioControl({ ...dataPlaylist })
//   } catch (error) {
//     console.log(error)
//     document.querySelector('.playlist-main-container').innerHTML = `
//       <h1>Error: ${error.message}</h1>
//     `
//   }
// }

// app()

const clientId = '0469548845aa46f3b525b6b405909aba'
const params = new URLSearchParams(window.location.search)
const code = params.get('code')
if (!code) {
  redirectToAuthCodeFlow(clientId)
} else {
  const token = await getAccessToken(clientId, code)
  const profile = await fetchProfile(token)
  populateUI(profile)
}

async function redirectToAuthCodeFlow (clientId) {
  const verifier = generateCodeVerifier(128)
  const challenge = await generateCodeChallenge(verifier)

  localStorage.setItem('verifier', verifier)

  const params = new URLSearchParams()
  params.append('client_id', clientId)
  params.append('response_type', 'code')
  params.append('redirect_uri', 'http://localhost:5173/callback')
  params.append('scope', 'user-read-private user-read-email')
  params.append('code_challenge_method', 'S256')
  params.append('code_challenge', challenge)

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`
}

function generateCodeVerifier (length) {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

async function generateCodeChallenge (codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier)
  const digest = await window.crypto.subtle.digest('SHA-256', data)
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

async function getAccessToken (clientId, code) {
  const verifier = localStorage.getItem('verifier')
  console.log(verifier)

  const params = new URLSearchParams()
  params.append('client_id', clientId)
  params.append('grant_type', 'authorization_code')
  params.append('code', code)
  params.append('redirect_uri', 'http://localhost:5173/callback')
  params.append('code_verifier', verifier)

  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  })

  const res = await result.json()
  console.log(res)
  const { access_token, refresh_token } = res
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
  return access_token
}

async function fetchProfile (token) {
  const result = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  })

  const user = await result.json()
  console.log(user)
  return user
}

function populateUI (profile) {
  document.getElementById('displayName').innerText = profile.display_name
  if (profile.images[1]) {
    const profileImage = new Image(400, 400)
    profileImage.src = profile.images[1].url
    document.getElementById('avatar').appendChild(profileImage)
    document.getElementById('imgUrl').innerText = profile.images[1].url
  }
  document.getElementById('id').innerText = profile.id
  document.getElementById('email').innerText = profile.email
  document.getElementById('uri').innerText = profile.uri
  document.getElementById('uri').setAttribute('href', profile.external_urls.spotify)
  document.getElementById('url').innerText = profile.href
  document.getElementById('url').setAttribute('href', profile.href)
}
