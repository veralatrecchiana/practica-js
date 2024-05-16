let misDatos={
    nombre:"Vera",
    apellido:"Latrecchiana",
    dni:"46028101",
    edad:"19",
    comidasFavoritas:["Fideos","Sanguche","Sushi"],
    saludar: function(){
        let primerArray = this.comidasFavoritas[0];
        return "Hola mi nombre es " +  this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + primerArray + "."
    }
};

console.log(misDatos.nombre)
console.log(misDatos.apellido)
console.log(misDatos.dni)
console.log(misDatos.comidasFavoritas)
console.log(misDatos.saludar())


let auto={
    marca:"honda",
    modelo:"honda fit",
    anio:"2006",
    color:"gris",
    posicion:"0",
    avanzar: function(n){
        if (n > 0){
            this.posicion += n;
        }
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
        }
    }
};

auto.avanzar(10);
auto.retroceder(5); 
auto.avanzar(3); 
console.log("La posición final del auto es:", auto.posicion);

let nuevoAuto={
    marca:"honda",
    modelo:"honda fit",
    anio:"2006",
    color:"gris",
    posicion:"0",
    moverse: function(n){
        if (n > 0){
            this.posicion += n;
        }
        else if (n < 0){
            this.posicion -= n;
        }
    }
};

nuevoAuto.moverse(10);
nuevoAuto.moverse(-20);
nuevoAuto.moverse(3);
console.log("La posición final del auto nuevo es:", nuevoAuto.posicion);

let ironMan={
    nombre:"Iron Man",
    equipo:"Avengers",
    poderes:["Volar","Lanzar misiles","Disparar laser"],
    energia:100,
    getPoder: function(fn){
        this.energia -= 10;
        return "Poder elegido de " + this.nombre + ": " + this.poderes[fn] + ". Energia restante: " + this.energia + ".",
    }
}

ironMan.getPoder(0);
ironMan.getPoder(5);
ironMan.getPoder(2);
console.log(ironMan.getPoder(0));

let hulk={
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(fn){
        this.energia -= 10;
        return "Poder elegido de " + this.nombre + ": " + this.poderes[fn] + ". Energia restante: " + this.energia + ".",
    }
}

hulk.getPoder(0);
hulk.getPoder(5);
hulk.getPoder(2);
console.log(hulk.getPoder(2))

//El array va entre 0 y 2, porque los poderes son solamente 3//

