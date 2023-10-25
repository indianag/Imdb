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
    Movie.prototype.toStringMovie = function () {
        var newToStringMovie = "title:  ".concat(this.title, "\n            releaseYear: ").concat(this.releaseYear, " \n            actors:  ").concat(this.actors, "\n            nacionality: ").concat(this.nacionality, " \n            director:  ").concat(this.director, "\n            writer:  ").concat(this.writer, "\n            language: ").concat(this.language, "\n            plataforma: ").concat(this.plataforma, "  \n            isMCU:  ").concat(this.isMCU, "\n            mainCharacterName:  ").concat(this.mainCharacterName, "\n            producer:  ").concat(this.producer, "\n            distributor: ").concat(this.distributor, "\n            genre: ").concat(this.genre);
        return newToStringMovie;
    };
    return Movie;
}());
exports.Movie = Movie;
