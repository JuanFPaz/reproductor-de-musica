(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}})();function y(a){const r=`
  <div class='tabla-container'>
    <h1>Cargando...</h1>
  </div>
  `;a.innerHTML=r}function h(a){const r=`
    <div id='datos-song'>Cargando...</div>
    <div>
    <button id='prev'>Prev</button>
    <button id='play'>Play</button>
    <button id='next'>Next</button>
    </div>
    `;a.innerHTML=r}const g="/reproductor-de-musica/assets/01-Welcome-d07ceeb7.mp3",b="/reproductor-de-musica/assets/02-Have-You-Ever-60e10a99.mp3",v="/reproductor-de-musica/assets/03-Staring-at-The-Sun-72ff3ce2.mp3",T="/reproductor-de-musica/assets/04-Prety-Fly-45bb8f6a.mp3",A="/reproductor-de-musica/assets/05-The-Kids-Arent-Alright-d5d6a907.mp3",U="/reproductor-de-musica/assets/06-Feelings-3b37866e.mp3",w="/reproductor-de-musica/assets/07-Shes-Got-Issues-bb94bdd7.mp3",L="/reproductor-de-musica/assets/08-Walla-Walla-a2de6fef.mp3",O="/reproductor-de-musica/assets/09-The-End-of-The-Line-2d33c26c.mp3",S="/reproductor-de-musica/assets/10-No-Brakes-a1f97089.mp3",D="/reproductor-de-musica/assets/11-Why-Dont-You-Get-a-Job-b3abad9e.mp3",I="/reproductor-de-musica/assets/12-Americana-48bb33f3.mp3",E="/reproductor-de-musica/assets/13-Pay-The-Man-a10e386e.mp3",$="/reproductor-de-musica/assets/portada-americana-8c4ce6f9.jpg",e=[{id:crypto.randomUUID(),titulo:"Welcome",artista:"The Offspring",album:"Americana",src:g,duracion:0},{id:crypto.randomUUID(),titulo:"Have you ever",artista:"The Offspring",album:"Americana",src:b,duracion:0},{id:crypto.randomUUID(),titulo:"Staring at the Sun",artista:"The Offspring",album:"Americana",src:v,duracion:0},{id:crypto.randomUUID(),titulo:"Pretty Fly (For a White Guy)",artista:"The Offspring",album:"Americana",src:T,duracion:0},{id:crypto.randomUUID(),titulo:"The Kids Aren`t Right",artista:"The Offspring",album:"Americana",src:A,duracion:0},{id:crypto.randomUUID(),titulo:"Feelings",artista:"The Offspring",album:"Americana",src:U,duracion:0},{id:crypto.randomUUID(),titulo:"Shes Got Issues",artista:"The Offspring",album:"Americana",src:w,duracion:0},{id:crypto.randomUUID(),titulo:"Walla Walla",artista:"The Offspring",album:"Americana",src:L,duracion:0},{id:crypto.randomUUID(),titulo:"The End of The Line",artista:"The Offspring",album:"Americana",src:O,duracion:0},{id:crypto.randomUUID(),titulo:"No Brakes",artista:"The Offspring",album:"Americana",src:S,duracion:0},{id:crypto.randomUUID(),titulo:"Why Dont You Get a Job",artista:"The Offspring",album:"Americana",src:D,duracion:0},{id:crypto.randomUUID(),titulo:"Americana",artista:"The Offspring",album:"Americana",src:I,duracion:0},{id:crypto.randomUUID(),titulo:"Pay The Man",artista:"The Offspring",album:"Americana",src:E,duracion:0}],m={artista:"The Offspring",img:$,album:"Americana",lanzamiento:1998,duracion:0};function q(a,{playlist:r,datosPlaylist:i}){const d=`
  <div>
    <h1>${i.artista} - ${i.album}</h1>
    <img src=${i.img}>
    <p>Lanzamiento: ${i.lanzamiento}</p>
  </div>
  <table>
    <thead>
      <th>#</th>
      <th>Titulo</th>
      <th>Artista</th>
      <th>Álbum</th>
      <th>Duración</th>
    </thead>
    <tbody>
    ${r.map((t,c)=>`
      <tr id=${t.id}>
        <td>${c+1}</td>
        <td class='titulo-song'>${t.titulo}</td>
        <td class='artista'>${t.artista}</td>
        <td>${t.album}</td>
        <td>${Math.floor(t.duracion/60).toString()} : ${Math.floor(t.duracion%60).toString().padStart(2,"0")}</td>
      </tr>
      `)}
    </tbody>
  </table>
  `;a.innerHTML=d}function p(a,{unaCancion:r}){const i=`
    <div>
      <ul>
        <li>${r.titulo} - ${r.artista}</li>
      </ul>
    </div>
  `;a.innerHTML=i}document.querySelector("#app").innerHTML=`
  <div id='lctmBrave'>
    <div id='encabezado'>

    </div>
    <div id='playlist'>

    </div>
    <div id='reproductor'>

    </div>
  </div>
`;y(document.querySelector("#playlist"));h(document.querySelector("#reproductor"));let{indice:o,maxIndice:u}={indice:0,maxIndice:e.length};const n=new Audio;n.src=e[o].src;const s=a=>new Promise(r=>{const i=new Audio;i.src=e[a].src,i.addEventListener("loadedmetadata",()=>{r(i.duration)})});(async()=>{e[0].duracion=await s(0),e[1].duracion=await s(1),e[2].duracion=await s(2),e[3].duracion=await s(3),e[4].duracion=await s(4),e[5].duracion=await s(5),e[6].duracion=await s(6),e[7].duracion=await s(7),e[8].duracion=await s(8),e[9].duracion=await s(9),e[10].duracion=await s(10),e[11].duracion=await s(11),e[12].duracion=await s(12);let a=0;e.forEach(r=>{a=a+r.duracion}),m.duracion=a})();const f=()=>{o=o>=u-1?0:++o%u,console.log(o),n.pause(),n.src=e[o].src,n.play()},M=()=>{o=o<=0?u-1:--o%u,console.log(o),n.pause(),n.src=e[o].src,n.play()},P=()=>{n.paused?n.play():n.pause()},W=({cancion:a})=>{console.log(a._indice),o=a._indice,n.pause(),n.src=a.src,n.play()};q(document.querySelector(".tabla-container"),{playlist:e,datosPlaylist:m});p(document.querySelector("#datos-song"),{unaCancion:e[0]});document.querySelector("#play").addEventListener("click",()=>{P()});document.querySelector("#prev").addEventListener("click",()=>{M(),console.log(o)});document.querySelector("#next").addEventListener("click",()=>{f(),console.log(o)});document.querySelector("table").addEventListener("click",a=>{if(a.target.tagName==="TD"){const i=a.target.parentNode.id,d=e.find(t=>{if(t.id===i)return t});d._indice=e.indexOf(d),W({cancion:d}),p(document.querySelector("#datos-song"),{unaCancion:d})}});n.addEventListener("ended",()=>{f(),console.log(o)});
