export class Institution {

    private name: string;
    private address: string;
    private numberOfPeopleServed: number;
    private receivedFood: number;

    public constructor(
        name: string,
        address: string,
        numberOfPeopleServed: number
    ) {
        this.name = name;
        this.address = address;
        this.numberOfPeopleServed = numberOfPeopleServed;
        this.receivedFood = 0;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }

    public getNumberOfPeopleServed(): number {
        return this.numberOfPeopleServed;
    }

    public getReceivedFood(): number {
        return this.receivedFood;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setNumberOfPeopleServed(numberOfPeopleServed: number): void {
        this.numberOfPeopleServed = numberOfPeopleServed;
    }

    public receiveFood(quantity: number): void {
        this.receivedFood += quantity;
    }
}