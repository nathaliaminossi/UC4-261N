import { Producer } from "./Producer";

export class CommunityGardenProducer extends Producer {

    private numberOfVolunteers: number;

    public constructor(
        name: string,
        cpf: string,
        amountFood: number,
        numberOfVolunteers: number
    ) {
        super(name, cpf, amountFood);
        this.numberOfVolunteers = numberOfVolunteers;
    }

    public getNumberOfVolunteers(): number {
        return this.numberOfVolunteers;
    }

    public setNumberOfVolunteers(numberOfVolunteers: number): void {
        this.numberOfVolunteers = numberOfVolunteers;
    }

    public present(): void {
        console.log(
            `Community Garden Producer: ${this.getName()} | CPF: ${this.getCpf()} | Volunteers: ${this.numberOfVolunteers}`
        );
    }
}