/*Escribe una función que tome dos objetos y compare si son iguales (tienen las mismas propiedades y valores).*/

//Instale la libreria lodash que me simplifica el proceso de comparación
const _ = require('lodash');

const objeto1 = {
    nombre: 'Robert',
    apellido: 'Paternina'
}

const objeto2 = {
    nombre: 'Robert',
    apellido: 'Paternina'
}



if(_.isEqual(objeto1,objeto2)){
    console.log(`Los objetos son iguales`)
}else{
    console.log(`No son iguales`);
};