import {heroes} from "./data/heroes";


const getHeroeById =(id)=> {
    return heroes.find(heroe => heroe.id === id);

}



const buscaHeroe = getHeroeById(2);
console.log(buscaHeroe)


const getHeroeByOwner =(owner)=> {
    return heroes.filter(heroe => heroe.owner === owner);

}

const buscaHeroeByOwner = getHeroeByOwner('DC');
console.log(buscaHeroeByOwner)

