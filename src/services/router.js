export default function router (route, callback) {
  const path = window.location.pathname

  // Buscar coincidencia en las rutas definidas
  const routePattern = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`)
  const match = path.match(routePattern)

  if (match) {
    const params = match.slice(1) // Extraer parámetros (ej: /user/123 → ["123"])
    console.log(params)

    callback(params)
  }

  if (route === '/') {
    callback()
  }
}
