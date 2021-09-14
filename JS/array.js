
const joyasLua = [{ id: 1, accesorios:  "Anillo en plata", precio: 1500 },
			   { id: 2, accesorios:  "Anillo en acero", precio: 999},
			   { id: 3, accesorios:  "Anillo en oro", precio: 3500},
			   { id: 4, accesorios:  "Aros en plata", precio: 1799},
			   { id: 5, accesorios:  "Aros en acero", precio: 1200},
			   { id: 6, accesorios:  "Aros en oro", precio: 3400},
			   { id: 7, accesorios:  "Collares en plata", precio: 2500},
			   { id: 8, accesorios:  "Collares en acero", precio: 1600},
			   { id: 9, accesorios:  "Collares en oro", precio: 4600},
			   { id: 10, accesorios:  "Pulseras en plata", precio: 2500},
			   { id: 11, accesorios:  "Pulseras en acero", precio: 1400},
			   { id: 12, accesorios:  "Pulseras en oro", precio: 3800},
			   ]

class joyas{
		constructor(joyas){
			this.id = joyas.id
			this.accesorios = joyas.accesorios
			this.precio = joyas.precio
		}
}

				
const anilloPiedraNacar = new joyas({id:13,accesorios:"Anillo con piedra Nacar", precio:1399})	
joyasLua.push(anilloPiedraNacar)



for (let i = 0; i < joyasLua.length;i++){
	console.log(joyasLua[i])
}


const preciosbajos = joyasLua.filter(accesorios => accesorios.precio <2000);
console.log(preciosbajos);


const preciosAltos = joyasLua.filter(accesorios => accesorios.precio >2000);
console.log(preciosAltos);


const buscarAccesorios = joyasLua.filter(id => id.accesorios.includes("C"))
console.log(buscarAccesorios);


const subaDePrecios = joyasLua.map(accesorios => accesorios.precio +100);
console.log(subaDePrecios);