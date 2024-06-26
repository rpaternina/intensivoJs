// Escribe un programa que recorra un array de números y sume solo los números positivos, devolviendo el resultado.

let numeros = [1,2,3,-2,-1,2,10];

let suma = 0;

for(let i = 0; i < numeros.length; i++){

    //compruebo por cada posicion si el numero es mayor a 0
    if(numeros[i] > 0){

        //cada numero mayor a 0 lo voy sumando
        suma = suma + numeros[i];
        
    }
    
}

console.log(`El resultado de la suma de los numeros es: ${suma}`);