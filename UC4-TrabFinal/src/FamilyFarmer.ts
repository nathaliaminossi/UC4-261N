import { Producer } from "./Producer";

export class FamilyFarmer extends Producer {

    private propertySize: number;

    public constructor(
        name: string,
        cpf: string,
        amountFood: number,
        propertySize: number
    ) {
        super(name, cpf, amountFood);
        this.propertySize = propertySize;
    }

    public getPropertySize(): number {
        return this.propertySize;
    }

    public setPropertySize(propertySize: number): void {
        this.propertySize = propertySize;
    }

    public present(): void {
        console.log(
            `Family Farmer: ${this.getName()} | CPF: ${this.getCpf()} | Property Size: ${this.propertySize} hectares`
        );
    }
}