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





const buildPreviewPortada = (datos, tabla) => {
    for (let i = 0; i < 5; i++) {
        const fila = document.createElement("tr");
        fila.setAttribute("data-id", datos[i].id);

        const inicio = document.createElement("td");
        inicio.textContent = datos[i].inicio;
        fila.appendChild(inicio);

        const termino = document.createElement("td");
        termino.textContent = datos[i].termino;
        fila.appendChild(termino);

        const comuna = document.createElement("td");
        comuna.textContent = datos[i].comuna;
        fila.appendChild(comuna);

        const sector = document.createElement("td");
        sector.textContent = datos[i].sector;
        fila.appendChild(sector);

        const tema = document.createElement("td");
        tema.textContent = datos[i].tema.join(", ");
        fila.appendChild(tema);

        const fotos = document.createElement("td");
        if (datos[i].fotos && datos[i].fotos.length > 0) {
            datos[i].fotos.forEach(foto => {
                const imagen = document.createElement("img");
                imagen.src = foto;
                imagen.style.width = "80px";
                imagen.style.height = "80px";
                imagen.style.objectFit = "cover";
                imagen.style.marginRight = "5px";
                fotos.appendChild(imagen);
            });
        }
        fila.appendChild(fotos);

        tabla.appendChild(fila);
    }
}


const listadoResumen = document.getElementById("listado-resumen")
if (listadoResumen) buildPreviewPortada(fake_data, listadoResumen)