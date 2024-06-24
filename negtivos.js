// Escribe un programa que recorra un array de números y reemplace todos los números negativos por el valor cero.

let numeros = [1,2,3,-3,3,1,-9,100,200,-5000];

for(let i = 0; i < numeros.length;i++){


    if(numeros[i] < 0){
        console.log(`Los numeros negativos encontrados son: ${numeros[i]}`)
        numeros[i] = 0;;
    }
    
    
}

console.log('');
console.log('Se reemplazaron los valores del Array negativos por 0');
for(let i = 0; i < numeros.length;i++)console.log(numeros[i]);
