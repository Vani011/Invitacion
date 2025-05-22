document.getElementById("openButton").addEventListener("click", function () {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "invitacion.html";
  }, 600); // espera a que termine la animación
});
