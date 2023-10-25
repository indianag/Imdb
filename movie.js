"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.Writer = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.theLanguage = function (lenguage) {
        this.language = lenguage;
    };
    Movie.prototype.thePlataforma = function (plataforma) {
        this.plataforma = plataforma;
    };
    Movie.prototype.theIsMCU = function (isMUC) {
        this.isMCU = isMUC;
    };
    Movie.prototype.theMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.theProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.theDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.toStringMovie = function () {
        var newToStringMovie = "title:  ".concat(this.title, "\n            releaseYear: ").concat(this.releaseYear, " \n            actors:  ").concat(toString(), "\n            nacionality: ").concat(this.nacionality, " \n            director:  Professional;\n            writer:  Professional;\n            language: ").concat(this.language, "\n            plataforma: ").concat(this.plataforma, "  \n            isMCU:  ").concat(this.isMCU, "\n            mainCharacterName:  ").concat(this.mainCharacterName, "\n            producer:  ").concat(this.producer, "\n            distributor: ").concat(this.distributor, "\n            genre: ").concat(this.genre);
        return newToStringMovie;
    };
    return Movie;
}());
exports.Movie = Movie;
