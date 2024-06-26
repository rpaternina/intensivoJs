//Escribe un programa que recorra un array de cualquier tipo de elementos 
// y devuelva un nuevo array con los elementos en orden inverso.

let invertirArray = ['hola', 1, 3, true, false,'dos'];

//consultando encontre que con este metodo puedo invertir un array de forma sencilla
let invertido = invertirArray.reverse();

for(let i = 0; i < invertido.length; i++){

    console.log(invertido[i]);
}