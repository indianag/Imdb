import { Professional } from "./professional";

export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors
        this.nacionality = nacionality;
        this.director 
        this.writer
        this.language
        this.plataforma
        this.isMCU 
        this.mainCharacterName
        this.producer
        this.distributor
        this.genre = genre;
    }
    theDirect(Professional){
        this.director = Professional;
    }
    theWriter(Professional){
        this.writer = Professional;
    }
    theLanguage(lenguage:string){
        this.language = lenguage;
    }
    thePlataforma(plataforma:string){
        this.plataforma = plataforma;
    }
    theIsMCU(isMUC:boolean){
        this.isMCU = isMUC;
    }
    theMainCharacterName(mainCharacterName:string){
        this.mainCharacterName = mainCharacterName;
    }
    theProducer(producer:string){
        this.producer = producer;
    }
    theDistributor(distributor:string){
        this.distributor = distributor;
    }
    public toStringMovie(): string{
        let newToStringMovie =
           `title:  ${this.title}
            releaseYear: ${this.releaseYear} 
            actors:  ${this.actors}
            nacionality: ${this.nacionality} 
            director:  ${this.director}
            writer:  ${this.writer}
            language: ${this.language}
            plataforma: ${this.plataforma}  
            isMCU:  ${this.isMCU}
            mainCharacterName:  ${this.mainCharacterName}
            producer:  ${this.producer}
            distributor: ${this.distributor}
            genre: ${this.genre}`
        return newToStringMovie
    }
}