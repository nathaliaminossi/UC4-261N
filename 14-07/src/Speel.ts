export class Speel{

private name: string
private demage: number
private manaCost: number

public constructor(name:string, demage:number, manaCost:number){
    this.name = name
    this.demage = demage
    this.manaCost = manaCost
}

public getName(): string{
    return this.name;
}

public getDemage(): number{
    return this.demage;
}

public getManCost(): number{
    return this.manaCost
}
}