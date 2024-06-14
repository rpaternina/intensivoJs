let robertTiene = 1.5;
let pedroTiene = 1.7;
let coflaTiene = 3;

let monto = prompt(`Ingrese el monto qué usted tiene: `);
if (monto == robertTiene){
    alert(`El helado más caro que puede comprar con su dinero es: \n
    Palito de helado de crema: 1$`);
}

else if (monto == pedroTiene){
    alert(`El helado más caro que puede comprar con su dinero es: \n
    Bombón helado marca heladix: 1.6$ \n
    Bombón helado marca heladovich: 1.7$`);
}

else if (monto == coflaTiene){
    alert(`El helado más caro que puede comprar con su dinero es: \n
    Potecito de helado con confites: 2.9$ y el vuelto seria 1$ \n
    Pote de 1/4 KG: 2.9$ y su vuelto seria de 1$ `);
}