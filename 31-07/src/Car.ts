
export class Car {
    private brand: string;
    private model: string;
    private year: number;
    private speed: number;

    public constructor(brand: string, model: string, year: number, speed: number) {
        this.brand = brand;
        this.model = model;
        this.year = year
        this.speed = 0
    }

    public getBrand(): string {
        return this.brand;
    }
    public getModel(): string {
        return this.model;
    }
    public getYear(): number {
        return this.year;
    }
    public getSpeed(): number {

        if (this.speed < 0) {
            throw new Error("A velocidade não pode ser negativa.");
        }

        return this.speed;

    }

    public setBrand(brand: string) {
        this.brand = brand;
    }
    public setModel(model: string) {
        this.model = model;
    }
    public setYear(year: number) {
        this.year = year;
    }

    public accelerate(): void {
        console.log("o carro acelerou")
    }

    public brake(): void {
        console.log("o carro freiou")
    }

    public showInformation() {
        console.log("dados do carro:" + this.model, + this.brand, + this.year, + this.speed )
    }

}