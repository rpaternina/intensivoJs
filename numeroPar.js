
// Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.

function par(num){
    if(num % 2 == 0){
        alert("Es un numero par");
    }else{
        alert("Es un numero impar");
    }
}


par(prompt("Ingrese un numero"));