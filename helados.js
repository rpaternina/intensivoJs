// let robertTiene = 1.5;
// let pedroTiene = 1.7;
// let coflaTiene = 3;


let monto1 = prompt(`Ingrese el monto qué usted tiene: `);
let monto2 = prompt(`Ingrese el monto qué usted tiene: `);
let monto3 = prompt(`Ingrese el monto qué usted tiene: `);

if (monto1 != 3 && monto1 != 1.7 && monto1 == 1.5){
    alert(`El helado más caro que puede comprar Robert con su dinero es: \n
    Palito de helado de crema: 1$`);
}

else if (monto2 == 1.7 && monto2 != 1.5 && monto2 != 3){
    alert(`El helado más caro que puede comprar Pedro con su dinero es: \n
    Bombón helado marca heladix: 1.6$ \n
    Bombón helado marca heladovich: 1.7$`);
}

else if (monto3 == 3 && monto3 != monto1 && monto3 != monto2){
    alert(`El helado más caro que puede comprar Cofla con su dinero es: \n
    Potecito de helado con confites: 2.9$ y el vuelto seria 1$ \n
    Pote de 1/4 KG: 2.9$ y su vuelto seria de 1$ `);
}
