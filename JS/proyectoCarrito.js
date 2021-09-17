

// El usuario ingresa su nombre y recibe un saludo de bienvenida

let nombre;
const joyeria = "Bienvenidos al mundo M.V.JOYAS";


nombre = prompt("Introduzca su nombre");
alert("Hola " + nombre +  " " +  joyeria);
console.log("Hola " + nombre +  " " +  joyeria);




const joyasLua = [{
        id: 1,
        nombre: "Anillo Falange",
        tipo: "Plata",
        precio: 999,
        stock: 2
    },
    {
        id: 2,
        nombre: "Anillo Estrella",
        tipo: "Plata Inflada",
        precio: 1299,
        stock: 3
    },
    {
        id: 3,
        nombre: "Anillo Acero",
        tipo: "Acero esmaltado",
        precio: 1299,
        stock: 5
    },
];

class accesorios {

    constructor(producto, unidades) {
        this.id = producto.id
        this.nombre = producto.nombre
        this.tipo = producto.tipo
        this.precio = producto.precio
        this.stock = stock
        this.subtotal = producto.precio * stock
    }
}


let accesorioElegido;
let unidadesElegidas;
let accesoriosSeleccionado;
let elegirNuevoAccesorio;

const carritoCompra = [];


// Con el while quise que se valla incrementado los accesorios seleccionados si es que
// el usuario desea comprar mas de 1

iniciarCompra()
while (elegirNuevoAccesorio.toUpperCase() == "SI") {

    iniciarCompra()
}

verCarrito()

// Con iniciar compra busque que el usuario una ves seleccionado un producto se le consulte si desea 
// agregra el accesorio al carrito, sumar otro accesorio o finalizar la compra

function iniciarCompra() {
    elegirAccesorio()
    const disponibilidadStock = consultarStock(accesorioElegido, unidadesElegidas)
    if (disponibilidadStock) {

        let ingresar = prompt("¿Desea ingresar el accesorio al carrito? Si / No")
        if (ingresar.toUpperCase == "SI") {
            let producto = new productoCargado(accesoriosSeleccionado, unidadesElegidas)

            agregarAccesorios(producto)
            elegirNuevoAccesorios = prompt("¿Desea cargar otro accesorio? Si / No")


        } else {
            elegirNuevoAccesorios = prompt("¿Desea cargar otro accesorio? Si / No")
        }
    }
}

// Con la funcion elegirAccesorio comenzaria la compra donde se ingresaria el accesorio + cantidad 

function elegirAccesorio() {
    accesorioElegido = prompt("Elegí un accesorio: ANILLO FALANGE, ANILLO ESTRELLA, ANILLO ACERO ");
    unidadesElegidas = parseInt(prompt("Ingresar cantidad"))
}

// Con la funcion consultarStock quise que valide la disponibilidad 

function consultarStock(disponibilidadStock, stock) {
    if (disponibilidadStock >= stock) {
        return true
    } else {
        return false
    }
}

// En consultarDisponibilidad con el metodo find quise hacer que se recorra el stock que queda disponible 
// identifique el accesorio para devolver con true si se encuentra disponible

function consultarDisponibilidad(disponibilidadStock, stock) {
    accesoriosSeleccionado = joyasLua.find((p) => productoElegido == disponibilidadStock.toUpperCase())

    if (accesoriosSeleccionado) {
        alert("El accesorio seleccionado no existe!")

    } else {

        let consultar = consultarDisponibilidad(accesoriosSeleccionado.stock, stock)

        if (consultar) {
            return true
        } else {
            alert("El accesorio " + disponibilidadStock + " no se encuentra disponible")
            ingresaOtroAccesorio = prompt("¿Queres seguir con la compra? SI / NO")
        }
    }

}

//Con agregarAccesorios mediante el metodo push quise que se agreguen los accesorios seleccionados al carrito

function agregarAccesorios(itemsSumar) {
    carritoCompra.push(itemsSumar)
}

// En ver carrito mediante el for quise hacer que sume el total de los seleccionado y arroje el precio final en consola

function verCarrito() {

    for (let i = 0; i < carritoCompra.length; i++) {
        console.log("Producto:" + carritoCompra[i].nombre + " stock:" + carritoCompras[i].stock)
    }
    let totalCarrito = carritoCompra.reduce((currentTotal, producto) => {
        return producto.subtotal + currentTotal;
    }, 0);

    console.log("El total de la compra es " + totalCarrito)

}