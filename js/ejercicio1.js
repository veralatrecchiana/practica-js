function areaRectangulo(altura,ancho){
    return altura * ancho;
}

console.log(areaRectangulo(23,4))

function areaTriangulo(altura,ancho){
    return (ancho*altura)/2;
}

console.log(areaTriangulo(40,3))

function largoArray(array){
    return array.length;
}

const mediosDeTrasnporte = ["moto", "auto", "bici"]
const largoTransporte = largoArray(mediosDeTrasnporte)
console.log(largoTransporte)

function cantidadDeLetras(palabra){
    return palabra.length;
}

const palabra = "hola"
const letraPorPalabra = cantidadDeLetras(palabra)
console.log(letraPorPalabra)

function dolarHoy(peso){
    return peso*1000;
}

console.log(dolarHoy(20))

function precioFinal(precio){
    return precio*0.21;
}

console.log(precioFinal(335))

function mitad(numero){
    return numero/2;
}

console.log(mitad(4))

function diaSegunNumero(arrayDeDia,numero){
    return arrayDeDia[numero-1];/*al numero se le resta 1, ya que el indice de los dias empieza en 0 */
}

console.log(diaSegunNumero(["Lunes","Martes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],20))

/*Funciones ejecutadas*/
function siguiente(numero){
    return numero+1;
}

function doble(numero){
    return 2*numero;
}

function siguienteDelDoble(numero){
    return siguiente(doble(numero));
}

console.log(siguiente(9))
console.log(doble(3))
console.log(siguienteDelDoble(8))

function anterior(numero){
    return numero-1;
}

funcion triple(numero){
    return numero*3;
}

function anteriorDelTriple(numero){
    return triple(numero)-1;
}

console.log(anterior(6))
console.log(triple(5))
console.log(anteriorDelTriple(6))
