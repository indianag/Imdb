"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var movie_1 = require("./movie");
var fs = require('fs');
var theMovie = new movie_1.Movie("Luna Nueva", 2014, "Americana", "Drama");
var theMovie2 = new movie_1.Movie("señor de los anillos", 2003, "americana", "ficcion");
var theMovie3 = new movie_1.Movie("señor de los anillos2", 2003, "americana", "ficcion");
var theMovie4 = new movie_1.Movie("spiderman", 2003, "americana", "ficcion");
var pelis = [theMovie3, theMovie4];
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    Imdb.prototype.escribirEnFicheroJson = function (direccion) {
        var datos = { Movie: this.peliculas };
        var datosJSON = JSON.stringify(datos);
        fs.writeFileSync(direccion, datosJSON, function (err) {
            if (err) {
                console.error("error al guardar el archivo JSON:", err);
            }
            else {
                console.log("los datos se han guardado en el arachivo JSON correctamente.");
            }
        });
    };
    Imdb.prototype.obtenerInstanciaiMDB = function (direccion) {
        var datosJSON = fs.readFileSync(direccion);
        var datosObjetos = JSON.parse(datosJSON);
        return new Imdb(datosObjetos.peliculas);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
