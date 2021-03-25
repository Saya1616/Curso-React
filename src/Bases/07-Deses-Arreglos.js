//Deses-Arreglos


const pesonajes = ["Goku", "Vegeta", "Trunks"];
const [, ,p3] = pesonajes;
console.log(p3);


const retornaArreglo = () =>(["ABC", 123,]);



const [letras, numeros]= retornaArreglo()
console.log(letras,numeros)


const useState = (valor) =>([valor, ()=>{console.log("Hola Mundo")},]);

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();