"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var fs = require("fs");
var theMovie1 = new movie_1.Movie("Luna Nueva", 2014, "Americana", "Drama");
var theMovie2 = new movie_1.Movie("Luna Nueva", 2014, "Americana", "Drama");
var theimdb = new imdb_1.Imdb([theMovie1, theMovie2]);
// let theMovie3 = new Movie([])
// console.log(theimdb);
// let imdbstring = JSON.stringify(theimdb);
// fs.writeFileSync("imdbBBDD.json",imdbstring);
// let readimdb = fs.readFileSync("imdbBBDD.json","utf8");
// let imdbData = JSON.parse(readimdb);
// let imdb1 = new Imdb(imdbData.peliculas); 
// theimdb.escribirEnFicheroJson("professional.json");
var objeto = theimdb.obtenerInstanciaiMDB("Datos de objeto.json");
