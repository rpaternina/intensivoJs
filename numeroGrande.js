// Escribe un programa que encuentre y devuelva el número más grande en un array de números.

let numeros = [70,1,2,3,4,5,10,1,2,3,7,50,1,900,2,1000];

//creo una nueva variable y le asigno la posicion [0] de mi array numeros
let numeroGrande = numeros[0];

for(let i = 0; i < numeros.length; i++){
    //comparo si el numero actualo es mayor al anterior, si no es así que siga la secuencia
    if(numeros[i] > numeroGrande){
        //una vez encuentre el numero mayor se le asigana a numero grande esa posicion
        numeroGrande = numeros[i];
        
    }
    
}
console.log(`El numero mayor es: ${numeroGrande}`);