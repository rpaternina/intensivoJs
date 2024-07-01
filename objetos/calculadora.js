// Crea un objeto que represente una calculadora con métodos para sumar, restar, multiplicar y dividir dos números. 
// Usa estos métodos e imprime los resultados.

let calculadora = {
    suma: function (num1,num2){
        return num1 + num2;
    },

    resta: function (num1,num2){
        return num1 - num2;
    },

    multiplicación: function (num1,num2){
        return num1 * num2;
    },

    division: function (num1,num2){
        return num1 / num2;
    }

}

console.log(calculadora.division(10,2));
console.log(calculadora.multiplicación(10,2));