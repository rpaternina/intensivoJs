/* Crea un objeto que represente una empresa, que tenga propiedades como nombre y dirección. 
La dirección debe ser otro objeto con propiedades como calle, ciudad y código postal. Accede a 
las propiedades del objeto anidado e imprímelas en la consola. */

const empresa = {
    nombre: 'ACME',

    //Objeto anidado
    direccion: {
        calle: "25A",
        numero: 14,
        ciudad: "Sincelejo",
        pais: "Colombia"
    },

    //funcion dentro del objeto que recorre las propiedades del objeto aninado
    imprimir: function(){
        for(let i in this.direccion){
            console.log(this.direccion[i])
        }
    }
}

empresa.imprimir();