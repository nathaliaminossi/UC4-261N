import { FormaGeometrica } from "./FormaGeometrica";
export class Circulo implements FormaGeometrica {
    private raio: number;

    constructor(raio: number) {
        this.raio = raio
    }
    public calcularArea(): number {
        return 3.14 * (this.raio * this.raio)
    }
}