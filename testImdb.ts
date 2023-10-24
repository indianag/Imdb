import { Movie } from "./movie";
import { Imdb } from "./Imdb";
// const fs = require("fs");

let theMovie1 = new Movie("Luna Nueva", 2014, "Americana", "Drama");
let theMovie2 = new Movie("Luna Nueva", 2014, "Americana", "Drama");

let theImdb = new Imdb([theMovie1,theMovie2]);

console.log(theImdb);

// let imdbstring = JSON.stringify(theImdb);
// fs.writeFileSync("imdbBBDD.json",imdbstring);

// let readimdb = fs.readFileSync("imdbBBDD.json");
// let imdbData = JSON.parse("imdbJSON")

// let imdb1 = new Imdb(imdbData.peliculas);