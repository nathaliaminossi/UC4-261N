export class Speel {

    private name: string
    private demage: number
    private manaCost: number

    public constructor(name: string, demage: number, manaCost: number) {
        this.name = name
        this.demage = demage
        this.manaCost = manaCost
    }

    public getName(): string {
        return this.name;
    }

    public getDemage(): number {
        return this.demage;
    }

    public getManCost(): number {
        return this.manaCost
    }

    public showInfo(): void {
        console.log((`
        Spell
        Name: ${this.name}
        Demage: ${this.demage}
        Mana Cost: ${this.manaCost}
        `))
    }

    public attack(): void {
        console.log((`
            Aragorn attacks with Longsword!
            Demage: ${this.demage}
            `))
    }
}