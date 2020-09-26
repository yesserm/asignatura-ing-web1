//alert('Hola Mundo!!!');
//document.getElementById('encabezado').innerHTML = "Bienvenido a este curso";

//variables
var miVariable = 10;
let miOtraVariable = "Hola";
const pi = 3.1415;

//reasignacion
miVariable = 20;
miOtraVariable = "Bienvenido";

let mi_arreglo = [1,2,"Yesser",true];
console.log(mi_arreglo[2]);

//operadores de asignacion
let suma = 5+2; //7
suma += 2; //suma = suma + 2 = 9
console.log("Suma : " + suma);
suma -= 2; // 7
console.log(`Resta: ${suma}`);
suma *= 3; // 21
console.log('Multiplicacion: ', suma);

//condicionales
let edad = 18;
//let edad = prompt("Ingrese su edad");
if(edad > 18)
{
    console.log('mayor de edad');
} else {
    console.log('menor de edad');
}

//operador ternario 
let precio = 10.5;
let dia = "Jueves";

dia === "Lunes" ? precio-=1.5 : precio+=1.5;
console.log("El precio es : " + precio);

//funciones
function lanzarCohete()
{
    return 'BOOM';
}

let lanzando = lanzarCohete();
console.log(lanzando);

let saludo = function () {
    console.log('Hola');
}
saludo();

//funciones flecha en ES6   
const multiplicar = (a,b) => a*b;
console.log(multiplicar(2,4));

const Saludar = () => {
    console.log('Hola Bienvenido');
}
Saludar();

//funciones de orden superior
const esPar = (n) => {
    return n % 2 == 0;
}

let imprimirMensaje = (funcionPar, num) => {
    const esNumPar = funcionPar(num);
    console.log(`El numero ${num} es par: ${esNumPar}`);
}
imprimirMensaje(esPar,5);


//matrices
const numeros = [1,2,7,8];

if(numeros.length == 5){
    numeros.push(6);  //agrega al final
    console.log(numeros);
} else {
    numeros.pop(); //saca del final
    console.log(numeros);
}

//bucle while
let i = 0;
while(i<10)
{
    console.log("El numero: ", i);
    i++;
}

//bucle do while
let k =0;
do{
    console.log("El numero: ", k);
    k++; 
}while(k < 10);

//bucle for
for(let j = 1; j<=10; j++){
    console.log("La variable ",j);
}




