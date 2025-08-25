/* eslint-disable array-callback-return */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable import/no-absolute-path */
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import home from './views/Home/home.js'
import request from './services/request.js'

async function app () {
  const Request = request()
  try {
    Request.init()
  } catch (error) {
    console.log(error)
  } finally {
    const Home = home()
    Home.init({ req: Request })
    Home.setBiblioteca()
    Home.render()
  }
}

app()
