// Escribe una función que tome un objeto como argumento y devuelva el número de propiedades que tiene.

let persona = {
    nombre: 'Robert',
    apellido: 'Paternina',
    ciudad: 'Sincelejo',
    perfil: 'Desarrollador JavaScript'

}

function propiedadesObjeto(obj){
    
    //El método Object.keys(obj) devuelve un array de las propiedades enumerables propias del objeto 
    let contador = Object.keys(obj).length;

    console.log(`El objeto tiene ${contador} propiedades`);
}
   

propiedadesObjeto(persona);