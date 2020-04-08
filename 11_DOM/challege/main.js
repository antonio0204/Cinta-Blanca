
let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
let pregunta4 = document.getElementById("pregunta4");




let pregunta1Text = document.getElementById("pregunta1Text");
let pregunta2Text = document.getElementById("pregunta2Text");
let pregunta3Text = document.getElementById("pregunta3Text");
let pregunta4Text = document.getElementById("pregunta4Text");


let button = document.getElementById("boton");




const cambiar = () => {

    pregunta1Text.innerHTML = pregunta1.value
    pregunta2Text.innerHTML = pregunta2.value
    pregunta3Text.innerHTML = pregunta3.value
    pregunta4Text.innerHTML = pregunta4.value
    

}


button.addEventListener("click", cambiar)




