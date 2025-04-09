const validateRegion = (region) => region;

const validateComuna = (comuna) => comuna;

const validateSector = (sector) => {
    if (!sector || sector.length < 101){
        return true;
    } else {
        return false;
    }
};

const validateNombre = (nombre) => nombre && nombre.length >= 1 && nombre.length < 201;

const validateEmail = (email) => {
    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateNumero = (numero) => {
    if (!numero) {
        return true;
    } else {
        const phonenoRegex = /^\+[0-9]{3}[- ]?([0-9]{4})[- ]?([0-9]{4})$/;
        return phonenoRegex.test(numero); 
    }  
};

const validateContacto = (contacto) => {
    const selectedOptions = Array.from(contacto.selectedOptions);
    if (!selectedOptions.length || selectedOptions.length <= 5) {
        return true;
    } else {
        return false;
    }
}

const validateUser = (user) => user && user.length >= 4 && user.length < 51;

const validateInicio = (inicio) => inicio;

const validateTermino = (termino, inicio) => {
    if (!termino) {
        return true;
    } else {
        const dateInicio = new Date(inicio);
        const dateTermino = new Date(termino);
        if (dateInicio < dateTermino) {
            return true;
        } else {
            return false
        }
    }
}

const validateDescripcion = (descripcion) => {
    const rows = descripcion.split("\n");
    const validRows = rows.every(row => row.length <= 500) && rows.length <= 4 && descripcion.length <=500;
    return validRows;
}

const validateTema = (tema) => {
    const selectedOptions = Array.from(tema.selectedOptions).filter(opt => opt.value && opt.value !== "-- selecciona una opción --");
    return selectedOptions.length >= 1;
};

const validateOtro = (otro) => otro && otro.length >= 3 && otro.length < 15;

const validateFotos = (fotos) => {
    let valid = true;
    if (fotos.length > 3 || fotos.length < 1) {
        valid = false;
    } else {
        for (let i=0; i<fotos.length; i++){
            const fotoName = fotos[i].name;
            const extension = fotoName.split('.').pop().toLowerCase();
            const allowedExtensions = ["jpg", "jpeg", "png"];
            if (!allowedExtensions.includes(extension)) valid = false;
        }
    }
    return valid;
}



  
// --- Form Handling ---
  
const handleFormSubmit = () => {
    console.log("Validating form...");

    const regionInput = document.getElementById("region");
    const comunaInput = document.getElementById("comuna");
    const sectorInput = document.getElementById("sector");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const numeroInput = document.getElementById("numero");
    const contactoInput = document.getElementById("contacto");
    const userInput = document.getElementById("user");
    const inicioInput = document.getElementById("inicio");
    const terminoInput = document.getElementById("termino");
    const descripcionInput = document.getElementById("descripcion");
    const temaInput = document.getElementById("tema");
    const otroInput = document.getElementById("otro");
    const fotosInputs = [
        document.getElementById("foto"),
        document.getElementById("foto2"),
        document.getElementById("foto3"),
        document.getElementById("foto4"),
        document.getElementById("foto5"),
    ];



    let isValid = true;
    let errorMessage = "";

    // Validate inputs
    if (!validateRegion(regionInput.value)) {
        isValid = false;
        errorMessage += "Por favor, selecciona una región.\n";
        regionInput.style.borderColor = "red";
    } else {
        regionInput.style.borderColor = "";
    }

    if (!validateComuna(comunaInput.value)) {
        isValid = false;
        errorMessage += "Por favor, selecciona una comuna.\n";
        comunaInput.style.borderColor = "red";
    } else {
        comunaInput.style.borderColor = "";
    }

    if (!validateSector(sectorInput.value)) {
        isValid = false;
        errorMessage += "Sector demasiado largo (máximo 100 caracteres).\n";
        sectorInput.style.borderColor = "red";
    } else {
        sectorInput.style.borderColor = "";
    }

    if (!validateNombre(nombreInput.value)) {
        isValid = false;
        errorMessage += "Por favor, ingresa un nombre válido (máximo 200 caracteres).\n";
        nombreInput.style.borderColor = "red";
    } else {
        nombreInput.style.borderColor = "";
    }

    if (!validateEmail(emailInput.value)) {
        isValid = false;
        errorMessage += "Por favor, ingresa un correo electrónico válido.\n";
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "";
    }

    if (!validateNumero(numeroInput.value)) {
        isValid = false;
        errorMessage += "Por favor, ingresa un número de celular válido (+NNN NNNN-NNNN).\n";
        numeroInput.style.borderColor = "red";
    } else {
        numeroInput.style.borderColor = "";
    }

    if (!validateContacto(contactoInput)) {
        isValid = false;
        errorMessage += "Por favor, selecciona máximo 5 medios de contacto.\n";
        contactoInput.style.borderColor = "red";
    } else {
        contactoInput.style.borderColor = "";
    }

    const contactoSeleccionado = Array.from(contactoInput.selectedOptions).length;
    if (contactoSeleccionado.length > 0) {
        if (!validateUser(userInput.value)) {
            isValid = false;
            errorMessage += "Por favor, ingresa información de contacto válida (mínimo 4 caracteres y máximo 50).\n";
            userInput.style.borderColor = "red";
        } else {
            userInput.style.borderColor = "";
        }
    } else {
        userInput.style.borderColor = "";
    }

    if (!validateInicio(inicioInput.value)) {
        isValid = false;
        errorMessage += "Por favor, selecciona una fecha de inicio.\n";
        inicioInput.style.borderColor = "red";
    } else {
        inicioInput.style.borderColor = "";
    }

    if (!validateTermino(terminoInput.value, inicioInput.value)) {
        isValid = false;
        errorMessage += "Por favor, selecciona una fecha de termino válida.\n";
        terminoInput.style.borderColor = "red";
    } else {
        terminoInput.style.borderColor = "";
    }

    if (!validateDescripcion(descripcionInput.value)) {
        isValid = false;
        errorMessage += "Descripción demasiado larga.\n";
        descripcionInput.style.borderColor = "red";
    } else {
        descripcionInput.style.borderColor = "";
    }

    if (!validateTema(temaInput)) {
        isValid = false;
        errorMessage += "Por favor, selecciona al menos un tema.\n";
        temaInput.style.borderColor = "red";
    } else {
        temaInput.style.borderColor = "";
    }

    const temaValues = Array.from(temaInput.selectedOptions).map(option => option.value);
    if (temaValues.includes("otro")) {
        if (!validateOtro(otroInput.value)) {
            isValid = false;
            errorMessage += "Por favor, ingresa un tema válido (mínimo 3 caracteres y máximo 15)\n";
            otroInput.style.borderColor = "red";
        } else {
            otroInput.style.borderColor = "";
        }
    } else {
        otroInput.style.borderColor = "";
    }

    const selectedFotos = fotosInputs
    .filter(input => input && input.files.length > 0)
    .map(input => input.files[0]);

    if (!validateFotos(selectedFotos)) {
        isValid = false;
        errorMessage += "Por favor, selecciona al menos una imagen.\n";
        const firstFotoInput = document.getElementById("foto");
        firstFotoInput.style.borderColor = isValid ? "" : "red";
    } else {
        const firstFotoInput = document.getElementById("foto");
        firstFotoInput.style.borderColor = "";
    }

    


    // Handle errors or redirect to confessions page
    if (!isValid) {
        alert(errorMessage); // Replace with a user-friendly error display
    } else {
        let confirmacion = window.confirm("¿Está seguro que desea agregar esta actividad?")
        if (confirmacion) {
            const mensaje = document.getElementById("mensaje-final");
            mensaje.style.display = "block";
        }
    }
};
  
// --- Event Listener ---

document.getElementById("envio").addEventListener("click", handleFormSubmit);