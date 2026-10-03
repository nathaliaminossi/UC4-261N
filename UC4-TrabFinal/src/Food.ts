export class Food implements Donatable {
    private name: string;
    private category: string;
    private amountKg: number;
    private responsibleProducer: string;


    public constructor( name: string,category: string,amountKg: number, responsibleProducer: string,) {
        this.name = name;
        this.category = category;
        this.amountKg = amountKg;
        this.responsibleProducer = responsibleProducer;
     
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public getAmountKg(): number {
        return this.amountKg;
    }

    public setAmountKg(amountKg: number): void {
        this.amountKg = amountKg;
    }

    public getResponsibleProducer(): string {
        return this.responsibleProducer;
    }

    public setResponsibleProducer(responsibleProducer: string): void {
        this.responsibleProducer = responsibleProducer;
    }

    public addQuantity(quantity: number): void {
        this.amountKg += quantity;
    }

    public removeQuantity(quantity: number): boolean {
        if (quantity > this.amountKg) {
            return false;
        }

        this.amountKg -= quantity;
        return true;
    }

    public getAvailableQuantity(): number {
        return this.amountKg;
    }

    public donate(quantity: number): void {
        this.removeQuantity(quantity);
    }
}