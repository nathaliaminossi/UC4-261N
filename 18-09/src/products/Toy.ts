export class Toy {
    private name: string;
    private minimumAge: number;
    private price: number;

    constructor(name: string, minimumAge: number, price: number) {
        this.name = name;
        this.minimumAge = minimumAge;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getMinimumAge(): number {
        return this.minimumAge;
    }

    setMinimumAge(minimumAge: number): void {
        this.minimumAge = minimumAge;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }
}