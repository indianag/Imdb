import { Professional } from "./professional";
import { Movie } from "./movie";


let director:Professional = new Professional("indiana", 32, 79, 170, true, "Venezolana", 4, "Actriz");
let theMovie:Movie = new Movie("Luna Nueva", 2014, "Americana", "Drama");
let writer:Professional = new Professional("indiana", 32, 79, 170, true, "Venezolana", 4, "Actriz");
let actor:Professional = new Professional("indiana", 32, 79, 170, true, "Venezolana", 4, "Actriz");

theMovie.actors = [actor]
theMovie.director = director
theMovie.writer = writer
theMovie.language = "Español";
theMovie.plataforma = "Digital";
theMovie.isMCU = false;
theMovie.mainCharacterName = "Edgar Ramirez"
theMovie.producer = "Juan Pablito"
theMovie.distributor = "Tricolor"
console.log(theMovie.toStringMovie());



