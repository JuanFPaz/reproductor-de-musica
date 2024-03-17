(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function h(a){const r=`
  <div class='tabla-container'>
    <h1>Cargando...</h1>
  </div>
  `;a.innerHTML=r}function f(a){const r=`
    <div id='datos-song'>
      Cargando...
    </div>
    <div class='playbar'>
      <input type="range" class='playbar_inner' id="progress" min="0" max="100" >
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
    `;a.innerHTML=r}const b="/assets/ACDC-Dirty-Deeds-Done-Dirt-Cheap-a35e98dc.mp3",g="/assets/ACDC-Highway-to-Hell -19ef3879.mp3",v="/assets/ACDC-Its-a-Long-Way-to-the-Top-88fcb196.mp3",D="/assets/Nirvana-Drain-You-c559159f.mp3",S="/assets/Nirvana-In-Bloom-4f09a699.mp3",U="/assets/Nirvana-Lounge-Act-01d7a772.mp3",I="/assets/Metallica-Orion-fffbda7d.mp3",M="/assets/The-Smiths-This-Charming-Man-d8fc1880.mp3",T="/assets/The-Smiths-Last-Night-I-Dreamt-That-Somebody-Loved-Me-d1bb2dbf.mp3",L="/assets/The-Smiths-I-Started-Something-I-Couldnt-Finish-301e0e67.mp3",A="/assets/02-Have-You-Ever-60e10a99.mp3",C="/assets/04-Prety-Fly-45bb8f6a.mp3",B="/assets/06-Feelings-3b37866e.mp3",H="/assets/13-Pay-The-Man-a10e386e.mp3",q="/assets/Oasis-Some-Might-Say-ac8114df.mp3",P="/assets/Sumo-Crua-Chan-19ea1374.mp3",N="/assets/Sumo-Beautiful-Losers-52fa9ab3.mp3",w="/assets/Sumo-Heroina-7d07f7bf.mp3",$="/assets/Sumo-Hola-Frank-7f45ca17.mp3",E="/assets/Sumo-Regtest-dd29f09e.mp3",F="/assets/Almendra-A-Estos-Hombres-Tristes-1eda69ca.mp3",O="/assets/Almendra-Tema-De-Pototo-6a95d983.mp3",k="/assets/Charly-Garcia-Promesas-Sobre-El-Bidet-7ff64406.mp3",x="/assets/David-Bowie-Moonage-Daydream-b8a676b0.mp3",z="/assets/David-Bowie-Lets-Dance-48f5f486.mp3",G="/assets/David-Bowie-Modern-Love-dfd75e54.mp3",R="/assets/David-Bowie-China-Girl-a21228ef.mp3",W="/assets/Arctic-Monkeys-Brianstorm-f9285863.mp3",_="/assets/Arctic-Monkeys-Fluorescent-Adolescent-b1c7fc0c.mp3",Y="/assets/Arctic-Monkeys-Balaclava-330e9dfa.mp3",j="/assets/Arctic-Monkeys-505-6e4d9fe9.mp3",K="/assets/Arctic-Monkeys-Secret-Door-8ee1ca9c.mp3",Z="/assets/luxita-pic-bf282dfd.jpg",s=[{id:crypto.randomUUID(),titulo:"Dirty Deeds Done Dirt Cheap",artista:"ACDC",album:"",src:b,duracion:0},{id:crypto.randomUUID(),titulo:"Highway to Hell",artista:"ACDC",album:"",src:g,duracion:0},{id:crypto.randomUUID(),titulo:"Its a Long Way to the Top (If you wanna Rock'n'Roll)",artista:"ACDC",album:"",src:v,duracion:0},{id:crypto.randomUUID(),titulo:"A estos Hombres Tristes",artista:"Almendra",album:"Almendra",src:F,duracion:0},{id:crypto.randomUUID(),titulo:"Tema de Pototo",artista:"Almendra",album:"",src:O,duracion:0},{id:crypto.randomUUID(),titulo:"Brianstorm",artista:"Arctic Monkey",album:"",src:W,duracion:0},{id:crypto.randomUUID(),titulo:"Balaclava",artista:"Arctic Monkey",album:"Piano Bar",src:Y,duracion:0},{id:crypto.randomUUID(),titulo:"Flourescent Adolescent",artista:"Arctic Monkey",album:"",src:_,duracion:0},{id:crypto.randomUUID(),titulo:"505",artista:"Arctic Monkey",album:"",src:j,duracion:0},{id:crypto.randomUUID(),titulo:"Secret Door",artista:"Arctic Monkey",album:"",src:K,duracion:0},{id:crypto.randomUUID(),titulo:"Promesas Sobre El Bidet",artista:"Charly Garcia",album:"Piano Bar",src:k,duracion:0},{id:crypto.randomUUID(),titulo:"Moonage Daydream",artista:"David Bowie",album:"",src:x,duracion:0},{id:crypto.randomUUID(),titulo:"Modern Love",artista:"David Bowie",album:"",src:G,duracion:0},{id:crypto.randomUUID(),titulo:"Lets Dance",artista:"David Bowie",album:"",src:z,duracion:0},{id:crypto.randomUUID(),titulo:"China Girl",artista:"David Bowie",album:"",src:R,duracion:0},{id:crypto.randomUUID(),titulo:"Orion",artista:"Metallica",album:"Master of Puppets",src:I,duracion:0},{id:crypto.randomUUID(),titulo:"Drain You",artista:"Nirvana",album:"Nevermind",src:D,duracion:0},{id:crypto.randomUUID(),titulo:"In Bloom",artista:"Nirvana",album:"Nevermind",src:S,duracion:0},{id:crypto.randomUUID(),titulo:"Lounge Act",artista:"Nirvana",album:"Nevermind",src:U,duracion:0},{id:crypto.randomUUID(),titulo:"Some Might Say",artista:"Oasis",album:"(Whats the Story) Morning Glory? ",src:q,duracion:0},{id:crypto.randomUUID(),titulo:"Beautiful Losers",artista:"Sumo",album:"",src:N,duracion:0},{id:crypto.randomUUID(),titulo:"Heroina",artista:"Sumo",album:"",src:w,duracion:0},{id:crypto.randomUUID(),titulo:"Crua Chan",artista:"Sumo",album:"After Chabon",src:P,duracion:0},{id:crypto.randomUUID(),titulo:"Hola Frank",artista:"Sumo",album:"",src:$,duracion:0},{id:crypto.randomUUID(),titulo:"Regtest",artista:"Sumo",album:"",src:E,duracion:0},{id:crypto.randomUUID(),titulo:"Have you ever",artista:"The Offspring",album:"Americana",src:A,duracion:0},{id:crypto.randomUUID(),titulo:"Pretty Fly (For a White Guy)",artista:"The Offspring",album:"Americana",src:C,duracion:0},{id:crypto.randomUUID(),titulo:"Feelings",artista:"The Offspring",album:"Americana",src:B,duracion:0},{id:crypto.randomUUID(),titulo:"Pay The Man",artista:"The Offspring",album:"Americana",src:H,duracion:0},{id:crypto.randomUUID(),titulo:"This Charming Man",artista:"The Smiths",album:"The Smiths",src:M,duracion:0},{id:crypto.randomUUID(),titulo:"Last Night I Dreamt That Somebody Loved Me",artista:"The Smiths",album:"Strangeways, Here We Come",src:T,duracion:0},{id:crypto.randomUUID(),titulo:"I Started Something I Couldnt Finish",artista:"The Smiths",album:"Strangeways, Here We Come",src:L,duracion:0}],J={artista:"Mix Fonky 1",album:"Miau",img:Z,lanzamiento:2024,duracion:0};function Q(a,{playlist:r,datosPlaylist:t}){const n=`
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
    ${r.map((e,o)=>`
      <tr id=${e.id}>
        <td>${o+1}</td>
        <td class='titulo-song'>${e.titulo}</td>
        <td class='artista'>${e.artista}</td>
        <td>${e.album}</td>
        <td>${Math.floor(e.duracion/60).toString()} : ${Math.floor(e.duracion%60).toString().padStart(2,"0")}</td>
      </tr>
      `)}
    </tbody>
  </table>
  `;a.innerHTML=n}function d(a,{unaCancion:r}){const t=`
    <div>
      <ul>
        <li>${r.titulo} - ${r.artista}</li>
      </ul>
    </div>
  `;a.innerHTML=t}function V(a,{unaDuracion:r}){const t=`${Math.floor(r/60).toString()} : ${Math.floor(r%60).toString().padStart(2,"0")}`;a.innerHTML=t}document.querySelector("#app").innerHTML=`
  <div id='lctmBrave'>
    <div id='encabezado'>

    </div>
    <div id='playlist'>

    </div>
    <div id='reproductor'>

    </div>
  </div>
`;h(document.querySelector("#playlist"));f(document.querySelector("#reproductor"));(async()=>{let{indice:a,maxIndice:r}={indice:0,maxIndice:s.length};const t=new Audio;t.src=s[a].src;const n=()=>{a=a>=r-1?0:++a%r,t.pause(),t.src=s[a].src,t.play(),document.querySelector("#progress").value=0,d(document.querySelector("#datos-song"),{unaCancion:s[a]})},e=()=>{a=a<=0?r-1:--a%r,t.pause(),t.src=s[a].src,t.play(),document.querySelector("#progress").value=0,d(document.querySelector("#datos-song"),{unaCancion:s[a]})},o=()=>{t.paused?(t.play(),document.querySelector("#play").innerHTML="Stop"):(t.pause(),document.querySelector("#play").innerHTML="Play")},c=({cancion:i})=>{a=i._indice,t.pause(),t.src=i.src,t.play(),document.querySelector("#progress").value=0,d(document.querySelector("#datos-song"),{unaCancion:i})},l=({unaDuracion:i})=>{V(document.querySelector("#time-progress"),{unaDuracion:i})};Q(document.querySelector(".tabla-container"),{playlist:s,datosPlaylist:J}),d(document.querySelector("#datos-song"),{unaCancion:s[0]}),document.querySelector("#play").addEventListener("click",()=>{o()}),document.querySelector("#prev").addEventListener("click",()=>{e()}),document.querySelector("#next").addEventListener("click",()=>{n()}),document.querySelector("#progress").addEventListener("input",i=>{const m=t.duration*(i.target.value/100);t.currentTime=m,l({unaDuracion:t.currentTime})}),document.querySelector("table").addEventListener("click",i=>{if(i.target.tagName==="TD"){const p=i.target.parentNode.id,u=s.find(y=>y.id===p);u._indice=s.indexOf(u),c({cancion:u})}}),t.addEventListener("timeupdate",()=>{const i=t.currentTime/t.duration*100;document.querySelector("#progress").value=i,document.querySelector("#progress").style.setProperty("--progress-value",i),l({unaDuracion:t.currentTime})}),t.addEventListener("ended",()=>{n()})})();
