//Banco de preguntas
var pregunta1 = ["¿Cuántos litros de sangre tiene una persona adulta?", "Tiene entre 4 y 6 litros", "Tiene entre 2 y 4 litros", "Tiene 10 litros", "Tiene 7 litros"]
var pregunta2 = ["¿Quién es el autor de la frase Pienso, luego existo?", "Descartes", "Galileo Galilei", "Platón", "Sócrates"]
var pregunta3 = ["¿Cuál es el país más grande y el más pequeño del mundo?", "Rusia y Vaticano", "China y Nauru", "Canadá y Mónaco", "Estados Unidos y Malta"]
var pregunta4 = ["¿Cuál es el libro más vendido en el mundo después de la Biblia?", "Don Quijote de la Mancha", "El Señor de los Anillos", "El Principito", "Cien años de Soledad"]
var pregunta5 = ["¿Cuántos decimales tiene el número pi π?", "Infinitos", "Dos", "Cien", "Mil"]
var pregunta6 = ["La sal común está formada por dos elementos, ¿cuáles son?", "Sodio y cloro", "Sodio y potasio", "Sodio y carbono", "Potasio y cloro"]
var pregunta7 = ["¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?", "8 minutos", "12 minutos", "1 día", "12 horas"]
var pregunta8 = ["¿Cuál es la nacionalidad de Jorge Mario Bergoglio?", "Argentina", "Cubana", "Española", "Ecuatoriana"]
var pregunta9 = ["¿A quién se le atribuye la frase: Solo sé que no sé nada", "Sócrates", "Aristóteles", "Nietszche", "Sófocles"]
var pregunta10 = ["¿Cuál es la montaña más alta del continente americano?", "Aconcagua", "Monte Everest", "Pico Neblina", "Pico Bolívar"]
var pregunta11 = ["¿Qué hora es en inglés It is a quarter past six?", "6:15", "3:46", "6:45", "5:15"]
var pregunta12 = ["¿Qué líder mundial quedó conocida como La Dama de Hierro?", "Margaret Thatcher", "Hillary Clinton", "Angela Merkel", "Dilma Rouseff"]
var pregunta13 = ["¿Cuál de estos países se extiende entre dos continentes?", "Rusia", "Tanzania", "Groenlandia", "Egipto"]
var pregunta14 = ["¿Cuáles son los nombres de los tres reyes magos?", "Gaspar, Melchor y Baltazar", "Gaspar, Nicolas y Nataniel", "Simon, Judas y Mateo", "Charles, George y Louis"]
var pregunta15 = ["¿Cuáles son los dioses griegos correspondientes a los dioses romanos Júpiter y Plutón?", "Zeus y Hades", "Ares y Hermes", "Cronos y Apolo", "Zeus y Ares"]
var pregunta16 = ["¿Cuál es el animal terrestre más grande en la actualidad?", "Elefante africano", "Ballena azul", "Jirafa", "Tiburón blanco"]
var pregunta17 = ["¿Cuál es la religión monoteísta que cuenta con el mayor número de adeptos en el mundo?", "Cristianismo", "Judaísmo", "Zoroastrismo", "Islamismo"]
var pregunta18 = ["¿Quién fue el primer hombre en pisar la Luna?", "Neil Armstrong", "Michael Collins", "Charles Conrad", "Buzz Aldrin"]
var pregunta19 = ["¿Quién descubrió la vacuna contra la rabia y el proceso de pasteurización?", "Louis Pasteur", "Charles Darwin", "Marie Curie", "Antoine Lavoisier"]
var pregunta20 = ["¿Cuál es el tipo sanguíneo considerado como donante universal?", "Tipo O", "Tipo B", "Tipo A", "Tipo AB"]

//Preguntas
var preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18, pregunta19, pregunta20]

var preguntasAleatorias = []


//Puntaje
var puntos = 0
var cont = 0

//Otros
var numeros = []
var canvas
var ctx
var posY = 300


obtenerPreguntas()

function validarRepetir(numero) {
    bandera = false
    if (numeros.length != 0) {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] == numero) {
                bandera = true
                return bandera
            }
        }
    }
    numeros.push(numero)
    return bandera
}


