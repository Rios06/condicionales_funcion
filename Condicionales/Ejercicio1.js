let edad = prompt("Ingrese su edad");
let respuesta
if (edad >=18) {
console.log("Tiene la edad para conducir");
} else { 
    respuesta = 18-edad
    console.log("Debes esperar hasta que tengas 18");
    console.log("Los años que te faltan son " + respuesta)
}
