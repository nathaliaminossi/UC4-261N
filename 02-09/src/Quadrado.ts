import { FormaGeometrica } from "./FormaGeometrica";

export class Quadrado implements FormaGeometrica {
    private lado: number
    
   public constructor(lado: number) {
        this.lado = lado
    }

    public calcularArea(): number {
        return this.lado * this.lado
    }
}