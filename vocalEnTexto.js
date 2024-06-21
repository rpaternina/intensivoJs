function palabra(str){
    let vocales = ["a","e","i","o","u"];
    let palabraArray = str.split('');
    let contador = 0;
    for(let i = 0; i <= palabraArray.length; i++){

        if(palabraArray[i].includes(vocales[i])){
            console.log(`La palabra ${str} contiene la vocal ${vocales} en la posicion ${i}`);
            
    
    }

    }
}

palabra("hola");