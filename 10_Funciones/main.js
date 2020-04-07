
// primer ejercicio 


const area1 = (l) => {
    let lado = Number(prompt("Ingresa el lado "))
    console.log(lado);
}

area1()

// segundo ejercicio 



const area = () => {

    let altura = Number(prompt("Ingresa la altura: "))
    let base = Number(prompt("Ingresa la base: "))
    
    console.log(altura * base / 2);
}

area()

// tercer ejercicio 

let numero = 100;

const numero = () => {

    for (var i = 1; i <= 100; i++){

        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + "fizzbuzz");

        } else if (i % 3 == 0) {
            console.log( i +"fizz");
        
        } else if(i % 5 == 0) {
        console.log( i +"buzz");
        
        } else {
          console.log(i);
      }
    }
    
}
numero()

// pequeño datos