function numerosAleatorios(min, max, tamanio) {
    var myNumeroAleatorio
    numeros = []
    for (let i = 0; i < tamanio; i++) {
        do {
            myNumeroAleatorio = random(min, max)
        } while (validarRepetir(myNumeroAleatorio));
    }
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function obtenerPreguntas() {
    numerosAleatorios(0, 19, 5)
    for (let i = 0; i < numeros.length; i++) {
        preguntasAleatorias.push(preguntas[numeros[i]])
    }
}

function obtenerRespuestas() {
    numerosAleatorios(1, 4, 4)
    for (let i = 0; i < numeros.length; i++) {
        document.getElementById('respuesta' + (i + 1)).value = preguntasAleatorias[cont][numeros[i]]
    }
}

function obtenerPregunta() {
    if (cont >= 0 && cont <= 4) {
        document.getElementById('pregunta').innerHTML =  preguntasAleatorias[cont][0]
        getImage()
        obtenerRespuestas()
    }

}

function validarRespuesta(valor) {
    if (cont >= 0 && cont <= 4) {
        if (valor == preguntasAleatorias[cont][1]) {
            document.getElementById("feliz").play()
            puntos++
        } else {
            document.getElementById("triste").play()
        }
        cont++
        obtenerPregunta()
        if (cont == 5) {
            validarPuntos()
        }
    }
}

function validarPuntos() {
     document.getElementById("imagen").style.display = "none"
     document.getElementById("pregunta").style.display = "none"
     document.getElementById("respuesta1").style.display = "none"
     document.getElementById("respuesta2").style.display = "none"
     document.getElementById("respuesta3").style.display = "none"
     document.getElementById("respuesta4").style.display = "none"
     document.getElementById("respuestas").style.display = "none"
     document.getElementById("lienzo").style.display = ""
     document.getElementById("miCanvas").style.display = ""
    
    if (puntos >=3) {
        document.getElementById('ganaste').play()
        setInterval(ganaste, 20)
    } else{
        document.getElementById('perdiste').play()
        setInterval(perdiste, 20)
    }
}

function iniciar() {
    obtenerPregunta()
    mostrar()
    document.getElementById("inicio").style.display = "none"
    canvas = document.getElementById("miCanvas")
    ctx = canvas.getContext('2d')
}

function getImage() {
   var imagen = document.getElementById('imagen')
   var url = "https://picsum.photos/800/400"
   fetch(url).then(response => {
        imagen.src = response.url
   }).catch(error => {
        alert("Ha ocurrido un error")
   })

}

function ocultar() {
    document.getElementById("imagen").style.display = "none"
    document.getElementById("pregunta").style.display = "none"
    document.getElementById("respuesta1").style.display = "none"
    document.getElementById("respuesta2").style.display = "none"
    document.getElementById("respuesta3").style.display = "none"
    document.getElementById("respuesta4").style.display = "none"
    document.getElementById("miCanvas").style.display = "none"
    document.getElementById("preguntas").style.display = "none"
}

function mostrar() {
    document.getElementById("imagen").style.display = ""
    document.getElementById("pregunta").style.display = ""
    document.getElementById("respuesta1").style.display = ""
    document.getElementById("respuesta2").style.display = ""
    document.getElementById("respuesta3").style.display = ""
    document.getElementById("respuesta4").style.display = ""
    document.getElementById("preguntas").style.display = ""
    document.getElementById("lienzo").style.display = "none"
}

function ganaste() {
    limpiar()

    ctx.fillStyle = 'white'
    ctx.font = "30px Arial"
    ctx.fillText("Ganaste, tienes " + puntos + 'pts', 250, 50);

    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "yellow"

    ctx.beginPath();
    ctx.moveTo(215, posY)
    ctx.lineTo(215, posY + 50)
    ctx.moveTo(215, posY + 20)
    ctx.lineTo(195, posY)
    ctx.moveTo(215, posY + 20)
    ctx.lineTo(235, posY)
    ctx.fillRect(210, posY - 10, 10, 10)
    ctx.stroke()
    
    ctx.beginPath();
    ctx.moveTo(275, posY)
    ctx.lineTo(275, posY + 50)
    ctx.moveTo(275, posY + 20)
    ctx.lineTo(255, posY)
    ctx.moveTo(275, posY + 20)
    ctx.lineTo(295, posY)
    ctx.fillRect(270, posY - 10, 10, 10)
    ctx.stroke()
    
    ctx.beginPath();
    ctx.moveTo(335, posY)
    ctx.lineTo(335, posY + 50)
    ctx.moveTo(335, posY + 20)
    ctx.lineTo(315, posY)
    ctx.moveTo(335, posY + 20)
    ctx.lineTo(355, posY)
    ctx.fillRect(330, posY - 10, 10, 10)
    ctx.stroke()
    
    ctx.beginPath();
    ctx.moveTo(395,posY)
    ctx.lineTo(395,posY + 50)
    ctx.moveTo(395,posY + 20)
    ctx.lineTo(375,posY)
    ctx.moveTo(395,posY + 20)
    ctx.lineTo(415,posY)
    ctx.fillRect(390, posY - 10, 10, 10)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(455, posY)
    ctx.lineTo(455, posY + 50)
    ctx.moveTo(455, posY + 20)
    ctx.lineTo(435, posY)
    ctx.moveTo(455, posY + 20)
    ctx.lineTo(475, posY)
    ctx.fillRect(450, posY - 10, 10, 10)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(515, posY)
    ctx.lineTo(515, posY + 50)
    ctx.moveTo(515, posY + 20)
    ctx.lineTo(495, posY)
    ctx.moveTo(515, posY + 20)
    ctx.lineTo(535, posY)
    ctx.fillRect(510, posY - 10, 10, 10)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(575, posY)
    ctx.lineTo(575, posY + 50)
    ctx.moveTo(575, posY + 20)
    ctx.lineTo(555, posY)
    ctx.moveTo(575, posY + 20)
    ctx.lineTo(595, posY)
    ctx.fillRect(570, posY - 10, 10, 10)
    ctx.stroke()

    posY--

     if (posY == 280) {
        posY = 300
     }
}


function perdiste() {
    limpiar()

    ctx.fillStyle = 'white'

    ctx.font = "30px Arial";
    ctx.fillText("Perdiste, tienes " + puntos + 'pts', 250, 50);

    ctx.fillStyle = "blue"
    ctx.strokeStyle = "blue"

    ctx.beginPath();
    ctx.moveTo(215, 300)
    ctx.lineTo(215, 350)
    ctx.moveTo(215, 320)
    ctx.lineTo(195, posY)
    ctx.moveTo(215, 320)
    ctx.lineTo(235, posY)
    ctx.fillRect(210, 290, 10, 10)
    ctx.stroke()
    
    ctx.beginPath();
    ctx.moveTo(275, 300)
    ctx.lineTo(275, 350)
    ctx.moveTo(275, 320)
    ctx.lineTo(255, posY)
    ctx.moveTo(275, 320)
    ctx.lineTo(295, posY)
    ctx.fillRect(270, 290, 10, 10)
    ctx.stroke()
    
    ctx.beginPath();
    ctx.moveTo(335, 300)
    ctx.lineTo(335, 350)
    ctx.moveTo(335, 320)
    ctx.lineTo(315, posY)
    ctx.moveTo(335, 320)
    ctx.lineTo(355, posY)
    ctx.fillRect(330, 290, 10, 10)
    ctx.stroke()
    
    ctx.beginPath();
    ctx.moveTo(395,300)
    ctx.lineTo(395,350)
    ctx.moveTo(395,320)
    ctx.lineTo(375,posY)
    ctx.moveTo(395,320)
    ctx.lineTo(415,posY)
    ctx.fillRect(390, 290, 10, 10)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(455, 300)
    ctx.lineTo(455, 350)
    ctx.moveTo(455, 320)
    ctx.lineTo(435, posY)
    ctx.moveTo(455, 320)
    ctx.lineTo(475, posY)
    ctx.fillRect(450, 290, 10, 10)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(515,  300)
    ctx.lineTo(515,  350)
    ctx.moveTo(515,  320)
    ctx.lineTo(495,  posY)
    ctx.moveTo(515,  320)
    ctx.lineTo(535,  posY)
    ctx.fillRect(510, 290, 10, 10)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(575,  300)
    ctx.lineTo(575,  350)
    ctx.moveTo(575,  320)
    ctx.lineTo(555,  posY)
    ctx.moveTo(575,  320)
    ctx.lineTo(595,  posY)
    ctx.fillRect(570, 290, 10, 10)
    ctx.stroke()
    
    posY++
    if(posY == 340){
        posY = 300
    }
}

function limpiar(){
    ctx.clearRect(0, 0, 800, 400)
}