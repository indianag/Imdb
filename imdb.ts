import { Movie } from "./movie";
 const fs = require('fs');


let theMovie = new Movie("Luna Nueva", 2014, "Americana", "Drama");
let theMovie2= new Movie("señor de los anillos",2003,"americana","ficcion");
let theMovie3= new Movie("señor de los anillos2",2003,"americana","ficcion");
let theMovie4= new Movie("spiderman",2003,"americana","ficcion");
let pelis = [theMovie3,theMovie4];
    
export class Imdb {
    public peliculas: Movie[];

    constructor(peliculas: Movie[]){
        this.peliculas = peliculas;
    }

    toJson():string{
        return JSON.stringify(this);
    }
 
    public escribirEnFicheroJson(direccion:string):void{
        const datos = {Movie:this.peliculas};
        let datosJSON = JSON.stringify(datos);
            fs.writeFileSync(direccion, datosJSON, (err: any) => {
                if(err){
                    console.error("error al guardar el archivo JSON:", err);
                }else {
                    console.log("los datos se han guardado en el arachivo JSON correctamente.");
                }
            });
    }


     public  obtenerInstanciaiMDB (direccion:string):Imdb{
        const datosJSON = fs.readFileSync(direccion);
            const datosObjetos = JSON.parse(datosJSON);
                return new Imdb(datosObjetos.peliculas);
                
}
} 