let edad = prompt ("Ingrese la edad de la primer persona");
let edad2 = prompt ("Ingrese la edad de la segunda persona");
let diferencia = edad - edad2
let diferencia2 = edad2 - edad

if (edad>edad2) {
    console.log("La persona mayor es la primer persona" );
    console.log("La diferencia de edades es de  " + diferencia);
} else {
    console.log("La persona mayor es la segunda persona" );
    console.log("La diferencia de edades es de  " + diferencia2);
}