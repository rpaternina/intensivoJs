// Escribe una función que tome una cadena como argumento y devuelva true si la cadena 
// es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda) y false en caso contrario.


function palíndromo(cadena){
    if(cadena === cadena.split('').reverse().join('')){
        alert("Es palindromo")
    }
    else{
        alert("No es")
    }
    
}

palíndromo(prompt("Ingrese una cadena de texto; "));

