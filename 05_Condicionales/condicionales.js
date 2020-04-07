// alert("hola")

// // if(condicion){
// //     bloque codigo si se cumple 
// // }
// // else {
// //     bloque codigo si no se cumple
// // }


// let num1 = 10;

// console.log(typeof(num1));

// // typeof es para saber tipo de dato
// //   = --> asigna un valor
// //  == --> comparar valores
// // === --> compara tipo de dato  

// let num1 = 10;

// if (num1 == 100 ){
//     console.log("es verdad");
// } else{
//     console.log("No es verdad");
// }


// //si el numero 10 es mayor o menor que 5

// let numero = prompt("ingresa el numero")

// if (numero >= 10) {
//     console.log("es mayor")
// }else {
//     console.log("el numero es menor")
// }


// let numero = prompt("ingresa el numero")

// if (numero % 2 == 0) {
//     console.log(numero + " " + "par")
// }else {
//     console.log("impar")
// }


// let parImpar = 2;

//     if(numero % 2 === 0) {
//       return "par";
//     }
//     else {
//       return "impar";
//     }
  
let opcionUsuario1 = prompt("elige una opcion ")
let opcionUsuario2 = prompt("elige una opcion")

    // empate
if (opcionUsuario1 === "piedra" && opcionUsuario2 === "piedra" ) {
    console.log("Empate");

}else if (opcionUsuario1 === "papel" && opcionUsuario2 === "papel"  ) {
    console.log("Empate");

}else if (opcionUsuario1 === "tijera" && opcionUsuario2 === "tijera"  ) {
    console.log("Empate");

    // ganador de usuario 1

}else if (opcionUsuario1 === "tijera" && opcionUsuario2 === "papel"  ) {
    console.log("Ganaste!");

}else if (opcionUsuario1 === "papel" && opcionUsuario2 === "piedra"  ) {
    console.log("Ganaste!");

}else if (opcionUsuario1 === "piedra" && opcionUsuario2 === "tijera"  ) {
    console.log("Ganaste!");


    //ganador usuario 2

}else if (opcionUsuario1 === "piedra" || opcionUsuario2 === "papel"  ) {
    console.log("perdiste");

}else if (opcionUsuario1 === "papel" || opcionUsuario2 === "tijera"  ) {
    console.log("perdiste");

}else if (opcionUsuario1 === "tijera" || opcionUsuario2 === "piedra"  ) {
    console.log("perdiste");

}else {
    console.log("perdiste :(");
}
    

