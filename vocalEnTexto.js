function vocales(){
    let vocales = ['a','e','i','o','u'];
    for(let i = 0; i < vocales.length; i++){}
}


function vocalesEntexto(str){
    let palabras = str.split(' ');

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i] === vocales[i]){
            let guardarVocal = [];
            guardarVocal.push(vocales[i]);
            for(let i = 0; i < guardarVocal.length; i++){
                console.log(`La palabra ${str} tiene las vocales ${guardarVocal[i]}`);
            }
            
    
    }

    }
}

palabra("hola");