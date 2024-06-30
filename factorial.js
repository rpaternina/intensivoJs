// Escribe un programa que calcule el 
// factorial de un número dado por el usuario.

function factorial(num){
    let contador = 1;

    for(let i = 1; i <= num; i++){

        contador = contador * i;
        
    }

    console.log(`El factorial de ${num} es: ${contador}`);   
}


factorial(80);