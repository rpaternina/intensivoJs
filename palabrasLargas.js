// Escribe un programa que recorra un array de palabras y cree un nuevo array con solo las palabras que tengan más de 5 letras.

let palabras = ['hola', 'como estas', 'qué haces', 'si', 'no', 'Me llamo Robert', 'Colombia'];

//recorro el Array con un ciclo for
for(let i = 0; i < palabras.length; i++){

    //Si una palabra en cualquiera posicion del Array su longitud es mayor entra aquí
    if(palabras[i].length >= 5){

        //Creo un nuevo Array vacio para meter las palabras con longitud >= 5
        let palabrasMasGrandes = [];

        //las nuevas palabras las meto en el array

        palabrasMasGrandes.push(palabras[i]);
        
        //lo reccorro de nuevo y lo muestro
        for(let i = 0; i < palabrasMasGrandes.length; i++){
            console.log(palabrasMasGrandes[i]);
        }
        
    }
    
}

