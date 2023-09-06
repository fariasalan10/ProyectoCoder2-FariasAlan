// Variables globales
const nombre = "Velocímetro";
let kmH = 60;
const velMax = 130;
const velMin = 60;
alert("Bienvenido a la ruta 'Córdoba-Carlos Paz', el máximo permitido es 130km/h y el mínimo 60km/h. No los excedas o tendrás una multa.")
// El vehículo acelera según el parámetro velocidad, siempre y cuando no supere los límites. 
function Acelerar(velocidad) {
  if (kmH < velMax) {
    kmH = kmH + velocidad;
  }
  // Velocidad Máxima 
  if (kmH >= velMax) {
    alert("Excediste el límite, vas muy rápido. Tenes una multa.-");
  }
  console.log(nombre + ": " + tablero() + kmH + "km/h");
}

// El vehículo frena según el parámetro velocidad, siempre y cuando no circule por debajo de los límites.
function Frenar(velocidad) {
    if (kmH > 0) {
      kmH = kmH - velocidad;
    }
    // Velocidad Mínima
    if (kmH <= velMin) {
      alert("Excediste el límite, estás circulando muy lento. Tenes una multa.-");
    }
    console.log(nombre + ": " + tablero() + kmH + "km/h");
  }


  function tablero() {
    let tablero = "";
    // El tablero muestra las barritas verticales (|) según la cantidad de kmH a la que vaya el vehículo.
    for (let i = 0; i < kmH; i++) {
      tablero = tablero + "|";
    }
    return tablero;
  }