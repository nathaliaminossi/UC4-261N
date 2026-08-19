export class SmartPhone {
    private marca: string;
    private modelo: string;
    private bateria: number;

    public constructor(marca: string, modelo: string, bateria: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 100;
    }

    public getMarca(): string {
        return this.marca
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getBateria(): number {
        return this.bateria;
    }

    public setMarca(marca: string) {
        this.marca = marca;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public setBateria(bateria: number) {
        this.bateria = bateria
    }

    public uso(minutos: number): void {
        if (minutos < 0) {
            throw new Error("Os minutos devem ser positivos.");
        }

        this.bateria -= minutos;

        if (this.bateria < 0) {
            this.bateria = 0;
        }
    }

    public charge(): void {
        this.bateria = 100;
    }
    public mostrarInformacao(): void {
        (`
        marca: ${this.marca}
        modelo: ${this.modelo}
        bateria: ${this.bateria} `)
    }


}