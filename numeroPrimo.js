// Escribe una función que tome un número como argumento y devuelva 
// true si el número es primo y false en caso contrario.

function primo(num){

    let divisores = 0;

    for(let i = 1; i <= num; i++){
        
        //si el numero en la posicion i su resto es 0 aumento divisores para que cuente cuantos divisores tiene el numero
        if(num % i === 0){
            divisores++;
        }   
    }

    //si el numero de divisores es igual a 2 quiere decir que es primo, ya que solo se divide entre 1 y si mismo
    if(divisores == 2){
        console.log(`El numero: ${num} es pirmo`);
    }else{
        console.log(`El numero: ${num} no es primo`);
    }
}

primo(6);
primo(4);
primo(1);
primo(7);