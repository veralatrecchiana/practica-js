//Ejercicio 1//
for (let i=0; i<5; i++){
    console.log("Practicando con el bucle for" + i);
}

for (let i=0; i<10; i++){
    console.log(`La variable i tiene el valor ${i}`);
}

for (let i=0; i<10; i++){
    console.log(2*i);
}

//No se modifica nada, ya que al multiplicar por 2, el mismo ya va de 2 en 2//

for (let i=0; i<50; i++){
    console.log(5*i);
}

//No se modifica nada, ya que al multiplicar por 5, el mismo ya va de 5 en 5//

//Ejercicio 2//
for (let i=100; i>0; i--){
    console.log(i)
}

let base = 2;

let resultados = [];

for(let i=1; i<10; i++){
    resultados.push(base*i);
}

console.log(resultados);

//Ejercicio 3//
let ganancias = [1,2,3,5,-20,8,9,6,-4-9];
suma = 0

for (let i=0; i<ganancias.length; i++){
    suma += ganancias[i]; //va reocrriendo y sumando los valores del array//
}

//Ejercicio 4//
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
    ];
    
for (let i=0; i<healingIsDifficult.length; i++){
        console.log(i+1 + " " + healingIsDifficult[i]); //va reocrriendo el array y agregando el numero de cancion que es//
}

//Ejercicio 5//
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i=0; i<got.length; i++){
    console.log("Hola " + got[i].nombre + " " + got[i].apellido + " criatura viajera!");
    console.log("Soy " + got[i].nombre + " " + got[i].apellido + " de la ciudad " + got[i].ciudad);
}