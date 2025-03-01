/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './newStyle.css'

async function app () {
  document.querySelector('#app').innerHTML = `
    <h1>Cargando<h1>
  `
}

app()
