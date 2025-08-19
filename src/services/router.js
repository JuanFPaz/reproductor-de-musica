export default function router (route, callback) {
  const path = window.location.pathname

  // Buscar coincidencia en las rutas definidas
  const routePattern = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`)
  const match = path.match(routePattern)
  console.log(match)
  if (match) {
    const params = match.slice(1) // Extraer parámetros (ej: /user/123 → ["123"])
    callback(params)
  }

  if (route === '/') {
    callback()
  }
}
