/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import home from './views/Home/home.js'

function app () {
  const Home = home()
  Home.init()
  Home.render()
}

app()
