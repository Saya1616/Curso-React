//Desestructuracion


const persona = {

    nombre: 'Saya',
    edad: 21,
    clave: 'Goku'


};


const {nombre, edad, clave} = persona;



console.log(nombre, edad, clave);




const retornaUsuario = ({ edad, rango = 'Pionero', clave}) =>{

  //  console.log(nombre,edad, rango );

    return{

        nombreClave: clave,
        anios: edad,
        posicion: rango,
        latlng:{
            lat: 24.5124,
            lng: 12.1345,

        },

    };
    

};

const {nombreClave, anios, posicion, latlng:{lat, lng}} = retornaUsuario(persona)



console.log(nombreClave, anios, posicion);
console.log(lat, lng);