export class Weapon {

    private name: string
    private damage: number


    public constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;

    }

    public getName(): string {
        return this.name;

    }

    public getDamage(): number {
        return this.damage;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDemage(demage: number): void {
        this.damage = demage;
    }


    public showInfo(): void {
    console.log((`
    Weapon
    Name: ${this.name}
    Demage: ${this.damage}
    `))
    }
}