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

iniciarCompra()
while (elegirNuevoAccesorio.toUpperCase() == "SI") {

    iniciarCompra()
}

verCarrito()

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

function elegirAccesorio() {
    accesorioElegido = prompt("Elegí un accesorio: Anillo Falange, Anillo Estrella, Anillo Acer ");
    unidadesElegidas = parseInt(prompt("Ingresar cantidad"))
}

function consultarStock(disponibilidadStock, stock) {
    if (disponibilidadStock >= stock) {
        return true
    } else {
        return false
    }
}

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


function agregarAccesorios(itemsSumar) {
    carritoCompra.push(itemsSumar)
}

function verCarrito() {

    for (let i = 0; i < carritoCompra.length; i++) {
        console.log("Producto:" + carritoCompra[i].nombre + " stock:" + carritoCompras[i].stock)
    }
    let totalCarrito = carritoCompra.reduce((currentTotal, producto) => {
        return producto.subtotal + currentTotal;
    }, 0);

    console.log("El total de la compra es " + totalCarrito)

}