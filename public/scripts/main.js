async function obtenerPlaylist() {
  try {
    const response = await fetch("http://localhost:3000/playlist");

    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }

    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
}

(async () => {
  try {
    let myPlaylist = await obtenerPlaylist();
    const playButton = document.querySelector('button[class="control-play"]');
    const prevButton = document.querySelector('button[class="control-prev"]');
    const nextButton = document.querySelector('button[class="control-next"]');
    const progressRange = document.querySelector('input[name="progress"]');
    const timeProgress = document.querySelector("#time-progress");
    const timeSong = document.querySelector("#time-song");
    const albumDetails = document.querySelector(".details_album");
    const nameSong = document.querySelector("h2");
    const nameArtist = document.querySelector("h3");
    console.log(myPlaylist);
    let currentIndex = 0;
    let reproductor = new Audio();

    establecerReproductor(
      reproductor,
      myPlaylist,
      currentIndex,
      albumDetails,
      nameSong,
      nameArtist,
      timeSong
    );
    establecerBotones(
      [playButton, prevButton, nextButton],
      reproductor,
      myPlaylist,
      currentIndex,
      albumDetails,
      nameSong,
      nameArtist,
      timeSong
    );
    actualizarDuracion(reproductor, progressRange, timeProgress);

    function establecerReproductor(
      reproductor,
      myPlaylist,
      indice,
      album,
      titulo,
      artista,
      duracion
    ) {
      //Establecer Datos de Playlist y Audio src
      reproductor.src = `http://localhost:3000/${myPlaylist[indice].songUrl}`;
      album.style.backgroundImage = `url(http://localhost:3000/${myPlaylist[indice].imageUrl})`;
      titulo.textContent = `${myPlaylist[indice].songTitle}`;
      artista.textContent = `${myPlaylist[indice].artistName}`;
      obtenerDuracion(reproductor).then((data) => {
        duracion.textContent = `${data}`;
      });
    }
    function establecerBotones(
      arregloDeBotones,
      reproductor,
      myPlaylist,
      indice,
      album,
      titulo,
      artista,
      duracion
    ) {
      //Boton Play
      arregloDeBotones[0].addEventListener("click", () => {
        if (reproductor.paused) {
          reproductor.play();
        } else {
          reproductor.pause();
        }
      });

      //Boton Prev
      arregloDeBotones[1].addEventListener("click", () => {
        indice =
          indice <= 0 ? myPlaylist.length - 1 : --indice % myPlaylist.length;
        establecerReproductor(
          reproductor,
          myPlaylist,
          indice,
          album,
          titulo,
          artista,
          duracion
        );
        reproductor.play();
      });

      //Boton Next
      arregloDeBotones[2].addEventListener("click", () => {
        indice = ++indice % myPlaylist.length;
        establecerReproductor(
          reproductor,
          myPlaylist,
          indice,
          album,
          titulo,
          artista,
          duracion
        );
        reproductor.play();
      });
    }
    function actualizarDuracion(reproductor, progreso, duracionProgreso) {
      progreso.addEventListener("input", () => {
        const seekTime = reproductor.duration * (progressRange.value / 100);
        reproductor.currentTime = seekTime;
      });

      reproductor.addEventListener("timeupdate", () => {
        let progressInSecond = Math.floor(reproductor.currentTime % 60);
        let progressInMinutes = Math.floor(reproductor.currentTime / 60);
        let updateTime = `${progressInMinutes.toString()}:${progressInSecond
          .toString()
          .padStart(2, "0")}`;
        let progressValue =
          (reproductor.currentTime / reproductor.duration) * 100;
        progreso.value = progressValue;
        // Actualizar el estilo de la barra de progreso usando la variable CSS
        progreso.style.setProperty("--progress-value", progressValue);
        duracionProgreso.textContent = `${updateTime}`;
      });
    }
    function obtenerDuracion(reproductor) {
      return new Promise((resolve) => {
        reproductor.addEventListener("loadedmetadata", () => {
          const totalMinutes = Math.floor(reproductor.duration / 60);
          const totalSeconds = Math.floor(reproductor.duration % 60);
          const totalTime = `${totalMinutes.toString()}:${totalSeconds
            .toString()
            .padStart(2, "0")}`;
          resolve(totalTime);
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
})();