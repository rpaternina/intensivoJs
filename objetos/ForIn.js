// Crea un objeto que represente a una persona con propiedades como nombre, edad y profesión. Usa un bucle for...in 
// para iterar sobre las propiedades del objeto e imprímelas en la consola.

let persona = {
    nombre: 'Robert',
    edad: '22',
    profesion: 'Ingeniero de sistemas'
}

for(let i in persona) {
    console.log(`${i}: ${persona[i]}`);
}