Cosas para documentar mañana:
Explicar los pasos realizados, porque usamos document.addEventListener(DOMContentLoaded).

El uso del objeto Audio(), que es la playlist que le pasamos como parametro.

Los elementos que declaramos haciendo referencia al DOM.

Los eventos creados para los botones de nuestro reproductor de musica.

Porque escogimos un range input en ves de hacer una barra de progreson con un div (Creo que por obvias razones, es mas facil manipular un input range que un div xd)

Explicar el evento del audio que creamos y que es el bloque if y para que sirve (!isNaN)

[Primer Paso]
En el documento index.html tenemos un script interno y una style interno. Este estilo se lo pedi a chatGPT para que me cree un reproductor de musica basico, para enfocarme en la funcionalidad y los conceptos a aplicar con Javascript.

La estructura de nuestro reproductor de musica que me otorgo ChatGPT era la siguiente:

<div class="music-player">
  <audio id="myAudio">
    <source src="ruta-del-archivo-de-audio.mp3" type="audio/mpeg" />
    Tu navegador no soporta el elemento de audio.
  </audio>
  <div class="controls">
    <button id="playPauseBtn" class="play-btn"></button>
    <button id="prevBtn" class="prev-btn"></button>
    <button id="nextBtn" class="next-btn"></button>
  </div>
  <div class="progress-bar">
    <div id="progress" class="progress"></div>
  </div>
</div>
Pero luego opte por hacer unos cambios como:

Quitar el elemento <audio>: Cuando arranque con la logica del reproductor de musica, opte por usar el objeto new Audio() y manipular este objeto desde el script en vez de manipular el elemento en si. De todas formas el resultado esperado, es similar (y más comodo para mi).

Contenedor .progress-bar: Este contenedor simulaba una barra de progreso, pero mientras usaba como referencia el reproductor de spotify, se me cayo la idea de que seria mejor usar un input[type=range] para poder manipular mejor el tiempo del audio/cancion que se este reproduciendo. Ademas agregue otro contenedor .timer que representa el currentTime del audio y la duracion del audio.

<div class="music-player">
  <div class="controls">
    <button id="prevBtn" class="prev-btn"></button>
    <button id="playPauseBtn" class="play-btn"></button>
    <button id="nextBtn" class="next-btn"></button>
  </div>
  <div class="progress-bar">
    <div id="timer">
      <p>00:00 / 00:00</p>
    </div>
    <form>
      <input
        type="range"
        name="progress"
        id="progress"
        min="0"
        max="100"
        value="0"
      />
    </form>
  </div>
</div>
[Segundo Paso]
La logica de mi programa la traduje de un viejo codigo en C# que aprendi en un curso de desarrollo de videojuegos para Unity. (Si, aprendi a crear un reproductor de musica en unity).

La idea es traducir la logica de ese codigo C# a Javascript, un desafio que me dio un resultado positivo. Los pasos a seguir fueron:

Crear un arreglo que contenga en string los nombres de los audios, con su formatos.
const myPlaylist = ["primer-audio.mp3", "segundo-audio.mp3"];
Tambien declaramos en el ambito global, el objeto audio, y pasandole como parametro, la url de nuestro arreglo de audios:
const myPlaylist = ["primer-audio.mp3", "segundo-audio.mp3"];
let audio = new Audio(myPlaylist[0]);
En unity existe una funcion por defecto llamada Start(), que es donde se ejecuta el codigo cuando este es inicializado en la escena. En javascript opte por el metodo document.addEventListener('DOMContentLoad'). Dentro de este evento declare las referencias para nuestros elementos del reproductor de musica:
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.querySelector('button[id="playPauseBtn"]');
  const prevButton = document.querySelector('button[id="prevBtn"]');
  const nextButton = document.querySelector('button[id="nextBtn"]');
  const progressRange = document.querySelector('input[name="progress"]');
  const timer = document.querySelector("div[id=timer]");
});
Le agregue las funcionalidades a los button, playButton, prevButton, nextButton con un evento para cada uno. La funcion de playButton se encarga de reproducir el audio de nuestro objeto si este esta pausado, y que de lo contrario (si el audio se esta reproduciendo), al presionarlo denuevo se pause. Obteniendo la funcionalidad de Play/Pause en nuestro boton.
document.addEventListener("DOMContentLoaded", function () {
  // ...

  playButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
Para prevButton y nextButton use una logica aprendida del curso de desarrollo de videojuego de unity. El objetio es asignar un audio del arreglo de playlist, cambiar el source del audio y reproducirlo.

Para eso creamos un indice para recorrer el arreglo dinamicamente, llamado currentIndex y lo declaramos en el ambito global de nuestro codigo:

// ...
let audio = new Audio(myPlaylist[0]);
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  // ...
});
A continuacion creamos el evento para el button nextButton, y le establecemos que en cada click del usuario, el indice de nuestro arreglo tenga un incremento, pero que siempre se mantenga en el rango de la longitud de nuestro arreglo.
Aunque en este ejemplo hayamos usado 2 elementos, con el uso del operador matematico modulo (%) podemos controlar el recorrido dinamico de nuestro arreglo con cada click del usuario. Esta operacion nos va a devolver el resto de la division entre el valor actual del indice y el length de nuestro arreglo:

document.addEventListener(" DOMContentLoaded", function () {
  // ...

  nextButton.addEventListener("click", function () {
    currentIndex = ++currentIndex % myPlaylist.length;
  });
});
Un ejemplo grafico de esta operacion matematica:

Operación	Resultado
0 % 2	0
1 % 2	1
2 % 2	0
3 % 2	1
4 % 2	0
5 % 2	1
6 % 2	0
7 % 2	1
8 % 2	0
9 % 2	1
10 % 2	0
11 % 2	1
12 % 2	0
13 % 2	1
14 % 2	0
Una vez comprendido esto, finalizamos el evento cambiandole el src a nuestro objeto audio el elemento de nuestro arreglo myPlaylist con el indice incrementado:

document.addEventListener(" DOMContentLoaded", function () {
  // ...

  nextButton.addEventListener("click", function () {
    currentIndex = ++currentIndex % myPlaylist.length;
    audio.src = myPlaylist[currentIndex];
    audio.play();
  });
});
Para el button prevButton, le asignamos el mismo evento y una operacion matematica similar, con la diferencia que currentIndex, con un operador ternario vamos a verificar que el valor del indice no sea un valor negativo, ya que nos podria ocacionar problemas al momento de recorrer nuestro arreglo:
document.addEventListener(" DOMContentLoaded", function () {
  // ...

  prevButton.addEventListener("click", function () {
    currentIndex =
      currentIndex <= 0
        ? myPlaylist.length - 1
        : --currentIndex % myPlaylist.length;
    audio.src = myPlaylist[currentIndex];
    audio.play();
  });
});
Cuando currentIndex sea menor o igual a 0, le establecemos el valor del ultimo elemento de nuestro arreglo (myPlatlist.length - 1), de lo contrario, a nuestro indice lo asignamos un decremento y aplicamos la misma operacion con el modulo (%) para establecer el valor del indice.