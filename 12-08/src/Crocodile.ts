import { Reptil } from "./Reptil";

export class Crocodile extends Reptil {
   private genero: string

  public constructor(nome: string, idade: number, tipoEscama: string, genero: string) {
        super(nome, idade, tipoEscama);
        this.genero = genero;
    }

    
    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }
}