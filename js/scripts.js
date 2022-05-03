
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
/*
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
*/

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
//eventos:
let detalleRubia ="refrescant, ligera equilibrada";
let detalleRoja="dulce, maltosa y caramelosa";
let detalleNegra="fuerte, tostada, sabor a cafe o chocolate";

let contenedor = document.getElementById("contenedor");
let boton = document.getElementById('bot1');

let boton2 = document.getElementById('bot2');
let boton3 = document.getElementById('bot3');


boton.addEventListener("click",()=>{

    let detalle1= detalleRubia;
    let parrafo = document.createElement("p");
    parrafo.innerHTML = detalle1;
    contenedor.append(parrafo);
});


