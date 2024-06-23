// Escribe un programa que encuentre y devuelva el número más grande en un array de números.

let numeros = [70,1,2,3,4,5,10,1,2,3,7,50,1,900,2];

for(let i = 0; i < numeros.length; i++){
    //comparo el numero anterior con el siguiente, y si el anterior es mayor se queda con ese
    if(numeros[i-1] > numeros[i]){
        console.log(`El numero mayor es: ${numeros[i-1]}`);
    }
    
}