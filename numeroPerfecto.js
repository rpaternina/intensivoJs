//Escribe un programa que determine si un número dado es un número perfecto (un número igual a la suma de sus divisores propios).

function perfecto(num){

    //creo una variable suma que comienza en 0 y me vaya sumando cada multiplo del numero que se ponga
    let suma = 0;

    for(let i = 1; i < num; i++){
        if(num % i === 0){

            //aquí sumo los numeros que son multiplos del numero dado
            suma = i + suma;
        }
    }

    //comparo si la suma de los multiplos es igual al numero dado
    if(suma === num){
        console.log(`El numero ${num} es un numero perfecto porque la suma de sus divisores es igual al mismo numero`);
    }else{
        console.log(`El numero ${num} no es perfecto`);
    }


}

perfecto(28);
perfecto(2);