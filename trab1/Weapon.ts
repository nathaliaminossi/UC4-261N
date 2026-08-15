export class Weapon {

    private name: string
    private demage: number


    public constructor(name: string, demage: number) {
        this.name = name;
        this.demage = demage;

    }

    public getName(): string {
        return this.name;

    }

    public getDemage(): number {
        return this.demage;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDemage(demage: number): void {
        this.demage = demage;
    }


    public showInfo(): void {
    console.log((`
    Weapon
    Name: ${this.name}
    Demage: ${this.demage}
    `))
    }
}