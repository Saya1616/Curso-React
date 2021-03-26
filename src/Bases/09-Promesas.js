//Promise
import getHeroeById  from "./08-Import-Export";

/* const promesa = new Promise((resolve, reject)=>{

        setTimeout(() => {
            const heroe = getHeroeById(3);
            resolve(heroe)
            reject('No se pudo encontrar el heroe')
        }, 2000);



}) */

/* promesa.then((heroe)=>{

    console.log('heroe', heroe)


}).catch(err => console.warn(err))

 */


const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
        if (heroe === undefined) {
            reject("No se pudo encontrar el heroe");
        }else{resolve(heroe);}
    }, 2000);
  });
  
};


getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.warn);