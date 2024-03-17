(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();function p(t){const o=`
  <div class='tabla-container'>
    <h1>Cargando...</h1>
  </div>
  `;t.innerHTML=o}function y(t){const o=`
    <div id='datos-song'>Cargando...</div>
    <div>
    <button id='prev'>Prev</button>
    <button id='play'>Play</button>
    <button id='next'>Next</button>
    </div>
    `;t.innerHTML=o}const h="/reproductor-de-musica/assets/The-Smiths-This-Charming-Man-d8fc1880.mp3",b="/reproductor-de-musica/assets/The-Smiths-Last-Night-I-Dreamt-That-Somebody-Loved-Me-d1bb2dbf.mp3",f="/reproductor-de-musica/assets/The-Smiths-I-Started-Something-I-Couldnt-Finish-301e0e67.mp3",g="/reproductor-de-musica/assets/02-Have-You-Ever-60e10a99.mp3",S="/reproductor-de-musica/assets/04-Prety-Fly-45bb8f6a.mp3",U="/reproductor-de-musica/assets/06-Feelings-3b37866e.mp3",v="/reproductor-de-musica/assets/13-Pay-The-Man-a10e386e.mp3",D="/reproductor-de-musica/assets/Oasis-Some-Might-Say-ac8114df.mp3",I="data:audio/mpeg;base64,SUQzBA==",M="/reproductor-de-musica/assets/Sumo-Crua-Chan-19ea1374.mp3",A="/reproductor-de-musica/assets/Sumo-Beautiful-Losers-52fa9ab3.mp3",L="/reproductor-de-musica/assets/Sumo-Heroina-7d07f7bf.mp3",T="/reproductor-de-musica/assets/Sumo-Hola-Frank-7f45ca17.mp3",B="/reproductor-de-musica/assets/Sumo-Regtest-dd29f09e.mp3",C="/reproductor-de-musica/assets/Almendra-A-Estos-Hombres-Tristes-1eda69ca.mp3",P="/reproductor-de-musica/assets/Almendra-Tema-De-Pototo-6a95d983.mp3",H="/reproductor-de-musica/assets/Charly-Garcia-Promesas-Sobre-El-Bidet-7ff64406.mp3",F="data:audio/mpeg;base64,SUQzBA==",q="/reproductor-de-musica/assets/David-Bowie-Moonage-Daydream-b8a676b0.mp3",O="/reproductor-de-musica/assets/David-Bowie-Lets-Dance-48f5f486.mp3",$="/reproductor-de-musica/assets/David-Bowie-Modern-Love-dfd75e54.mp3",k="/reproductor-de-musica/assets/David-Bowie-China-Girl-a21228ef.mp3",w="/reproductor-de-musica/assets/Arctic-Monkeys-Brianstorm-f9285863.mp3",E="/reproductor-de-musica/assets/Arctic-Monkeys-Fluorescent-Adolescent-b1c7fc0c.mp3",N="/reproductor-de-musica/assets/Arctic-Monkeys-Balaclava-330e9dfa.mp3",x="/reproductor-de-musica/assets/Arctic-Monkeys-505-6e4d9fe9.mp3",G="/reproductor-de-musica/assets/Arctic-Monkeys-Secret-Door-8ee1ca9c.mp3",z="/reproductor-de-musica/assets/luxita-pic-bf282dfd.jpg",i=[{id:crypto.randomUUID(),titulo:"A estos Hombres Tristes",artista:"Almendra",album:"Almendra",src:C,duracion:0},{id:crypto.randomUUID(),titulo:"Tema de Pototo",artista:"Almendra",album:"",src:P,duracion:0},{id:crypto.randomUUID(),titulo:"Brianstorm",artista:"Arctic Monkey",album:"",src:w,duracion:0},{id:crypto.randomUUID(),titulo:"Balaclava",artista:"Arctic Monkey",album:"Piano Bar",src:N,duracion:0},{id:crypto.randomUUID(),titulo:"Flourescent Adolescent",artista:"Arctic Monkey",album:"",src:E,duracion:0},{id:crypto.randomUUID(),titulo:"505",artista:"Arctic Monkey",album:"",src:x,duracion:0},{id:crypto.randomUUID(),titulo:"Secret Door",artista:"Arctic Monkey",album:"",src:G,duracion:0},{id:crypto.randomUUID(),titulo:"Promesas Sobre El Bidet",artista:"Charly Garcia",album:"Piano Bar",src:H,duracion:0},{id:crypto.randomUUID(),titulo:"Raros Peinados Nuevos",artista:"Charly Garcia",album:"Piano Bar",src:F,duracion:0},{id:crypto.randomUUID(),titulo:"Moonage Daydream",artista:"David Bowie",album:"",src:q,duracion:0},{id:crypto.randomUUID(),titulo:"Modern Love",artista:"David Bowie",album:"",src:$,duracion:0},{id:crypto.randomUUID(),titulo:"Lets Dance",artista:"David Bowie",album:"",src:O,duracion:0},{id:crypto.randomUUID(),titulo:"China Girl",artista:"David Bowie",album:"",src:k,duracion:0},{id:crypto.randomUUID(),titulo:"Stand By Me",artista:"Oasis",album:"Be Here Now",src:I,duracion:0},{id:crypto.randomUUID(),titulo:"Some Might Say",artista:"Oasis",album:"(Whats the Story) Morning Glory? ",src:D,duracion:0},{id:crypto.randomUUID(),titulo:"Beautiful Losers",artista:"Sumo",album:"",src:A,duracion:0},{id:crypto.randomUUID(),titulo:"Heroina",artista:"Sumo",album:"",src:L,duracion:0},{id:crypto.randomUUID(),titulo:"Crua Chan",artista:"Sumo",album:"After Chabon",src:M,duracion:0},{id:crypto.randomUUID(),titulo:"Hola Frank",artista:"Sumo",album:"",src:T,duracion:0},{id:crypto.randomUUID(),titulo:"Regtest",artista:"Sumo",album:"",src:B,duracion:0},{id:crypto.randomUUID(),titulo:"Have you ever",artista:"The Offspring",album:"Americana",src:g,duracion:0},{id:crypto.randomUUID(),titulo:"Pretty Fly (For a White Guy)",artista:"The Offspring",album:"Americana",src:S,duracion:0},{id:crypto.randomUUID(),titulo:"Feelings",artista:"The Offspring",album:"Americana",src:U,duracion:0},{id:crypto.randomUUID(),titulo:"Pay The Man",artista:"The Offspring",album:"Americana",src:v,duracion:0},{id:crypto.randomUUID(),titulo:"This Charming Man",artista:"The Smiths",album:"The Smiths",src:h,duracion:0},{id:crypto.randomUUID(),titulo:"Last Night I Dreamt That Somebody Loved Me",artista:"The Smiths",album:"Strangeways, Here We Come",src:b,duracion:0},{id:crypto.randomUUID(),titulo:"I Started Something I Couldnt Finish",artista:"The Smiths",album:"Strangeways, Here We Come",src:f,duracion:0}],R={artista:"Mix Fonky 1",album:"Miau",img:z,lanzamiento:2024,duracion:0};function W(t,{playlist:o,datosPlaylist:r}){const s=`
  <div>
    <h1>${r.artista} - ${r.album}</h1>
    <img src=${r.img}>
    <p>Lanzamiento: ${r.lanzamiento}</p>
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
    ${o.map((e,a)=>`
      <tr id=${e.id}>
        <td>${a+1}</td>
        <td class='titulo-song'>${e.titulo}</td>
        <td class='artista'>${e.artista}</td>
        <td>${e.album}</td>
        <td>${Math.floor(e.duracion/60).toString()} : ${Math.floor(e.duracion%60).toString().padStart(2,"0")}</td>
      </tr>
      `)}
    </tbody>
  </table>
  `;t.innerHTML=s}function d(t,{unaCancion:o}){const r=`
    <div>
      <ul>
        <li>${o.titulo} - ${o.artista}</li>
      </ul>
    </div>
  `;t.innerHTML=r}document.querySelector("#app").innerHTML=`
  <div id='lctmBrave'>
    <div id='encabezado'>

    </div>
    <div id='playlist'>

    </div>
    <div id='reproductor'>

    </div>
  </div>
`;p(document.querySelector("#playlist"));y(document.querySelector("#reproductor"));(async()=>{let{indice:t,maxIndice:o}={indice:0,maxIndice:i.length};const r=new Audio;r.src=i[t].src;const s=()=>{t=t>=o-1?0:++t%o,console.log(t),r.pause(),r.src=i[t].src,r.play()},e=()=>{t=t<=0?o-1:--t%o,console.log(t),r.pause(),r.src=i[t].src,r.play()},a=()=>{r.paused?r.play():r.pause()},n=({cancion:c})=>{console.log(c._indice),t=c._indice,r.pause(),r.src=c.src,r.play()};W(document.querySelector(".tabla-container"),{playlist:i,datosPlaylist:R}),d(document.querySelector("#datos-song"),{unaCancion:i[0]}),document.querySelector("#play").addEventListener("click",()=>{a()}),document.querySelector("#prev").addEventListener("click",()=>{e(),d(document.querySelector("#datos-song"),{unaCancion:i[t]})}),document.querySelector("#next").addEventListener("click",()=>{s(),d(document.querySelector("#datos-song"),{unaCancion:i[t]})}),document.querySelector("table").addEventListener("click",c=>{if(c.target.tagName==="TD"){const m=c.target.parentNode.id,u=i.find(l=>l.id===m);u._indice=i.indexOf(u),n({cancion:u}),d(document.querySelector("#datos-song"),{unaCancion:u})}}),r.addEventListener("ended",()=>{s(),d(document.querySelector("#datos-song"),{unaCancion:i[t]})})})();
