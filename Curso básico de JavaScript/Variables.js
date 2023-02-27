var nombre="Oscar";

// declarar
var edad;
//inicializar
edad=30;
edad

//funciones

//funcines declaraivas
function miFuncion(){
     return 3
}

miFuncion();

//funciones expresivas
var miFuncion=function(a,b){
    return a+b;
}
miFuncion();

//condicionales
//juego de piedra papel o tijera
var user="piedra"
var user="papel"
var user="tijera"

var pc="piedra"
var pc="papel"
var pc="tijera"

function juego(user, pc){
    if (user==="piedra" && pc==="papel"){;
    console.log("User perdio");}
}   if(user==="papel" && pc==="tijera"){
    console.log("User perdio");
}   else if(user==="tijera" && pc==="piedra"){
    console.log("User perdio")
}   else if(user==pc){
    console.log("empate")
}   else{
    console.log("ganaste")
}

//switch
//piedra papel o tijera con switch

switch(true){
    case (user==="papel" && pc==="tijera"):
        console.log("perdiste");
        break;
    case (user==="piedra" && pc==="papel"):
        console.log("perdiste");
        break;
    case (user==="tijera" && pc==="piedra"):
        console.log("perdiste");
        break;
    case (user==pc):
        console.log("empate");
        break;
    default:
        console.log("ganaste, felicidades");
}

//arrays-arreglos
var frutas=["manzana", "platano","cereza","fresa"];
console.log(frutas);
console.log(frutas.length);//numero de elementos
console.log(frutas[0]);//acceder a elemento especifico, empieza en 0

var masFrutas=frutas.push("uvas","coco","piña")//agregamos elementos, funcion push

var eliminarUltimoElemento=frutas.pop("piña")
var enviamosEseElementoAlInicio=frutas.unshift("")//esto tambien agrega dicho elemento
var borrarElemento=frutas.shift("");
var posicion=frutas.indexOf("")

//Loops-bucles

var estudiante=["Jose","manuel","ignacio","Horacio"];
function saludo(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for (i=0; i<estudiante.length; i++){
    saludo(estudiante[i])
}

//otra forma

for(var estudiante of estudiante){
    saludo(estudiante)
}

//while
var estudiante=["Jose","manuel","ignacio","Horacio"];
while(estudiante.length>0){
    var estudiante=estudiante.shift();
    saludo(estudiante)
}

//objetos
var miAuto={
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto:function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
miAuto.marca//asi invocamos un valor
miAuto.annio 


//funcion constructura
function auto(marca, modelo, annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
}
var autoNuevo=new auto("Texla","Model 3", 2020)
var autoNuevo2=new auto("Ford","Modelo Ranger", 2022)

//metodos de recorridos
var articulos=[
    {nombre:"Bici", costo:3000},
    {nombre:"tv",costo:320},
    {nombre:"celular",costo:10000},
    {nombre:"laptop",costo:20000},
    {nombre:"teclado", costo:500},
    {nombre:"audifonos", costo:1700}
];
//primer metodo:filter
var articulosFiltrados=articulos.filter(function(articulos){
    return articulos.costo <=500;
})

//segundo metodo: map
var nombreArticulos=articulos.map(function(articulos){
    return articulos.nombre;
})

//metodo find
var metodoFind=articulos.find(function(articulos){
    return articulos.nombre==="laptop";
})
//metodoForEach
articulos.forEach (function(articulos){
    console.log(articulos.nombre);
});

//metodoSome
var articulosBaratos=articulos.some(function(articulos){
    return articulos.costo<=700;
})