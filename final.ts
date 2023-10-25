import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";
var readlineSync = require (`readline-sync`);


let nombrearch = "imbdBBDD.json";

let theMovie = new Movie("Luna Nueva", 2014, "Americana", "Drama");
let theMovie2= new Movie("señor de los anillos",2003,"americana","ficcion");
let theMovie3= new Movie("señor de los anillos2",2003,"americana","ficcion");
let theMovie4= new Movie("spiderman",2003,"americana","ficcion");
let pelis = [theMovie3,theMovie4];
let imbdFinalTest = new Imdb(pelis);

imbdFinalTest.escribirEnFicheroJson(nombrearch);

let name: string = readlineSync.question("que nombre tiene");
let age: number = readlineSync.question("cuantos años")
let weight: number = readlineSync.question("cuanto pesa")
let height: number = readlineSync.question("cuanto mide")
let isRetired: boolean = readlineSync.question("se ha retirado")
let nationality: string = readlineSync.question("de que pais es")
let oscarsNumber: number = readlineSync.question("cuantos oscar tiene")
let profession: string = readlineSync.question("cual es su profesion")

let profesiones = new Professional(name,age,weight,height,isRetired,nationality,oscarsNumber,profession);

imbdFinalTest.obtenerInstanciaiMDB(nombrearch);

if(imbdFinalTest.peliculas.length>0){
    let primerapeli = imbdFinalTest.peliculas[0];
    if(!primerapeli.actors){
        primerapeli.actors=[];
    }

    primerapeli.actors.push(profesiones)
}

imbdFinalTest.escribirEnFicheroJson(nombrearch);

