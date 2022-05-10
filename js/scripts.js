
//verificador de edad:
/*
let edad = prompt("¿que edad tienes?");

    if(edad >=18){
        alert("Bienvenido");

    } else{
        while (edad <18){
            alert("los sientimos, pero debes ser mayor de edad!");
            edad = prompt("¿que edad tienes?");
        }
    }
*/
//objetos(cervezas):

class Cerveza{
   
    constructor( nombre, color, ibu) {
       this.nombre = nombre;
       this.color = color;
       this.ibu = ibu;
   }
}

const CervezaGoldenAle = new Cerveza("Golden Ale", "Rubia", 24);

const CervezasPaleAle = new Cerveza("Pale Ale", "ambar", 25);

const CervezaOktoberfest = new Cerveza("Oktoberfest", "rubia", 22);

const CervezaScottish = new Cerveza("Scottish", "rojiza", 22);

const CervezaPorter = new Cerveza("Porter", "negra", 32);

const CervezaTrigo = new Cerveza("weissen", "rubia", 20);



const Cervezas =[CervezaGoldenAle, CervezasPaleAle,CervezaOktoberfest];


// liosta desplegable de opciones:
/*
let tiposCerveza =["rubias", "rojas", "negras"];

let SeleccionarCerveza = document.getElementById("birras");

tiposCerveza.forEach((nombre, numero)=> {let option = document.createElement("option");
option.innerText = nombre;
option.value = numero;


SeleccionarCerveza.append(option);

});
*/



/* recorredor de arrays
for (let i = 0; i < Cervezas.length; i++) {
    console.log(Cervezas[i]);
}
*/

//Strings al azar cpor medio de un boton
/*
function RandomSugerencia(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
    var opcionRubia ="RUBIA PAPA!";
    var opcionRoja ="ROJA PAPA!";
    var opcionNegra ="NEGRA PAPA!";
    var array1 = [opcionRubia, opcionRoja,opcionNegra];
    var ValorFinal1 = RandomSugerencia(array1);
  
  function cambiar() {
    document.getElementById("recomendacionParrafo").innerHTML= ValorFinal1;
  }
    

    document.getElementById("recomendacionBottom").onclick = function(){
        cambiar();
    }
*/
//eventos Y MODIFICACIONES EN EL dom:
//rubia detalles:
let detalleRubia ="refrescant, ligera equilibrada";
let detalleRoja="dulce, maltosa y caramelosa";
let detalleNegra="fuerte, tostada, sabor a cafe o chocolate";

let contenedor1 = document.getElementById("contenedor1");
let contenedor2 = document.getElementById("contenedor2");
let contenedor3 = document.getElementById("contenedor3");

let boton1 = document.getElementById('bot1');
let boton2 = document.getElementById('bot2');
let boton3 = document.getElementById('bot3');


boton1.addEventListener("click",()=>{

    let detalle1= detalleRubia;
    let parrafo1 = document.createElement("p");
    parrafo1.innerHTML = detalle1;
    contenedor1.append(parrafo1);
});
//roja detalles:
boton2.addEventListener("click",()=>{

    let detalle2= detalleRoja;
    let parrafo2 = document.createElement("p");
    parrafo2.innerHTML = detalle2;
    contenedor2.append(parrafo2);
});
//negra detalles:
boton3.addEventListener("click",()=>{

    let detalle3= detalleNegra;
    let parrafo3 = document.createElement("p");
    parrafo3.innerHTML = detalle3;
    contenedor3.append(parrafo3);
});


//storage y JASON:
 let productos =[
     {
        id: 1,
        nombre: "Golden Ale",
     },
    {
        id: 2,
        nombre: "Cervezas Pale Ale",
    },
];

const guardarLocalmente =(clave,valor)=>{
    localStorage.setItem(clave, valor)
};

for (const producto of Cervezas){
    guardarLocalmente(producto.nombre, JSON.stringify(producto));
}