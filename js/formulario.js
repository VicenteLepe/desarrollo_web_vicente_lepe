
const contacto = document.getElementById("contacto")
const userInput = document.getElementById("user-input")

const displayUserInput = () => {
    let selectedContacto = document.getElementById("contacto").value

    if (!selectedContacto) {
        userInput.style.display = "none"
    } else {
        userInput.style.display = "block"
    }
}

displayUserInput()
contacto.addEventListener("change", displayUserInput)

const tema = document.getElementById("tema")
const otroInput = document.getElementById("otro-input")

const displayOtroInput = () => {
    let selectedTema = document.getElementById("tema").value
    if (selectedTema != "otro") {
        otroInput.style.display = "none"
    } else {
        otroInput.style.display = "block"
    }
}

displayOtroInput()
tema.addEventListener("change", displayOtroInput)


const addFoto = document.getElementById("mas-fotos")
let fotos = 0
const fotosInput2 = document.getElementById("fotos-input2")
const fotosInput3 = document.getElementById("fotos-input3")
const fotosInput4 = document.getElementById("fotos-input4")
const fotosInput5 = document.getElementById("fotos-input5")

displayMasFotos = () => {
    fotos++
    if (fotos == 1){
        fotosInput2.style.display = "none"
        fotosInput3.style.display = "none"
        fotosInput4.style.display = "none"
        fotosInput5.style.display = "none"
    }
    if (fotos == 2){
        fotosInput2.style.display = "block"
        fotosInput3.style.display = "none"
        fotosInput4.style.display = "none"
        fotosInput5.style.display = "none" 
    }
    if (fotos == 3){
        fotosInput2.style.display = "block"
        fotosInput3.style.display = "block"
        fotosInput4.style.display = "none"
        fotosInput5.style.display = "none" 
    }
    if (fotos == 4){
        fotosInput2.style.display = "block"
        fotosInput3.style.display = "block"
        fotosInput4.style.display = "block"
        fotosInput5.style.display = "none"
    }
    if (fotos == 5){
        fotosInput2.style.display = "block"
        fotosInput3.style.display = "block"
        fotosInput4.style.display = "block"
        fotosInput5.style.display = "block"
    }
}

displayMasFotos()
if (addFoto) addFoto.addEventListener("click", displayMasFotos)