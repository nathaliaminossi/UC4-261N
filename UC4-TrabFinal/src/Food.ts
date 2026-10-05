import { Donatable } from "./Interface/Donatable";

export class Food implements Donatable {
    private name: string;
    private category: string;
    private amountKg: number;
    private responsibleProducer: string;


    public constructor(name: string, category: string, amountKg: number, responsibleProducer: string,) {
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

    // adiciona uma quantidade ao estoque
    public addQuantity(quantity: number): void {

        this.amountKg += quantity;

    }

    // remove uma quantidade do estoque
    public removeQuantity(quantity: number): boolean {

        // verifica se existe quantidade suficiente
        if (quantity > this.amountKg) {

            return false;

        }

        // diminui a quantidade disponível
        this.amountKg -= quantity;

        return true;

    }

    // retorna a quantidade disponível
    public getAvailableQuantity(): number {

        return this.amountKg;

    }

    // realiza a doação de uma quantidade
    public donate(quantity: number): void {

        this.removeQuantity(quantity);

    }


}