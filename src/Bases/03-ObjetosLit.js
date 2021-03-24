
//objetos 

const persona = {

    nombre: 'Saya',
    edad: 21,
    deseo: 'Morir',
    direccion : {
            ciudad: "Esparza",
            zip: 6534453,
            lat: 234234,
            lng: 1324321,

    }
};

const persona2 = {...persona}
persona2.nombre = "Swani";
persona2.deseo = 'Sugar Daddy';
persona2.direccion.ciudad = "En el culo del mundo"

console.log({persona});
console.log({persona2})
