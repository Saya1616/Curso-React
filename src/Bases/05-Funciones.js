
//Funciones

    let nombre = "Goku"

    //Ejemplo 1

    //const saludar = function(nombre){
    //
    //    return `Hola, Soy ${nombre}`;
    //   
    //};



    //Ejemplo2

//const saludar =(nombre) => {

// return `Hola, Soy ${nombre}`;
    
//};


const saludar =(nombre) => `Hola, Soy ${nombre}`;

console.log(saludar(nombre))



//const getUser = () => ({
//    userId: 1233414,
//    username: "El Pingo"
//});



//console.log(getUser());



const getUsuarioActivo = (nombre) =>({

        userId: 12312415,
        username: nombre

})

const usuarioActivo = getUsuarioActivo("Saya");
console.log(usuarioActivo);