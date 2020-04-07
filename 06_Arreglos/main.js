// variables especiales 

//Arreglo 

let arreglo = [];
 

             // 0            1           2           3
let flores = ["Rosas", "Margaritas", "Tulipanes", "Girasol",];  

console.log(flores);

flores [4] = "Orquidea"

console.log(flores);

console.log(flores[2]);

// .push() -----> Agrega un elemnto a lo ultimo 

flores.push(true)
console.log(flores);

// .pop  ----> Borra el ultimo elemento 

flores.pop()
console.log(flores);

// .slice

flores.splice(0,2)
console.log(flores);

// Objetos

let persona = {
    nombre: "ronald",
    edad: 29,
    telefono: "3185040951",
    direccion: "calle 32",
    familia: true,
    musica: ["salsa", "Cumbia", "Reggeteon", "Mertal"],
    peliculas : {
        terror : false,
        romanticas : ["titanic", "Romeo y Julieta"]
    }
}

console.log(persona);