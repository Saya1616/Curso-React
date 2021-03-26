//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

//console.log(owners)

const getHeroeById =(id)=> {
    return heroes.find(heroe => heroe.id === id);

}



//const buscaHeroe = getHeroeById(2);
//console.log(buscaHeroe)


export const getHeroeByOwner =(owner)=> {
    return heroes.filter(heroe => heroe.owner === owner);

}

//const buscaHeroeByOwner = getHeroeByOwner('DC');
//console.log(buscaHeroeByOwner)

export default getHeroeById;