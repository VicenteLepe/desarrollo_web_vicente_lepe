const fake_data = [
    {
        id: "1",
        region: "Metropolitana de Santiago",
        comuna: "San José de Maipo",
        sector: "Lagunillas",
        nombre: "Club Andino de Chile",
        email: "cach@gmail.com",
        numero: "+56900000000",
        contactos: [""],
        users: "",
        inicio: "2025-04-11 08:30",
        termino: "2025-04-13 17:30",
        descripcion: "trekking por la cordillera",
        tema: ["Deporte"],
        otro: "",
        fotos: ["../media/fotos/foto1.JPG", "../media/fotos/foto2.JPG"]
    },
    {
        id: "2",
        region: "Metropolitana de Santiago",
        comuna: "Santiago",
        sector: "Canchas parque O'Higgins",
        nombre: "Lebron James",
        email: "lebron@gmail.com",
        numero: "+56900000000",
        contactos: ["Instagram"],
        users: "@kingjames",
        inicio: "2025-04-12 08:00",
        termino: "",
        descripcion: "Pichanga de basket",
        tema: ["Deporte"],
        otro: "",
        fotos: ["../media/fotos/foto3.JPG", "../media/fotos/foto4.JPG", "../media/fotos/foto5.JPG"]
    },
    {
        id: "3",
        region: "Metropolitana de Santiago",
        comuna: "Santiago",
        sector: "Beauchef",
        nombre: "Luis Miguel",
        email: "soldemexico@gmail.com",
        numero: "+56900000000",
        contactos: ["Whatsapp"],
        users: "+56900000000",
        inicio: "2025-04-10 16:30",
        termino: "",
        descripcion: "una tocata piola",
        tema: ["Música"],
        otro: "",
        fotos: ["../media/fotos/foto6.JPG"]
    },
    {
        id: "4",
        region: "Metropolitana de Santiago",
        comuna: "Santiago",
        sector: "Beauchef - ebria",
        nombre: "Pokemon company",
        email: "pkm@nintendo.com",
        numero: "+56900000000",
        contactos: [""],
        users: "",
        inicio: "2025-04-09 12:00",
        termino: "",
        descripcion: "Torneo de pokemon tcg",
        tema: ["Juegos"],
        otro: "",
        fotos: ["../media/fotos/foto7.JPG"]
    },
    {
        id: "5",
        region: "Metropolitana de Santiago",
        comuna: "Santiago",
        sector: "Gorbea",
        nombre: "Panchito",
        email: "sinchucrut@gmail.com",
        numero: "+56900000000",
        contactos: [""],
        users: "",
        inicio: "2025-04-11 21:00",
        termino: "",
        descripcion: "Completada bailable",
        tema: ["Comida","Baile"],
        otro: "",
        fotos: ["../media/fotos/foto8.JPG", "../media/fotos/foto9.JPG", "../media/fotos/foto10.JPG"]
    }
];



const url = window.location.href;
const partesURL = url.split('?');
const datosID = partesURL[partesURL.length - 1];

const actividad = fake_data.find(item => item.id === datosID);

if (actividad) {
    document.getElementById("region").textContent = "Región: " + actividad.region;
    document.getElementById("comuna").textContent = "Comuna: " + actividad.comuna;
    document.getElementById("sector").textContent = "Sector: " + actividad.comuna;
    document.getElementById("nombre").textContent = "Nombre del organizador: " + actividad.nombre;
    document.getElementById("email").textContent = "Email: " + actividad.email;
    document.getElementById("numero").textContent = "Número de telefono: " + actividad.numero;
    document.getElementById("contactos").textContent = "Contactar por: " + actividad.contactos.join(", ");
    document.getElementById("users").textContent = actividad.users;
    document.getElementById("inicio").textContent = "Fecha de inicio: " + actividad.inicio;
    document.getElementById("termino").textContent = "Fecha de termino: " + actividad.termino;
    document.getElementById("descripcion").textContent = "Descripción: " + actividad.descripcion;
    document.getElementById("tema").textContent = "Tema(s): " + actividad.tema.join(", ");
    document.getElementById("otro").textContent = actividad.otro;

    const imagenesContainer = document.getElementById("fotos");
    actividad.fotos.forEach(foto => {
        const imagen = document.createElement("img");
        imagen.src = foto;
        imagen.alt = "Imagen de la actividad";
        imagen.className = "actividad-imagen-lista";
        imagen.style.width = "320px"
        imagen.style.height = "240px"
        imagen.style.objectFit = "cover"
        imagenesContainer.appendChild(imagen);
    });
}


document.getElementById("fotos").addEventListener("click", function(event) {
    const target = event.target;
    if (target.tagName === "IMG") {
        if (target.style.width === "800px") {
            target.style.width = "320px";
            target.style.height = "240px";
        } else {
            target.style.width = "800px";
            target.style.height = "600px";
        }
    }
});
