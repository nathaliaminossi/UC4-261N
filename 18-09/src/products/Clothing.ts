export class Clothing {
    private description: string;
    private size: string;
    private price: number;

    constructor(description: string, size: string, price: number) {
        this.description = description;
        this.size = size;
        this.price = price;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getSize(): string {
        return this.size;
    }

    setSize(size: string): void {
        this.size = size;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }
}