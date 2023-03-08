//esto es para las cualidades que se muestran en el aside.

var objCualidades = {
    1: "Me interesa el manejo de base de datos y el comportamiento interactivo de un sitio web con el cliente.",
    2: "Apunto a la especialización de JavaScript (incluyendo el uso de NodeJS).",
    3: "Me gusta aprender constantemente.",
    4: "Soy bueno entendiéndome en proyectos grupales.",
    5: "Me considero amigo de las matemáticas y la lógica.",
    6: "No me falta la paciencia."
}

var introducción = document.getElementById("textoCualidades");
introducción.innerHTML = objCualidades[1]

let I = 1
function verMás(){
    if (I < 6){
        I++
    }else{
        I = 1
    }
    introducción.innerHTML = objCualidades[I]
};

//función para que se le agregue la clase css "seccionesIluminadas" cada vez que se llama a un elemento con los buscadores del nav

const secContacto = document.getElementById("contacto")
const secInfoPers = document.getElementById("infoPers")
const secExpHab = document.getElementById("main")

function iluminar(elementoHtml) {
  var intervalo = setInterval(function() {
    elementoHtml.classList.toggle('seccionIluminada');
  }, 100);
  
  setTimeout(function() {
    clearInterval(intervalo);
    elementoHtml.classList.remove('seccionIluminada');
  }, 2000);
};



