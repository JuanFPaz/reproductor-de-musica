export default function artista ({ miniatura, nombre, tipo }) {
  return `
    <div class="image-container">
        <img src=${miniatura} alt="Imagen 1" />
        <div class="biblioteca-data">
            <span>${nombre} </span>
            <span>${tipo} </span>
        </div>
    </div>  
    `
}
