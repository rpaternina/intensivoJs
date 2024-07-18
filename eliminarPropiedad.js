/*Crea un objeto que represente un usuario con propiedades como nombre, edad y correo electrónico. 
Escribe una función que elimine la propiedad correo electrónico del objeto. */

const usuario = {
    nombre: 'Robert',
    edad: 22,
    correoElectronico: 'paterninayolir@gmail.com'
}

function eliminarPropiedad (obj){
    delete obj.correoElectronico;
    console.log(obj);
}

eliminarPropiedad(usuario);