// Escribe un programa que calcule el 
// factorial de un número dado por el usuario.


let contador = 1;
let num = prompt('Ingrese un numero: ');
for(let i = 1; i <= num; i++){
    if(num >= 1){
        contador = contador * i;
        // multi = factorial * contador;
        document.write(contador + ", ");

    }
        
}
