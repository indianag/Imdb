import { Professional } from "./professional";
import { Movie } from "./movie";

export {}
let objProfessional = new Professional("indiana", 32, 79, 170, true, "Venezolana", 4, "Actriz");
let theMovie = new Movie("Luna Nueva", 2014, "Americana", "Drama");
let theMovie2= new Movie("señor de los anillos",2003,"americana","ficcion");
let pelis = [theMovie,theMovie2];

console.log("Actor" + objProfessional.toString())
// theMovie.director.profession
// theMovie.writer.profession
theMovie.language = "Español";
theMovie.plataforma = "Digital";
theMovie.isMCU = false;
theMovie.mainCharacterName = "Edgar Ramirez"
theMovie.producer = "Juan Pablito"
theMovie.distributor = "Tricolor"
console.log(theMovie.toStringMovie());



