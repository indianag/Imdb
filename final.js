"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var readlineSync = require("readline-sync");
var nombrearch = "imbdBBDD.json";
var theMovie = new movie_1.Movie("Luna Nueva", 2014, "Americana", "Drama");
var theMovie2 = new movie_1.Movie("señor de los anillos", 2003, "americana", "ficcion");
var theMovie3 = new movie_1.Movie("señor de los anillos2", 2003, "americana", "ficcion");
var theMovie4 = new movie_1.Movie("spiderman", 2003, "americana", "ficcion");
var pelis = [theMovie3, theMovie4];
var imbdFinalTest = new imdb_1.Imdb(pelis);
imbdFinalTest.escribirEnFicheroJson(nombrearch);
var name = readlineSync.question("que nombre tiene");
var age = readlineSync.question("cuantos años");
var weight = readlineSync.question("cuanto pesa");
var height = readlineSync.question("cuanto mide");
var isRetired = readlineSync.question("se ha retirado");
var nationality = readlineSync.question("de que pais es");
var oscarsNumber = readlineSync.question("cuantos oscar tiene");
var profession = readlineSync.question("cual es su profesion");
var profesiones = new professional_1.Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);
imbdFinalTest.obtenerInstanciaiMDB(nombrearch);
if (imbdFinalTest.peliculas.length > 0) {
    var primerapeli = imbdFinalTest.peliculas[0];
    if (!primerapeli.actors) {
        primerapeli.actors = [];
    }
    primerapeli.actors.push(profesiones);
}
imbdFinalTest.escribirEnFicheroJson(nombrearch);
