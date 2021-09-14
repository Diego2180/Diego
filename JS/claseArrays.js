/*const arrayVacio = [];
// Declaracion de array con nùmeros
const arrayNumeros = [1,2,3,4];
// Declaracion de array con strings
const arrayJugadores = ["Messi","De Paul","Di Maria","Dibu Martinez"];
// Declaracion de array con booleanos
const arrayBoleanos= [true,false,true,false];
// Declaracion de array mixto
const arrayMixto = [1,false,"C4"];



console.log(arrayJugadores.toString())
console.log(arrayJugadores.join(" - "))
console.log(arrayJugadores.concat(arrayBoleanos))
arrayJugadores.push("Lautaro Mártinez")
console.log(arrayJugadores)
console.log(arrayJugadores.slice(1,3))
let cantidad = 7
do{
    let entrada = prompt("Ingresar un jugador");
    arrayJugadores.push(entrada);
    console.log(arrayJugadores.length);
 }while(arrayJugadores.length != cantidad)


/*
console.log(arrayJugadores[1] + " " + arrayJugadores[3])
console.log(arrayNumeros[1] + arrayNumeros[3])


for(let i = 0; i < arrayJugadores.length;i++){

    console.log(arrayJugadores[i])

}
*/

























//console.log(arrayC[2])
/*
for(let i = 0 ; i < arrayC.length; i++){

    console.log(arrayC[i])
}

console.log(arrayC[0])
console.log(arrayC[1])
console.log(arrayC[2])
console.log(arrayC[3])


console.log(arrayC.toString())

console.log(arrayC)
arrayC.push("Lautaro Mártinez")
console.log(arrayC)

console.log(arrayC.join(" - "))

let nuevoArray = arrayC.concat(arrayB)

console.log(nuevoArray)

console.log(nuevoArray.slice(2,5))









/*




let array1 = arrayC.slice(0,1)
let array2 = arrayC.slice(1,4)
console.log(array1)
console.log(array2)

array1.push("Lautaro Mártinez")
console.log(array1)
console.log(array1.concat(array2))

/*
console.log(arrayC[0] + " " + arrayD[0])

const numeros = [1, 2, 3, 4, 5];
console.log(numeros.length)
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}*/
/*
console.log(typeof(arrayC))
//arrayC = arrayC.join("-")

console.log(arrayC)

arrayC.unshift("Lautaro Mártinez")

console.log(arrayC)


let productosEnElChango = []

productosEnElChango.push("Coca")
productosEnElChango.push("pan")

console.log(productosEnElChango)*/

/*

//console.log(arrayC.concat(arrayD))
const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { producto: "Fideos" }];
array.push(objeto1);
console.log(array)

const array = [{ id: 1, producto: "Arroz" },{ id: 2, producto: "Fideos" },{ id: 3, producto: "Pan" }]

console.log(array[1])*/

// cuando esta entre llaves {} y tiene propiedades es un objeto {id:1,producto:"arroz"}
// en este caso es un objeto con dos propiedades id y producto

//cuando esta entre corchetes [] es un array o lista [{ id: 1, producto: "Arroz" },{ id: 2, producto: "Fideos" }]
//es una lista con dos objetos uno es arroz y el otro fideos
/*const productos = [{ id: 1, producto: "Arroz",tipo:"blanco" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
    console.log(producto.tipo)
}

const objeto = { id: 3,  producto: "Pan" }

for(i in objeto){

	console.log(objeto.id)
}
*/
/*
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        return this.precio
    }
}
//Declaramos un array de productos para almacenar objetos
/*
const productos = [];
let producto1 = new Producto("arroz", "125")
productos.push(producto1);
productos.push(new Producto("fideos", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    console.log(producto.nombre + " " + producto.sumaIva())
}


const numeros    = [1, 2, 3, 4, 5];
//La función parámetro generalmente es una función flecha sin cuerpo.
const encontrado = numeros.find(i => i > 6); //Encuentra 4

const nombres     = ["Ana", "Ema", "Juan"];
const encontrado2 = nombres.find(elemento => elemento === "Ema"); //Encuentra "Ema"
const encontrado3 = nombres.find(elemento => elemento === "Alan")

for(let i=0;i<nombres.length;i++){

	if(nombres[i] == "Ema"){

		return nombres[i]
	}
}



console.log(encontrado)
console.log(encontrado2)
console.log(encontrado3)

*/

/*
const numeros = [1, 2, 3, 4, 5];
const filtro1 = numeros.filter(elemento => elemento > 3); //Encuentra [4,5]
const filtro2 = numeros.filter(elemento => elemento < 4); //Encuentra [1,2,3]

const nombres = ["Ana", "Ema", "Juan", "Elia","Ema"];
//Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
const filtro3 = nombres.filter(elemento => elemento.indexOf("A") == 0);

console.log(filtro1)
console.log(filtro2)
console.log(filtro3.length)


/*
const numeros  = [1, 2, 3, 4, 5];
const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
const masCien  = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]

const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]

const numeros  = [1, 2, 3, 4, 5];
const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
const masCien  = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]

const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => n);//lengths = [3, 3, 4, 4]

console.log(masCien)
console.log(lengths)*/

/*
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
const listaNombres2 = [...listaNombres] 


const alumnx1 = {nombre:"Juan",id:1}
const alumnx2 = {nombre:"Carla",id:2}
const grupoAlumnos = [alumnx1,alumnx2,{nombre:"Carlos",id:3},{nombre:"Laura",id:4}]

grupoAlumnos.push({nombre:"Paula",id:5})

console.log(grupoAlumnos)*/
/*const productos = [{ id: 1, nombre: "Arroz" },
                  { id: 2,  nombre: "Fideos" },
                  { id: 3,  nombre: "Pan" }];

for (const producto of productos) {
   
    console.log("El producto " + producto.nombre + " tiene el id " + producto.id);
 
}


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        return this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideos", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){

    console.log(producto.sumaIva())
}

    */
