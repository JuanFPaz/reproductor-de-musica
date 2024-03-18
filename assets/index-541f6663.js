(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function h(e){const o=`
  <div class='tabla-container'>
    <h1>Cargando...</h1>
  </div>
  `;e.innerHTML=o}function f(e){const o=`
    <div id='datos-song'>
      Cargando...
    </div>
    <div class='playbar'>
      <input type="range" class='playbar_inner' id="progress" min="0" max="100" value="0">
      <div class='playbar_left'>
          <span id="time-progress">0:00</span>
      </div>
      <div class='playbar_right'>
          <span id="time-song">0:00</span>
      </div>
    </div>
    <div>
      <button id='prev'>Prev</button>
      <button id='play'>Play</button>
      <button id='next'>Next</button>
    </div>
    `;e.innerHTML=o}const b="/reproductor-de-musica/assets/ACDC-Dirty-Deeds-Done-Dirt-Cheap-a35e98dc.mp3",g="/reproductor-de-musica/assets/ACDC-Highway-to-Hell -19ef3879.mp3",v="/reproductor-de-musica/assets/ACDC-Its-a-Long-Way-to-the-Top-88fcb196.mp3",D="/reproductor-de-musica/assets/Nirvana-Drain-You-c559159f.mp3",S="/reproductor-de-musica/assets/Nirvana-In-Bloom-4f09a699.mp3",U="/reproductor-de-musica/assets/Nirvana-Lounge-Act-01d7a772.mp3",I="/reproductor-de-musica/assets/Metallica-Orion-fffbda7d.mp3",M="/reproductor-de-musica/assets/The-Smiths-This-Charming-Man-d8fc1880.mp3",T="/reproductor-de-musica/assets/The-Smiths-Last-Night-I-Dreamt-That-Somebody-Loved-Me-d1bb2dbf.mp3",L="/reproductor-de-musica/assets/The-Smiths-I-Started-Something-I-Couldnt-Finish-301e0e67.mp3",A="/reproductor-de-musica/assets/02-Have-You-Ever-60e10a99.mp3",C="/reproductor-de-musica/assets/04-Prety-Fly-45bb8f6a.mp3",B="/reproductor-de-musica/assets/06-Feelings-3b37866e.mp3",H="/reproductor-de-musica/assets/13-Pay-The-Man-a10e386e.mp3",q="/reproductor-de-musica/assets/Oasis-Some-Might-Say-ac8114df.mp3",P="/reproductor-de-musica/assets/Sumo-Crua-Chan-19ea1374.mp3",N="/reproductor-de-musica/assets/Sumo-Beautiful-Losers-52fa9ab3.mp3",w="/reproductor-de-musica/assets/Sumo-Heroina-7d07f7bf.mp3",$="/reproductor-de-musica/assets/Sumo-Hola-Frank-7f45ca17.mp3",E="/reproductor-de-musica/assets/Sumo-Regtest-dd29f09e.mp3",F="/reproductor-de-musica/assets/Almendra-A-Estos-Hombres-Tristes-1eda69ca.mp3",O="/reproductor-de-musica/assets/Almendra-Tema-De-Pototo-6a95d983.mp3",k="/reproductor-de-musica/assets/Charly-Garcia-Promesas-Sobre-El-Bidet-7ff64406.mp3",x="/reproductor-de-musica/assets/David-Bowie-Moonage-Daydream-b8a676b0.mp3",z="/reproductor-de-musica/assets/David-Bowie-Lets-Dance-48f5f486.mp3",G="/reproductor-de-musica/assets/David-Bowie-Modern-Love-dfd75e54.mp3",R="/reproductor-de-musica/assets/David-Bowie-China-Girl-a21228ef.mp3",W="/reproductor-de-musica/assets/Arctic-Monkeys-Brianstorm-f9285863.mp3",_="/reproductor-de-musica/assets/Arctic-Monkeys-Fluorescent-Adolescent-b1c7fc0c.mp3",Y="/reproductor-de-musica/assets/Arctic-Monkeys-Balaclava-330e9dfa.mp3",j="/reproductor-de-musica/assets/Arctic-Monkeys-505-6e4d9fe9.mp3",K="/reproductor-de-musica/assets/Arctic-Monkeys-Secret-Door-8ee1ca9c.mp3",Z="/reproductor-de-musica/assets/luxita-pic-bf282dfd.jpg",s=[{id:crypto.randomUUID(),titulo:"Dirty Deeds Done Dirt Cheap",artista:"ACDC",album:"",src:b,duracion:0},{id:crypto.randomUUID(),titulo:"Highway to Hell",artista:"ACDC",album:"",src:g,duracion:0},{id:crypto.randomUUID(),titulo:"Its a Long Way to the Top (If you wanna Rock'n'Roll)",artista:"ACDC",album:"",src:v,duracion:0},{id:crypto.randomUUID(),titulo:"A estos Hombres Tristes",artista:"Almendra",album:"Almendra",src:F,duracion:0},{id:crypto.randomUUID(),titulo:"Tema de Pototo",artista:"Almendra",album:"",src:O,duracion:0},{id:crypto.randomUUID(),titulo:"Brianstorm",artista:"Arctic Monkey",album:"",src:W,duracion:0},{id:crypto.randomUUID(),titulo:"Balaclava",artista:"Arctic Monkey",album:"Piano Bar",src:Y,duracion:0},{id:crypto.randomUUID(),titulo:"Flourescent Adolescent",artista:"Arctic Monkey",album:"",src:_,duracion:0},{id:crypto.randomUUID(),titulo:"505",artista:"Arctic Monkey",album:"",src:j,duracion:0},{id:crypto.randomUUID(),titulo:"Secret Door",artista:"Arctic Monkey",album:"",src:K,duracion:0},{id:crypto.randomUUID(),titulo:"Promesas Sobre El Bidet",artista:"Charly Garcia",album:"Piano Bar",src:k,duracion:0},{id:crypto.randomUUID(),titulo:"Moonage Daydream",artista:"David Bowie",album:"",src:x,duracion:0},{id:crypto.randomUUID(),titulo:"Modern Love",artista:"David Bowie",album:"",src:G,duracion:0},{id:crypto.randomUUID(),titulo:"Lets Dance",artista:"David Bowie",album:"",src:z,duracion:0},{id:crypto.randomUUID(),titulo:"China Girl",artista:"David Bowie",album:"",src:R,duracion:0},{id:crypto.randomUUID(),titulo:"Orion",artista:"Metallica",album:"Master of Puppets",src:I,duracion:0},{id:crypto.randomUUID(),titulo:"Drain You",artista:"Nirvana",album:"Nevermind",src:D,duracion:0},{id:crypto.randomUUID(),titulo:"In Bloom",artista:"Nirvana",album:"Nevermind",src:S,duracion:0},{id:crypto.randomUUID(),titulo:"Lounge Act",artista:"Nirvana",album:"Nevermind",src:U,duracion:0},{id:crypto.randomUUID(),titulo:"Some Might Say",artista:"Oasis",album:"(Whats the Story) Morning Glory? ",src:q,duracion:0},{id:crypto.randomUUID(),titulo:"Beautiful Losers",artista:"Sumo",album:"",src:N,duracion:0},{id:crypto.randomUUID(),titulo:"Heroina",artista:"Sumo",album:"",src:w,duracion:0},{id:crypto.randomUUID(),titulo:"Crua Chan",artista:"Sumo",album:"After Chabon",src:P,duracion:0},{id:crypto.randomUUID(),titulo:"Hola Frank",artista:"Sumo",album:"",src:$,duracion:0},{id:crypto.randomUUID(),titulo:"Regtest",artista:"Sumo",album:"",src:E,duracion:0},{id:crypto.randomUUID(),titulo:"Have you ever",artista:"The Offspring",album:"Americana",src:A,duracion:0},{id:crypto.randomUUID(),titulo:"Pretty Fly (For a White Guy)",artista:"The Offspring",album:"Americana",src:C,duracion:0},{id:crypto.randomUUID(),titulo:"Feelings",artista:"The Offspring",album:"Americana",src:B,duracion:0},{id:crypto.randomUUID(),titulo:"Pay The Man",artista:"The Offspring",album:"Americana",src:H,duracion:0},{id:crypto.randomUUID(),titulo:"This Charming Man",artista:"The Smiths",album:"The Smiths",src:M,duracion:0},{id:crypto.randomUUID(),titulo:"Last Night I Dreamt That Somebody Loved Me",artista:"The Smiths",album:"Strangeways, Here We Come",src:T,duracion:0},{id:crypto.randomUUID(),titulo:"I Started Something I Couldnt Finish",artista:"The Smiths",album:"Strangeways, Here We Come",src:L,duracion:0}],J={artista:"Mix Fonky 1",album:"Miau",img:Z,lanzamiento:2024,duracion:0};function Q(e,{playlist:o,datosPlaylist:t}){const c=`
  <div>
    <h1>${t.artista} - ${t.album}</h1>
    <img src=${t.img}>
    <p>Lanzamiento: ${t.lanzamiento}</p>
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
    ${o.map((r,a)=>`
      <tr id=${r.id}>
        <td>${a+1}</td>
        <td class='titulo-song'>${r.titulo}</td>
        <td class='artista'>${r.artista}</td>
        <td>${r.album}</td>
        <td>${Math.floor(r.duracion/60).toString()} : ${Math.floor(r.duracion%60).toString().padStart(2,"0")}</td>
      </tr>
      `)}
    </tbody>
  </table>
  `;e.innerHTML=c}function d(e,{unaCancion:o}){const t=`
    <div>
      <ul>
        <li>${o.titulo} - ${o.artista}</li>
      </ul>
    </div>
  `;e.innerHTML=t}function V(e,{unaDuracion:o}){const t=`${Math.floor(o/60).toString()} : ${Math.floor(o%60).toString().padStart(2,"0")}`;e.innerHTML=t}document.querySelector("#app").innerHTML=`
  <div id='lctmBrave'>
    <div id='encabezado'>

    </div>
    <div id='playlist'>

    </div>
    <div id='reproductor'>

    </div>
  </div>
`;h(document.querySelector("#playlist"));f(document.querySelector("#reproductor"));(async()=>{let{indice:e,maxIndice:o}={indice:0,maxIndice:s.length};const t=new Audio;t.src=s[e].src;const c=()=>{e=e>=o-1?0:++e%o,t.pause(),t.src=s[e].src,t.play(),document.querySelector("#progress").value=0,d(document.querySelector("#datos-song"),{unaCancion:s[e]})},r=()=>{e=e<=0?o-1:--e%o,t.pause(),t.src=s[e].src,t.play(),document.querySelector("#progress").value=0,d(document.querySelector("#datos-song"),{unaCancion:s[e]})},a=()=>{t.paused?(t.play(),document.querySelector("#play").innerHTML="Stop"):(t.pause(),document.querySelector("#play").innerHTML="Play")},n=({cancion:i})=>{e=i._indice,t.pause(),t.src=i.src,t.play(),document.querySelector("#progress").value=0,d(document.querySelector("#datos-song"),{unaCancion:i})},m=({unaDuracion:i})=>{V(document.querySelector("#time-progress"),{unaDuracion:i})};Q(document.querySelector(".tabla-container"),{playlist:s,datosPlaylist:J}),d(document.querySelector("#datos-song"),{unaCancion:s[0]}),document.querySelector("#play").addEventListener("click",()=>{a()}),document.querySelector("#prev").addEventListener("click",()=>{r()}),document.querySelector("#next").addEventListener("click",()=>{c()}),document.querySelector("#progress").addEventListener("input",i=>{const l=t.duration*(i.target.value/100);t.currentTime=l,m({unaDuracion:t.currentTime})}),document.querySelector("table").addEventListener("click",i=>{if(i.target.tagName==="TD"){const p=i.target.parentNode.id,u=s.find(y=>y.id===p);u._indice=s.indexOf(u),n({cancion:u})}}),t.addEventListener("timeupdate",()=>{const i=t.currentTime/t.duration*100;document.querySelector("#progress").value=i,document.querySelector("#progress").style.setProperty("--progress-value",i),m({unaDuracion:t.currentTime})}),t.addEventListener("ended",()=>{c()})})();
