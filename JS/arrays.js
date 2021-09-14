// Esta es la forma de declarar los arrays que basicamente son listas


/*const arrayVacio = [];
// Declaracion de array con nùmeros
const arrayNumeros = [1,2,3,4];
// Declaracion de array con strings
const arrayJugadores = ["Messi","De Paul","Di Maria","Dibu Martinez"];
// Declaracion de array con booleanos
const arrayBoleanos= [true,false,true,false];
// Declaracion de array mixto
const arrayMixto = [1,false,"C4"];*/




//Como acceder a un arrays segun su posicion

/*console.log(arrayJugadores[0] + " "  + (arrayJugadores [3]));
console.log(arrayNumeros[1] + arrayNumeros[3]);*/



//Recorrido de un arrays, la propiedad "length" nos sirve para ver cuanto elementos tiene el ARRAY


/*for(let i = 0; i < arrayJugadores.length;i++){

	console.log(arrayJugadores[i])
}*/


//El "toString" convierte el ARRAY en STRING. no se usa mucho esta funcion

/*console.log(arrayJugadores.toString() );*/


//El "join" sirve para separar los ARRAY con algun caracter, en este caso use un guion

/*console.log(arrayJugadores.join( " - ") );


//El "concat" sire para unir dos ARRAY

console.log(arrayJugadores.concat(arrayBoleanos))

 //El "push" sirve para agregar elementos a un ARRAY

arrayJugadores.push("Diego Maradona")
console.log(arrayJugadores)


//El "slice" devuelve un ARRAY cortado, dependiendo de la posicion que seleccionemos
	
console.log(arrayJugadores.slice(1,3))


//Con do / while + cantidad podemos incrementar un array desde un prompt

let cantidad = 9
do{
	let entrada = prompt("Ingresa un jugador");
	arrayJugadores.push(entrada);
	console.log(arrayJugadores.length);

}while(arrayJugadores.length != cantidad);*/


//Como hacer un ARRAY de OBJETOS, en este caso utilizamos el ejemplo con jugadores


//Esta una forma de hacer un array de objetos, para despues agregarla a la "const arrayJugadores"
	const messi = {nombre:"Messi",numero:10}
	const orion = { nombre:"De Paul", numero:7}

//Y esta es la otra forma de agregar objetos dentro de la "const arrayJuagadpres"
	const arrayJugadores = [messi, orion,{nombre:"Di Maria",numero:11},{nombre:"Dibu Martinez",numero:1}];

//Des esta forma pusheamos un objeto, en este caso a "Lautaro Martinez"
	const lautaro = {nombre:"Lautaro Martinez",numero:22}
	arrayJugadores.push(lautaro)

	console.log(arrayJugadores)


//Con "for - of" recorremos un array, en este caso arrayjugadores

for(const jugador of arrayJugadores){
	console.log("El numero de " + jugador.nombre + "es " + jugador.numero)
}


//El "find" nos sirve para buscar un objeto. Y si ponemos "includes" como en el segundo ejemplo no hace 
//falta porner en nombre completo de objeto, en este caso Messi pusimos Me

//const messi10 = arrayJugadores.find(jugador => jugador.nombre == "Messi")
const messi10 = arrayJugadores.find(jugador => jugador.nombre.includes ("Me"))
console.log(messi10)


//El metodo "filter" trae todos los objetos que por ejemplo incluyan "MA"

const busquedaJugador = arrayJugadores.filter(jugador => jugador.nombre.includes ("Ma"))
console.log(busquedaJugador)


//El "MAP" se utiliza para crear un nuevo array, en este caso a jugador.nombre le agregamos "campeones de America"

const campeones = arrayJugadores.map(jugador => jugador.nombre + " campeon de America ")
console.log(campeones)
