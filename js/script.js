// // Fecha de la boda
// const fecha_Boda= new Date("2025-01-22T03:00:00").getTime();

// // Actualizar el contador cada segundo
// const cuenta_Regresiva_Function = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = fecha_Boda - now;

//     // Cálculos de tiempo
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Mostrar resultados
//     document.getElementById("days").innerHTML = `${days} Días`;
//     document.getElementById("hours").innerHTML = `${hours} Horas`;
//     document.getElementById("minutes").innerHTML = `${minutes} Minutos`;
//     document.getElementById("seconds").innerHTML = `${seconds} Segundos`;

//     // Si la cuenta regresiva ha terminado
//     if (distance < 0) {
//         clearInterval(cuenta_Regresiva_Function);
//         document.getElementById("FechaBoda").innerHTML = "¡El gran día ha llegado!";
//     }
// }, 1000);
// Fecha de la boda

// Funcionamiento del boton de hamburguesa

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});
// Funcionamiento del boton de la musica
// Reemplaza el código actual del botón de música por este
const musicButton = document.getElementById("musicButton");
const bgMusic = document.getElementById("bgMusic");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
let isPlaying = false;

// Función para iniciar la música automáticamente
window.addEventListener("DOMContentLoaded", () => {
  // Intenta reproducir la música
  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      })
      .catch((error) => {
        console.log("Reproducción automática bloqueada por el navegador");
      });
  }
});

// Control del botón de música
musicButton.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  } else {
    bgMusic.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  }
  isPlaying = !isPlaying;
});
