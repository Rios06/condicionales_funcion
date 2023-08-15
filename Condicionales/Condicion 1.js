let weather = "sunny"

/*if (weather === "rainy") {
    console.log("You need a rain coat");

} else if (weather === "cloudy") {
    console.log("It might be cold,you need a jacket");

} else if (weather === "sunny") {
    console.log("Go out freely");
} else {
    console.log("No need for rain coat");
}*/

//Ciclo segun - para listas

switch (weather) {
    case "rainy" :
        console.log("You need a rain coat");
        break;
        case "cloudy" :
            console.log("You need a jacket");     
            break;
            case "sunny" :
                console.log("Go out freely");
                break;
                default:
                    console.log("No need for rain coat or jacket");
}

