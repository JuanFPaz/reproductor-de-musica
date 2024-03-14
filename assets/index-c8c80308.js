(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const u="/reproductor-de-musica/assets/01-Welcome-d07ceeb7.mp3",l="/reproductor-de-musica/assets/02-Have-You-Ever-60e10a99.mp3",p="/reproductor-de-musica/assets/03-Staring-at-The-Sun-72ff3ce2.mp3",m="/reproductor-de-musica/assets/04-Prety-Fly-45bb8f6a.mp3",f="/reproductor-de-musica/assets/05-The-Kids-Arent-Alright-d5d6a907.mp3",h="/reproductor-de-musica/assets/06-Feelings-3b37866e.mp3",y="/reproductor-de-musica/assets/07-Shes-Got-Issues-bb94bdd7.mp3",b="/reproductor-de-musica/assets/08-Walla-Walla-a2de6fef.mp3",g="/reproductor-de-musica/assets/09-The-End-of-The-Line-2d33c26c.mp3",T="/reproductor-de-musica/assets/10-No-Brakes-a1f97089.mp3",U="/reproductor-de-musica/assets/11-Why-Dont-You-Get-a-Job-b3abad9e.mp3",v="/reproductor-de-musica/assets/12-Americana-48bb33f3.mp3",A="/reproductor-de-musica/assets/13-Pay-The-Man-a10e386e.mp3",O="/reproductor-de-musica/assets/luxita-pic-bf282dfd.jpg";function D(i,{nombre:r,img:o,playlistName:e,playListLength:t}){const a=`
    <img id='user' src=${o}>
    <p>LuxitaPaz</p>
    <h1>${r}</h1>
    <h3>${e} - ${t} Canciones </h3>
  `;i.innerHTML=a}function L(i,{unArreglo:r}){console.log(r);const o=`
  <div class='tabla-container'>
  <h2>Playlist</h2>
  <table>
    <thead>
      <th>#</th>
      <th>Titulo</th>
      <th>Artista</th>
      <th>Álbum</th>
      <th>Duración</th>
    </thead>
    <tbody>
    ${r.map((e,t)=>`
      <tr id=${e.id}>
        <td>${t+1}</td>
        <td class='titulo-song'>${e.titulo}</td>
        <td class='artista'>${e.artista}</td>
        <td>${e.album}</td>
        <td>${Math.floor(e.duracion/60)} : ${Math.floor(e.duracion%60)}</td>
      </tr>
      `)}
    </tbody>
  </table>
  </div>
  `;i.innerHTML=o}function d(i,{cancion:r}){if(r){console.log("Cancion Seleccionada");const o=`
    <div>
    <button id='prev'>Prev</button>
    <button id='play'>Play</button>
    <button id='next'>Next</button>
    </div>

    <p> ${r.titulo} - ${r.artista}</p>
    `;i.innerHTML=o}else{const o=`
    <p> No hay cancion en el reproductor</p>
    `;i.innerHTML=o}}const I={nombre:"Americana",img:O},c=[{id:crypto.randomUUID(),titulo:"Welcome",artista:"The Offspring",album:"Americana",src:u,duracion:0},{id:crypto.randomUUID(),titulo:"Have you ever",artista:"The Offspring",album:"Americana",src:l,duracion:0},{id:crypto.randomUUID(),titulo:"Staring at the Sun",artista:"The Offspring",album:"Americana",src:p,duracion:0},{id:crypto.randomUUID(),titulo:"Pretty Fly (For a White Guy)",artista:"The Offspring",album:"Americana",src:m,duracion:0},{id:crypto.randomUUID(),titulo:"The Kids Aren`t Right",artista:"The Offspring",album:"Americana",src:f,duracion:0},{id:crypto.randomUUID(),titulo:"Feelings",artista:"The Offspring",album:"Americana",src:h,duracion:0},{id:crypto.randomUUID(),titulo:"Shes Got Issues",artista:"The Offspring",album:"Americana",src:y,duracion:0},{id:crypto.randomUUID(),titulo:"Walla Walla",artista:"The Offspring",album:"Americana",src:b,duracion:0},{id:crypto.randomUUID(),titulo:"The End of The Line",artista:"The Offspring",album:"Americana",src:g,duracion:0},{id:crypto.randomUUID(),titulo:"No Brakes",artista:"The Offspring",album:"Americana",src:T,duracion:0},{id:crypto.randomUUID(),titulo:"Why Dont You Get a Job",artista:"The Offspring",album:"Americana",src:U,duracion:0},{id:crypto.randomUUID(),titulo:"Americana",artista:"The Offspring",album:"Americana",src:v,duracion:0},{id:crypto.randomUUID(),titulo:"Pay The Man",artista:"The Offspring",album:"Americana",src:A,duracion:0}],S=c[0];document.querySelector("#app").innerHTML=`
  <div id='lctmBrave'>
    <div id='encabezado'>

    </div>
    <div id='playlist'>

    </div>
    <div id='reproductor'>

    </div>
  </div>
`;D(document.querySelector("#encabezado"),{...I,playlistName:"Luxita Playlist",playListLength:c.length});L(document.querySelector("#playlist"),{unArreglo:c});d(document.querySelector("#reproductor"),{cancion:S});const s=new Audio(c[0].src);document.querySelector(".tabla-container").addEventListener("click",function(i){if(i.target.parentNode.tagName==="TR"){const o=i.target.parentNode.id,e=c.find(t=>t.id===o);e?(d(document.querySelector("#reproductor"),{cancion:e}),s.paused?(s.src=e.src,s.play()):(s.pause(),s.src=e.src,s.play())):console.log("No se encontró la canción con el ID:",o)}});document.querySelector("#play").addEventListener("click",()=>{s.paused?s.play():s.pause()});
