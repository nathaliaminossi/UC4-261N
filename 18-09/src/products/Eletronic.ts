export class Eletronic {

    constructor(
        public modelo: string,
        public marca: string,
        public price: number
    ) {}

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }
}