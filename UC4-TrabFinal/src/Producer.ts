
export abstract class Producer {
    private name: string;
    private cpf: number;
    private amountFood: number;

    public constructor(name: string, cpf: number, amountFood: number) {
        this.name = name;
        this.cpf = cpf;
        this.amountFood = amountFood;
    }

    public getName(): string {
        return this.name;
    }

    public getCpf(): number {
        return this.cpf;
    }

    public getAmountFood(): number {
        return this.amountFood;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setCpf(cpf: number): void {
        this.cpf = cpf;
    }

    public setAmountFood(amountFood: number): void {
        this.amountFood = amountFood;
    }

    public abstract present(): void;
}