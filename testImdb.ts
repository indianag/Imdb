import { Movie } from "./movie";
import { Imdb } from "./imdb";
const fs = require ("fs");

let theMovie1 = new Movie("Luna Nueva", 2014, "Americana", "Drama");
let theMovie2 = new Movie("Luna Nueva", 2014, "Americana", "Drama");

let theimdb = new Imdb([theMovie1,theMovie2]);



console.log(theimdb);

let imdbstring = JSON.stringify(theimdb);
fs.writeFileSync("imdbBBDD.json",imdbstring);

let readimdb = fs.readFileSync("imdbBBDD.json","utf8");

let imdbData = JSON.parse(readimdb);

let imdb1 = new Imdb(imdbData.peliculas); 

theimdb.escribirEnFicheroJson("professional.json");

const objeto = theimdb.obtenerInstanciaiMDB("Datos de objeto.json");
   
