document.addEventListener("DOMContentLoaded", function () {
  const regalo = document.getElementById("regalo");

  regalo.addEventListener("click", function () {
    document.getElementById("sorpresa").style.display = "none";
    document.getElementById("invitacion").style.display = "block";
  });
});

function respuestaSi() {
  document.getElementById("respuesta").textContent =
    "¡Gracias por aceptar! Avisame para ponernos de acuerdo, yei. 🥳";
}

function respuestaNo() {
  document.getElementById("respuesta").textContent =
    "¿Seguro??? Me gustaría estar contigo 😢";
}
