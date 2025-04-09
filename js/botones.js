
const volver = document.getElementById("volver")
if (volver) volver.addEventListener("click", function() {window.location.href = "../html/index.html"})

const verListado = document.getElementById("ver-listado")
if (verListado) verListado.addEventListener("click", function() {window.location.href = "../html/ver-listado.html"})

const agregarActividad = document.getElementById("agregar-actividad")
if (agregarActividad) agregarActividad.addEventListener("click", function() {window.location.href = "../html/agregar-actividad.html"})

const estadisticas = document.getElementById("estadisticas")
if (estadisticas) estadisticas.addEventListener("click", function() {window.location.href = "../html/estadisticas.html"})



const filaAct = document.getElementById("fila-productos")
if (filaAct) filaAct.addEventListener("click", function() {window.location.href = "../html/info-actividad.html"})

document.addEventListener("DOMContentLoaded", function() {
    const filasAct = document.querySelectorAll("#listado-completo tr");

    filasAct.forEach(function(filaAct) {
        filaAct.addEventListener("click", function() {
            const dataID = filaAct.getAttribute("data-id")

            window.location.href = `../html/info-actividad.html?${dataID}`
        });
    });
});