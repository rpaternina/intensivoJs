
//Escribe un programa que recorra un array de caracteres y cuente cuántas vocales (a, e, i, o, u) hay en el array.

function palabra(str){
    
    let palabraArray = str.split('');

    let contador = 0;

    for(let i = 0; i < palabraArray.length; i++){
        if(palabraArray[i] === 'a' || palabraArray[i] === 'e' || palabraArray[i] === 'i' || palabraArray[i] === 'o' || palabraArray[i] === 'u'){
            contador++;
        }
    }

    console.log(`La palabra "${str}" tiene ${contador} vocales`);
}




palabra('hola');
palabra('Hola mundo')