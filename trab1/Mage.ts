import { Character } from "./Character";
import { Speel } from "./Spell";

export class Mage extends Character {

    private mana: number
    private spell: Speel

    public constructor(name: string, level: number, health: number, mana:number, spell: Speel){
        super(name,level,health)
        this.mana = mana;
        this.spell = spell;

    }

    

    
}
